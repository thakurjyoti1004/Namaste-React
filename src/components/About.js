import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       {/* <User name={"Jyoti Thakur"} location={"Shimla"}/> */}
//       <UserClass name={"Jyoti Thakur"} location={"Shimla"}/>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent cons.");
  }

  componentDidMount() {
    // console.log("Parent compdidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="ml-[4%] mt-[5%] my-2">
        <h1 className="font-bold">About us Page</h1>
        {/* <User name={"Jyoti Thakur"} location={"Shimla"} /> */}
        <UserClass name={" Jyoti Thakur"} location={"Shimla"} />
        <UserContext.Consumer>
          {(data) => <h5>E-mail:{data.email}</h5>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
