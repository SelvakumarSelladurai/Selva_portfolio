import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light'>
      <div className='py-8 px-12 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className='flex items-center'>
          It&apos;s Selva
          <span className='text-red-600 dark:text-primaryDark text-3xl px-1'>🎀</span>
          &nbsp;<Link href="/"></Link>
        </div>

        <Link href="/" className='underline underline-offset-2'>
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
