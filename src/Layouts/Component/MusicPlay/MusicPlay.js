import classNames from 'classnames/bind';
import styles from './MusicPlay.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faRotateRight,
  faShuffle,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playSong, pauseSong } from '~/Store/reducters/isPlaying.slice';
import { changeRandom } from '~/Store/reducters/isRandom.slice';
import { changeRepeat } from '~/Store/reducters/isRepeat.slice';
import { Slice } from '@reduxjs/toolkit';
import { songs } from '~/context';
const cx = classNames.bind(styles);

function MusicPlay() {
  const { song, nextSong, prevSong, randomSong, indexsong } = useContext(songs);
  const { isPlaying, isRandom, isRepeat } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  const [isMute, setIsMute] = useState(false);
  const [volum, setVolum] = useState(100);
  const [valueVolum, setValuevolum] = useState(100);

  const audioElement = useRef();

  // câp nhật thời gian bài hát
  const convertTime = (time) => {
    if (!time) return '00:00';
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  // cập nhật thanh trạng thái nhạc
  const onTimeUpdate = () => {
    // tg dang chay
    setSongCurrentTime(audioElement.current.currentTime);
  };
  const loadSong = () => {
    // tg ket thuc
    setSongDuration(audioElement.current.duration);
  };
  // xử lí âm thanh
  const handleMuteSong = () => {
    setIsMute(!isMute);
    if (isMute !== true) {
      audioElement.current.volume = 0;
    } else {
      audioElement.current.volume = valueVolum;
    }
  };
  const handleChangeVolume = (e) => {
    if (isMute) {
      setIsMute(!isMute);
    }
    setValuevolum(e.currentTarget.value / 100);
    audioElement.current.volume = e.currentTarget.value / 100;

    setVolum(e.currentTarget.value);
  };
  // tua nhạc
  const handleChangeCurrentTime = (e) => {
    const currentTime = (e.currentTarget.value / 100) * songDuration;
    audioElement.current.currentTime = currentTime;

    setSongCurrentTime(currentTime);
  };

  // xử lí phát nhạc
  useEffect(() => {
    if (!isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  }, [isPlaying, song]);
  // xử lí nút play and pause
  const handleClickPlayBtn = () => {
    if (isPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };
  // next song
  const handleNextSong = () => {
    if (isRandom) {
      randomSong();
    } else {
      nextSong();
    }

    dispatch(playSong());
  };
  // prev song
  const handlePrevSong = () => {
    if (isRandom) {
      randomSong();
    } else {
      prevSong();
    }

    dispatch(playSong());
  };
  // xử lí on End
  const onEndedSong = () => {
    if (isRepeat) {
      audioElement.current.currentTime = 0;
      audioElement.current.play();
    } else {
      nextSong();
      dispatch(playSong());
    }
  };

  useEffect(() => {
    let currentItems = document.documentElement.querySelectorAll('#action');

    currentItems.forEach((song) => {
      song.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    });
  }, [song]);
  return (
    <div className={cx('wapper')}>
      <div className={cx('fullscreen')}>
        <audio
          src={song.url}
          ref={audioElement}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={loadSong}
          onEnded={onEndedSong}
        ></audio>

        <img id={'songthum'} className={cx('img-song')} onAnimationEnd src={song.links.images[1]?.url} alt="img" />
        <div className={cx('about')}>
          <div className={cx('name-song')}>{song.name}</div>
          <div className={cx('author')}> {song.author} </div>
        </div>
      </div>
      <div className={cx('action')}>
        <div className={cx('control')}>
          <FontAwesomeIcon
            onClick={() => dispatch(changeRepeat())}
            className={isRepeat === true ? cx('active') : cx('')}
            icon={faRotateRight}
          />
          <FontAwesomeIcon icon={faBackwardStep} onClick={handlePrevSong} />
          <div className={cx('play-song')} onClick={handleClickPlayBtn}>
            {isPlaying ? (
              <FontAwesomeIcon className={cx('pause')} icon={faPause} />
            ) : (
              <FontAwesomeIcon className={cx('playing')} icon={faPlay} />
            )}
          </div>
          <FontAwesomeIcon icon={faForwardStep} onClick={handleNextSong} />
          <FontAwesomeIcon
            onClick={() => dispatch(changeRandom())}
            className={isRandom === true ? cx('active') : cx('')}
            icon={faShuffle}
          />
        </div>
        <div className={cx('status-bar-time')}>
          <div className={cx('time-current-song')}> {convertTime(songCurrentTime) || '00:00'}</div>
          <input
            className={cx('progress')}
            type="range"
            value={(songCurrentTime / songDuration) * 100 || 0}
            onChange={handleChangeCurrentTime}
            step="1"
            min="0"
            max="100"
          ></input>
          <div className={cx('time-end-song')}> {convertTime(songDuration)}</div>
        </div>
      </div>
      <div className={cx('more')}>
        <div className={cx('icon-volum')} onClick={handleMuteSong}>
          {/* khong co am thanh  */}
          {volum == 0 || isMute ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeUp} />}
        </div>

        <input
          className={cx('volum')}
          value={volum}
          onChange={handleChangeVolume}
          step="1"
          min="0"
          max="100"
          type="range"
        ></input>
      </div>
    </div>
  );
}

export default MusicPlay;
