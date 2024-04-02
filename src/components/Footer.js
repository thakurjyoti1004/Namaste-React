import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const userData = useContext(UserContext);
  return (
    <div className="ml-20 font-semibold mt-[20%]">
      <h5>UserName:{userData.userName}</h5>
      <h5>E-mail: {userData.email}</h5>
    </div>
  );
};

export default Footer;
