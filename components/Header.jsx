/** @format */

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className='px-[5.94rem] bg-[#1B1B1B] text-[#9C9C9C] py-6 rounded-md'>
        <nav>
          <ul className='flex flex-row  font-normal text-sm gap-[4.38rem]  justify-center'>
            <li>Home</li>
            <li>Case Studies</li>
            <li>Testimonials</li>
            <li>Recent work</li>
            <li>Get In Touch</li>
            <li>
              <Link href=''>Linkedin</Link>
            </li>
            <li>
              <Link href=''>Behance</Link>
            </li>
            <li>
              <Link href=''>x</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
