"use client";

import {RowsPhotoAlbum} from "react-photo-album";
import {useState} from "react";
import photos from "./photos";
import Lightbox from "yet-another-react-lightbox";
import {Fullscreen, Slideshow, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {renderNextImage} from "@/app/components/nextjsimagerenderer";


export default function Page() {

  // For Lightbox
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <section className="text-center pt-24 sm:pt-20">
        <h1 className="text-4xl">Gallery</h1>
        <p>Family favorite photos</p>
      </section>

      <div className="px-8 md:px-10 xl:px-20 pt-10">
        <RowsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          targetRowHeight={300}
          padding={0}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}

        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

    </div>
  )
}