import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="my-8 lg:w-11/12 mx-auto text-center">
            <div className="border border-black"/>
            <div className="lg:flex justify-between items-center lg:p-10">
                  <div>
                        <h5>Ubouncellc@yahoo.com</h5>
                  </div>
                  <div className="flex items-center ">
                        <div className='mr-4 cursor-pointer'>
                              <FaInstagram size={24}/>
                        </div>
                        <div className='mr-4 cursor-pointer'>
                              <FaFacebook size={24}/>
                        </div>
                        <div className='mr-4 cursor-pointer'>
                              <FaTwitter size={24}/>
                        </div>
                  </div>
                  <div>
                        <h5>+1 223 44455 6666</h5>
                  </div>
            </div>
            <div className="text-center">
                  <h5 className="text-bold">@2022 Ubounce Inflatable. Developed by Decimals Incorporated. All Rights Reserved</h5>
            </div>
      </div>
  )
}

export default Footer