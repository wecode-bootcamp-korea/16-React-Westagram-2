import React from "react";
import "./Footer.scss";

export class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <ul>
          <li>
            <a href="https://about.instagram.com/">소개</a>
          </li>
          <li>
            <a href="https://help.instagram.com/">도움말</a>
          </li>
          <li>
            <a href="https://about.instagram.com/blog/">홍보 센터</a>
          </li>
          <li>
            <a href="https://www.instagram.com/developer/">API</a>
          </li>
          <li>
            <a href="https://www.instagram.com/about/jobs/">채용 정보</a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/privacy/">개인정보처리방침</a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/terms/">약관</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/">위치</a>
          </li>
          <li>
            <a href="https://www.instagram.com/directory/profiles/">인기 계정</a>
          </li>
          <li>
            <a href="https://www.instagram.com/directory/hashtags/">해시태그</a>
          </li>
          <li>언어</li>
        </ul>
        <p>© 2020 WESTAGRAM FROM JINYOUNG</p>
      </section>
    );
  }
}
