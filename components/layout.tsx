import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import Navbar from "../components/navbar";

const name = "Ivana Jovic";
export const siteTitle = "Ivana Jovic - personal website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="relative min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ivana Jovic - personal website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <div className="mx-0 mb-10"> */}
      <Navbar />
      {/* </div> */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.heading2Xl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="mx-12 grid place-content-center">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blogs">
            <a>??? Back to blogs page</a>
          </Link>
        </div>
      )}
      <footer className="absolute bottom-0 w-full bg-[#eb937a] text-center">
        <div>Ivana Jovic 2022.</div>
      </footer>
    </div>
  );
}
