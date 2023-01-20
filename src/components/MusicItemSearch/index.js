import classNames from 'classnames/bind';

import styles from './MusicItem.module.scss';

import Image from '~/components/Image';
const cx = classNames.bind(styles);

function MusicItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('music-img')} src={data.avatar} alt={data.nickname} />
      <div className={cx('item')}>
        <span className={cx('music-name')}>{data.full_name} </span>
        <span className={cx('nick-name')}>{data.last_name}</span>
      </div>
    </div>
  );
}

export default MusicItem;
