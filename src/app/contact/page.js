// import React from 'react'
import NatureImg from '@/app/Images/Nex.jpg'
import Image from 'next/image'

const Contacts = () => {
  return (
    <div>
      <Image src={NatureImg} alt='nature image' width={500} height={500}/>
    </div>
  )
}

export default Contacts
