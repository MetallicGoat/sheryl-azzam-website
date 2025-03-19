import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="absolute min-h-screen w-full flex justify-center md:items-center -z-50">
        <Image
          src="/home/Cardinal.svg"
          alt="Cardinal Background"
          className="fixed opacity-40 md:left-0 pt-26 sm:pt-10 md:pt-0 w-4/5 md:w-3/5 h-auto"
          width={0}
          height={0}
          priority
        />
      </div>

      <main className="px-8 md:px-10 xl:px-20">

        {/* INTRO SECTION */}
        <section className="min-h-screen flex flex-col justify-center">
          <div className="md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto">

            <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl py-2 font-extrabold ">
                Sheryl Azzam
              </h2>

              <h3
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold py-2 text-gray-800"
              >
                In Loving Memory, 1976 - 2024
              </h3>

              <p
                className="sm:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:pr-10 md:mx-0 ">

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
              {/*shadow-gray-300 dark:shadow-gray-950*/}
              <Image
                src="/home/Sheryl_Portrait.jpg"
                alt="Sheryl Portrait"
                className="w-full rounded-3xl mx-auto shadow-xl"
                width={2780}
                height={2529}
                priority
              />
            </div>
          </div>
        </section>


        {/* RED FLAGS AND BUTTERFLIES */}
        <section>
          <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto">
            <div className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-9/10 sm:w-3/4 md:w-1/2 md:pr-20 ">
              <Image
                src="/home/RFB_Cover.jpg"
                alt="Red Flags and Butterfiles Cover Page"
                className="w-3/4 rounded-3xl mx-auto shadow-xl"
                width={1613}
                height={2400}
                priority
              />
            </div>

            <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">

              <h2 className="text-3xl sm:text-4xl xl:text-5xl py-2 font-extrabold ">
                Red Flags and Butterflies
              </h2>

              <h3
                className="text-md sm:text-lg lg:text-xl xl:text-2xl font-bold py-2 text-gray-800"
              >
                Coming Late 2025
              </h3>

              <p className="sm:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:mx-0 ">

                Sheryl started her work on Red Flags and Butterflies in 2019.
                A medical and scientific writer by profession, she completed her first novel
                shortly before her passing, aiming to help young readers recognize when those
                meant to love them do not always have their best interests at heart.
                Above all, she cherished her family—her husband, three sons, and their two beloved dogs.
                Her legacy of love, strength, and compassion continues to inspire all who knew her.
              </p>
            </div>
          </div>
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
