import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import classNames from 'classnames/bind';
import styles from './CardList.scss';
const cx = classNames.bind(styles);
const CardList = ({ listSong, onClick }) => {
  return (
    <div className="card-list" onClick={onClick}>
      <div className="card-list-image">
        <img src={listSong.image} alt="image" />
        <div className="card-list-image-hover">
          <AiOutlineHeart className="card-list-icon small" />
          <BsPlayCircle className="card-list-icon big" />
          <BsThreeDots className="card-list-icon small" />
        </div>
        <div className="card-list-duration">{listSong.duration}</div>
      </div>
      <div className="card-list-bottom d-flex align-items-center">
        <div className="card-list-bottom-avatar d-flex align-items-center">
          <img src={listSong.avatar} />
        </div>
        <div style={{ marginTop: -50, marginLeft: 50 }}>
          <h4 className="card-list-title">{listSong.name}</h4>
          <p className="card-list-description">{listSong.singer}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
