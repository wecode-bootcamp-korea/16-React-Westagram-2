import React, { Component } from 'react';
import Follow from './Follow';

class Followers extends Component {
  constructor() {
    super();
    this.state = {
      followMember: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/FollowData.json')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === '200') {
          this.setState({ followMember: res.data.item.followsList });
        }
      });
  }
  render() {
    return (
      <div className='followers'>
        {this.state.followMember.map((follow) => {
          return <Follow key={follow.id} follow={follow} />;
        })}
      </div>
    );
  }
}

export default Followers;
