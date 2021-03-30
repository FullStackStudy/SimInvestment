import React, { useState } from 'react';
import axios from 'axios';
import './scss/SignUp.scss';
import Context from '../Context';
import Input from '../components/Input';
import Button from '../components/Button';
import PasswordValidChecker, { confirmPw } from '../components/PasswordValidChecker';
import FormItemTitle from '../components/FormItemTitle';
import PasswordChecker from '../components/PasswordChecker';

function SignUp() {
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [pwConfirm, setPwConfirm] = useState();
    const [name, setName] = useState();
    const [tel, setTel] = useState();
    const [email, setEmail] = useState();

    const [pwValidCheckerDisplay, setPwValidCheckerDisplay] = useState();

    const onChangeId = (e) => setId(e.target.value);
    const onChangePw = (e) => setPw(e.target.value);
    const onChangePwConfirm = (e) => setPwConfirm(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeTel = (e) => setTel(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    const onSubmit = (e) => {
        if (pw !== pwConfirm) {
            alert('비밀번호를 확인하세요.');
            e.preventDefault();
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (confirmPw(i, pw) === 'fail') {
                alert('올바른 비밀번호를 입력하세요.');
                e.preventDefault();
                return;
            }
        }

        axios
            .post('/sign-up', {
                id,
                pw,
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
                    <Input type="text" wide value={id} onChange={onChangeId} required />
                </div>
                <div className="box">
                    <FormItemTitle required>비밀번호</FormItemTitle>
                    <Input
                        type="password"
                        wide
                        value={pw}
                        onChange={onChangePw}
                        onSelect={() => setPwValidCheckerDisplay('true')}
                        onBlur={() => setPwValidCheckerDisplay('false')}
                        maxLength={Context.Password.MAX_PW_LENGTH}
                        required
                    />
                    <PasswordValidChecker display={pwValidCheckerDisplay} pw={pw} />
                </div>
                <div className="box">
                    <FormItemTitle required>비밀번호 확인</FormItemTitle>
                    <PasswordChecker pw={pw} pwConfirm={pwConfirm} />
                    <Input
                        type="password"
                        wide
                        value={pwConfirm}
                        onChange={onChangePwConfirm}
                        maxLength={Context.Password.MAX_PW_LENGTH}
                        required
                    />
                </div>
                <div className="box">
                    <FormItemTitle required>이름</FormItemTitle>
                    <Input type="text" wide value={name} onChange={onChangeName} required />
                </div>
                <div className="box">
                    <FormItemTitle>전화번호</FormItemTitle>
                    <Input type="tel" placeholder="-없이 번호만 입력" wide value={tel} onChange={onChangeTel} />
                </div>
                <div className="box">
                    <FormItemTitle>이메일</FormItemTitle>
                    <Input type="email" wide value={email} onChange={onChangeEmail} />
                </div>

                <Button type="submit" size="large" color="blue" wide onClick={onSubmit}>
                    회원가입
                </Button>
            </form>
        </div>
    );
}

export default SignUp;
