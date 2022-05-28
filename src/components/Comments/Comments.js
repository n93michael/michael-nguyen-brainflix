import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ selectedVideo, convertTimeToDate }) {
  const comments = selectedVideo.comments;

  return (
    <div className="comments">
      <h4 className="comments__count">3 Comments</h4>
      <div className="form">
        <div className="form__icon">
          <img className="avatar" src={avatar} alt="Avatar" />
        </div>

        <form className="form__container">
          <label className="form__name">
            JOIN THE CONVERSATION
            <textarea
              placeholder="Add a comment"
              className="form__input"
            ></textarea>
          </label>
          <button className="button button--form">COMMENT</button>
        </form>
      </div>

      <div className="comment">
        {comments.map((comment, index) => {
          return (
            <div className="comment__card" key={index}>
              <div className="comment__icon"></div>
              <div className="comment__container">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">
                  {convertTimeToDate(new Date(comment.timestamp))}
                </p>
                <p className="comment__entry">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;