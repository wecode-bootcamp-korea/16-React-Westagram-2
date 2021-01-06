import React from "react";
import "./FeedsRight.scss";

export class FeedsRight extends React.Component {
  render() {
    return (
      <section className="feeds_right">
        <div className="user_info main_profile">
          <p className="user_profile">
            <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87202283_813565965805206_1543825822748508160_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=bEs3gXnydDcAX8A8t0R&tp=1&oh=5941fd6f57788cecb2669bad711f8e22&oe=600E7F48" alt="user profile" />
          </p>
          <div className="sub_wr">
            <strong className="user_id">delheure29</strong>
            <span className="user_subtxt">위코드 16기 프론트엔드 개발 지망생</span>
          </div>
        </div>
        <div className="follow_recommend common_box">
          <h3>회원님을 위한 추천</h3>
          <button className="btn_view_all">모두 보기</button>
          <ul className="user_list">
            <li className="user_info">
              <p className="user_profile">
                <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/128896071_196191798715046_7589079194622738820_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=DV8pXQ2D9U0AX9WjOlT&tp=1&oh=5ffc3bf8bc76b5a7b1b1b590f71ebb54&oe=6011406B" alt="user profile" />
              </p>
              <div className="sub_wr">
                <strong className="user_id">zzangjeolmi</strong>
                <span className="user_subtxt">chorong님이 팔로우합니다.</span>
              </div>
              <button className="btn_follow">팔로우</button>
            </li>
            <li className="user_info">
              <p className="user_profile">
                <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87202283_813565965805206_1543825822748508160_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=bEs3gXnydDcAX8A8t0R&tp=1&oh=5941fd6f57788cecb2669bad711f8e22&oe=600E7F48" alt="user profile" />
              </p>
              <div className="sub_wr">
                <strong className="user_id">delheure29</strong>
                <span className="user_subtxt">chorong님이 팔로우합니다.</span>
              </div>
              <button className="btn_follow">팔로우</button>
            </li>
            <li className="user_info">
              <p className="user_profile">
                <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67745613_674109426434274_106145512515698688_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=jc7VskxfXHAAX8tZ7C4&tp=1&oh=0b4116f9718960d01d1db08f0dec2efc&oe=600EF148" alt="user profile" />
              </p>
              <div className="sub_wr">
                <strong className="user_id">claire_luvcat</strong>
                <span className="user_subtxt">chorong님이 팔로우합니다.</span>
              </div>
              <button className="btn_follow">팔로우</button>
            </li>
            <li className="user_info">
              <p className="user_profile">
                <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/54446654_2298678970399971_7346204911681404928_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=52TV2MKh01YAX9C0NgO&tp=1&oh=a4aa1557057df8ede1f33e5f0287da3b&oe=60106A3F" alt="user profile" />
              </p>
              <div className="sub_wr">
                <strong className="user_id">love_doong.doong</strong>
                <span className="user_subtxt">chorong님이 팔로우합니다.</span>
              </div>
              <button className="btn_follow">팔로우</button>
            </li>
            <li className="user_info">
              <p className="user_profile">
                <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/54731574_263156361292875_3099228545159790592_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=p48PlHEhLKcAX9ahH4w&tp=1&oh=1b11246862b0264fb1b3ae38d862bd84&oe=60116E0C" alt="user profile" />
              </p>
              <div className="sub_wr">
                <strong className="user_id">qkqhro</strong>
                <span className="user_subtxt">chorong님이 팔로우합니다.</span>
              </div>
              <button className="btn_follow">팔로우</button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
