"use client";

import {RowsPhotoAlbum} from "react-photo-album";
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import {Fullscreen, Slideshow, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {renderNextImage} from "@/app/components/nextjsimagerenderer";


const photos = [
  {
    src: "/artwork/bull.jpg",
    alt: "Bull",
    width: "1500",
    height: "1153",
  },
  {
    src: "/artwork/cat.jpg",
    alt: "Cat",
    width: "1161",
    height: "1500",
  },
  {
    src: "/artwork/dog.jpg",
    alt: "Dog",
    width: "1159",
    height: "1500",
  },
  {
    src: "/artwork/eyes-and-nose.jpg",
    alt: "Eyes and Nose",
    width: "1165",
    height: "1500",
  },
  {
    src: "/artwork/flying-bird.jpg",
    alt: "Flying Bird",
    width: "1159",
    height: "1500",
  },
  {
    src: "/artwork/fruit.jpg",
    alt: "Fruit",
    width: "1161",
    height: "1500",
  },
  {
    src: "/artwork/girl.jpg",
    alt: "Girl",
    width: "1163",
    height: "1500",
  },
  {
    src: "/artwork/lips-and-ears.jpg",
    alt: "Lips and Ears",
    width: "1165",
    height: "1500",
  },
  {
    src: "/artwork/moose.jpg",
    alt: "Moose",
    width: "1500",
    height: "1157",
  },
  {
    src: "/artwork/parrot.jpg",
    alt: "Parrot",
    width: "1155",
    height: "1500",
  },
  {
    src: "/artwork/shoe.jpg",
    alt: "Shoe",
    width: "1500",
    height: "1165",
  },
  {
    src: "/artwork/teapot.jpg",
    alt: "Teapot",
    width: "1500",
    height: "1163",
  },
  {
    src: "/artwork/tree.jpg",
    alt: "Tree",
    width: "1128",
    height: "1500",
  },
  {
    src: "/artwork/woman.jpg",
    alt: "Woman",
    width: "1161",
    height: "1500",
  },
]

export default function Artwork() {

  // For Lightbox
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="px-8 md:px-10 xl:px-20">
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