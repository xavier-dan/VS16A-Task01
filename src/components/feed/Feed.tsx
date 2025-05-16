'use client';

import { usePexels } from "@/app/hooks/useImages";
import Galeria from "../galeria/Galeria";

const Feed = () => {
  const { photos, loading, error } = usePexels("aromatic-candle", 12);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <Galeria
      images={photos}
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non harum ea totam corporis impedit animi qui dicta debitis natus. Aliquid ratione nostrum vero nobis praesentium? Nisi perspiciatis vitae aut!"
    />
  );
};

export default Feed;
