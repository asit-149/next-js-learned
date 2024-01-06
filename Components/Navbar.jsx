// import React from 'react'

import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="link-container">
                <Link href='/' className="link">Home</Link>
                <Link href='/About' className="link">About Us</Link>
                <Link href='/blog' className="link">Blog</Link>
                <Link href='/contact' className="link">Contact</Link>
            </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
