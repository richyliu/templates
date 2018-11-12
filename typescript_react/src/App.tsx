import * as React from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

import boundMethod from 'autobind-decorator';

import './App.css';
import logo from './logo.svg';

const HomeRedir = () => <Redirect to="/home" />;
const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.tsx</code> and save to reload.
  </p>
);
const Store = () => <p>Store page</p>;
const Settings = () => <p>Settings page</p>;

interface AppState {
  value: string;
}

class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      value: '/home',
    };
  }

  public componentDidMount() {
    this.setState({
      value: this.props.history.location.pathname,
    });
  }

  @boundMethod
  public handleChange(_, value: string) {
    this.props.history.push(value);
    this.setState({ value });
  }

  public render() {
    const { value } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Switch>
          <Route exact path="/" component={HomeRedir} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/settings" component={Settings} />
        </Switch>

        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction
            label="Home"
            value="/home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Store"
            value="/store"
            icon={<StoreIcon />}
          />
          <BottomNavigationAction
            label="Settings"
            value="/settings"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(App);
