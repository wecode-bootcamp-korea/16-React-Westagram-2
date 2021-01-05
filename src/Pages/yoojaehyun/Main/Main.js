import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import '@fortawesome/fontawesome-free/js/all';
import '../../../Styles/yoojaehyun/Common.scss';
import '../Main/Main.scss';

import Feed from '../Components/Feed';
import RightFeed from '../Components/RightFeed';
import Follows from '../Components/Follows/Follows';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Navbar />
                <main className='main__container'>
                    <section className='feeds__container'>
                        <div className='feeds'>
                            <article>
                                <Follows />
                                <Feed />
                            </article>
                            <article className='right__feed'>
                                <RightFeed />
                            </article>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Main;
