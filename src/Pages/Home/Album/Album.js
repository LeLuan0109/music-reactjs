import classNames from 'classnames/bind';
import styles from './Album.scss';
const cx = classNames.bind(styles);
function Album() {
  return <div className={cx('wrapper')}>Chưa có album trong thư viện cá nhân</div>;
}

export default Album;
