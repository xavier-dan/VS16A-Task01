'use client';

import Image from "next/image";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import styles from './galeria.module.scss';
import { Photo } from "@/app/hooks/useImages";

interface GaleriaProps {
  images: Photo[];
  description?: string;
}

const Galeria = ({ images, description }: GaleriaProps) => {
  return (
    <div className={styles.container}>
      {images.map((photo) => (
        <div key={photo.id}>
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={500}
            height={250}
            style={{ objectFit: 'cover', width: '100%', height: '250px' }}
            quality={90}
          />
          <p>{description ?? "Imagem da galeria"}</p>
          <div className={styles.actions}>
            <button>
              <FiHeart size={20} />
            </button>
            <button>
              <FiMessageCircle size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galeria;
