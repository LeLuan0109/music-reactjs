import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
  const Class = cx('wrapper', { seprate: data.seprate });

  return (
    <button className={Class} to={data.to} onClick={onClick}>
      <span className={cx('icon-item')}>{data.icon}</span>
      <span className={cx('title-item')}>{data.title}</span>
    </button>
  );
}

export default MenuItems;
