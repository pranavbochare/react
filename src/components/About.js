import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About Page</h1>
        <div>
          <UserContext.Consumer>
            {(userData) => <h1 className="font-bold">user : {userData.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"pranav (class component)"} location={"pune"} contact={"prnvnov15"} />
      </div>
    );
  }
}

export default About;
