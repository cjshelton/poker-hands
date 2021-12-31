import Image from 'next/image';
import styles from './Hand.module.scss';
import spade from '../../public/images/spade.png';

export default function Hand({
    name,
    description,
    cards,
}: {
    name: string;
    description?: string;
    cards: { imgSrc: any; alt: string }[];
}) {
    return (
        <section className={styles['hand']}>
            <div className={styles['hand__title']}>
                <div className={styles['hand__icon-container']}>
                    <Image
                        src={spade}
                        layout="responsive"
                        alt="spade suit"
                        placeholder="blur"
                    />
                </div>
                <p className={styles['hand__name']}>{name}</p>
            </div>
            <p className={styles['hand__description']}>{description}</p>

            <div className={styles['hand__cards']}>
                {cards.map((card) => {
                    return (
                        <div className={styles['hand__card']} key={card.alt}>
                            <Image
                                src={card.imgSrc}
                                layout="responsive"
                                alt={card.alt}
                                placeholder="blur"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
