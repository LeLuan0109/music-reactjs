import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import styles from './Music.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart } from '@fortawesome/free-solid-svg-icons';
import { songs } from '~/context';
const cx = classNames.bind(styles);

function Music() {
  const { DataSong } = useContext(songs);
  console.log(DataSong);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        {DataSong.map((song, index) => (
          <div className={cx('song')} key={index}>
            <div className={cx('thumb')}>
              <img src={song.links.images[1].url} alt="songImg" />
            </div>
            <div className={cx('body')}>
              <div className={cx('title')}>{song.name}</div>
              <div className={cx('auther')}>{song.author}</div>
            </div>
            <div className={cx('actions')}>
              <FontAwesomeIcon className={cx('heart')} icon={faHeart} />
              <FontAwesomeIcon className={cx('ellips')} icon={faEllipsisV} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
