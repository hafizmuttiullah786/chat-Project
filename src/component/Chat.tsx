/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "../styles/Chat.css";
import chatIcon from "../assets/chatImgs/chatIcon.webp";
import chatAvatar from "../assets/chatImgs/avatar.png";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useUSers } from "../hooks/useUsers";
import ConnectyCube from "connectycube";

// 🔹 Initialize ConnectyCube
ConnectyCube.init({
  appId: 9850,
  authKey: "B35FA45F-B6BA-4063-90C4-425BB6957F57",
});

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { users } = useUSers();

  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  const messageInputRef = useRef<HTMLInputElement>(null);
  const email = location.state?.email;

  // 🔹 Connect user
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    const storedPassword = localStorage.getItem("userPassword");

    if (storedId && storedPassword) {
      ConnectyCube.chat
        .connect({
          userId: Number(storedId),
          password: storedPassword,
        })
        .then(() => {
          setUserId(Number(storedId));
          console.log("Connected:", storedId);
        })
        .catch(console.error);
    }

    return () => {
      ConnectyCube.chat.disconnect();
    };
  }, []);

  // 🔹 Message listeners (FINAL FIX)
  useEffect(() => {
    if (!userId) return;

    // ✅ Receive messages (ignore own messages)
    ConnectyCube.chat.onMessageListener = (_senderId, msg) => {
      if (msg.sender_id === userId) return;

      setMessages((prev) => [
        ...prev,
        {
          ...msg,
          sender: "other",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    };

    // // ✅ Delivered status
    // ConnectyCube.chat.onDeliveredStatusListener = (messageId) => {
    //   setMessages((prev) =>
    //     prev.map((m) => (m._id === messageId ? { ...m, delivered: true } : m))
    //   );
    // };

    // // ✅ Read status
    // ConnectyCube.chat.onReadStatusListener = (messageId) => {
    //   setMessages((prev) =>
    //     prev.map((m) => (m._id === messageId ? { ...m, read: true } : m))
    //   );
    // };

    return () => {
      ConnectyCube.chat.onMessageListener = null;
      // ConnectyCube.chat.onDeliveredStatusListener = null;
      // ConnectyCube.chat.onReadStatusListener = null;
    };
  }, [userId]);

  // 🔹 Logout
  const LogOut = () => {
    ConnectyCube.chat.disconnect();
    localStorage.clear();
    navigate("/login");
  };

  // 🔹 Select user
  const MessageBoxHandler = (index: number) => {
    setActiveUser(index);
    setMessages([]);
  };

  // 🔹 Send message
  const sendMessage = () => {
    if (!messageInputRef.current || activeUser === null || !userId) return;

    const text = messageInputRef.current.value.trim();
    if (!text) return;

    const recipientId = users[activeUser].user.id;
    const messageId = ConnectyCube.chat.helpers.getBsonObjectId();

    const message = {
      _id: messageId,
      type: "chat",
      body: text,
      markable: true,
      extension: {
        save_to_history: 1,
      },
    };

    // ✅ Send to server
    ConnectyCube.chat.send(recipientId, message);

    // ✅ Show instantly in UI
    setMessages((prev) => [
      ...prev,
      {
        ...message,
        sender: "me",
        time: new Date().toLocaleTimeString(),
      },
    ]);

    messageInputRef.current.value = "";
  };

  return (
    <div className="chat--wrapper">
      <div className="default-container">
        <div className="row">
          {/* Left Sidebar */}
          <div
            className="col-lg-3 col-md-3 col-3"
            style={{ borderRight: "1px solid #271a1a" }}
          >
            <div className="chat--left--side">
              <div className="page--heading">My Chat</div>

              <div className="chat--search">
                <i className="ri-search-line"></i>
                <input type="text" placeholder="Search here..." />
              </div>

              <div className="chat--list">
                {users.map((item, index) => (
                  <div
                    key={index}
                    className={`chat-item ${
                      activeUser == index ? "active" : ""
                    }`}
                    onClick={() => MessageBoxHandler(index)}
                  >
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="avatar" />
                    </div>

                    <div className="chat-details">
                      <div className="chat-name">
                        {item.user?.login} {""}
                        {item.user?.login == email && <span>(You)</span>}
                      </div>
                      <p className="chat-message">{item.user?.email || "--"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          {activeUser === null ? (
            <div className="col-lg-9 col-md-9 col-9">
              <div className="chat--right--side no-messages">
                <div className="chatIcon">
                  <img src={chatIcon} alt="chat" />
                </div>
                <div className="chat--with--friends">
                  Chat With Your Friends & Celebrities
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-9 col-md-9 col-9">
              <div className="chat--right--side">
                <div className="chat--message--wraper">
                  {/* Top Bar */}
                  <div
                    className="chat--topbar"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="d-flex">
                      <div className="user-avatar-circle">
                        <img src={chatAvatar} alt="avatar" />
                      </div>
                      <div className="chat-user">
                        <div className="user-display-name">
                          {users[activeUser].user.login}
                        </div>
                        <div className="user-identifier">Online</div>
                      </div>
                    </div>

                    <Dropdown className="custom--dropDown">
                      <Dropdown.Toggle
                        variant="light"
                        style={{
                          background: "unset",
                          border: "none",
                          color: "#fff",
                        }}
                      >
                        {email}
                        <i className="ri-more-2-fill"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={LogOut}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {/* Messages */}
                  <div className="chat-messages">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`message-bubble ${
                          msg.sender === "me"
                            ? "sender-message"
                            : "receiver-message"
                        }`}
                      >
                        <p className="message-text">{msg.body}</p>
                        <span className="message-time">{msg.time}</span>

                        {msg.read ? (
                          <span className="message-status">✓✓</span>
                        ) : msg.delivered ? (
                          <span className="message-status">✓</span>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="message-input-container">
                    <div className="text-message-inner-container">
                      <input
                        ref={messageInputRef}
                        className="message-input"
                        placeholder="Type your message..."
                      />
                      <button className="send-button" onClick={sendMessage}>
                        <i className="ri-send-plane-2-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
