/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/Chat.css";
// import chatIcon from "@assets/imgs/chatImgs/chatIcon.webp";
import messageImg from "../assets/chatImgs/message_img.webp";
import chatAvatar from "../assets/chatImgs/Avatar.svg";
import { useLocation, useNavigate } from "react-router-dom";
// import absImg from "../assets/chatImgs/bgImg.png";
import Dropdown from "react-bootstrap/Dropdown";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const LogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <div className="chat--wrapper">
        <div className="default-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="chat--left--side">
                <div className="page--heading">My Chat</div>
                <div className="chat--search">
                  <i className="ri-search-line"></i>
                  <input type="text" placeholder="Search here..." />
                </div>
                <div className="chat--list">
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="chat-message">
                        Hey, I just realized I have your favorite...
                      </p>
                    </div>
                    <div className="chat-badge">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <img src={chatAvatar} alt="Alina Shyk" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-header">
                        <div className="chat-name">Alina Shyk</div>
                        <span className="chat-time">8:30pm</span>
                      </div>
                      <p className="typing-message">Typing...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-9">
              <div className="chat--right--side no-messages">
                <div className="chatIcon">
                  <img src={chatIcon} alt="chat icon" />
                </div>
                <div className="chat--with--friends">
                  Chat With Your Friends & Celebrities
                </div>
              </div>
            </div> */}
            <div className="col-lg-9">
              <div className="chat--right--side">
                <div className="chat--message--wraper">
                  <div className="chat--topbar justify-content-between align-items-center">
                    <div className="d-flex">
                      <div className="user-avatar-circle">
                        <img src={chatAvatar} alt="avatar" />
                      </div>
                      <div className="chat-user">
                        <div className="user-display-name">Alina_Malik</div>
                        <div className="user-identifier">its_Allnahere</div>
                      </div>
                    </div>
                    <Dropdown className="custom--dropDown">
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {email}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={LogOut}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="chat-messages">
                    <div className="abs--img">
                      {/* <img src={absImg} alt="abs image" /> */}
                    </div>
                    <div className="message-bubble sender-message">
                      <p className="message-text">Hey there! 🟡</p>
                      <span className="message-time">10:10pm</span>
                    </div>
                    <div className="message-bubble receiver-message">
                      <p className="message-text">Hill</p>
                      <span className="message-time">10:10pm</span>
                    </div>
                    {/* Receiver Image Message */}
                    <div className="image-message receiver-message">
                      <div className="image-container">
                        <img
                          src={messageImg}
                          alt="Shared content"
                          className="chat-image"
                        />
                      </div>
                      <button className="play-button">
                        <i className="ri-play-fill"></i>
                      </button>
                      <div className="message-info">
                        <span className="message-length-time">1:05</span>
                        <span className="message-length-time">10:40pm</span>
                      </div>
                    </div>

                    {/* Sender Image Message */}
                    <div className="image-message sender-message">
                      <div className="image-container">
                        <img
                          src={messageImg}
                          alt="Shared content"
                          className="chat-image"
                        />
                        <button className="play-button">
                          <i className="ri-play-fill"></i>
                        </button>
                      </div>
                      <div className="message-info">
                        <span className="message-time">10:40pm</span>
                        <span className="message-length">1:05</span>
                      </div>
                    </div>
                  </div>
                  <div className="message-input-container">
                    <div className="text-message-inner-container">
                      <div className="text-area-field">
                        <input
                          className="message-input"
                          placeholder="Type your message..."
                        />
                        <button className="camera-btn">
                          <i className="ri-camera-4-line"></i>
                        </button>
                      </div>
                      <button className="voice-message-btn">
                        <i className="ri-mic-line"></i>
                      </button>
                      <button className="send-button">
                        <i className="ri-send-plane-2-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
