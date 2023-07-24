import "./leftBar.scss";
import { AuthContext } from "../../src/context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Groups</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
