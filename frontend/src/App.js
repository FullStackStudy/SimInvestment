import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import AlertModal from './components/AlertModal';

function App() {
    return (
        <>
            <Link to="/sign-up">회원가입</Link>
            <Switch>
                <Route path="/sign-up" component={SignUp} />
            </Switch>
            <AlertModal />
        </>
    );
}

export default App;
