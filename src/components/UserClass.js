import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        contact: "dummy@gmail.com",
      },
    };

    console.log("child constructor called");
  }

  async componentDidMount() {
    console.log("child componentDidMount called");
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    const { name, email, address } = this.state.userInfo;
    console.log("data :", this.state.userInfo);
    console.log("child render called");

    const { count } = this.state;
    return (
      <div>
        <h2>Count : {count} </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Increase Count
        </button>
        <h2>Name : {name} </h2>
        <h3>Location : Pune </h3>
        <h3>Contact : {email}</h3>
      </div>
    );
  }
}

export default UserClass;
