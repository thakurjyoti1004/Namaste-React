import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <h1>Count2:{this.state.count2}</h1>
        <h1>Name:{this.props.name}(Class)</h1>
        <h2>Location:{this.props.location}</h2>
        <h3>jthakur777.jt@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
