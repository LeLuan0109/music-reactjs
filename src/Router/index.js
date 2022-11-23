import config from '~/config';

// Pages
import Home from '~/Pages/Home/Home';
import Discover from '~/Pages/Discover/Discover';
import ZingChat from '~/Pages/ZingChat/ZingChat';
import Radio from '~/Pages/Radio/Radio';
import Following from '~/Pages/Following/Following';
import TopMusic from '~/Pages/TopMusic/TopMusic';
import NewMusic from '~/Pages/NewMusic/NewMusic';
import Category from '~/Pages/Category/Category';
import MvMusic from '~/Pages/MV/MvMusic';

const publicRoute = [
  { path: config.routes.home, pat: Home },
  { path: config.routes.discover, pat: Discover },
  { path: config.routes.zingchat, pat: ZingChat },
  { path: config.routes.radio, pat: Radio },
  { path: config.routes.following, pat: Following },
  { path: config.routesExtra.new, pat: NewMusic },
  { path: config.routesExtra.catygory, pat: Category },
  { path: config.routesExtra.top, pat: TopMusic },
  { path: config.routesExtra.mv, pat: MvMusic },
];

// cac page phụ
const subRoute = [
  { path: config.routesExtra.new, pat: NewMusic },
  { path: config.routesExtra.catygory, pat: Category },
  { path: config.routesExtra.top, pat: TopMusic },
  { path: config.routesExtra.mv, pat: MvMusic },
];

export { publicRoute, subRoute };
