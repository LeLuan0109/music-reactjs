import { Grid, Box } from '@mui/material';
import styles from './Radio.scss';
import classNames from 'classnames/bind';
import CardList from '~/components/CardList';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
const cx = classNames.bind(styles);
const airRadio = [
  {
    id: 1,
    name: 'Nhạc mới mỗi ngày',
    image: '/images/airRadio-1.jpg',
  },
  {
    id: 2,
    name: "Artist's story",
    image: '/images/airRadio-2.jpg',
  },

  {
    id: 3,
    name: 'Wazzup',
    image: '/images/airRadio-3.jpg',
  },
  {
    id: 4,
    name: 'Chạm x sao',
    image: '/images/airRadio-4.jpg',
  },
];

const newRadio = [
  {
    id: 1,
    name: 'Khi em lớn',
    image: '/images/newRadio-1.jpg',
  },
  {
    id: 2,
    name: 'All about Women',
    image: '/images/newRadio-2.jpg',
  },

  {
    id: 3,
    name: 'Thủ thỉ thầm thì',
    image: '/images/newRadio-3.jpg',
  },
  {
    id: 4,
    name: 'Đàn ông học',
    image: '/images/newRadio-4.jpg',
  },
];
const radio = [
  {
    id: 1,
    title: 'XONE Radio',
    image: '/images/radio-1.jpg',
  },
  {
    id: 2,
    title: 'V-POP',
    image: '/images/radio-2.jpg',
  },

  {
    id: 3,
    title: 'On Air',
    image: '/images/radio-3.jpg',
  },
  {
    id: 4,
    title: 'Bolero',
    image: '/images/radio-4.jpg',
  },
  {
    id: 5,
    title: 'Chạm',
    image: '/images/radio-5.jpg',
  },
];

const singers = [
  {
    id: 1,
    image: '/images/ns-chi-dan.png',
  },
  {
    id: 2,
    image: '/images/ns-erik.png',
  },

  {
    id: 3,
    image: '/images/ns-huong-ly.png',
  },
  {
    id: 4,
    image: '/images/ns-jack.png',
  },
  {
    id: 5,
    image: '/images/ns-justatee.png',
  },
  {
    id: 6,
    image: '/images/ns-karik.png',
  },
  {
    id: 7,
    image: '/images/ns-mr-siro.png',
  },
  {
    id: 8,
    image: '/images/ns-trinh-thang-binh.png',
  },
];

function Radio() {
  return (
    <div className={cx('radio home')}>
      <div className={cx('card-list-group')}>
        <Grid container>
          {/* 1 */}
          <Grid item xs={4} sm={2.4}>
            <div className={cx('radio-box')}>
              <div className={cx('radio-top')}>
                <img className={cx('img')} src={radio[0].image} alt="img" />
                <div className={cx('item-icon')}>
                  <AiOutlineHeart className={cx('small')} />
                  <BsPlayCircle className={cx('big')} />
                  <BsThreeDots className={cx('small')} />
                </div>
                <img className={cx('radio-top-img')} src="/svg/radio-1.svg" alt="radio" />
                <img
                  className={cx('radio-top-live-icon')}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                  alt="live"
                />
              </div>
              <div className={cx('radio-bottom')}>{radio[0].title}</div>
            </div>
          </Grid>
          {/*  */}
          {/*2  */}
          <Grid item xs={4} sm={2.4}>
            <div className={cx('radio-box')}>
              <div className={cx('radio-top')}>
                <img className={cx('img')} src={radio[1].image} alt="img" />
                <div className={cx('item-icon')}>
                  <AiOutlineHeart className={cx('small')} />
                  <BsPlayCircle className={cx('big')} />
                  <BsThreeDots className={cx('small')} />
                </div>
                <img className={cx('radio-top-img')} src="/svg/radio-1.svg" alt="radio" />
                <img
                  className={cx('radio-top-live-icon')}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                  alt="live"
                />
              </div>
              <div className={cx('radio-bottom')}>{radio[1].title}</div>
            </div>
          </Grid>
          {/*  */}
          {/* 3 */}
          <Grid item xs={4} sm={2.4}>
            <div className={cx('radio-box')}>
              <div className={cx('radio-top')}>
                <img className={cx('img')} src={radio[2].image} alt="img" />
                <div className={cx('item-icon')}>
                  <AiOutlineHeart className={cx('small')} />
                  <BsPlayCircle className={cx('big')} />
                  <BsThreeDots className={cx('small')} />
                </div>
                <img className={cx('radio-top-img')} src="/svg/radio-1.svg" alt="radio" />
                <img
                  className={cx('radio-top-live-icon')}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                  alt="live"
                />
              </div>
              <div className={cx('radio-bottom')}>{radio[2].title}</div>
            </div>
          </Grid>
          {/*  */}
          {/* 4 */}
          <Grid item xs={4} sm={2.4}>
            <div className={cx('radio-box')}>
              <div className={cx('radio-top')}>
                <img className={cx('img')} src={radio[3].image} alt="img" />
                <div className={cx('item-icon')}>
                  <AiOutlineHeart className={cx('small')} />
                  <BsPlayCircle className={cx('big')} />
                  <BsThreeDots className={cx('small')} />
                </div>
                <img className={cx('radio-top-img')} src="/svg/radio-1.svg" alt="radio" />
                <img
                  className={cx('radio-top-live-icon')}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                  alt="live"
                />
              </div>
              <div className={cx('radio-bottom')}>{radio[3].title}</div>
            </div>
          </Grid>
          {/*  */}
          {/*5  */}
          <Grid item xs={4} sm={2.4}>
            <div className={cx('radio-box')}>
              <div className={cx('radio-top')}>
                <img className={cx('img')} src={radio[4].image} alt="img" />
                <img className={cx('radio-top-img')} src="/svg/radio-1.svg" alt="radio" />
                <img
                  className={cx('radio-top-live-icon')}
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                  alt="live"
                />
              </div>
              <div className={cx('radio-bottom')}>{radio[4].title}</div>
            </div>
          </Grid>
          {/*  */}
        </Grid>
      </div>

      <div className={cx('card-list-group')}>
        <h3 className={cx('h3-heading')}>On Air</h3>
        <Grid container spacing={3}>
          {airRadio.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={cx('card-list-group')}>
        <h3 className={cx('h3-heading')}>Chương Trình Mới</h3>
        <Grid container spacing={3}>
          {newRadio.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default Radio;
