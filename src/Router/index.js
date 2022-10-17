import config from '~/config/config';

// Pages
import Home from '~/Pages/Home/Home';
import Discover from '~/Pages/Discover/Discover';
import ZingChat from '~/Pages/ZingChat/ZingChat';
import Radio from '~/Pages/Radio/Radio';
import Following from '~/Pages/Following/Following';

const publicRoute = [
  { path: config.home, pat: Home },
  { path: config.discover, pat: Discover },
  { path: config.zingchat, pat: ZingChat },
  { path: config.radio, pat: Radio },
  { path: config.following, pat: Following },
];
export { publicRoute };
