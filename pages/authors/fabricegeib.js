import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>Author : Fabrice Geib - divers univers</title>
            </Head>
            <h1>Author : Fabrice Geib</h1>

            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}