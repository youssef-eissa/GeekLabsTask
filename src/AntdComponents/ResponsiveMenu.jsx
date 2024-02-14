import {  Drawer, Space } from 'antd';
import { Divide as Hamburger } from 'hamburger-react'
import logo from '../assets/logo.svg'
import { FaGraduationCap } from "react-icons/fa";
import { useState } from 'react'
import { FaGears } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { ImFolderOpen } from "react-icons/im";
import { AiOutlineStock } from "react-icons/ai";
import user from '../assets/user.svg'

const Menu = () => {
    const [open, setOpen] = useState(false);
 
const onClose = () => {
    setOpen(false);
};

    return (
    <>
    <Space className=' d-md-none'>
       
        <Hamburger size={25} toggled={open} onToggle={setOpen} color='white' />
    </Space>
    <Drawer
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
        width={250}
    >
        <nav className={`col-12 h-100 d-flex flex-column align-items-center py-3 `}>
            <div className='logoBox'>
                <img alt='logo' src={ logo} className='img-fluid h-100 w-100 ' />
            </div>
            <div className='col-12 mt-5 d-flex navLinks flex-column row-gap-3 '>
                <div className='col-12 d-flex justify-content-center overflow-hidden align-items-center'>
                    <div><BsFillBellFill /></div>
                    <span style={{ overflow: 'hidden' }} >Alerts</span>
                </div>

                <div className='col-12 d-flex justify-content-center  align-items-center'>
                    <div ><FaGraduationCap /></div>
                    <span>Training</span>
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <div><FaGears /></div>
                    <span className='comingsoon' transition={{ duration: 0 }} style={{ overflow: 'hidden' }} >Automation</span>
                    <div className=''>Coming Soon</div>
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <div ><ImFolderOpen /></div>
                    <span className='comingsoon' style={{ overflow: 'hidden' }} >Portfolio</span>
                    <div className=''>Coming Soon</div>
                    
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <div initial><AiOutlineStock /></div>
                    <span style={{ overflow: 'hidden' }} >Trading</span>
                    <div className=''>Coming Soon</div>
                    
                </div>
            </div>
            <div className='userBox column-gap-3 d-flex mt-auto'>
                <img alt='user' src={user} className='img-fluid h-100 w-100' />
                <div className='col d-flex flex-column'>
                    <span>Moni Roy</span>
                    <span>Beginner</span>
                </div>
            </div>
            <span className='mt-2'>Street Suite. 2.0</span>
        </nav>
    </Drawer>
    </>
);
};
export default Menu;