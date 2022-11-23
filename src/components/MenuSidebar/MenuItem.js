import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to }) {
  return (
    <NavLink end to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
      {icon}
      <span className={cx('item-title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
