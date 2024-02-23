import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      {/* <User name={"Jyoti Thakur"} location={"Shimla"}/> */}
      <UserClass name={"Jyoti Thakur"} location={"Shimla"}/>
    </div>
  );
};

export default About;
