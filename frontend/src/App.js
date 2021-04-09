import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import AlertModal from './components/AlertModal';
import Home from './pages/Home';

function App() {
    return (
        <div>
            {/*<Link to="/sign-up">회원가입</Link>*/}
            {/*<Switch>*/}
            {/*    <Route path="/sign-up" component={SignUp} />*/}
            {/*</Switch>*/}
            {/*<AlertModal />*/}
            {/*<Home />*/}
            <Route exact path="/" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <AlertModal />
        </div>
    );
}

export default App;
