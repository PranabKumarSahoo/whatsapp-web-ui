import React from 'react'
import { RiChatNewFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from '../SearchBar/SearchBar';
import ChatBox from '../ChatBox.jsx/ChatBox';
import './UserContactList.css';
import { UserList } from '../../data';
import { Link } from 'react-router-dom';

const UserContactList = () => {
    return (
        <div className='chat-list-container'>
            <div className='chat-list-top'>
                <h2 className='chat-list-top-left'>Chats</h2>
                <div className='chat-list-top-right'>
                    <Link to="/"><RiChatNewFill /></Link>
                    <Link to="/"><BsThreeDotsVertical /></Link>
                </div>
            </div >
            <div className='chat-list-search-bar'>
                <SearchBar />
            </div>
            <div className='chat-list-buttons'>
                <Link to="/">All</Link>
                <Link to="/">Unread</Link>
                <Link to="/">Groups</Link>
            </div>
            <div className='chat-list-box'>
                {UserList.map(user => (
                    <Link to="/" key={user.id}>
                        <ChatBox user={user} />
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default UserContactList;