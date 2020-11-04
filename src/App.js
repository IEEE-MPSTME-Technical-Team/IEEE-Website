import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SplashScreen from './layout/SplashScreen'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Events from './components/Events'
import Gallery from './components/Gallery'
import ContactUs from './components/Contact'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contactus' component={ContactUs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
