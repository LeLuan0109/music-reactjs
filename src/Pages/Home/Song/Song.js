import classNames from 'classnames/bind';
import styles from './Song.scss';
const cx = classNames.bind(styles);
function Song() {
  return (
    <div className={cx('wrapper')}>
      <h2>Thư viện trống</h2>
    </div>
  );
}

export default Song;
