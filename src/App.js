import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Router';
import { songs } from './context';
import { MainLayout } from '~/Layouts';
import DataSong from './data/songs.json';
function App() {
  return (
    <Router>
      <div className="App">
        <songs.Provider value={{ DataSong }}>
          <Routes>
            {publicRoute.map((route, index) => {
              const Layout = route.layout || MainLayout;
              const Page = route.pat;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </songs.Provider>
      </div>
    </Router>
  );
}

export default App;
