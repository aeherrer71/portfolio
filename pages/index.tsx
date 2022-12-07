import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { DiMongodb, DiPython, DiDjango } from "react-icons/di";
import { FaReact, FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa"
import Image from "next/image";
import Me from '../public/IMG_0068.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexis Herrera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li><a className='bg-cyan-500 text-white px-4 py-2 rounded ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='relative w-80 h-80 mx-auto mt-20'>
            <Image src={Me} alt='black developer' layout='fill' objectFit='cover' className='rounded-full' />

          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Alexis Herrera</h2>
            <h3 className='text-2xl py-2'>Father | Veteran | Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Highly adaptable and detail-oriented security professional turned software engineer well-versed in analyzing user needs and developing software to meet diverse needs. Innovative and technically-astute facilitator of solutions accustomed to working with global teams. Enthusiastic and self motivated learner that is committed to personal development and keeping up with industry trends.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16'>
            <a href='https://www.linkedin.com/in/alexis-herrera003/'><AiFillLinkedin /> </a>
            <a href='https://github.com/aeherrer71'><AiOutlineGithub /> </a>
          </div>
        </section>
        <section>
          <h1 className='text-5xl font-medium text-center'>Skills</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaReact className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>React</h3>
              <p className='text-gray-800 py-1'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaJsSquare className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>JavaScript</h3>
              <p className='text-gray-800 py-1'>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaHtml5 className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>HTML</h3>
              <p className='text-gray-800 py-1'>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaCss3Alt className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>CSS</h3>
              <p className='text-gray-800 py-1'>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiMongodb className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>MongoDB</h3>
              <p className='text-gray-800 py-1'>Cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiPython className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>Python</h3>
              <p className='text-gray-800 py-1'>Cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiDjango className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>Django</h3>
              <p className='text-gray-800 py-1'>Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.</p>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}
