import { useMemo, useRef, useState } from "react";
import "./styles.css";
import ChevronIcon from "../Icons/ChevronIcon";

import TapeImage from "../../assets/tape.png";

type Props = {
  photos: string[];
};

function PhotoFrame({ photos }: Props) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const rotateAmount = useMemo(() => {
    return Math.floor(Math.random() * 8 - 4);
  }, []);

  const photosAmount = photos.length;

  const currentPhotoUrl = photos[currentPhoto];

  function fadeIn() {
    if (!imageRef.current) return;
    imageRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
    });
  }

  function nextPhoto() {
    fadeIn();
    if (currentPhoto === photosAmount - 1) {
      return setCurrentPhoto(0);
    }
    setCurrentPhoto(currentPhoto + 1);
  }

  function previousPhoto() {
    fadeIn();
    if (currentPhoto === 0) {
      return setCurrentPhoto(photosAmount - 1);
    }
    setCurrentPhoto(currentPhoto - 1);
  }

  return (
    <div
      className="photo-frame"
      style={{
        transform: `rotate(${rotateAmount}deg)`,
      }}
    >
      <div className="photo-frame__photo">
        <img src={currentPhotoUrl} ref={imageRef} alt="" className="photo" />
        <img
          src={TapeImage}
          className="photo__tape"
          alt="Fita em cima da imagem"
        />
      </div>
      <div className="photo-frame__controls">
        <button onClick={previousPhoto}>
          <ChevronIcon variant="left" />
        </button>
        <button onClick={nextPhoto}>
          <ChevronIcon variant="right" />
        </button>
      </div>
    </div>
  );
}

export default PhotoFrame;
