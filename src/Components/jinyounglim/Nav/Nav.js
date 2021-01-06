import React from "react";
import "./Nav.scss";

export class Nav extends React.Component {
  render() {
    return (
      <section>
        <h1 className="logo">
          <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="instagram logo"></img>
        </h1>
        <div className="search_wr">
          <i>search icon</i>
          <form action="search">
            <input className="search_user" type="text" placeholder="검색" />
          </form>
        </div>
        <ul className="icons">
          <li>
            <button className="btn_explore btn_com">Explore</button>
          </li>
          <li>
            <button className="btn_heart btn_com">Like</button>
          </li>
          <li>
            <button className="btn_mypage btn_com">My page</button>
          </li>
        </ul>
      </section>
    );
  }
}
