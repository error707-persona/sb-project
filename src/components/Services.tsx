import { IconLuggage } from '@tabler/icons'
import React from 'react'

const Services = () => {
    const services = [
        {
            id:"business",
            icon:<IconLuggage style={{color:'white'}}/>,
            title:"Business Consulting",
            paragraph:"Some of our unique offers are:",
            list:[ 
            "Business Process Re-engineering",
            "Branch/Franchise Setup for Geographical expansion",
            "Profit Engineering",
            "Budgeting and Cost controls"
            ]
        },
        {
            id:"loans",
            icon:<IconLuggage style={{color:'white'}}/>,
            title:"Loan Syndication",
            paragraph:"Some of our unique offers are:",
            list:[ 
            "Business Process Re-engineering",
            "Branch/Franchise Setup for Geographical expansion",
            "Profit Engineering",
            "Budgeting and Cost controls"
            ]
        },
        {
            id:"company-valuation",
            icon:<IconLuggage style={{color:'white'}}/>,
            title:" Company Valuation",
            paragraph:"Some of our unique offers are:",
            list:[ 
            "Business Process Re-engineering",
            "Branch/Franchise Setup for Geographical expansion",
            "Profit Engineering",
            "Budgeting and Cost controls"
            ]
        },
        {
            id:"equity-advisory",
            icon:<IconLuggage style={{color:'white'}}/>,
            title:"Equity Advisory",
            paragraph:"Some of our unique offers are:",
            list:[ 
            "Business Process Re-engineering",
            "Branch/Franchise Setup for Geographical expansion",
            "Profit Engineering",
            "Budgeting and Cost controls"
            ]
        },
        {
            id:"ca-services",
            icon:<IconLuggage style={{color:'white'}}/>,
            title:"Ca Services",
            paragraph:"Some of our unique offers are:",
            list:[ 
            "Business Process Re-engineering",
            "Branch/Franchise Setup for Geographical expansion",
            "Profit Engineering",
            "Budgeting and Cost controls"
            ]
        },

    ]
    return (
        <>
            <div className="services">
                Our Services
                
            </div>
            {services.map((service)=>(
                
<div className="card" id={service.id}>

                <div className="card__icon-container">
                    <div className="card__icon">
                    {service.icon}
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title">
                        {service.title}
                    </div>
                    {service.paragraph}
                    <ul>
                    {service.list.map((item)=>(
                        <li>{item}</li>
                    ))}
                        
                        
                    </ul>
                </div>
            </div>
            ))}
            
            

           
        </>
    )
}

export default Services