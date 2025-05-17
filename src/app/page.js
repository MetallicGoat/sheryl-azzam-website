import Image from "next/image";
import Cardinal from "@/app/cardinal";

export default function Home() {
  return (
    <div>
      <Cardinal/>

      <main className="px-8 md:px-10 xl:px-20">

        {/* INTRO SECTION */}
        <section className="min-h-screen flex flex-col justify-center">
          <div className="md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto">

            <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl py-2 font-extrabold ">
                Sheryl Azzam
              </h2>

              <h3
                className="text-xl lg:text-2xl xl:text-3xl font-bold py-2 text-gray-800"
              >
                In Loving Memory, 1976 - 2024
              </h3>

              <p
                className="text-md sm:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:pr-10 md:mx-0 ">

                Sheryl Azzam (Née Edwards) lived and raised her family in Brantford, ON.
                A medical and scientific writer by profession, she completed her first novel
                shortly before her passing, aiming to help young readers recognize when those
                meant to love them do not always have their best interests at heart.
                Above all, she cherished her family—her husband, three sons, and their two beloved dogs.
                Her legacy of love, strength, and compassion continues to inspire all who knew her.
              </p>
            </div>

            <div
              className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-9/10 sm:w-3/5 md:w-1/2"
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
                className="w-4/5 xl:w-3/4 rounded-3xl mx-auto shadow-xl"
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
                className="text-xl lg:text-2xl xl:text-3xl font-bold py-2 text-gray-800"
              >
                Coming Late 2025
              </h3>

              <p className="text-md sm:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:mx-0 ">
                Sheryl started her work on Red Flags and Butterflies in 2019. The story follows a
                teenage girl, Lexie. Throughout the story, Lexie slowly comes to the realization
                that not all the people around she she loves have her best interests in mind. Sheryl hoped
                that one day this book would help young girls in a similar situations to Lexie&#39;s understand
                what abuse is, and what forms it can take.
              </p>

              <div className="pt-15 hidden md:flex justify-center items-center">
                {/*MAKE SURE TO UPDATE OTHER BUTTON*/}
                <a target="_blank" href="https://redflagsandbutterflies.com" className="text-lg lg:text-2xl p-2 lg:p-4 font-bold bg-gradient-to-b from-red-600/50 to-red-700/60 hover:from-red-600/60 hover:to-red-700/70 transition duration-100 rounded-2xl">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 flex justify-center items-center md:hidden">
            {/*MAKE SURE TO UPDATE OTHER BUTTON*/}
            <a target="_blank" href="https://redflagsandbutterflies.com" className="text-lg p-2 font-bold bg-gradient-to-br from-red-600/50 to-red-700/50 hover:from-red-600/60 hover:to-red-700/60 transition duration-100 rounded-2xl">
              Learn More
            </a>
          </div>
        </section>

        {/* QUOTE */}
        <section>
          <div className="py-40 md:px-10">
            <q className="text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-birthstone">
              Take pleasure in the ordinary. Enjoy your morning coffee,
              the fresh air, the fall colors, the quiet coziness of home,
              the days.... all the little things that make life great.
            </q>

            {/*Font size one size bigger than above*/}
            <p className="pt-6 text-5xl xs:text-6xl sm:text-7xl xl:text-8xl font-birthstone text-right">- Sheryl Azzam</p>
          </div>
        </section>
      </main>
    </div>
  );
}
