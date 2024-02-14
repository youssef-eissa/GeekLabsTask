import './NavBar.css'
import logo from '../assets/logo.svg'
import { FaGraduationCap } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { FaGears } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { ImFolderOpen } from "react-icons/im";
import { AiOutlineStock } from "react-icons/ai";
import user from '../assets/user.svg'


function NavBar() {
    const [open, setOpen] = useState(false)
    const NavRef = useRef(null)
  
    const handleNavOpen=useCallback(()=>{
        setOpen(!open)
    },[open])
return (
    <div className='col-1 d-md-flex d-none navbar justify-content-center p-0'>
        <motion.nav transition={{bounce:0.3, duration:0.6, type:'spring'}} animate={open?{width:'180px'}:{width:''}} onMouseLeave={handleNavOpen} onMouseEnter={handleNavOpen} ref={NavRef} className={`col-9 h-100 d-flex flex-column align-items-center py-3 ${open?'open':''}`}>
            <motion.div animate={open?{width:'124px',height:'54px'}:{width:'',height:''}} className='logoBox'>
                <img alt='logo' src={ logo} className='img-fluid h-100 w-100 ' />
            </motion.div>
            <motion.div className='col-12 mt-5 d-flex navLinks flex-column row-gap-3 '>
                <div className='col-12 d-flex justify-content-center overflow-hidden align-items-center'>
                    <motion.div initial><BsFillBellFill /></motion.div>
                     <motion.span className='' transition={{duration:0}} style={{ overflow: 'hidden' }} animate={open ? { width: 'auto', opacity: 1, } : { width: '0', opacity: 0 ,}}>Alerts</motion.span>
                </div>

                 <div className='col-12 d-flex justify-content-center  align-items-center'>
                    <motion.div initial><FaGraduationCap /></motion.div>
                     <motion.span transition={{duration:0}} style={{ overflow: 'hidden' }} animate={open ? { width: 'auto', opacity: 1 } : { width: '0', opacity: 0 }}>Training</motion.span>
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <motion.div initial><FaGears /></motion.div>
                    <motion.span className='comingsoon' transition={{ duration: 0 }} style={{ overflow: 'hidden' }} animate={open ? { width: 'auto', opacity: 1 } : { width: '0', opacity: 0 }}>Automation</motion.span>
                    <div className=''>Coming Soon</div>
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <motion.div initial><ImFolderOpen /></motion.div>
                    <motion.span className='comingsoon' transition={{ duration: 0 }} style={{ overflow: 'hidden' }} animate={open ? { width: 'auto', opacity: 1 } : { width: '0', opacity: 0 }}>Portfolio</motion.span>
                    <div className=''>Coming Soon</div>
                    
                </div>
                <div className='col-12 d-flex justify-content-center comingsoon align-items-center'>
                    <motion.div initial><AiOutlineStock /></motion.div>
                    <motion.span transition={{ duration: 0 }} style={{ overflow: 'hidden' }} animate={open ? { width: 'auto', opacity: 1 } : { width: '0', opacity: 0 }}>Trading</motion.span>
                    <div className=''>Coming Soon</div>
                    
                </div>
            </motion.div>
            <motion.div animate={open?{y:0}:{y:'5px'}} className='userBox column-gap-3 d-flex mt-auto'>
                <img alt='user' src={user} className='img-fluid h-100 w-100' />
                <motion.div transition={{bounce:0}} animate={open?{display:'flex'}:{display:'none'}} className='col  flex-column'>
                    <motion.span>Moni Roy</motion.span>
                    <motion.span>Beginner</motion.span>
                </motion.div>
            </motion.div>
            <motion.span animate={open?{display:'block'}:{display:'none'}} className='mt-2'>Street Suite. 2.0</motion.span>
        </motion.nav>

    </div>
)
}

export default NavBar