import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default Name",
        location: "Default location",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("component did mount");
    const response = await fetch("https://api.github.com/users/maitreepasad8");
    const data = await response.json();
    this.setState({ userInfo: data });
  }

  settingInterval() {
    this.interval = setInterval(() => {
      console.log("inside interval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("component will unmount");
  }

  render() {
    console.log("render");
    const { name, company, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
            this.settingInterval();
          }}
        >
          Increase
        </button>
        <h1>{name}</h1>
        <h2>{company}</h2>
        <h3>{location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}
export default UserClass;
