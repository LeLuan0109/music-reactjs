import classNames from 'classnames/bind';
import styles from './Podcast.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Podcast() {
  const [number, setNumber] = useState(0);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div
          className={cx('items')}
          style={
            number == 0
              ? { backgroundColor: 'var(--primary-color--2)', borderColor: 'var(--primary-color--2)', color: '#fff' }
              : {}
          }
          onClick={() => setNumber(0)}
        >
          TẬP MỚI
        </div>
        <div
          className={cx('items')}
          onClick={() => setNumber(1)}
          style={
            number == 1
              ? { backgroundColor: 'var(--primary-color--2)', borderColor: 'var(--primary-color--2)', color: '#fff' }
              : {}
          }
        >
          TẬP ĐÃ LƯU
        </div>
        <div
          className={cx('items')}
          onClick={() => setNumber(2)}
          style={
            number == 2
              ? { backgroundColor: 'var(--primary-color--2)', borderColor: 'var(--primary-color--2)', color: '#fff' }
              : {}
          }
        >
          CHƯƠNG TRÌNH
        </div>
      </div>
    </div>
  );
}

export default Podcast;
