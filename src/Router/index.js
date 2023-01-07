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
// home-pages
import Song from '~/Pages/Home/Song/Song';
import Album from '~/Pages/Home/Album/Album';
import HomMv from '~/Pages/Home/Mv/Mv';
import Podcast from '~/Pages/Home/Podcast/Podcast';
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
const subRouteHome = [
  { path: config.routesHome.song, pat: Song },
  { path: config.routesHome.mv, pat: HomMv },
  { path: config.routesHome.album, pat: Album },
  { path: config.routesHome.podcast, pat: Podcast },
];
export { publicRoute, subRoute, subRouteHome };
