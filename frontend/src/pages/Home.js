import { Route, Link, Switch } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import './scss/Home.scss';

function Home() {
    return (
        <div className="Home" id="wrap">
            <div id="header">logo or image</div>
            <div className="box" id="container">
                <form>
                    <div className="box" id="login_form">
                        <Input wide type="text" placeholder="아이디" />
                        <Input wide type="password" placeholder="비밀번호" />
                        <Button wide className="button" type="submit" color="blue">
                            로그인
                        </Button>
                    </div>
                    <div className="box" id="join">
                        처음이신가요? <Link to="/sign-up">회원가입</Link>을 통해 저희와 함께하세요
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;