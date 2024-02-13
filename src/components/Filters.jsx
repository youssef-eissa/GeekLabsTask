import { useState } from "react"
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



function Filters() {
    const [search, setSearch] = useState('')
    const [market,setMarket]=useState('micro')
    const [risk,setRisk]=useState('low')
    return (
        <div className='col-3 filters my-3 rounded d-flex flex-column p-3'>
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
            <div className="stock rounded mt-3 p-3 col-12 d-flex flex-column">
                <h3>Stock</h3>
                <div className="inputBox col-12">
                    <input
                    type='text'
                    className='col-12 rounded py-1 ps-3 '
                    placeholder='$ TICKER'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <FaSearch className='col-1' />

                </div>
                <div className="industry col-12 d-flex flex-column">
                    <div className="head d-flex mt-3">
                        <IoMdArrowDropdown className='me-2' />
                        <h3>Industry</h3>
                    </div>
                    <div className="col-12 d-flex p-2 ">
                        <div className="col-6 ps-1 d-flex flex-column row-gap-1">
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
                            <span className="d-flex rounded px-1 ">
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
                         <div className="col-6 ps-1 d-flex align-self-start flex-column row-gap-1">
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
                                    id='micro'
                                    name="market"
                                    className="me-3"
                                    value='micro'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='micro'}
                                />
                                <label htmlFor="micro">Micro</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='small'
                                    name="market"
                                    className="me-3"
                                    value='small'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='small'}

                                />
                                <label htmlFor="small">Small</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='large'
                                    name="market"
                                    className="me-3"
                                    value='large'
                                    onChange={(e) => setMarket(e.target.value)}
                                    checked={market==='large'}
                                />
                                <label htmlFor="large">Large</label>
                            </div>
                        </form>
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
                                    id='low'
                                    name="Risk"
                                    className="me-3"
                                    value='low'
                                    onChange={(e) => setRisk(e.target.value)}
                                    checked={risk==='low'}
                                />
                                <label htmlFor="low">Low Risk</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='mid'
                                    name="Risk"
                                    className="me-3"
                                    value='mid'
                                    onChange={(e) => setRisk(e.target.value)}
                                    checked={risk==='mid'}
                                />
                                <label htmlFor="mid">Mid Risk</label>
                            </div>
                            <div className="col-12 d-flex ">
                                <input
                                    type="radio"
                                    id='high'
                                    name="Risk"
                                    className="me-3"
                                    value='high'
                                    onChange={(e) => setRisk(e.target.value)}
                                    checked={risk==='high'}
                                />
                                <label htmlFor="high">High Risk</label>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <button className="col-6 d-flex mx-auto justify-content-center align-items-center p-2 btn mt-2 ">Apply</button>
            </div>
        </div>
)
}

export default Filters