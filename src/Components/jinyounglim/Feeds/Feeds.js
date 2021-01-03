import React from "react";
import "./Feeds.scss";
import { Comment } from "../Comment/Comment";

export class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      cmtInput: "",
      cmtList: [],
    };
  }

  changeInput = e => {
    this.setState({
      cmtInput: e.target.value,
    });
  };

  addCmt = e => {
    e.preventDefault();
    this.setState({
      cmtList: this.state.cmtList.concat([
        {
          id: Math.random(),
          userId: "jinyoung",
          cmt: this.state.cmtInput,
        },
      ]),
      cmtInput: "",
    });
  };

  render() {
    return (
      <section className="feeds">
        <div className="feeds_user">
          <div className="user_info">
            <a className="user_profile" href="/Main">
              <img src="https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87202283_813565965805206_1543825822748508160_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=bEs3gXnydDcAX8A8t0R&tp=1&oh=5941fd6f57788cecb2669bad711f8e22&oe=600E7F48" alt="user profile" />
            </a>
            <strong className="user_id">delheure29</strong>
          </div>
          <button className="btn_more btn_com"></button>
        </div>
        <ul className="feeds_img">
          <li>
            <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/132601143_721843625415991_3629856789401793119_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=-tOA0Q8X9UgAX836igb&tp=1&oh=75c255af728060279d706eaaec888865&oe=600C4512" alt="feed contents" />
          </li>
        </ul>
        <div className="feeds_content">
          <button className="btn_heart btn_com">Like</button>
          <button className="btn_cmt  btn_com">cmt</button>
          <button className="btn_dm  btn_com">Direct Message</button>
          <button className="btn_bookmark btn_com">Book mark</button>
          <p className="like_count">
            좋아요 <span>11,000개</span>
          </p>
          <div className="feeds_txt">
            <p>
              <strong className="user_id">delheure29</strong>
              위스타그램 첫 포스트! 앞으로 화이팅!
            </p>
            <button className="btn_txt_more">더보기</button>
          </div>
          <p className="cmt_all">댓글 30개 모두 보기</p>
          <Comment cmtList={this.state.cmtList} />

          <i className="txt_time">53분 전</i>
        </div>
        <form className="cmt_write">
          <input className="comment" type="text" placeholder="댓글 달기..." value={this.state.cmtInput} onChange={this.changeInput} />
          <button className="btn_submit" type="submit" onClick={this.addCmt}>
            게시
          </button>
        </form>
      </section>
    );
  }
}
