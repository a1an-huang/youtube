import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = () => {
  return (
    <div className='border border-dark header'>Header
    <FaBars className='header_menu' size={26} />
    </div>
  )
}

export default Header