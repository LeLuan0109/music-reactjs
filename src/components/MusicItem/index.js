import classNames from 'classnames/bind';

import styles from './MusicItem.module.scss';
import images from '~/assets/img';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function MusicItem() {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('music-img')} src={images.img} alt="haanhtuan" />
      <div className={cx('item')}>
        <span className={cx('music-name')}>Tháng tư là lời nới dối của anh </span>
        <span className={cx('nick-name')}>Hà Anh Tuấn</span>
      </div>
    </div>
  );
}

export default MusicItem;
