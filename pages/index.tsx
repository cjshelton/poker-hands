import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import aces from '../public/images/aces.png';

const Home: NextPage = () => {
    return (
        <div className={styles['home']}>
            <Head>
                <title>Poker Hands</title>
                <meta
                    name="description"
                    content="A graphical representation of all valid Poker hands and their ranking"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles['home__inner']}>
                <header className={styles['home__header']}>
                    <div className={styles['home__aces-container']}>
                        <Image
                            src={aces}
                            alt="Four playing cards fanned out each one being an Ace of a suit"
                            layout="responsive"
                            placeholder="blur"
                        />
                    </div>
                    <h1 className={styles['home__title']}>Poker Hands</h1>
                </header>

                <main className={styles['home__content']}>
                    <h1>Body</h1>
                </main>

                <footer className={styles['home__footer']}>Footer</footer>
            </div>
        </div>
    );
};

export default Home;
