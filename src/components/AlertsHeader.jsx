import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import BadgeIcon from '../AntdComponents/Badge';
import Menu from '../AntdComponents/ResponsiveMenu';




function AlertsHeader() {

    const [search, setSearch] = useState('')

    return (
        <header className='col-12 d-flex flex-column flex-md-row align-items-center justify-content-center '>
            <h1 className='col m-0'>Alerts</h1>
            <div className='d-flex col-md-9 col-12 align-items-center justify-content-between p-2'>
                <div className='col-md-11 col-9 SearchBox me-2'>
                <input
                type='text'
                className=' col-12 p-2 rounded '
                placeholder='Search By...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className='col-1' />
            </div>
                <BadgeIcon />
                <Menu/>
            </div>
           
    </header>
)
}

export default AlertsHeader