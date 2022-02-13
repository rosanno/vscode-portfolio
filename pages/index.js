import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex items-center px-5 justify-between ml-10 lg:mx-2 font-main'>
      <div className='flex flex-col justify-center h-screen text-white'>
        <span className='text-2xl'>Hi</span>
        <h1 className='text-5xl md:text-4xl lg:text-6xl font-semibold uppercase'>
          {/* eslint-disable-next-line */}
          I'm Rosanno
        </h1>
        <span className='text-2xl mt-2'>Full Stack Developer</span>
        <div
          className='mt-14 border-2 border-sky-600 w-fit py-1 
        px-4 cursor-pointer rounded-md hover:bg-sky-500 hover:bg-opacity-20 transition duration-150 text-lg'
        >
          Download CV
        </div>
      </div>
      <div className='hidden md:block lg:block'>
        <Image src='/icons/coding.svg' alt='coding' width={600} height={600} />
      </div>
    </div>
  );
}
