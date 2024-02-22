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
    </>
  );
}
