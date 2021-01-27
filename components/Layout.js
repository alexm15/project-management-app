import Head from 'next/head';
import {MainMenu} from './MainMenu';
import {TopArea} from './TopArea';

export const Layout = ({children}) => (
  <div>
    <Head>
      <title>Project Management App</title>
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous"
      />
    </Head>
    <main className="page">
        <MainMenu/>
        <section className="contentArea">
            <TopArea/>
            <section className="mainArea">
                {children}
            </section>
        </section>
    </main>
  </div>
);
