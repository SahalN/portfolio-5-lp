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
          <p className='text-[#9C9C9C] bg-black '>
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div>
          <div>
            <div>
              <div></div>
              <div>
                <button></button>
              </div>
            </div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
