import React from 'react';
import { Collapse } from 'antd';
import dollar from '../assets/dollar.svg'
import number from '../assets/number.svg'
import percent from '../assets/percent.svg'
import lowrisk from '../assets/lowrisk.svg'
import highrisk from '../assets/highrisk.svg'


const Alerts = [
    {
        id: 1,
        name: 'AMZN',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 2,
        name: 'TSLA',
        number: 200,
        percent: -0.25,
        risk: 'High Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 3,
        name: 'ABQQ',
        number: 200,
        percent: -0.25,
        risk: 'High Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 4,
        name: 'MSFT',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    }
    ,
    {
        id: 5,
        name: 'PYPL',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 6,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 7,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 8,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 9,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

    },
    {
        id: 10,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    },
    {
        id: 11,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    },
    {
        id: 12,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    },
    {
        id: 13,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    },
    {
        id: 14,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    },
    {
        id: 15,
        name: 'NFLX',
        number: 200,
        percent: -0.25,
        risk: 'Low Risk',
        text: (name) => <div className='col-12 d-flex flex-column alertText'>
            <div className='col-12'><span>${name}</span> just announced an acquisition of <span>$NFLX</span> at <span>200B</span></div>
            <p className='col-12 mt-1'>This is an <span>arbitrage opportunity</span>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the fails, if the deal success is % and therefore the recommended play is <span>long/short</span> $ABC</p>
        </div>,

        showArrow: false,

        

    }

]
const AlertsMap = Alerts.map((item) => {
    return {
        key: item.id,
        label: <div className='col-12 d-flex alertLabel p-md-4 p-1'>
            <div className='col-3 d-flex align-items-center justify-content-center'>
                <img src={dollar} alt="dollar" className='me-md-4 me-1' /> {item.name}</div>
            <div className='col-3 d-flex align-items-center justify-content-center'>
                <img src={number} alt="number" className='me-md-4 me-1' />
                {item.number}</div>
            <div className='col-3 d-flex align-items-center justify-content-center percent'>
                <img src={percent} alt="percent" className='me-md-4 me-1' />
                {item.percent} %</div>
            <div className='col-3 d-flex align-items-center justify-content-center'>
                <img src={item.risk==='Low Risk' ? `${lowrisk}` : highrisk} alt="risk" className='me-md-4 me-1' />
                {item.risk}</div>
        </div>,
        children: item.text(item.name),
        showArrow: item.showArrow,
        
    };
});
const AlertsCollapse = () => {

    return <Collapse ghost style={{backgroundColor:'transparent'}} bordered={false} className='col-12 p-1 p-md-0 d-flex flex-column row-gap-3 collapse' items={AlertsMap} />;
};
export default AlertsCollapse;