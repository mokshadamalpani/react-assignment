import "./ProfileCart2.css";

const ProfileCart2 = (props) => {
    console.log(props);
        return (
                <div className="pf-card">
                    <div className="row">
                        <div className="col-img">
                            <img style={{width:"200px",height:"200px"}} src={props.img}></img>
                        </div>
                        <div className="col">
                            <h2>{props.name}</h2>
                            <p className="p-data"><strong>Email: </strong>{props.email}</p>
                            <p className="p-data"><strong>Phone </strong>{props.phone}</p>
                            <p className="p-data"><strong>Company: </strong>{props.company}</p>
                            <p className="p-data"><strong>Website: </strong>{props.website}</p>
                            <p className="p-data"><strong>Address: </strong>{props.address}</p>
                        </div>
                    </div>
                </div>
        );
};

export default ProfileCart2;