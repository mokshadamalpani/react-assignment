import { useState } from "react";
import { FaRegEnvelope, FaPen, FaTrash } from "react-icons/fa";
import {AiOutlinePhone, AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {BsGlobe2} from "react-icons/bs";
import EditModal from "./EditModal";
import "./ProfileCart.css";

const ProfileCart = (props) => {
  const [user, setUser] = useState(props);
  const [islike, setIsLike] = useState(false);
  const [showModal, setShowModel] = useState(false);

  const changeLikeHandler = () => {
    setIsLike(!islike);
  };

  const showModelHandler = () => {
    setShowModel(!showModal);
  };

  const deleteHandler = (id) => {
    props.changeDeleteHandler(id);
  };
  return (
    <div className="container">
      {showModal && (
        <EditModal {...props} changeData={(data) => setUser(data)} />
      )}
      <div className="card">
        <div className="card-header">
          <img className="card-img center" src={user.img} alt="Loading"></img>
        </div>
        <div className="card-content">
          <h3>{user.name}</h3>
          <div className="p">
              <FaRegEnvelope />
              <span style={{marginLeft:'10px'}}>{user.email}</span>
          </div>
          <div className="p">
              <AiOutlinePhone  fontSize="20px"/>
              <span style={{marginLeft:'10px'}}>{user.phone}</span>
          </div>
          <div className="p">
              <BsGlobe2 />
              <span style={{marginLeft:'10px'}}>{user.website}</span>
          </div>
        </div>
        <ul className="card-footer">
          <li style={{ borderRight: "1px solid #e8e8e8" }}>
            <span>
              <button onClick={changeLikeHandler} id="mpopupBox">
                {islike ? <span><AiFillHeart color="red" fontSize="20px"/></span> :<span><AiOutlineHeart color="red" fontSize="20px"/></span>}
              </button>
            </span>
          </li>
          <li style={{ borderRight: "1px solid #e8e8e8" }}>
            <span>
              <button onClick={showModelHandler}>
                <FaPen  style={{color:'rgba(169,169,169,1)'}}/>
              </button>
            </span>
          </li>
          <li>
            <span>
              <button onClick={() => {deleteHandler(props.id);}}>
                <FaTrash style={{color:'rgba(169,169,169,1)'}} />
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCart;
