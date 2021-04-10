import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Alert from './components/Alert';
import Login from './pages/Login';

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
            <Alert />
        </div>
    );
}

export default App;
