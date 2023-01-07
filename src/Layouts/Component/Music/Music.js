import classNames from 'classnames/bind';
import React, { useContext, useState, useEffect } from 'react';
import styles from './Music.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { songs } from '~/context';
import { useSelector, useDispatch } from 'react-redux';
import { pauseSong, playSong } from '~/Store/reducters/isPlaying.slice';
const cx = classNames.bind(styles);

function Music() {
  const { DataSong, handleSetSong, song, indexSong } = useContext(songs);
  const { isPlaying } = useSelector((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  // console.log(DataSong);
  const handlePlaySong = (currentIndex) => {
    setCurrentIndex(currentIndex);
    dispatch(playSong());
  };

  useEffect(() => {
    setCurrentIndex(song.id);
  }, [song, indexSong]);

  useEffect(() => {
    handleSetSong(currentIndex);
  }, [currentIndex]);
  const handleplayingSong = () => {
    if (isPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };
  return (
    <div className={cx('wrapper')}>
      {DataSong.map((song, index) => (
        <div
          id={currentIndex === song.id ? 'action' : ''}
          className={currentIndex === song.id ? cx('song-active') : cx('song')}
          key={index}
          onClick={() => handlePlaySong(song.id)}
          // onClick={() => dispatch(playSong())}
        >
          <div className={cx('thumb')}>
            <img src={song.links.images[1].url} alt="songImg" />
            {/* <div
              className={cx('song-item-image-overlay')}
              style={{ display: `${currentIndex === song.id ? 'flex' : ''}` }}
            >
              {isPlaying ? (
                <img
                  onClick={handleplayingSong}
                  className={cx('img-item')}
                  src={images.iconPlay}
                  style={{
                    marginLeft: '-5px',
                    background: 'red',
                    width: '30px',
                    height: '30px',
                    zIndex: 10,
                    borderRadius: 0,
                    display: `${currentIndex === song.id ? 'flex' : 'none'}`,
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={handleplayingSong()}
                  icon={faPlay}
                  style={{ zIndex: 10, display: `${currentIndex === song.id ? 'flex' : 'none'}` }}
                />
              )}
            </div> */}
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
  );
}

export default Music;
