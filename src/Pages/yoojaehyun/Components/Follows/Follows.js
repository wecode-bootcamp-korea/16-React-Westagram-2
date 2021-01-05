import React, { Component } from 'react';
import Follow from './Follow';

class Followers extends Component {
    constructor() {
        super();
        this.state = {
            test: [],
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/data/commentData.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === '200') {
                    this.setState({ followList: res.data.item.followsList });
                }
            });
    }
    render() {
        return (
            <div className='followers'>
                <Follow followList={this.state.followList} />
                {/* <figure>
                    <span className='recom__img d_block'>
                        <img
                            src='images/recom__img1.jpg'
                            alt='recommend__user'
                        />
                    </span>
                    <span className='d_block'>yoona_lim</span>
                </figure>
                <figure>
                    <span className='recom__img d_block'>
                        <img
                            src='images/recom_img2.jpg'
                            alt='recommend__user'
                        />
                    </span>
                    <span className='d_block'>sooyaaa_</span>
                </figure>
                <figure> */}
                {/* <span className='recom__img d_block'>
                        <img
                            src='images/recom_img3.jpg'
                            alt='recommend__user'
                        />
                    </span>
                    <span className='d_block'>taeyeon__ss</span>
                </figure> */}
            </div>
        );
    }
}

export default Followers;
