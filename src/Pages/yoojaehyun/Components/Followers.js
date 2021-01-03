import React, { Component } from "react";

class Followers extends Component {
  render() {
    return (
      <div className="followers">
        <figure>
          <span className="recom__img d_block">
            <img src="images/recom__img1.jpg" alt="recommend__user" />
          </span>
          <span className="d_block">yoona_lim</span>
        </figure>
        <figure>
          <span className="recom__img d_block">
            <img src="images/recom_img2.jpg" alt="recommend__user" />
          </span>
          <span className="d_block">sooyaaa_</span>
        </figure>
        <figure>
          <span className="recom__img d_block">
            <img src="images/recom_img3.jpg" alt="recommend__user" />
          </span>
          <span className="d_block">taeyeon__ss</span>
        </figure>
      </div>
    );
  }
}

export default Followers;
