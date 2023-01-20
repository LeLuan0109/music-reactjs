import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SongItem.scss';
const cx = classNames.bind(styles);
function SongItem({ song }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('song')}>
        <div className={cx('thumb')}>
          <img src={song.links.images[1].url} alt="songImg" />
        </div>
        <div className={cx('body')}>
          <div className={cx('title-1')}>{song.name}</div>
          <div className={cx('auther')}>{song.author}</div>
        </div>
        <div className={cx('actions')}>
          <FontAwesomeIcon className={cx('heart')} icon={faHeart} />
          <FontAwesomeIcon className={cx('ellips')} icon={faEllipsisV} />
        </div>
      </div>
    </div>
  );
}

export default SongItem;
