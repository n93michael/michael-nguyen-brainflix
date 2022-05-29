import "./VideoInfo.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import convertTimeToDate from "../../utilities/dateUtils";

function VideoInfo({ selectedVideo }) {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{selectedVideo.title}</h1>
      <div className="video-info__container">
        <div className="video-info__primary">
          <h4 className="video-info__channel">{`By: ${selectedVideo.channel}`}</h4>
          <p className="video-info__date">
            {convertTimeToDate(new Date(selectedVideo.timestamp))}
          </p>
        </div>

        <div className="video-info__secondary">
          <img className="video-info__icon" src={viewsIcon} alt="Views Icon" />
          <p className="video-info__count">{selectedVideo.views}</p>

          <img className="video-info__icon" src={likesIcon} alt="Likes Icon" />
          <p className="video-info__count">{selectedVideo.likes}</p>
        </div>
      </div>

      <p className="video-info__description">{selectedVideo.description}</p>
    </section>
  );
}

export default VideoInfo;
