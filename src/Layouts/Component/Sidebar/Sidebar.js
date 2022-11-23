import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { DiscoverIcon, Following, Home, Radio, ZingChatIcon } from '~/components/Icon';
import config from '~/config';
import Menu, { MenuItem } from '~/components/MenuSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Menu>
          <MenuItem to={config.routes.home} title={'Cá nhân'} icon={<Home />} />
          <MenuItem to={config.routes.discover} title={'Khám phá'} icon={<DiscoverIcon />} />
          <MenuItem to={config.routes.zingchat} title={'#Zing chat'} icon={<ZingChatIcon />} />
          <MenuItem to={config.routes.radio} title={'Radio'} icon={<Radio />} />
          <MenuItem to={config.routes.following} title={'Theo dõi'} icon={<Following />} />
        </Menu>
        <div className={cx('inner', 'category')}>
          <Menu>
            <MenuItem to={config.routesExtra.new} title={'Nhạc mới'} icon={<Home />} />
            <MenuItem to={config.routesExtra.catygory} title={'Thể loại'} icon={<DiscoverIcon />} />
            <MenuItem to={config.routesExtra.top} title={'Top 100'} icon={<ZingChatIcon />} />
            <MenuItem to={config.routesExtra.mv} title={'MV'} icon={<Radio />} />
          </Menu>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
