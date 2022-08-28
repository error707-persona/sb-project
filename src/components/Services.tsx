import { IconLuggage, IconArrowBigRight } from '@tabler/icons'
import React from 'react'

const Services = () => {
    const services = [
        {
            id:"business",
            number:1,
            icon:<IconLuggage size={30} style={{color:"white"}}/>,
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
            number:2,
            icon:<IconLuggage size={30} style={{color:'white'}}/>,
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
            number:3,
            icon:<IconLuggage size={30} style={{color:'white'}}/>,
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
            number:4,
            icon:<IconLuggage size={30} style={{color:'white'}}/>,
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
            number:5,
            icon:<IconLuggage size={30} style={{color:'white'}}/>,
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
                (service.number%2)?
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
                    <button className="info">Know more &nbsp;&nbsp; <IconArrowBigRight/></button>
                </div>
            </div>
            :<div className="card" id={service.id}>

            
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
                <button className="info">Know more &nbsp;&nbsp; <IconArrowBigRight/></button>
            </div>
            <div className="card__icon-container">
                <div className="card__icon">
                {service.icon}
                </div>
            </div>
        </div>
            ))}
            
            

           
        </>
    )
}

export default Services