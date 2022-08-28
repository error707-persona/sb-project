import { IconLuggage } from '@tabler/icons'
import React from 'react'

const Services = () => {
    return (
        <>
            <div className="services">
                Our Services
            </div>

            <div className="card" id="#business">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage style={{color:'white'}}/>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Business Consulting
                    </div>

                    Some of our unique offers are:
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>
                </div>
            </div>

            <div className="card" id="loans">
                <div className="card__icon-container">
                    <div className="card__icon">
                    <IconLuggage width={50} height={50} style={{color:'white'}} />
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Loan Syndication
                    </div>
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>
                </div>
            </div>

            <div className="card" id="company-valuation">
                <div className="card__icon-container">
                    <div className="card__icon">
                    <IconLuggage width={50} height={50} style={{color:'white'}}/>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Company Valuation
                    </div>
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>

                </div>
            </div>
            <div className="card" id="equity-advisory">
                <div className="card__icon-container">
                    <div className="card__icon">
                    <IconLuggage width={50} height={50} style={{color:'white'}} />
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Equity Advisory
                    </div>
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>
                </div>

            </div>
            <div className="card" id="ca-services">
                <div className="card__icon-container">
                    <div className="card__icon">
                    <IconLuggage width={50} height={50} style={{color:'white'}}/>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        CA Services
                    </div>
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Services