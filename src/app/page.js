import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fixed min-h-screen w-full flex justify-center md:items-center">
        <Image
          src="/cardinal.svg"
          alt="Cardinal Background"
          className="absolute invert-25 md:left-0 pt-32 md:pt-0 w-4/5 md:w-3/5 h-auto"
          width={0}
          height={0}
          priority
        />
      </div>

      <main className="px-8 md:px-10 xl:px-20">

        {/* INTRO SECTION */}
        <section className="z-20 min-h-screen flex flex-col justify-center">
          <div className="z-20 md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto">

            <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl py-2 font-extrabold animated-text-color">
                Sheryl Azzam
              </h2>

              <h3
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold py-2 text-gray-800 dark:text-white"
              >
                In Loving Memory, 1976 - 2024
              </h3>

              <p className="sm:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:pr-10 md:mx-0 dark:text-white">

                Sheryl Azzam (Née Edwards) lived and raised her family in Brantford, ON.
                A medical and scientific writer by profession, she completed her first novel
                shortly before her passing, aiming to help young readers recognize when those
                meant to love them do not always have their best interests at heart.
                Above all, she cherished her family—her husband, three sons, and their two beloved dogs.
                Her legacy of love, strength, and compassion continues to inspire all who knew her.
              </p>
            </div>

            <div
              className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-9/10 sm:w-3/4 md:w-1/2"
            >
              <Image
                src="/portrait.jpg"
                alt="Sheryl Portrait"
                className="w-full rounded-3xl mx-auto shadow-xl shadow-gray-300 dark:shadow-gray-950"
                width={2780}
                height={2529}
                priority
              />
            </div>


            {/*/!* Scroll Arrow *!/*/}
            {/*<div*/}
            {/*    className="pt-2 mx-auto md:absolute md:bottom-5 md:right-0 md:left-1/2 md:transform md:-translate-x-1/2"*/}
            {/*>*/}
            {/*  <BsChevronDoubleDown*/}
            {/*      className="mx-auto animate-bounce text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-400"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>

        </section>

        <section>
          <h1>TEST</h1>
          {/*<Test text="test"></Test>*/}
        </section>
      </main>
    </div>
  );
}

// function Test(text) {
//   return (
//     <h1>{text}</h1>
//   )
// }
