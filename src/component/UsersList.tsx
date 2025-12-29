/* eslint-disable @typescript-eslint/no-explicit-any */
import {useUSers} from "../hooks/useUsers"
const UsersList: React.FC = () => {
  const {users} = useUSers();

  return (
    <div className="users--list--page py-5">
      <h2 className="main--heading mb-3">List of All Users</h2>
      <div className="cards-container">
         {users.map((item: any, index: number) => (
          <div className="user-card" key={index}>
            <p><strong>Email:</strong> {item.user?.email || "—"}</p>
            <p><strong>Username:</strong> {item.user?.login || "—"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
