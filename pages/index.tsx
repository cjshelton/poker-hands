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
                    <p className={styles['home__intro']}>
                        All possible hands are listed below in descending order
                        of their rank, starting with the top hand -{' '}
                        <span className="bold">Royal Flush</span>.
                    </p>

                    <Hands />
                </main>

                <footer className={styles['home__footer']}>
                    <p>
                        Built by{' '}
                        <a href="https://cshelton.co.uk" className="developer">
                            Chris Shelton
                        </a>{' '}
                        <span>&copy; {new Date().getFullYear()}</span>
                    </p>
                    <p>
                        As part of the{' '}
                        <a href="https://www.netlify.com/blog/2021/12/01/dusty-domains-your-forgotten-domains-raise-money-for-charity/">
                            Netlify Dusty Domains
                        </a>{' '}
                        challenge
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
