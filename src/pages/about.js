import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import aboutPic from '../../public/images/me.jpg'
import Skills from '@/components/Skills'

const about = () => {
  return (
    <div>
      <>
      <Head>
        <title>Selvakumar | About page</title>
        <meta name='description'/>
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className={'pt-12'}>
        <AnimatedText text={"Designing Tomorrow, Today"} classname=' !text-6xl mb-10'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-5 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>
                <p className='font-medium'>I’m Selvakumar, a passionate Computer Science Engineering graduate from P.A. College of Engineering and Technology, with a CGPA of 8.0. I completed my schooling at Sainik School Amaravathinagar (CBSE), securing 69.7% in HSC (2020–2021).</p>

                <p className='my-4 font-medium'>   Throughout my academic journey, I actively participated in both technical and cultural spheres. I served as the Additional Secretary of Tamil Mandram (2024–2025) and Secretary of the Music Club (2023–2024) at my college, along with being an Executive Member of the ISTE Club. 
                </p>

                <p className='my-4 font-medium'>I’ve gained valuable hands-on experience through internships, including:

Full Stack Web Development Intern at Unifi ed Mentor Pvt. Ltd.

Django in Python at Prime Solution

Python Programming at R2C Technologies</p> 
                <p className='font-medium'> With each project, I witness the synergy between full stack development and machine learning—where creative design, robust engineering, and intelligent algorithms come together to bring bold ideas to life. </p>
                
            </div>
            <div className='col-span-3 relative rounded-2xl border-2 border-solid border-dark bg-light p-8'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-xl bg-dark'/>
    <div className="relative w-full" style={{ paddingTop: '100%' }}>
        <Image src={aboutPic} className='absolute inset-0 w-full h-full object-cover rounded-2xl' alt="About Picture"
        priority sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33w" />
    </div>
</div>
        </div>
        <Skills/>
        </Layout>
      </main>
      </>
    </div>
  )
}

export default about
