import React, { Component } from 'react';

class Follow extends Component {
    render() {
        console.log('팔로워 리스트', this.props.followList);
        return (
            <>
            {/* {
                followList.map(item => console.log(item));
            } */}
                <figure>
                    <span className='recom__img d_block'>
                        <img
                            src='images/recom__img1.jpg'
                            alt='recommend__user'
                        />
                    </span>
                    <span className='d_block'>yoona_lim</span>
                </figure>
            </>
        );
    }
}

export default Follow;
