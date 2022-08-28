import { IconCoin, IconChevronDown } from '@tabler/icons'
import React from 'react'

const Header = () => {
  return (

      <div className="header">
          <nav>
              <div className="logo">
                  <a href="#"><IconCoin width={50} height={50} /></a>
                  <ul className="header__list">
                      <li><a href="#business">startups</a></li>
                      <li><a href="#loans">loans</a></li>
                      <li><a href="#ca">services&nbsp; <IconChevronDown/></a></li>
                      <li><a href="#">courses</a></li>
                      <li><a href="#">contact us</a></li>
                  </ul>
              </div>
          </nav>
      </div>
  )
}

export default Header