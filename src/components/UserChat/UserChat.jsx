import React, { useEffect, useRef, useState } from 'react';
import './UserChat.css';
import User1 from '../../assets/user1.jpg';
import { IoMdSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserChat = () => {
    const [inputValue, setInputValue] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='user-chat-container'>
            <div className='user-chat-header'>
                <div className='user-header-details'>
                    <div className='chat-profile'>
                        <div className='chat-img'>
                            <img src={User1} alt="User" />
                        </div>
                        <div className='user-name'>
                            <h2>John</h2>
                            <p>online</p>
                        </div>
                    </div>
                    <div className='user-chat-action'>
                        <Link to='/'>
                            <span className='video-call-icon'>
                                <IoVideocam className='video-icons' />
                                <MdOutlineKeyboardArrowDown className='arrow-icons' />
                            </span>
                        </Link>
                        <Link to="/">
                            <IoMdSearch className='chat-search-icons' />
                        </Link>
                        <span onClick={toggleMenu} className='three-dot-icons'>
                            <BsThreeDotsVertical />
                        </span>
                        {
                            isMenuOpen && (
                                <div className="menu" ref={menuRef}>
                                    <ul>
                                        <li>Contact info</li>
                                        <li>Select messages</li>
                                        <li>Close chat</li>
                                        <li>Mute notifications</li>
                                        <li>Disappearing messages</li>
                                        <li>Clear chat</li>
                                        <li>Delete chat</li>
                                        <li>Report</li>
                                        <li>Block</li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
            <div className='user-chats'>
                <span className='my-message message'>Lorem ipsum dolor sit amet</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
                <span className='frnd-message message'>consectetur adipisicing elit. Fugiat, saepe!</span>
                <span className='my-message message'> tempore laboriosam debitis.</span>
                <span className='frnd-message message'>Fuga sint facere ab in.</span>
                <span className='my-message message'>consectetur adipisicing elit.</span>
            </div>
            <div className='user-typing-box'>
                <div className='user-attach-icon'>
                    <Link to="/"><FaRegSmile /></Link>
                    <Link to="/"><FaPlus /></Link>
                </div>
                <div className='user-typing-bar'>
                    <input
                        type="text"
                        placeholder='Type a message'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='user-record-icon'>
                    <Link to="/">
                        {
                            inputValue ? (
                                <IoSend />
                            ) : (
                                <MdKeyboardVoice className='voice-icon' />
                            )
                        }
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default UserChat;