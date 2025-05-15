import Image from "next/image";
import styles from './feed.module.scss';
import Photo1 from '../../../public/vela_natural.png';
import Photo2 from '../../../public/fragrancia.png';
import Photo3 from '../../../public/vaso.png';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';


export default function React() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Image
                        src={Photo1}
                        alt="Imagem mulher segurando vela natural MOOI"
                        layout="responsive"
                        quality={90}
                        priority={true}
                        placeholder="blur"
                    />
                    <p>As velas artesanais da MOOI transformam qualquer ambiente — design minimalista, fragrância envolvente e uma proposta 100% vegana.</p>
                    <div className={styles.actions}>
                        <button>
                            <FiHeart size={20} />
                        </button>
                        <button>
                            <FiMessageCircle size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src={Photo2}
                        alt="Imagem mulher segurando fragrância MOOI"
                        layout="responsive"
                        quality={90}
                        priority={true}
                        placeholder="blur"
                    />
                    <p>Perfume para a casa, alma leve. Os difusores da MOOI combinam estética e bem-estar em uma fragrância vegana que abraça o ambiente com suavidade.</p>
                    <div className={styles.actions}>
                        <button>
                            <FiHeart size={20} />
                        </button>
                        <button>
                            <FiMessageCircle size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src={Photo3}
                        alt="Imagem homem segurando vaso MOOI"
                        layout="responsive"
                        quality={90}
                        priority={true}
                        placeholder="blur"
                    />
                    <p>Menos é mais. Os vasos minimalistas da MOOI elevam a decoração com formas simples, tons terrosos e propósito sustentável.</p>
                    <div className={styles.actions}>
                        <button>
                            <FiHeart size={20} />
                        </button>
                        <button>
                            <FiMessageCircle size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}