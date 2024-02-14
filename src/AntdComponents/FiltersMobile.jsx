import { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import health from '../assets/health.svg'
import material from '../assets/material.svg'
import energy from '../assets/energy.svg'
import consumer from '../assets/consumer.svg'
import cart from '../assets/cart.svg'
import realestate from '../assets/realstate.svg'
import it from '../assets/IT.svg'
import communications from '../assets/communications.svg'
import industrials from '../assets/industrials.svg'
import utilities from '../assets/utilities.svg'
import Financials from '../assets/financials.svg'
const FiltersButton = () => {
const [open, setOpen] = useState(false);
const showDrawer = () => {
    setOpen(true);
};
const onClose = () => {
    setOpen(false);
};
    const [search, setSearch] = useState('')
    const [market,setMarket]=useState('micro')
    const [risk,setRisk]=useState('low')
    const [strategy, setStrategy] = useState('bigoption')
    const [asset, setAsset] = useState('stocks')

    return (
    <>
    <Space  className='d-md-none MobileFilters col-12'>
       
        <Button  className='d-flex align-items-center justify-content-center col-12' type="primary" onClick={showDrawer}>
        <FaFilter size={10} className='me-2'/> Filters
        </Button>
    </Space>
    <Drawer 
        placement={'bottom'}
                closable={false}
                
        onClose={onClose}
                open={open}
                height={500}
                style={{backgroundColor:'transparent'}}
            >
        <div className='col-12 filters  rounded  flex-column p-3'>
            <div className="head d-flex align-self-center">Filters</div>
            <div className="filtersResultsBox col-12 d-flex flex-column">
                <div className="col-12 d-flex justify-content-between">
                    <span>Filters Applied</span>
                    <span>Clear All</span>
                </div>
                <div className="results rounded d-flex col-12 p-2">
                    <span className="d-flex  align-items-center align-self-start p-1 rounded">Real Estate  <span  className="ms-1 ">X</span></span>
                </div>
            </div>
            <div className="stock rounded mt-3 p-2 col-12 d-flex flex-column">
                <h3 className="p-2">Stock</h3>
                <div className="inputBox col-12 ">
                    <input
                    type='text'
                    className='col-12 rounded py-1 ps-3 '
                    placeholder='$ TICKER'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <FaSearch className='col-1' />

                </div>
                <div className="industry col-12 d-flex flex-column ">
                    <div className="head d-flex mt-3">
                        <IoMdArrowDropdown className='me-2' />
                        <h3>Industry</h3>
                    </div>
                    <div className="col-12 d-flex p-2 ">
                        <div className="col-7 ps-1 d-flex flex-column row-gap-1">
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="health" src={health} />
                                Health Care
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="material" src={material} />
                                Materials
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="energy" src={energy} />
                                Energy
                            </span>
                            <span className="d-flex rounded px-1 p-0">
                                <img className="mx-2" alt="consumer" src={consumer} />
                                Consumer discretionary
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="cart" src={cart} />
                                Consumer staples
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="realestate" src={realestate} />
                                Real Estate
                            </span>
                        </div>
                         <div className="col-5  d-flex align-self-start flex-column row-gap-1">
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="it" src={it} />
                                IT
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="communications" src={communications} />
                                Communications
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="industrials" src={industrials} />
                                Industrials
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="utilities" src={utilities} />
                                Utilities
                            </span>
                            <span className="d-flex rounded px-1 ">
                                <img className="mx-2" alt="utilities" src={Financials} />
                                Financials
                            </span>
                           
                        </div>
                    </div>
                </div>
                <div className="col-12 MarketsAndRisk d-flex ">
                    <div className="col-6 d-flex flex-column">
                        <div className="head d-flex mt-3">
                        <IoMdArrowDropdown className='me-2' />
                            <h3>Market Caps</h3>
                        </div>
                        <form className="col-12 d-flex flex-column px-3 ">
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='microM'
                                    name="market"
                                    className="me-3"
                                    value='micro'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='micro'}
                                />
                                <label htmlFor="microM">Micro</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='smallM'
                                    name="market"
                                    className="me-3"
                                    value='small'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='small'}

                                />
                                <label htmlFor="smallM">Small</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='largeM'
                                    name="market"
                                    className="me-3"
                                    value='large'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='large'}
                                />
                                <label htmlFor="largeM">Large</label>
                            </div>
                        </form>
                        <div className="strategy col-12 mt-3 d-flex flex-column">
                            <h3 className="d-flex mx-auto">Strategy</h3>
                            <form className="col-12 d-flex flex-column row-gap-">
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='bigoptionM'
                                        name="strategy"
                                        value='bigoption'
                                        onChange={(e) => setStrategy(e.target.value)}
                                        checked={strategy==='bigoption'}
                                    />
                                    <label htmlFor="bigoptionM">Big Option Buys</label>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='MergerM'
                                        name="strategy"
                                        value='Merger'
                                        onChange={(e) => setStrategy(e.target.value)}
                                        checked={strategy==='Merger'}
                                    />
                                    <label htmlFor="MergerM">Merger Arbitrage</label>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='ShortM'
                                        name="strategy"
                                        value='Short'
                                        onChange={(e) => setStrategy(e.target.value)}
                                        checked={strategy==='Short'}
                                    />
                                    <label htmlFor="ShortM">Short Reports</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <div className="head d-flex mt-3">
                        <IoMdArrowDropdown className='me-2' />
                            <h3>Risk Levels</h3>
                        </div>
                        <form className="col-12 d-flex flex-column px-3 ">
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='lowM'
                                    name="Risk"
                                    className="me-3"
                                    value='low'
                                    onChange={(e) => setRisk(e.target.value)}
                                    checked={risk==='low'}
                                />
                                <label htmlFor="lowM">Low Risk</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='midM'
                                    name="Risk"
                                    className="me-3"
                                    value='mid'
                                            onChange={(e) =>  setRisk(e.target.value)}
                                    checked={risk==='mid'}
                                />
                                <label htmlFor="midM">Mid Risk</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='highM'
                                    name="Risk"
                                    className="me-3"
                                    value='high'
                                    onChange={(e) => setRisk(e.target.value)}
                                    checked={risk==='high'}
                                />
                                <label htmlFor="highM">High Risk</label>
                            </div>
                        </form>
                        <div className="asset col-12 mt-3 d-flex flex-column">
                            <h3 className="d-flex mx-auto">Asset</h3>
                            <form className="col-12 d-flex flex-column row-gap-">
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='stocksM'
                                        name="asset"
                                        value='stocks'
                                        onChange={(e) => setAsset(e.target.value)}
                                        checked={asset==='stocks'}
                                    />
                                    <label htmlFor="stocksM">Stocks</label>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='optionsM'
                                        name="asset"
                                        value='options'
                                        onChange={(e) => setAsset(e.target.value)}
                                        checked={asset==='options'}
                                    />
                                    <label htmlFor="optionsM">Options</label>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <input
                                        type="radio"
                                        id='futuresM'
                                        name="asset"
                                        value='futures'
                                        onChange={(e) => setAsset(e.target.value)}
                                        checked={asset==='futures'}
                                    />
                                    <label htmlFor="futuresM">Futures</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <button onClick={onClose} className="col-6 d-flex mx-auto justify-content-center align-items-center p-2 rounded mt-5 ">Apply</button>
        </div>
    </Drawer>
    </>
  );
};
export default FiltersButton;