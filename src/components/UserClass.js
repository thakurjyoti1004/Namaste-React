import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }
  render() {
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add Count
        </button>
        <h1>Name:{this.props.name}(Class)</h1>
        <h2>Location:{this.props.location}</h2>
        <h3>jthakur777.jt@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
