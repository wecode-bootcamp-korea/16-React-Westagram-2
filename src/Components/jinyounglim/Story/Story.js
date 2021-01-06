import React from "react";
import "./Story.scss";

export class Story extends React.Component {
  render() {
    return (
      <section className="story">
        <ul>
          <li>
            <p className="user_profile">
              <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53848840_2065575843511245_8280714324125679616_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=wmqIZxZfvSEAX-ptrLI&amp;tp=1&amp;oh=240e19a3876991ebac8a8eea595b8ae0&amp;oe=600F90A8" alt="user profile" />
            </p>
            <strong className="user_id">youtubechannelhahaha</strong>
          </li>
          <li>
            <p className="user_profile">
              <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/14730627_886972098069324_108783541558444032_a.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=CUkkp5cGCpIAX9Q0AAA&tp=1&oh=803a12e0ca360c752e0d32cc9db4dd9d&oe=600DE571" alt="user profile" />
            </p>
            <strong className="user_id">run_darly</strong>
          </li>
          <li>
            <p className="user_profile">
              <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/69465661_533343330574054_4961100205165379584_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=Pco6UkLwRPcAX9JStQz&tp=1&oh=b2e024ec02a552528300616388aa0c08&oe=600FDB48" alt="user profile" />
            </p>
            <strong className="user_id">hairy.fairy.miau</strong>
          </li>
          <li>
            <p className="user_profile">
              <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88183135_2532683756969528_8584333619638566912_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=6UdsvlprsmAAX9ZeduM&tp=1&oh=df14a7e0faf4361c5a8010ad253cc8b7&oe=60112B63" alt="user profile" />
            </p>
            <strong className="user_id">cat_bboyang</strong>
          </li>
        </ul>
      </section>
    );
  }
}
