import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import aces from '../public/images/aces.png';
import Hands from '../components/hands/hands';

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
                    <p className={styles['home__intro']}>
                        There are <span className="bold">10</span> possible
                        hands you can create in Poker, with each one being
                        ranked differently compared to the others.
                    </p>
                    <p className={styles['home__intro']}>
                        If you are new to playing Poker, it is important that
                        you understand what these possible hands are and which
                        ones are better than others. Use this guide to help you
                        get familiar.
                    </p>

                    <Hands />
                </main>

                <footer className={styles['home__footer']}>Footer</footer>
            </div>
        </div>
    );
};

export default Home;
