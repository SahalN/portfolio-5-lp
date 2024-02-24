/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col text-white px-[11.25rem]  '>
        <div className='flex flex-row py-20'>
          <div className='flex-1'>
            <div>
              <h1 className='text-[2.75rem] font-extrabold font-raleway'>
                Your Name Here
              </h1>
            </div>
            <div className='pb-[1.88rem] pt-[1.26rem]'>
              <p className='text-[#9C9C9C]'>
                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div>
              <button className='bg-[#3F8E00] py-[1.31rem] px-16'>
                Let’s get started
              </button>
            </div>
          </div>
          <div className='flex justify-center flex-1'>
            <img
              src='/images/image-profile.png'
              alt=''
              className='rounded-full'
            />
          </div>
        </div>
        <div>
          <div>
            <p>worked with</p>
          </div>
          <div className='flex flex-row gap-[1.87rem] pb-[2.87rem] justify-between '>
            <div className=' px-[2.44rem] py-5 mt-5 self-center border border-[#1B1B1B] rounded-lg'>
              <img src='/images/clickup.png' alt='' className='w-fit' />
            </div>
            <div className=' px-[2.44rem] py-5 mt-5 self-center border border-[#1B1B1B] rounded-lg'>
              <img src='/images/dropbox.png' alt='' className='w-full' />
            </div>
            <div className=' px-[2.44rem] py-5 mt-5 self-center border border-[#1B1B1B] rounded-lg'>
              <img src='/images/paychex.png' alt='' className='w-full' />
            </div>
            <div className=' px-[2.44rem] py-5 mt-5 self-center border border-[#1B1B1B] rounded-lg'>
              <img src='/images/elastic.png' alt='' className='w-full' />
            </div>
            <div className=' px-[2.44rem] py-5 mt-5 self-center border border-[#1B1B1B] rounded-lg'>
              <img src='/images/stripe.png' alt='' className='w-full' />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col bg-white px-[11.25rem] text-center py-20'>
        <div>
          <h1 className='text-[2.125rem] font-extrabold font-raleway'>
            Case Studies
          </h1>
        </div>
        <div className='px-[9.19rem]'>
          <p className='text-[#9C9C9C] pt-[0.62rem] pb-[3.75rem] '>
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-y-32'>
          <div className='flex flex-cols '>
            <div className='text-left '>
              <div className='px-[0.63rem] py-[0.40rem] rounded-full bg-[#FFF6E9] max-w-max flex justify-center'>
                <p className='text-[#FFA217]'>Fintech</p>
              </div>
              <div>
                <h1 className='pt-5 text-2xl font-extrabold font-raleway'>
                  Work name here
                </h1>
              </div>
              <div className='pb-12 pt-[0.62rem]'>
                <p className='text-[#9C9C9C]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div>
                <button className='bg-[#FFA217] px-6 py-[0.62rem] rounded-md text-white'>
                  View case study
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-end flex-1'>
            <img src='/images/pict-1.png' alt='' />
          </div>
          <div className='flex justify-start flex-1'>
            <img src='/images/pict-2.png' alt='' />
          </div>
          <div className='flex flex-cols '>
            <div className='text-left '>
              <div className='px-[0.63rem] py-[0.40rem] rounded-full bg-[#FFF6E9] max-w-max flex justify-center'>
                <p className='text-[#FFA217]'>Fintech</p>
              </div>
              <div>
                <h1 className='pt-5 text-2xl font-extrabold font-raleway'>
                  Work name here
                </h1>
              </div>
              <div className='pb-12 pt-[0.62rem]'>
                <p className='text-[#9C9C9C]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div>
                <button className='bg-[#000AFF] px-6 py-[0.62rem] rounded-md text-white'>
                  View case study
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-cols '>
            <div className='text-left '>
              <div className='px-[0.63rem] py-[0.40rem] rounded-full bg-[#FFF6E9] max-w-max flex justify-center'>
                <p className='text-[#FFA217]'>Fintech</p>
              </div>
              <div>
                <h1 className='pt-5 text-2xl font-extrabold font-raleway'>
                  Work name here
                </h1>
              </div>
              <div className='pb-12 pt-[0.62rem]'>
                <p className='text-[#9C9C9C]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div>
                <button className='bg-[#2AB090] px-6 py-[0.62rem] rounded-md text-white'>
                  View case study
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-end flex-1'>
            <img src='/images/pict-3.png' alt='' />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col text-center px-[11.25rem] text-white py-20'>
        <div className='pb-[0.63rem]'>
          <h1 className='font-raleway text-[2.125rem] font-extrabold'>
            Testimonials
          </h1>
        </div>
        <div className='pb-[3.75rem] px-44'>
          <p className='text-[#9C9C9C]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='grid grid-cols-2 text-left'>
          <div className='flex flex-col gap-8 p-8'>
            <div>
              <p className='text-[#9C9C9C]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <div>
                <img src='/images/cp-1.png' alt='' />
              </div>
              <div>
                <h2 className='text-lg font-semibold font-raleway'>
                  Client Name
                </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8 p-8'>
            <div>
              <p className='text-[#9C9C9C]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <div>
                <img src='/images/cp-2.png' alt='' />
              </div>
              <div>
                <h2 className='text-lg font-semibold font-raleway'>
                  Client Name
                </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8 p-8'>
            <div>
              <p className='text-[#9C9C9C]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <div>
                <img src='/images/cp-3.png' alt='' />
              </div>
              <div>
                <h2 className='text-lg font-semibold font-raleway'>
                  Client Name
                </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8 p-8'>
            <div>
              <p className='text-[#9C9C9C]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <div>
                <img src='/images/cp-4.png' alt='' />
              </div>
              <div>
                <h2 className='text-lg font-semibold font-raleway'>
                  Client Name
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col text-center px-[11.25rem] text-black py-20 bg-white'>
        <div>
          <h1 className='font-raleway font-extrabold text-[2.125rem]'>
            Recent Work
          </h1>
        </div>
        <div className='pt-[0.62rem] px-56 pb-20'>
          <p className='text-[#9C9C9C] '>
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className='flex flex-row text-left gap-x-12'>
          <div className='flex-1'>
            <div>
              <img src='/images/img-1.png' alt='' className='w-full' />
            </div>
            <div className='pt-12'>
              <h3 className='text-2xl font-extrabold font-raleway'>
                Work name here
              </h3>
              <p className='pt-[1.25rem]'>
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
              </p>
            </div>
            <div className='pt-[1.25rem] flex flex-row '>
              <div>
                <button className='bg-[#62BA1B] flex flex-row items-center gap-2 text-white px-[1.5rem] py-[0.62rem] rounded-md text-sm font-semibold'>
                  Know more
                  <img src='/images/ra.png' alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div>
              <img src='/images/img-2.png' alt='' className='w-full' />
            </div>
            <div className='pt-12'>
              <h3 className='text-2xl font-extrabold font-raleway'>
                Work name here
              </h3>
              <p className='pt-[1.25rem]'>
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
              </p>
            </div>
            <div className='pt-[1.25rem] flex flex-row '>
              <div>
                <button className='bg-[#62BA1B] flex flex-row items-center gap-2 text-white px-[1.5rem] py-[0.62rem] rounded-md text-sm font-semibold'>
                  Know more
                  <img src='/images/ra.png' alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col text-center px-[11.25rem] text-white py-20'>
        <div>
          <h1 className='font-extrabold font-raleway text-[2.124rem]'>
            Get In Touch
          </h1>
        </div>
        <div className='px-64 pb-10'>
          <p className='text-[#9C9C9C] pt-[0.63rem] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className='flex flex-col justify-center px-96'>
          <div className='flex flex-col pb-[1.37rem]'>
            <label htmlFor='' className='flex justify-start'>
              Email
            </label>
            <input
              type='text'
              placeholder='Please enter your email'
              className='px-3 py-3 text-black rounded-sm'
            />
          </div>
          <div className='flex flex-col pb-[1.37rem]'>
            <label htmlFor='' className='flex justify-start'>
              Mobile
            </label>
            <input
              type='text'
              placeholder='Enter mobile'
              className='px-3 py-3 text-black rounded-sm'
            />
          </div>
          <div className='flex flex-col pb-5'>
            <label htmlFor='' className='flex justify-start '>
              Message
            </label>
            <input
              type='text'
              placeholder='Enter your message'
              className='px-3 pt-3 pb-[5.25rem] rounded-sm text-black'
            />
          </div>
          <div>
            <button className='bg-[#62BA1B] w-full py-4 text-sm font-semibold flex flex-row items-baseline justify-center gap-4'>
              Submit
              <img src='/images/ra.png' alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
