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
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { songs } from '~/context';
const cx = classNames.bind(styles);

function MusicPlay() {
  const { song, handleSetSong, setNextSong } = useContext(songs);

  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  const [status, setStatus] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const audioElement = useRef();
  // next bài hát
  var songCurrent = song.id;
  const handleClickNext = () => {
    setNextSong(song.id + 1);
  };

  // phát/ dừng bài hát khi ấn nút
  const handlePLay = () => {
    if (isPlay) {
      setIsPlay(false);
    } else {
      setIsPlay(true);
    }
  };
  useEffect(() => {
    if (isPlay) {
      setStatus(true);
      audioElement.current.play();
    } else {
      setStatus(false);
      audioElement.current.pause();
    }
  }, [isPlay]);
  // tụ động phát nhạc khi ấn vào bài hát
  useEffect(() => {
    if (song.id != 0) {
      setStatus(true);
      audioElement.current.play();
    }
  }, [song]);

  // tua nhạc
  const handleChangeCurrentTime = (e) => {
    const currentTime = (e.currentTarget.value / 100) * songDuration;
    audioElement.current.currentTime = currentTime;
    console.log(audioElement.current.currentTime);

    setSongCurrentTime(currentTime);
  };
  // cập nhật thanh trạng thái nhạc
  const onTimeUpdate = () => {
    // tg ket thuc
    setSongDuration(audioElement.current.duration);
    // tg dang chay
    setSongCurrentTime(audioElement.current.currentTime);
  };

  return (
    <div className={cx('wapper')}>
      <div className={cx('fullscreen')}>
        <audio src={song.url} ref={audioElement} onTimeUpdate={onTimeUpdate}></audio>

        <img className={cx('img-song')} src={song.links.images[1].url} alt="img" />
        <div className={cx('about')}>
          <div className={cx('name-song')}>{song.name}</div>
          <div className={cx('author')}> {song.author} </div>
        </div>
      </div>
      <div className={cx('action')}>
        <div className={cx('control')}>
          <FontAwesomeIcon icon={faRotateRight} />
          <FontAwesomeIcon icon={faBackwardStep} />
          <div className={cx('play-song')}>
            {status === false ? (
              <FontAwesomeIcon className={cx('playing')} icon={faPlay} onClick={() => handlePLay()} />
            ) : (
              <FontAwesomeIcon className={cx('pause')} icon={faPause} onClick={() => handlePLay()} />
            )}
          </div>
          <FontAwesomeIcon icon={faForwardStep} onClick={handleClickNext} />
          <FontAwesomeIcon icon={faShuffle} />
        </div>
        <input
          className={cx('progress')}
          type="range"
          value={(songCurrentTime / songDuration) * 100 || 0}
          onChange={handleChangeCurrentTime}
          step="1"
          min="0"
          max="100"
        ></input>
      </div>
      <div className={cx('more')}>
        <FontAwesomeIcon className={cx('ellips')} icon={faEllipsisV} />
      </div>
    </div>
  );
}

export default MusicPlay;
