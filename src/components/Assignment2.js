import list from "../profile.json";
import ProfileCart2 from "./ProfileCart2";
import './ProfileCart2.css';


const Assigment2 = () => {
    return (
        <div className="box">
        {list.map((item) => {
            return <ProfileCart2 {...item} />
        })}
        </div>
    )
   
};

export default Assigment2;