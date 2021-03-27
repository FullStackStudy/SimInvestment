import React, { useState } from 'react';
import './scss/SignUp.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import PasswordLayer from '../components/PasswordLayer';

function SignUp() {
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [pwConfirm, setPwConfirm] = useState();
    const [name, setName] = useState();
    const [tel, setTel] = useState();
    const [email, setEmail] = useState();

    const onChangeId = (e) => setId(e.target.value);
    const onChangePw = (e) => setPw(e.target.value);
    const onChangePwConfirm = (e) => setPwConfirm(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeTel = (e) => setTel(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('/sign-up', { id, pw, name, tel, email });
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
                    <h4>아이디</h4>
                    <Input type="text" wide value={id} onChange={onChangeId} />
                </div>
                <div className="box">
                    <h4>비밀번호</h4>
                    <Input type="password" wide value={pw} onChange={onChangePw} />
                    <PasswordLayer />
                </div>
                <div className="box">
                    <h4>비밀번호 확인</h4>
                    <Input type="password" wide value={pwConfirm} onChange={onChangePwConfirm} />
                </div>
                <div className="box">
                    <h4>이름</h4>
                    <Input type="text" wide value={name} onChange={onChangeName} />
                </div>
                <div className="box">
                    <h4>전화번호</h4>
                    <Input type="tel" placeholder="-없이 번호만 입력" wide value={tel} onChange={onChangeTel} />
                    {/*<div className="tel">*/}
                    {/*    <Input type="tel" name="phone" maxLength="3" />*/}
                    {/*    <p>-</p>*/}
                    {/*    <Input type="tel" name="phone" maxLength="4" />*/}
                    {/*    <p>-</p>*/}
                    {/*    <Input type="tel" name="phone" maxLength="4" />*/}
                    {/*</div>*/}
                </div>
                <div className="box">
                    <h4>이메일</h4>
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
