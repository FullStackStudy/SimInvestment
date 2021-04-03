import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>
                <Link to="/sign-up">회원가입</Link>
            </h2>
        </div>
    );
};

export default Home;