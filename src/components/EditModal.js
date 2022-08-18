import { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  const [close, setClose] = useState(true);
  const [inputName, setInputName] = useState(props.name);
  const [inputEmail, setInputEmail] = useState(props.email);
  const [inputPhone, setInputPhone] = useState(props.phone);
  const [inputWebsite, setInputWebsite] = useState(props.website);
  const [isValid,setISValid] = useState({
    name:true,
    email:true,
    phone:true,
    website:true
  });

  const closeHandler = () => {
    setClose(!close);
  };

  const saveHandler = () => {
    let Data = { ...props };
    setClose(false);
    Data.name = inputName;
    Data.email = inputEmail;
    Data.phone = inputPhone;
    Data.website = inputWebsite;

    props.changeData(Data);
  };

  const ValNameChange = (e) => {
    setInputName(e.target.value)
    if(e.target.value.length===0)
    {
        setISValid({...isValid,name:false});
    }
    else {
        setISValid({...isValid,name:true});
    }
  }
  const ValEmailChange = (e) => {
    setInputEmail(e.target.value)
    if(e.target.value.length===0)
    {
      setISValid({...isValid,email:false});
    }
    else {
      setISValid({...isValid,email:true});
    }
  }
  const ValPhoneChange = (e) => {
    setInputPhone(e.target.value)
    if(e.target.value.length===0)
    {
      setISValid({...isValid,phone:false});
    }
    else {
      setISValid({...isValid,phone:true});
    }
  }
  const ValWebsiteChange = (e) => {
    setInputWebsite(e.target.value)
    if(e.target.value.length===0)
    {
      setISValid({...isValid,website:false});
    }
    else {
      setISValid({...isValid,website:true});
    }
  }
  if (close) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-content-header">
            <span className="span-demo">Basic Modal</span>
            <button className="close" onClick={closeHandler}>
              &times;
            </button>
          </div>
          <div className="modal-content-body">
            <form className="ant-form">
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Name:</label>
                </div>
                <input
                  type="text"
                  className="ant-input"
                  value={inputName}
                  onChange={ValNameChange}
                ></input>
                 {!isValid.name &&<div style={{color:"red",marginLeft:"165px"}}>This is required</div>}
              </div>
             
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Email:</label>
                </div>
                <input
                  type="text"
                  className="ant-input"
                  value={inputEmail}
                  onChange={ValEmailChange}
                ></input>
                {!isValid.email &&<div style={{color:"red",marginLeft:"165px"}}>This is required</div>}
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Phone:</label>
                </div>
                <input
                  type="text"
                  className="ant-input"
                  value={inputPhone}
                  onChange={ValPhoneChange}
                ></input>
                {!isValid.phone &&<div style={{color:"red",marginLeft:"165px"}}>This is required</div>}
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Website:</label>
                </div>
                <input
                  type="text"
                  className="ant-input"
                  value={inputWebsite}
                  onChange={ValWebsiteChange}
                ></input>
                {!isValid.website &&<div style={{color:"red",marginLeft:"165px"}}>This is required</div>}
              </div>
              </form>
          </div>
          <div className="modal-content-footer">
            <div>
              <button type="button" className="btn" onClick={closeHandler}>
                <span>Cancel</span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveHandler}
              >
                <span>OK</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};

export default EditModal;
