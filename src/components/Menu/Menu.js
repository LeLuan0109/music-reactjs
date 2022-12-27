import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import MenuHeader from './MenuHeader';

import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFN = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFN }) {
  const [history, setHistory] = useState([{ data: items }]);
  const [value, setValue] = useState('');
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setValue(item.children.title);

              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      // delay={[0, 500]}
      offset={[14, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <MenuHeader
                title={value}
                onback={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
