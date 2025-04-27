// Custom Image Render
// See https://react-photo-album.com/examples/nextjs

import Image from "next/image"

export function renderNextImage(
  { alt = "", title, sizes },
  { photo, width, height })
{
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        className="rounded-lg shadow-xl"
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}