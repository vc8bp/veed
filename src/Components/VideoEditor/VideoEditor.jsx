import React from 'react'
import { FiPlusCircle, FiScissors, FiSearch } from 'react-icons/fi'
import { FaBars, FaPlus } from 'react-icons/fa'
import { RiSettingsFill, RiText } from "react-icons/ri";
import { NavLink } from 'react-router-dom'
import { BsFileEarmarkFill, BsFillDashSquareFill, BsQuestionCircleFill } from 'react-icons/bs';
import { BiSolidVideo } from "react-icons/bi";
import { Button } from 'react-bootstrap';
import { IoMicOutline, IoMusicalNoteSharp } from 'react-icons/io5';
import './VideoEdito.scss'
import SettingTab from './components/SettingTab/SettingTab';
import { CiCirclePlus } from 'react-icons/ci';
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LiaSearchMinusSolid, LiaSearchPlusSolid } from "react-icons/lia";
import Timeline from './components/Timeline/Timeline';
import { convertVideoToImages } from '../../hooks/videoToImagesConverter';
import { useDispatch } from 'react-redux';
import { addMedia } from '../../redux/projectSlice';

const VideoEditor = () => {
    const sidebar = [
        { icon: <RiSettingsFill />, text: 'Setting', href: '/editor/setting', class: "settingIcon" },
        { icon: <FaPlus />, text: 'Media', href: '/#', class: "iconcontent" },
        { icon: <IoMusicalNoteSharp />, text: 'Audio', href: '/#', class: "iconcontent" },
        { icon: <BsFillDashSquareFill />, text: 'Suntitles', href: '/#', class: "icon1" },
        { icon: <RiText />, text: 'Text', href: '/#', class: "iconcontent" },
        { icon: <BsFileEarmarkFill />, text: 'Elements', href: '/#', class: "icon1 fileicon" },
        { icon: <BiSolidVideo />, text: 'Record', href: '/#', class: "iconcontent" },
    ]

    const handleAddMediaClick = () => document.getElementById('video-input').click();

    return (
        <div className='videoEditorSection'>
            <div className='videoEditTabs'>
                <div className=''>
                    <Button>
                        <NavLink to="/home">
                            <FaBars />
                        </NavLink>
                    </Button>
                </div>
                <div className='tabsSection'>
                    <Button className='searchBtn'>
                        <span className='iconcontent'><FiSearch /></span>
                        <span className='title'>Search</span>
                    </Button>

                    {sidebar.map((item) => {
                        return <div className='tabsItem'>
                            <NavLink to={item.href}>
                                <span className={item.class}>{item.icon}</span>
                                {/* <span className='h'></span> */}
                                <span className='title'>{item.text}</span>
                            </NavLink>
                        </div>
                    })}
                </div>
                <div className='helpCenterTab'>
                    <button>
                        <span className='helpCenter'><BsQuestionCircleFill /></span>
                    </button>
                </div>
            </div>
            <div className='videoEditor'>
                <SettingTab />
                <div className='settingFootereditor'>
                    <div className='settingBottomHeader'>
                        <div className='videoEdit'>
                            <p><FiScissors /> Split</p>
                            <p onClick={handleAddMediaClick} ><FiPlusCircle /> Add media</p>
                            <p><IoMicOutline /> Voiceover</p>
                        </div>
                        <div>
                            <HiOutlineSpeakerWave />
                            <LiaSearchMinusSolid />
                            <LiaSearchPlusSolid />
                        </div>
                    </div>
                <Timeline handleAddMediaClick={handleAddMediaClick}/>
                </div>
            </div>
        </div>
    )
}

export default VideoEditor