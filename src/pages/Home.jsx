import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar';
import UserContactList from '../components/UserContactList/UserContactList';
import UserChat from '../components/UserChat/UserChat';

const Home = () => {
    return (
        <div className='home-container'>
            <LeftBar />
            <UserContactList />
            <UserChat />
        </div>
    )
}

export default Home;