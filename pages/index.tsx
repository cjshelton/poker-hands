import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

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

            <header className={styles['home__header']}>
                <h1>Poker Hands</h1>
            </header>

            <main className={styles['home__content']}>
                <h1>Body</h1>
            </main>

            <footer className={styles['home__footer']}>Footer</footer>
        </div>
    );
};

export default Home;
