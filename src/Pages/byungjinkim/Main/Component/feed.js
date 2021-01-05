import React, { Component } from 'react';
import Comment from './Comment';
import COMMENT from './data';

class feed extends Component {
  render() {

    const {updateComment, addComment, commentList, comment} = this.props;

    return (
        <div className="feed">
        <section className="section">
            <div className="package">
              <div className="left_top_box">
                <ul className="story_box">
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                  <li className="story_box_name"><div className="story_image"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjVfMjcy/MDAxNTg1MDYyOTk5MTU4.hyJJXapJz5x8hfispwnxwm-1108nNuYUkklKVHuG2xAg.Q0ID1XrAQfph44DyfDfBwdsLGi5r21uuHTdcUjcEmsQg.JPEG.firpengst/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2" className="story_image" alt="스토리 이미지"/></div>jin</li>
                </ul>
              </div>
              <div className="box">
                <div className="img_space">
                  <img className="img_space_radius" src="./Images/byungjinkim/my.jpg" width="27px" alt="내 사진" />
                </div>
                <div className="inner_box">
                  <span className="name">jin</span>
                  <span className="option">...</span>
                </div>
                </div>
                <div className="left_box">
                  <img src="./Images/byungjinkim/ruru.jpg" className="left_box" alt="이미지"/>
                </div>
                <div className="left_under_box_set">
                  <div className="left_under_box_set left_under_box">
                    <div className="left_like_box">
                      <div className="btn_like_box">
                      <button className="btn_work"><svg aria-label="좋아요" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M 34.6 6.1 c 5.7 0 10.4 5.2 10.4 11.5 c 0 6.8 -5.9 11 -11.5 16 S 25 41.3 24 41.9 c -1.1 -0.7 -4.7 -4 -9.5 -8.3 c -5.7 -5 -11.5 -9.2 -11.5 -16 C 3 11.3 7.7 6.1 13.4 6.1 c 4.2 0 6.5 2 8.1 4.3 c 1.9 2.6 2.2 3.9 2.5 3.9 c 0.3 0 0.6 -1.3 2.5 -3.9 c 1.6 -2.3 3.9 -4.3 8.1 -4.3 m 0 -3 c -4.5 0 -7.9 1.8 -10.6 5.6 c -2.7 -3.7 -6.1 -5.5 -10.6 -5.5 C 6 3.1 0 9.6 0 17.6 c 0 7.3 5.4 12 10.6 16.5 c 0.6 0.5 1.3 1.1 1.9 1.7 l 2.3 2 c 4.4 3.9 6.6 5.9 7.6 6.5 c 0.5 0.3 1.1 0.5 1.6 0.5 c 0.6 0 1.1 -0.2 1.6 -0.5 c 1 -0.6 2.8 -2.2 7.8 -6.8 l 2 -1.8 c 0.7 -0.6 1.3 -1.2 2 -1.7 C 42.7 29.6 48 25 48 17.6 c 0 -8 -6 -14.5 -13.4 -14.5 Z"></path></svg></button>
                      <button className="btn_work"><svg aria-label="댓글 달기" height="24" width="24" viewBox="0 0 48 48"><path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"></path></svg></button>
                      <button className="btn_work"><svg aria-label="게시글 공유" height="24" width="24" viewBox="0 0 48 48"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></button>
                      <div className="btn_save">
                      <button className="btn_work"><svg aria-label="저장" height="24" width="24" viewBox="0 0 48 48"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></button>
                      </div>
                      </div>
                      <div className="comment_area">
                      {commentList.map(comment => {
                          return (
                            <Comment
                            name={comment.userName}
                            comment={comment.content}
                            key={comment.id}
                            />
                          );
                        })}
                      </div>
                      <div className="comment_box">
                         <form 
                         className="comment_space"
                         onSubmit={addComment}
                         >
                             <input 
                             className="cnt" 
                             type="text"
                             name="comment"
                             placeholder="댓글 달기.." 
                             onChange={updateComment}
                             value={comment}
                             />
                            <button
                            className="btn_comment"
                            onClick={addComment}
                            >게시
                            </button>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
           </div>
           <div className="section right_box">
                </div> 
         </section>
      </div>
    );
  }
}

export default feed;