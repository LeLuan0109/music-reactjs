import classNames from 'classnames/bind';
import styles from './Discover.scss';

const cx = classNames.bind(styles);
function Discover() {
  return (
    <div className={cx('wrapper')}>
      <h2>Thư Viện</h2>
    </div>
  );
}
export default Discover;
