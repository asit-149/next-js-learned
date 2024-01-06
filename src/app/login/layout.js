'use client'

import Link from 'next/link'
import React from 'react'
import Footer from '../../../Components/Footer'
import { usePathname } from 'next/navigation'

const Layout = ({children}) => {
 const pathName = usePathname();
 console.log(pathName)

  return (
   <div>
      {pathName === '/login/adminuser'?(
         <li>
            <Link href= '/login/adminuser' >Admin</Link>
         </li>
         ):( 
            <ul className='login-menu '>
      
       <li>
         <Link href= '/login/loginuser' >User Login</Link>
       </li>
        </ul>)}
    
     
      {children}
      {/* <Footer/> */}
    </div>
  

  )
}

export default Layout
