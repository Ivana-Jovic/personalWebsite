import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Ivana and I make websites.</p>
        <div className="mt-10 flex items-center justify-center">
          <p>
            <Link href="">
              <a>My CV</a>
            </Link>
          </p>
          <p className="mx-4">•</p>
          <p>
            <Link href="">
              <a>Linkedin</a>
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
