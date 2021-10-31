import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import FeedPage from './pages/FeedPage';
import Register from './pages/Register';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={MainPage} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/feed/image" component={ImagePage} /> */}
        <Route exact={true} path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
    </div>
  );
}

export default App;
