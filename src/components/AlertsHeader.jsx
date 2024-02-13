import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import BadgeIcon from '../AntdComponents/Badge';




function AlertsHeader() {

    const [search, setSearch] = useState('')

    return (
        <header className='col-12 d-flex align-items-center justify-content-center '>
            <h1 className='col m-0'>Alerts</h1>
            <div className='col-9 SearchBox me-2'>
                <input
                type='text'
                className=' col-12 p-2 rounded '
                placeholder='Search By...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className='col-1' size={25}/>
            </div>
            <BadgeIcon/>
    </header>
)
}

export default AlertsHeader