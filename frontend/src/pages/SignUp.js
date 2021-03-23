import React from 'react';
import './scss/SignUp.scss';
import Input from '../components/Input';
import Button from '../components/Button';

function SignUp() {
    return (
        <div className="SignUp">
            <div className="title">
                <img src="#" alt="logo" />{' '}
                <span>
                    <h1>회원가입</h1>
                </span>
            </div>

            <form>
                <div className="box">
                    <h4>아이디</h4>
                    <Input type="text" wide />
                </div>
                <div className="box">
                    <h4>비밀번호</h4>
                    <Input type="password" wide />
                </div>
                <div className="box">
                    <h4>비밀번호 확인</h4>
                    <Input type="password" wide />
                </div>
                <div className="box">
                    <h4>이름</h4>
                    <Input type="text" wide />
                </div>
                <div className="box">
                    <h4>전화번호</h4>
                    <Input type="tel" wide />
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
                    <Input type="email" wide />
                </div>

                <Button type="submit" size="large" color="blue" wide>
                    회원가입
                </Button>
            </form>
        </div>
    );
}

export default SignUp;
