import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all';

import Navbar from '../Components/Navbar';
import Followers from '../Components/Feed/Follows';
import Feed from '../Components/Feed/Feeds';
import RightFeed from '../Components/RightFeed/RightFeed';

import '../Main/Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedDataList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/FeedData.json')
      .then((res) => res.json())
      .then((result) => {
        this.setState({ feedDataList: result.data.item.feedDatas });
      });
  }

  updateList = (feedId, commentList) => {
    const { feedDataList } = this.state;
    const updateFeed = feedDataList.map((feed) =>
      feed.id === feedId ? { ...feed, follow: commentList } : feed
    );
    this.setState({ feedDataList: updateFeed });
  };
  render() {
    const { feedDataList } = this.state;
    return (
      <div className='Main'>
        <Navbar />
        <main className='mainContainer'>
          <div className='feeds'>
            <article>
              <Followers />
              {feedDataList.map((feedData) => {
                return (
                  <Feed
                    key={feedData.id}
                    feed={feedData}
                    updataFeed={this.updateList}
                  />
                );
              })}
            </article>
            <article>
              <RightFeed />
            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
