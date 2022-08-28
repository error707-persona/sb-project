import { IconLuggage } from '@tabler/icons'
import React from 'react'

const Services = () => {
    return (
        <>
            <div className="services">
                Our Services
            </div>
            <div className="card">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage />
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Business Consulting
                    </div>
                    <br />
                    Some of our unique offers are:
                    <ul>
                        <li>Business Process Re-engineering</li>
                        <li>Branch/Franchise Setup for Geographical expansion</li>
                        <li>Profit Engineering</li>
                        <li>Budgeting and Cost controls</li>
                    </ul>
                </div>




            </div>
            <div className="card">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage />
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        Loan Syndication
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage />
                    </div>
                </div>
                <div className="card__title">
                    Company Valuation
                </div>
            </div>
            <div className="card">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage />
                    </div>
                </div>
                <div className="card__title">
                    Equity Advisory
                </div>

            </div>
            <div className="card">
                <div className="card__icon-container">
                    <div className="card__icon">
                        <IconLuggage />
                    </div>
                </div>
                <div className="card__title">
                    CA Services
                </div>

            </div>
        </>
    )
}

export default Services