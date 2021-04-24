import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';
import Test from './pages/Test';

function App() {
    return (
        <div>
            {/*<Link to="/sign-up">회원가입</Link>*/}
            {/*<Switch>*/}
            {/*    <Route path="/sign-up" component={SignUp} />*/}
            {/*</Switch>*/}
            {/*<AlertModal />*/}
            {/*<Login />*/}
            {/**/}
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/test" component={Test} />
        </div>
    );
}

export default App;
