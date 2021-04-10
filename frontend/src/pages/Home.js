import { Route, Link, Switch } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import './scss/Home.scss';

function Home() {
    return (
        <div className="Home">
            <div className="header">
                <img src="#" alt="logo" />
            </div>
            <div className="container">
                <form>
                    <div className="login_form">
                        <Input wide type="text" placeholder="아이디" />
                        <Input wide type="password" placeholder="비밀번호" />
                        <Button wide type="submit" color="blue" size="large">
                            로그인
                        </Button>
                    </div>
                </form>
                <p>
                    처음이신가요? <Link to="/sign-up">회원가입</Link>을 통해 저희와 함께하세요
                </p>
            </div>
        </div>
    );
}

export default Home;
