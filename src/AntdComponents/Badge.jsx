import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import { FaBell } from "react-icons/fa";
const BadgeIcon = () => (

    <Space >
        <Badge size='small' offset={[-5, 5]} color='rgba(17, 143, 75, 1)' style={{borderColor:'rgba(17, 143, 75, 1)',backgroundColor:'rgba(17, 143, 75, 1)'}} count={6}>
    <Avatar className='badgeBox' style={{backgroundColor: 'transparent'}} icon={<FaBell />} />
    </Badge>
        </Space>
);
export default BadgeIcon;