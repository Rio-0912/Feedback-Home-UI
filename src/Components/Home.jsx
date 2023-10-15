import React from 'react';
import logo from '../assets/logo-dark.png';
import Review from '../assets/review.png';
import '../Components/global.css';
import Blob from '../assets/blob.svg'
import Sidee from '../assets/sideChick.jpeg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {


    return (
        <div>
            <section className='h-screen w-full backg-color relative z-30'>
                <div className=' absolute '>
                    <img src={Blob} alt="did not appera" />
                </div>
                <nav className='top-0'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="" className='h-20 m-2 relative z-10' />
                        <ul className='flex list-none text-2xl flex-row'>
                            <li className='px-12 py-2 hover-button cursor-pointer'><a href="#">Home</a></li>
                            <li className='px-12 py-2 hover-button'><a href="#aboutt">About</a></li>
                            <li className='px-12 py-2 hover-button'><a href="#">Contact</a></li>
                            <li className='px-12 py-2'><a href="#" className='px-10 py-3 bg-#F0F2F2 texter button-bg rounded-3xl'>Login</a></li>
                        </ul>
                    </div>
                </nav>

                <div className='absolute bottom-0 right-0'>
                    <section className="stage overflow-hidden ">
                        <figure className="ball"><span className="shadow"></span></figure>
                    </section>
                </div>
                {/* After nav 2nd part intro  */}
                <div className='mt-20 container flex justify-around items-center absolute z-10'>
                    <div >
                        <h1 className=' text-5xl font-bold'>GPM Feed </h1>
                        <p className=' text-2xl'>We value your voice and strive to create a nurturing<br /> and vibrant learning community  </p>
                        <p className=' sm:text-3xl text-2xl pt-4 text-[texter]'>For  <TypeAnimation
                            sequence={[

                                ' Better Student Experiences ',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                ' Continuous Improvement',
                                1000,
                                ' Building Trust',
                                1000,
                                ' More Engagement    ',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: "5px" }}
                            repeat={Infinity}
                        /> </p>
                    </div>
                    <div className=' z-10'>
                        <img src={Review} alt="did not came" />
                    </div>
                </div>
            </section>
            {/* section 2 */}
            <section className='h-screen w-full   overflow-hidden section-2  flex flex-col justify-center items-center' id='aboutt'>
                <div className="stage-below  ">
                    <figure className=" ball-below" >
                        <span className="shadow-below"></span>
                    </figure>
                </div>
                <div className=' flex  items-center justify-around '>
                    <div className='p-4 m-8  '>
                        <h1 className=' text-5xl text-[texter] font-bold'>About Us</h1>
                        <p className=' text-2xl text-[texter]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, <br />dolore possimus. Eveniet voluptas explicabo delectus ullam vero deserunt doloremque et magnam reiciendis quae.</p>
                    </div>
                    <img className=' h-[75vh] mr-9  ' src={Sidee} alt="" />
                </div>
            </section>
            <footer className=' h-auto p-10 bottom-0 footerBg '>
                <div className="alltext flex " >
                    <div className='light-text p-4'>
                        <h1 className=' text-4xl'>Support</h1>
                        <ul className=' list-disc pl-4'><li>FAQs</li>
                            <li>Contact Us</li>
                            <li>Support Us</li>
                        </ul>
                    </div>
                    <div className='light-text p-4'>
                        <h1 className=' text-4xl'>Languages</h1>
                        <ul className=' list-disc pl-4'><li>Hinid</li>
                            <li>Marati</li>
                            <li>Hindi Us</li>
                        </ul>
                    </div>
                    <div className='light-text p-4 absolute right-24'>
                        <input type="text" className=' bg-[#e1fdfd] p-2 rounded-md outline-none pl-4' />
                    </div>
                </div>
<div className='light-text justify-center text-center'>
    <h2>
       Copyright All Rights resvered
    </h2>
    <h2>49, Ali Yavar Jung Marg, Kherwadi, Bandra East, Mumbai, Maharashtra 400051</h2>
</div>
            </footer>
        </div>
    );
}

export default Home;
