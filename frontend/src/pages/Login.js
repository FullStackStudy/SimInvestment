import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import './scss/Login.scss';
import imgLogo from '../images/logo.png';
import { observer } from 'mobx-react';
import LoginStore from '../stores/LoginStore';
import { openAlert } from '../components/Alert';
import axios from 'axios';

const loginStore = new LoginStore();

const Login = observer(() => {
    const { id, password } = loginStore.states;

    const changeState = (key, value) => {
        loginStore.setState(key, value);
    };

    const submit = (e) => {
        axios
            .post('/login', {
                id,
                password,
            })
            .then((response) => {
                // TODO: 로그인 성공: 메인 페이지로 화면을 돌려야함
            })
            .catch((error) => {
                openAlert({
                    message: '없는 아이디, 혹은 잘못된 비밀번호입니다.',
                });
                e.preventDefault();
            });
    };

    return (
        <div className="login">
            <div className="header">
                <img src={imgLogo} alt="logo" width="310" />
            </div>
            <div className="container">
                <form>
                    <div className="login_form">
                        <Input
                            wide
                            type="text"
                            placeholder="아이디"
                            value={id}
                            onChange={(e) => changeState('id', e.target.value)}
                        />
                        <Input
                            wide
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => changeState('password', e.target.value)}
                        />
                        <Button wide type="submit" color="blue" size="large" onClick={(e) => submit(e)}>
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
});

export default Login;
