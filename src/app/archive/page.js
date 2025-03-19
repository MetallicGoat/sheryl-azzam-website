import Image from "next/image";

const writingFiles = [
  {
    title: 'Document 1',
    description: 'This is a sample document',
    date: '2025-03-10',
    downloadUrl: '/files/document1.pdf',
  },
  {
    title: 'Document 2',
    description: 'This is a sample document',
    date: '2025-01-15',
    downloadUrl: '/files/document2.pdf',
  },
  {
    title: 'Document 3',
    description: 'This is a sample document',
    date: '2025-03-01',
    downloadUrl: '/files/document3.pdf',
  },
];

export default function Page() {
  return (
    <div>
      <section className="text-center pt-20">
        <h1 className="text-4xl">Archive</h1>
        <p>This page contains a collection of works, art, and recipes created by Sheryl Azzam</p>
      </section>

      {/* Writing Section */}
      <section className="mx-5 sm:mx-10 md:mx-20 mt-10">
        <h1 className="text-3xl">Writing</h1>
        <p className="pb-5">Along with <a href="">Red Flags and Butterflies</a>, Sheryl had many other creative
        writing pieces. Unfortunately many did not get published, but they live on here instead</p>
        <ArchiveTable files={writingFiles}/>
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
