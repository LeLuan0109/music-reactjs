import classNames from 'classnames/bind';
import React, { useContext, useState, useEffect } from 'react';
import styles from './Music.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart } from '@fortawesome/free-solid-svg-icons';
import { songs } from '~/context';
const cx = classNames.bind(styles);

function Music() {
  const { DataSong, handleSetSong, setNextSong, nextSong } = useContext(songs);
  const [isSong, setIsSiong] = useState(0);

  // console.log(DataSong);
  const handlePlaySong = (isSong) => {
    setIsSiong(isSong);
  };
  useEffect(() => {
    handleSetSong(isSong);
  }, [isSong]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        {DataSong.map((song, index) => (
          <div
            className={isSong === song.id ? cx('song-active') : cx('song')}
            key={index}
            onClick={() => handlePlaySong(song.id)}
          >
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
