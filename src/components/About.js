import User from "./User";
import UserClass from "./UserClass";
import React from "react";
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
      <div>
        <h1 className="m-2 font-bold">About us Page</h1>
        {/* <User name={"Jyoti Thakur"} location={"Shimla"} /> */}
        <UserClass name={"Jyoti Thakur"} location={"Shimla"} />
      </div>
    );
  }
}
export default About;
