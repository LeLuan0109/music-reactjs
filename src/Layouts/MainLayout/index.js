import Header from '~/Layouts/Component/Header/Header';
import Sidebar from '~/Layouts/Component/Sidebar/Sidebar';
import Music from '~/Layouts/Component/Music/Music';
import MusicPlay from '../Component/MusicPlay/MusicPlay';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />

      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
        <div className={cx('music-song')}>
          <Music />
        </div>
        <MusicPlay />
      </div>
    </div>
  );
}

export default MainLayout;
