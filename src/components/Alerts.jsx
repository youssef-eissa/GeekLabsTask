import React from 'react'
import AlertsHeader from './AlertsHeader'
import AlertsCollapse from '../AntdComponents/AlertsMapping'

function Alerts() {
return (
    <div className='col-6 d-flex flex-column align-items-center alerts'>
        <AlertsHeader />
        <div className='col-12 alertsBody'>
            <AlertsCollapse />
        </div>
    </div>
)
}

export default Alerts