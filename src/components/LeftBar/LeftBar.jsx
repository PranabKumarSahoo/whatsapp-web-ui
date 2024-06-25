import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { LuCircleDashed } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './LeftBar.css';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <div className='left-bar-container'>
            <ul className='upper-icons'>
                <li><Link href="/"><IoIosChatboxes /></Link></li>
                <li><Link href="/"><IoIosPeople /></Link></li>
                <li><Link href="/"><LuCircleDashed /></Link></li>
            </ul>
            <ul className='lower-icons'>
                <li><Link href="/"><IoSettingsSharp /></Link></li>
                <li><Link href="/"><CgProfile /></Link></li>
            </ul>
        </div>
    )
}

export default LeftBar;