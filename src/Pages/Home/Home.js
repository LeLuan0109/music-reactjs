import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import Album from './Album/Album';
import Song from './Song/Song';
import Podcast from './Podcast/Podcast';
import HomMv from './Mv/Mv';
const cx = classNames.bind(styles);
function Home() {
  const [numberShow, setNumberShow] = useState(1);

  const handleClickTitle1 = (e) => {
    setNumberShow(1);
    const mymusicTitleBorder = document.querySelector('.mymusic-title-border');
    console.log(e.target.offsetWidth);
    mymusicTitleBorder.style.width = e.target.offsetWidth + 'px';
    mymusicTitleBorder.style.left = e.target.offsetLeft + 'px';
  };
  const handleClickTitle2 = (e) => {
    setNumberShow(2);
    const mymusicTitleBorder = document.querySelector('.mymusic-title-border');
    console.log(e.target.offsetWidth);
    mymusicTitleBorder.style.width = e.target.offsetWidth + 'px';
    mymusicTitleBorder.style.left = e.target.offsetLeft + 'px';
  };
  const handleClickTitle3 = (e) => {
    setNumberShow(3);
    const mymusicTitleBorder = document.querySelector('.mymusic-title-border');
    console.log(e.target.offsetWidth);
    mymusicTitleBorder.style.width = e.target.offsetWidth + 'px';
    mymusicTitleBorder.style.left = e.target.offsetLeft + 'px';
  };
  const handleClickTitle4 = (e) => {
    setNumberShow(4);
    const mymusicTitleBorder = document.querySelector('.mymusic-title-border');
    console.log(e.target.offsetWidth);
    mymusicTitleBorder.style.width = e.target.offsetWidth + 'px';
    mymusicTitleBorder.style.left = e.target.offsetLeft + 'px';
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('library')}>Thư viện</div>
      <div className={cx('title')}>
        <ul>
          <li>
            <div className={cx('song')} onClick={handleClickTitle1}>
              BÀI HÁT YÊU THÍCH
            </div>
          </li>
          <li>
            <div className={cx('album')} onClick={handleClickTitle2}>
              ALBUM
            </div>
          </li>
          <li>
            <div className={cx('podcast')} onClick={handleClickTitle3}>
              PODCAST
            </div>
          </li>
          <li>
            <div className={cx('mv')} onClick={handleClickTitle4}>
              MV
            </div>
          </li>
        </ul>
        <div className="mymusic-title-border"></div>
      </div>
      <div className={cx('content')}>
        <div style={numberShow === 1 ? { display: '' } : { display: 'none' }}>
          <Song />
        </div>
        <div style={numberShow === 2 ? { display: '' } : { display: 'none' }}>
          <Album />
        </div>
        <div style={numberShow === 3 ? { display: '' } : { display: 'none' }}>
          <Podcast />
        </div>
        <div style={numberShow === 4 ? { display: '' } : { display: 'none' }}>
          <HomMv />
        </div>
      </div>
    </div>
  );
}
export default Home;
