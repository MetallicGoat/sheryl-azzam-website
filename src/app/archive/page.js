const writingFiles = [
  {
    title: 'Bees Story',
    description: 'Educational story about Honey Bees',
    date: '2020-01-01',
    downloadUrl: '/files/document.pdf',
  },
  {
    title: 'Spiders Story',
    description: 'Educational story about Spiders',
    date: '2020-01-01',
    downloadUrl: '/files/document.pdf',
  },
  {
    title: 'Creative Writings',
    description: 'More Creative Writings',
    date: '2020-01-01',
    downloadUrl: '/files/document.pdf',
  },
];

export default function Page() {
  return (
    <div>
      <section className="text-center pt-20">
        <h1 className="text-4xl">Archive</h1>
        <p>This page contains a collection of works, art, and recipes created by Sheryl Azzam</p>
      </section>

      <h1 className="text-2xl bg-yellow-300/50 text-center py-5 my-8 font-bold">This page is still under construction!</h1>

      {/* Writing Section */}
      <section className="mx-5 sm:mx-10 md:mx-20 mt-10">
        <h1 className="text-3xl">Writing</h1>

        <p className="pb-5">Along with <a href="https://www.redflagsandbutterflies.com">Red Flags and Butterflies</a>,
          Sheryl had many other creative writing pieces. Unfortunately
          many did not get published, but they live on here instead
        </p>

        <ArchiveTable files={writingFiles}/>
      </section>

      {/* Artwork Section */}
      <section className="mx-5 sm:mx-10 md:mx-20 mt-20">
        <h1 className="text-3xl">Artwork</h1>

        <p className="pb-5"> Here is a collection of Artwork Sheryl created when young. </p>

        <h1 className="font-bold text-center text-xl"> TODO: Create gallery similar to Gallery Tab. </h1>
      </section>


      {/* Recipes */}
      <section className="mx-5 sm:mx-10 md:mx-20 mt-20">
        <h1 className="text-3xl">Recipes </h1>

        <p className="pb-5"> Here is a collection of Artwork Sheryl created when young. </p>

        <h1 className="font-bold text-center text-xl"> TODO: Possibly add photos of hand written recipes</h1>
      </section>
    </div>
  )
}

const ArchiveTable = ({files}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full shadow-md rounded-lg">
        <thead>
        <tr className="border-b">
          <th className="py-3 px-6 text-left">Title</th>
          <th className="py-3 px-6 text-left">Description</th>
          <th className="py-3 px-6 text-left">Date</th>
          <th className="py-3 px-6 text-left">Download</th>
        </tr>
        </thead>
        <tbody>
        {files.map((file, index) => (
          <tr key={index} className="border-b transition">
            <td className="py-3 px-6">{file.title}</td>
            <td className="py-3 px-6">{file.description}</td>
            <td className="py-3 px-6">{file.date}</td>
            <td className="py-3 px-6">
              <a
                href={file.downloadUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 px-4 py-2 rounded-md hover:bg-red-600 transition inline-block"
              >
                Download
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
