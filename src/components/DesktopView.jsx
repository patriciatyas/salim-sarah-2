import React from "react";
import CopyButton from './CopyButton';
import "../App.css";

function DesktopView() {
  return (
    <section className="relative items-center justify-center min-h-screen">
      <div className="fixed-left">
        <h1 className='text-maroon text-m text-xl font-garamond pt-60 pl-12'>The Wedding of</h1>
        <img src='/images/salim-1.png' alt='salim-1' className="pt-2 pl-10"/>
        <img src='/images/and.png' alt='and' className="pl-36"/>
        <img src='/images/sarah-1.png' alt='sarah-1' className="pt-4 pl-10"/>
      </div>

      <div className="scrollable-right">
      <div className="relative min-h-screen bg-paper">
      <section className="relative items-center justify-center bg-landing-page md:bg-paper pb-40">
      <img src='/images/left-asset.png' alt='left-asset' className="absolute"/>
      <img src='/images/right-asset.png' alt='right-asset' className="absolute right-0"/>
      <img src='/images/crest-copy.png' alt='crest' className="absolute left-56 top-6"/>
        <div className='flex flex-col items-center justify-center text-center pt-[188px]'>
        <p className=" text-maroon text-m font-garamond w-32 leading-tight">Welcome to Our New Beginning</p>
        <img src='/images/salim-1.png' alt='salim-1' className="pt-2"/>
        <img src='/images/and.png' alt='and' className="absolute top-80"/>
        <img src='/images/sarah-1.png' alt='sarah-1' className="pt-2"/>
        <p className=" text-maroon text-m font-garamond w-32 leading-tight">Join us in celebrating our love. Your presence would be truly cherished</p>
        </div>
        <img src='/images/pilar-2.png' alt='pilar' className="hidden md:absolute md:left-1/2"/>
      </section>
      <section className="relative items-center justify-center min-h-screen">
        <img src='/images/daun-1.png' alt='daun-1' className="absolute top-0 left-5"/>
        <div className="flex justify-center pt-5">
          <p className=" text-maroon text-m items-center font-garamond w-48 text-center leading-tight">With the grace and blessing from God, We warmly invite you to the wedding of</p>
        </div>
        <img src='/images/daun-2.png' alt='daun-2' className="absolute top-0 right-5"/>
        
        <div className='flex flex-row mt-10 items-center justify-center'>
          <img src='/images/foto-salim.png' alt='foto-salim' className=""/>
          
          <div className="flex flex-col items-end text-right pt-6">
            <img src='/images/salim-2.png' alt='salim-2' className=""/>
            <p className=" text-maroon text-m font-garamond font-bold w-36 text-right leading-tight">Samuel Salim Budiman, S.I.Kom</p>
            <p className=" text-maroon text-xs font-garamond w-36 text-right leading-tight">Son of  Mr. Ali Hendrawan Boedijanto & Mrs. Eva Sriwanti Tarigan</p>
            
            <div className='mt-2 w-40 flex flex-row border border-maroon p-1 rounded-lg hover:bg-maroon'>
            <img src='/images/instagram.png' alt='instagram' className="" />
            <a href="https://www.instagram.com/salimsbudiman" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-maroon text-m font-garamond font-bold w-36 text-center leading-tight hover:text-white transition duration-200">
              @salimsbudiman
            </a>
            </div>

          </div>
        </div>
        <div className='flex flex-row mt-10 items-center justify-center'>          
          <div className="flex flex-col items-end text-right pt-2 mr-3">
            <img src='/images/sarah-2.png' alt='sarah-2' className=""/>
            <p className=" text-maroon text-m font-garamond font-bold w-36 text-right leading-tight">Sarah Puspaherning, S.Hum</p>
            <p className=" text-maroon text-xs font-garamond w-36 text-right leading-tight">Daughter of  Mr. Antonius Herman Suprapto (Alm.) & Mrs. Ningsih Herman</p>
            
            <div className='mt-2 ml-3 flex flex-row border w-32 border-maroon hover:bg-maroon p-1 rounded-lg'>
              <img src='/images/instagram.png' alt='instagram' className="" />
              <a href="https://www.instagram.com/chosaarah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-maroon text-m font-garamond font-bold w-36 text-center leading-tight hover:text-white transition duration-200">
                @chosaarah
              </a>
            </div>
          </div>
          <img src='/images/foto-sarah.png' alt='foto-sarah' className="pl-2"/>
        </div>
      </section>
      <section className="relative items-center justify-center min-h-screen">
        <img src='/images/yellow-jepun.png' alt='bunga-jepun' className="absolute top-0 left-8"/>
        <div className="flex flex-col justify-center items-center pt-16">
          <h1 className='text-maroon font-garamond text-lg text-center tracking-widest'>WEDDING DAY</h1>
          <p className='text-maroon font-garamond text-m text-center w-72'>Together by two families, we cordially request the honor of your presence at the celebration of the wedding day</p>
        </div>
        <img src='/images/maroon-flower.png' alt='bunga-maroon' className="absolute top-[119px] right-5"/>
        
        <div className='mt-20 flex flex-col justify-center items-center'>
        <img src='/images/wedding-ring.png' alt='wedding-ring' className=""/>
        <img src='/images/hm-1.png' alt='holy-matrimony' className="pt-3"/>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='mt-2 border border-maroon rounded-2xl px-3 text-lg tracking-widest font-garamond text-maroon font-semibold'>SATURDAY, 10 AUG 2024</h1>
          <p className='pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold'>11:00 AM - 12:30 PM</p>
          <div className='flex flex-row items-center justify-center'>
            <p className='pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold w-72'>📍 Gereja Katolik St. Aloysius Gonzaga, Cijantung, Jakarta Timur</p>
          </div>
          <a href="https://maps.app.goo.gl/8rRTnk49vFzJfZf26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 border border-maroon rounded-2xl px-10 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200">
                Google Maps
              </a>
              <img src='/images/nachos.png' alt='nachos' className="pt-8"/>
        </div>
      </section>
      <section className="relative items-center justify-center min-h-screen">
      <div className='flex flex-col items-center justify-center'>
      <img src='/images/icon-wedding-reception.png' alt='icon-wedding-reception' className=""/>
      <img src='/images/wedding-reception.png' alt='icon-wedding-reception' className="pt-3"/>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-2 border border-maroon rounded-2xl px-3 text-lg tracking-widest font-garamond text-maroon font-semibold'>SATURDAY, 17 AUG 2024</h1>
        <p className='pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold'>16:00 PM - 21:00 PM</p>
        <div className='flex flex-row items-center justify-center'>
          <p className='pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold w-72'>📍 Jl. Taman Sari Rindang no.1, Pengubengan Kangin, Kerobokan Kelod, Kuta Utara, Bali</p>
        </div>
        <a href="https://maps.app.goo.gl/8rRTnk49vFzJfZf26" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 mb-4 border border-maroon rounded-2xl px-10 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200">
              Google Maps
        </a>
      </div>
      <div className='bg-wedding-gift md:bg-paper flex flex-col items-center pb-36'>
        <img src='/images/wedding-gift.png' alt='wedding-gift' className="mt-36"/>
        <p className=' text-maroon font-garamond text-m text-center w-60'>Your love is the greatest gift. Any contributions are graciously accepted.</p>
        <div className='mt-10 px-8 py-6 text-maroon font-garamond text-center border border-maroon rounded-3xl'>
          <p className='font-bold tracking-widest'>BANK BCA</p>
          <p className='italic pt-2 text-xs'>Account Number</p>
          <p className='font-bold tracking-wider'>6080092952</p>
          <p className='italic pt-2 text-xs'>Account Owner</p>
          <p className='font-bold tracking-wider'>Sarah Puspaherning</p>
        </div>
        <CopyButton textToCopy="6080092952" />
      </div>
      </section>
      <section className="relative items-center justify-center min-h-screen flex flex-col">
       <div className='flex flex-row mt-8'>
        <img src='/images/daun-kiri.png' alt='daun' className=""/>
       <img src='/images/gallery.png' alt='gallery' className="pt-6"/>
       <img src='/images/daun-kanan.png' alt='daun' className=""/>
        </div> 
        <img src='/images/collage.png' alt='collage' className=""/>
        <img src='/images/verse.png' alt='wedding-gift' className=""/>
        <img src='/images/footer.png' alt='footer' className="pt-2 pb-2"/>
      </section>
      </div>
      </div>
    </section>
  );
}
export default DesktopView;
