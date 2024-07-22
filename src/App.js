import "./App.css";
import React, { useRef, useState } from "react";
import CopyButton from "./components/CopyButton";
import { useInView } from "react-intersection-observer";
// import BackgroundMusic from "./components/BackgroundMusic";

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time the element is in view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? "fade-in" : ""}`}>
      {children}
    </div>
  );
}

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
        });
    }
  };

  const handleButtonClick = () => {
    playMusic();
    const secondPage = document.getElementById("secondPage");

    // Scroll to the bottom of the page
    // window.scrollTo({
    //   top: document.body.scrollHeight,
    //   behavior: 'smooth'
    // });

    window.scrollTo({
      top: secondPage.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative items-center justify-center min-h-screen">
      {/* <div className="absolute top-0 z-10">
      <BackgroundMusic />
    </div> */}
      <audio ref={audioRef} src="up.mp3" onEnded={() => setIsPlaying(false)} />

      <section className="flex min-h-screen items-center justify-center bg-paper bg-cover">
          <button
            onClick={handleButtonClick}
            className="border border-maroon rounded-2xl px-10 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200"
          >
            Open Invitation
          </button>
        </section>

      <div className="container">
      <div className="hidden md:block fixed-left"></div>
      

      <div className="md:scrollable-right">
        {/* <BackgroundMusic /> */}
        <div id="secondPage" className="relative min-h-screen bg-paper md:bg-right-bg md:w-full">
          <section className="flex relative items-center justify-center bg-cover h-screen w-screen">
            <div className="w-screen flex justify-center items-center md:hidden ">
              <img src="/images/new-landing-page.png"
                  alt="landing-page"
                  className=""
                  />
            </div>
            <div className="hidden md:block">
                <img
                  src="/images/right-landing-page.png"
                  alt="right-landing-page"
                  className="md:absolute md:left-8 md:top-0"
                /> 
            </div>
          </section>

          <section className="relative items-center justify-center min-h-screen md:bg-right-bg fade-in mt-12 md:mt-0">
          
            <FadeInSection>
              <img
                src="/images/daun-1.png"
                alt="daun-1"
                className="absolute top-0 left-5"
              />
            </FadeInSection>
            <div className="flex justify-center pt-5">
              <FadeInSection>
                <p className=" text-maroon text-m items-center font-garamond w-48 text-center leading-tight">
                  With the grace and blessing from God, We warmly invite you to
                  the wedding of
                </p>
              </FadeInSection>
            </div>
  
            <FadeInSection>
              <img
                src="/images/daun-2.png"
                alt="daun-2"
                className="absolute top-0 right-5"
              />
            </FadeInSection>

            <div className="flex flex-row mt-10 items-center justify-center">
              <FadeInSection>
                <img
                  src="/images/foto-salim.png"
                  alt="foto-salim"
                  className=""
                />
              </FadeInSection>

              <div className="flex flex-col items-end text-right pt-6">
                <FadeInSection>
                  <img src="/images/salim-2.png" alt="salim-2" className="" />
                </FadeInSection>
                <FadeInSection>
                  <p className=" text-maroon text-m font-garamond font-bold w-36 text-right leading-tight">
                    Samuel Salim Budiman, S.I.Kom
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <p className=" text-maroon text-xs font-garamond w-36 text-right leading-tight">
                    Son of Mr. Ali Hendrawan Boedijanto & Mrs. Eva Sriwanti
                    Tarigan
                  </p>
                </FadeInSection>

                <FadeInSection>
                  <div className="mt-2 w-40 flex flex-row border border-maroon p-1 rounded-lg hover:bg-maroon">
                    <img
                      src="/images/instagram.png"
                      alt="instagram"
                      className=""
                    />
                    <a
                      href="https://www.instagram.com/salimsbudiman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon text-m font-garamond font-bold w-36 text-center leading-tight hover:text-white transition duration-200"
                    >
                      @salimsbudiman
                    </a>
                  </div>
                </FadeInSection>
              </div>
            </div>
            <div className="flex flex-row mt-10 items-center justify-center">
              <div className="flex flex-col items-end text-right pt-2 mr-3">
                <FadeInSection>
                  <img src="/images/sarah-2.png" alt="sarah-2" className="" />
                </FadeInSection>
                <FadeInSection>
                  <p className=" text-maroon text-m font-garamond font-bold w-36 text-right leading-tight">
                    Sarah Puspaherning, S.Hum
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <p className=" text-maroon text-xs font-garamond w-36 text-right leading-tight">
                    Daughter of Mr. Antonius Herman Suprapto (Alm.) & Mrs.
                    Ningsih Herman
                  </p>
                </FadeInSection>

                <FadeInSection>
                  <div className="mt-2 ml-3 flex flex-row border w-32 border-maroon hover:bg-maroon p-1 rounded-lg">
                    <img
                      src="/images/instagram.png"
                      alt="instagram"
                      className=""
                    />
                    <a
                      href="https://www.instagram.com/chosaarah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon text-m font-garamond font-bold w-36 text-center leading-tight hover:text-white transition duration-200"
                    >
                      @chosaarah
                    </a>
                  </div>
                </FadeInSection>
              </div>
              <FadeInSection>
                <img
                  src="/images/foto-sarah.png"
                  alt="foto-sarah"
                  className="pl-2"
                />
              </FadeInSection>
            </div>
          </section>

          <section className="relative items-center justify-center min-h-screen md:bg-right-bg">
            <FadeInSection>
              <img
                src="/images/yellow-jepun.png"
                alt="bunga-jepun"
                className="absolute top-0 left-8"
              />
            </FadeInSection>
            <div className="flex flex-col justify-center items-center pt-16">
              <FadeInSection>
                <h1 className="text-maroon font-garamond text-lg text-center tracking-widest">
                  WEDDING DAY
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p className="text-maroon font-garamond text-m text-center w-72">
                  Together by two families, we cordially request the honor of
                  your presence at the celebration of the wedding day
                </p>
              </FadeInSection>
            </div>
            <FadeInSection>
              <img
                src="/images/maroon-flower.png"
                alt="bunga-maroon"
                className="absolute top-[119px] right-5"
              />
            </FadeInSection>

            <div className="mt-20 flex flex-col justify-center items-center">
              <FadeInSection>
                <img
                  src="/images/wedding-ring.png"
                  alt="wedding-ring"
                  className=""
                />
              </FadeInSection>
              <FadeInSection>
                <img
                  src="/images/hm-1.png"
                  alt="holy-matrimony"
                  className="pt-3"
                />
              </FadeInSection>
            </div>

            <div className="flex flex-col items-center justify-center">
              <FadeInSection>
                <h1 className="mt-2 border border-maroon rounded-2xl px-3 text-lg tracking-widest font-garamond text-maroon font-semibold">
                  SATURDAY, 10 AUG 2024
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p className="pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold">
                  11:00 AM - 12:30 PM
                </p>
              </FadeInSection>
              <div className="flex flex-row items-center justify-center">
                <FadeInSection>
                  <p className="pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold w-72">
                    📍 Gereja Katolik St. Aloysius Gonzaga, Cijantung, Jakarta
                    Timur
                  </p>
                </FadeInSection>
              </div>
              <FadeInSection>
                <a
                  href="https://maps.app.goo.gl/8rRTnk49vFzJfZf26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 border border-maroon rounded-2xl px-10 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200"
                >
                  Google Maps
                </a>
              </FadeInSection>
              <FadeInSection>
                <img src="/images/nachos.png" alt="nachos" className="pt-8" />
              </FadeInSection>
            </div>
          </section>

          <section className="relative items-center justify-center min-h-screen md:bg-right-bg">
            <div className="flex flex-col items-center justify-center">
              <FadeInSection>
                <img
                  src="/images/icon-wedding-reception.png"
                  alt="icon-wedding-reception"
                  className=""
                />
              </FadeInSection>
              <FadeInSection>
                <img
                  src="/images/wedding-reception.png"
                  alt="icon-wedding-reception"
                  className="pt-3"
                />
              </FadeInSection>
            </div>

            <div className="flex flex-col items-center justify-center">
              <FadeInSection>
                <h1 className="mt-2 border border-maroon rounded-2xl px-3 text-lg tracking-widest font-garamond text-maroon font-semibold">
                  SATURDAY, 17 AUG 2024
                </h1>
              </FadeInSection>
              <FadeInSection>
                <p className="pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold">
                  10:00 PM - 13:00 PM
                </p>
              </FadeInSection>
              <div className="flex flex-row items-center justify-center">
                <FadeInSection>
                  <p className="pt-2 text-maroon font-garamond text-m text-center tracking-wide font-semibold w-72">
                    📍 Jl. Taman Sari Rindang no.1, Pengubengan Kangin,
                    Kerobokan Kelod, Kuta Utara, Bali
                  </p>
                </FadeInSection>
              </div>
              <FadeInSection>
                <a
                  href="https://maps.app.goo.gl/PB9XCfNtJdjng2Yv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mb-4 border border-maroon rounded-2xl px-10 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200"
                >
                  Google Maps
                </a>
              </FadeInSection>
            </div>
            <div className="bg-wedding-gift bg-cover flex flex-col items-center pb-40 md:bg-right-bg">
              <FadeInSection>
                <img
                  src="/images/wedding-gift.png"
                  alt="wedding-gift"
                  className="mt-36"
                />
              </FadeInSection>
              <FadeInSection>
                <p className=" text-maroon font-garamond text-m text-center w-60">
                  Your love is the greatest gift. Any contributions are
                  graciously accepted.
                </p>
              </FadeInSection>
              <FadeInSection>
                <div className="mt-10 px-8 py-6 text-maroon font-garamond text-center border border-maroon rounded-3xl">
                  <p className="font-bold tracking-widest">BANK BCA</p>
                  <p className="italic pt-2 text-xs">Account Number</p>
                  <p className="font-bold tracking-wider">6080092952</p>
                  <p className="italic pt-2 text-xs">Account Owner</p>
                  <p className="font-bold tracking-wider">Sarah Puspaherning</p>
                </div>
              </FadeInSection>
              <FadeInSection>
                <CopyButton textToCopy="6080092952" />
              </FadeInSection>
            </div>
          </section>

          <section className="relative items-center justify-center min-h-screen flex flex-col md:bg-right-bg">
            <div className="flex flex-row mt-8">
              <FadeInSection>
                <img src="/images/daun-kiri.png" alt="daun" className="" />
              </FadeInSection>
              <FadeInSection>
                <img src="/images/gallery.png" alt="gallery" className="pt-6" />
              </FadeInSection>
              <FadeInSection>
                <img src="/images/daun-kanan.png" alt="daun" className="" />
              </FadeInSection>
            </div>
            <FadeInSection>
              <img src="/images/collage.png" alt="collage" className="" />
            </FadeInSection>
            <FadeInSection>
              <img src="/images/verse.png" alt="wedding-gift" className="" />
            </FadeInSection>
            <FadeInSection>
              <img
                src="/images/footer.png"
                alt="footer"
                className="pt-2 pb-2"
              />
            </FadeInSection>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
