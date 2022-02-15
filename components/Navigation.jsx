import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Navigation({ NavItems }) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className='flex items-center fixed w-screen pl-10 lg:pl-0 bg-[#31364A] overflow-auto z-10'>
      {NavItems.map(({ title, link, icon }, i) => (
        <div
          key={i}
          className={`flex items-center justify-center space-x-2 px-5 py-3 ${
            router.pathname === link && 'bg-gray-800'
          }`}
        >
          {/* eslint-disable-next-line */}
          <Link href={link}>
            <div className='flex shrink-0 items-center space-x-2 cursor-pointer'>
              <Image src={icon} alt='title' width={15} height={15} />
              <span className='text-white text-xs'>{title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
