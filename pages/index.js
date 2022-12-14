import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>divers univers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<Link href="/">
						<a>diversunivers.com</a>
					</Link>
				</h1>

				{/* <p className={styles.description}>
					Get started by editing
					<code className={styles.code}>pages/index.js</code>
				</p> */}

				{/* <div className="xxx">
					<h1 className="title">
						<Link href="/posts/first-post">
							<a>first post</a>
						</Link>
					</h1>
					<h1 className="title">
						<Link href="/api">
							<a>api</a>
						</Link>
					</h1>
				</div> */}

				<div className={styles.grid}>
					<a href="/posts/first-post" className={styles.card}>
						<h3>First post &rarr;</h3>
						<p>Made in javascript</p>
					</a>

					<a href="/api" className={styles.card}>
						<h3>API &rarr;</h3>
						<p>divers univers API</p>
					</a>

					<a href="https://nextjs.org/docs" className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by
					<Image layout="fixed" width="71px" height="16px" src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
					{/* if github pages, need to add "diversunivers" before /vervel.svg */}
				</a>
			</footer>
		</div>
	);
}
