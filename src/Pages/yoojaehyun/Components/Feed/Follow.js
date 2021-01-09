import React, { Component } from 'react';

class Follow extends Component {
  render() {
    const { imgUrl, userName } = this.props.follow;
    return (
      <>
        <figure>
          <span className='recom__img'>
            <img src={imgUrl} alt={userName} />
          </span>
          <span className='d_block'>
            {userName.split(' ')[0].slice(0, 6) + '...'}
          </span>
        </figure>
      </>
    );
  }
}

export default Follow;
