import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      userInfo: {
        name: " ",
        location: " ",
        email: " ",
      },
    };
    // console.log("Child constructor");
  }

  async componentDidMount() {
    // console.log("Child componentDidMount");
    const fetchApi = await fetch(
      "https://api.github.com/users/thakurjyoti1004"
    );
    const jsonData = await fetchApi.json();

    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate() {
    // console.log("update");
  }
  render() {
    // console.log("Child Render");
    const { name, location, email } = this.state.userInfo;
    return (
      <div className="user-card m-2 border border-solid border-black">
        {/* <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add Count
        </button> */}
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>jthakur777.jt@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
