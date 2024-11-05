import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
// import {NewslaterBox} from '../components/NewslaterBox'
import NewslaterBox from '../components/NewslaterBox';


const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}></Title>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] ' src={assets.about_img}></img>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, aut.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vero velit ducimus quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, vero!</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quaerat illo eveniet culpa minus laborum ea fugit? Vel, voluptatibus optio!</p>
          </div>
        </div>

        <div className='text-4xl py-4'>
          <Title text1={"WHY"} text2={'US'}></Title>
        </div>

        <div className='flex flex-col md:flex-row text-row text-sm mb-20'>
          <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorum!</p>
          </div>
          <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorum!</p>
          </div>
          <div className='border p-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b> 
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorum!</p>
          </div>
          
        </div>
        <NewslaterBox/>
    </div>
  )
}

export default About