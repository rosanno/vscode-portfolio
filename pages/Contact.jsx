import React from 'react';
import emailjs from 'emailjs-com';

const Items = [
  {
    social: 'Github',
    socialName: 'github.com',
    link: 'https://github.com/rosanno',
  },
  {
    social: 'facebook',
    socialName: 'facebook.com',
    link: '/',
  },
  {
    social: 'Discord',
    socialName: 'discord.com',
    link: 'https://discord.com/channels/899474098747478066/899474098747478069',
  },
  {
    social: 'Instagram',
    socialName: 'instagram.com',
    link: '/https://www.instagram.com/rosannomacabuhay/',
  },
];

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z8tv0va',
        'template_dkjl10n',
        e.target,
        'user_vXOakyKjg9brpwXsRcMft'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className='flex flex-col mb-20 lg:flex-row justify-between py-10 ml-14 lg:mx-6 code'>
      <div>
        <h3 className='text-white text-2xl my-5 font-semibold'>
          Social links:
        </h3>
        <span className='text-yellow-600 line'>.social: </span>
        <span className='text-slate-500'>&#123;</span>
        {Items.map(({ social, link, socialName }, i) => (
          <div key={i} className='text-[#69CBC4] line'>
            <span className='ml-5'>{social}:</span>
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              className='ml-2 text-sky-400'
            >
              {socialName}
            </a>
          </div>
        ))}
        <span className='text-slate-500 line'>&#125;</span>
      </div>
      <div className='px-5'>
        <h3 className='text-white text-2xl my-5 font-semibold'>Contact me:</h3>
        <form onSubmit={sendEmail}>
          <div className='flex flex-col md:flex-row lg:flex-row md:space-x-4 lg:space-x-4 mr-10'>
            <div className='flex flex-col'>
              <label
                htmlFor='Name'
                className='uppercase text-white text-sm my-2'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                className='outline-none bg-gray-800 text-white px-4 py-1'
              />
            </div>
            <div className='flex flex-col'>
              <label
                htmlFor='Email'
                className='uppercase text-white text-sm my-2'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                className='outline-none bg-gray-800 text-white px-4 py-1'
              />
            </div>
          </div>
          <div className='flex flex-col mt-3'>
            <label
              htmlFor='Subject'
              className='uppercase text-white text-sm my-2'
            >
              Subject
            </label>
            <input
              type='text'
              name='subject'
              className='py-1 px-2 outline-none bg-gray-800 w-auto md:w-[32rem] lg:w-[32rem] text-white'
            />
          </div>
          <div className='flex flex-col mt-3'>
            <label
              htmlFor='Subject'
              className='uppercase text-white text-sm my-2'
            >
              Message
            </label>
            <textarea
              rows='5'
              name='message'
              className='bg-gray-800 text-white outline-none px-2 py-1 w-auto md:w-[32rem] lg:w-[32rem]'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-violet-500 hover:bg-violet-600 transition duration-150 
        px-10 py-1 mt-6 text-lg text-white font-semibold'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
