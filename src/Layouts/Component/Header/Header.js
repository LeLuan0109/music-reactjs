import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudUpload,
  faGear,
  faShirt,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faSignOut,
  faBan,
  faPlayCircle,
  faCircleInfo,
  faFlag,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import config from '~/config/routes';
import Search from '~/Layouts/Component/Search/Search';
import Menu from '~/components/Menu/Menu';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

//  lưu chữ sự kiện đăng nhập

// // xử lí các item trong   trong avatar and setting
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feeback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keybroard shortcuts',
  },
];

const USER_ITEMS = [
  ...MENU_ITEMS,

  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    seprate: true,
  },
];
const SETTING_ITEMS = [
  { icon: <FontAwesomeIcon icon={faBan} />, title: 'Danh sách chặn', to: '/block' },

  { icon: <FontAwesomeIcon icon={faPlayCircle} />, title: 'Trình phát nhạc', to: '/play' },

  { icon: <FontAwesomeIcon icon={faCircleInfo} />, title: 'Giới thiệu', to: '/info' },

  { icon: <FontAwesomeIcon icon={faFlag} />, title: 'Góp ý', to: '/falg' },

  { icon: <FontAwesomeIcon icon={faBan} />, title: 'Danh sách chặn', to: '/block' },
];

function Header() {
  const [currentUser, setCurrentUser] = useState(true);
  const [navBar, setNavBar] = useState(false);

  document.onscroll = () => {
    const scroll = document.documentElement.scrollTop || window.scrollY;
    if (scroll >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  const handleMenuChange = (MenuItem) => {
    console.log(MenuItem);
  };

  return (
    <header className={navBar ? cx('wrapper-action') : cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.home}>
            <img src="https://mp3-react-vinhbuihd.vercel.app/svg/logo-dark.svg" alt="logo" />
          </Link>
        </div>
        {/* sreach */}
        <Search />
        {/* action */}
        <div className={cx('action')}>
          <div className={cx('menu-action')}>
            <Tippy delay={[0, 100]} content="Chủ Đề" placement="bottom">
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faShirt} />
              </button>
            </Tippy>
            <Tippy delay={[0, 100]} content="Up-Load" placement="bottom">
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCloudUpload} />
              </button>
            </Tippy>
            {currentUser ? (
              <>
                <Menu items={SETTING_ITEMS} onChange={handleMenuChange}>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faGear} />
                  </button>
                </Menu>
                <Menu items={USER_ITEMS} onChange={handleMenuChange}>
                  <Image
                    className={cx('user-avatar')}
                    src="https://anhdephd.vn/wp-content/uploads/2022/05/anh-gai-xinh-de-thuon.jpg"
                    alt="img"
                  />
                </Menu>
              </>
            ) : (
              <>
                <div className={cx('log-gin')} onClick={() => setCurrentUser(true)}>
                  <button className={cx('log-gin-btn')}>Đăng Nhập</button>
                </div>
                <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                  <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
