import React from 'react';
import axios from 'axios';
import './scss/SignUp.scss';
import Context from '../Context';
import Input from '../components/Input';
import Button from '../components/Button';
import PasswordValidChecker, { confirmPassword } from '../components/PasswordValidChecker';
import FormItemTitle from '../components/FormItemTitle';
import PasswordChecker from '../components/PasswordChecker';
import SignUpStore from '../stores/SignUpStore';
import { observer } from 'mobx-react';
import { openAlert } from '../components/AlertModal';

const signUpStore = new SignUpStore();

const SignUp = observer(() => {
    const { id, password, passwordConfirm, name, tel, email } = signUpStore.states;
    const { passwordValidCheckerDisplay } = signUpStore.states;

    const changeState = (key, value) => {
        signUpStore.setState(key, value);
    };

    const onSubmit = (e) => {
        if (password !== passwordConfirm) {
            openAlert('비밀번호를 확인하세요.');
            e.preventDefault();
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (confirmPassword(i, password) === 'fail') {
                openAlert('올바른 비밀번호를 입력하세요.');
                e.preventDefault();
                return;
            }
        }

        axios
            .post('/sign-up', {
                id,
                password,
                name,
                tel,
                email,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <div className="SignUp">
            <div className="title">
                <img src="#" alt="logo" />
                <span>
                    <h1>회원가입</h1>
                </span>
            </div>

            <form>
                <div className="box">
                    <FormItemTitle required>아이디</FormItemTitle>
                    <Input type="text" wide value={id} onChange={(e) => changeState('id', e.target.value)} required />
                </div>
                <div className="box">
                    <FormItemTitle required>비밀번호</FormItemTitle>
                    <Input
                        type="password"
                        wide
                        value={password}
                        onChange={(e) => changeState('password', e.target.value)}
                        onSelect={() => changeState('passwordValidCheckerDisplay', 'true')}
                        onBlur={() => changeState('passwordValidCheckerDisplay', 'false')}
                        maxLength={Context.Password.MAX_LENGTH}
                        required
                    />
                    <PasswordValidChecker display={passwordValidCheckerDisplay} password={password} />
                </div>
                <div className="box">
                    <FormItemTitle required>비밀번호 확인</FormItemTitle>
                    <PasswordChecker password={password} passwordConfirm={passwordConfirm} />
                    <Input
                        type="password"
                        wide
                        value={passwordConfirm}
                        onChange={(e) => changeState('passwordConfirm', e.target.value)}
                        maxLength={Context.Password.MAX_LENGTH}
                        required
                    />
                </div>
                <div className="box">
                    <FormItemTitle required>이름</FormItemTitle>
                    <Input
                        type="text"
                        wide
                        value={name}
                        onChange={(e) => changeState('name', e.target.value)}
                        required
                    />
                </div>
                <div className="box">
                    <FormItemTitle>전화번호</FormItemTitle>
                    <Input
                        type="tel"
                        placeholder="-없이 번호만 입력"
                        wide
                        value={tel}
                        onChange={(e) => changeState('tel', e.target.value)}
                    />
                </div>
                <div className="box">
                    <FormItemTitle>이메일</FormItemTitle>
                    <Input type="email" wide value={email} onChange={(e) => changeState('email', e.target.value)} />
                </div>

                <Button type="submit" size="large" color="blue" wide onClick={onSubmit}>
                    회원가입
                </Button>
            </form>
        </div>
    );
});

export default SignUp;
