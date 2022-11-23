import classNames from 'classnames/bind';
import styles from './MusicPlay.module.scss';

const cx = classNames.bind(styles);

function MusicPlay() {
  return <div className={cx('wapper')}>MusicPlay</div>;
}

export default MusicPlay;
