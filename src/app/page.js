import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 sm:px-8 md:px-10 xl:px-20">
      <main>

        {/* INTRO SECTION */}
        <section
          className="z-20 min-h-screen flex flex-col"
        >
          <div className="z-20 md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto">

            <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl sm:py-2 font-extrabold animated-text-color">
                Sheryl Azzam
              </h2>

              {/*<h3*/}
              {/*    className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold sm:py-2 text-gray-800 dark:text-white"*/}
              {/*>*/}
              {/*  AKA - MetallicGoat*/}
              {/*</h3>*/}

              <p className="text-md lg:text-xl xl:text-2xl text-gray-800 mx-auto max-w-md md:max-w-full md:pr-10 md:mx-0 dark:text-white">

                Sheryl Azzam (Née Edwards) lived and raised her family in Brantford, ON.
                A medical and scientific writer by profession, she completed her first novel
                shortly before her passing, aiming to help young readers recognize when those
                meant to love them don't always have their best interests at heart.
                Above all, she cherished her family—her husband, three sons, and their two beloved dogs.
                Her legacy of love, strength, and compassion continues to inspire all who knew her.
              </p>
            </div>

            <div
              className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-3/4 md:w-1/2"
            >
              <Image
                src="/portrait.jpg"
                alt="Sheryl Portrait"
                className="w-full rounded-3xl mx-auto shadow-xl shadow-gray-300 dark:shadow-gray-950 RGB:rgb-border"
                width={2780}
                height={2529}
                priority
              />
            </div>

            {/*<div*/}
            {/*    className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-3/4 md:w-1/3"*/}
            {/*>*/}

            {/*</div>*/}

            {/*<Socials className="md:hidden"/>*/}

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
      </main>
    </div>

    /*
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
            src/app/page.js
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  </div>
     */
  );
}
