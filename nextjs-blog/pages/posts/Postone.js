import Head from 'next/head'
import Link from 'next/link'

export default function(){
    return (
    <>
    <Head>
<title>First post</title>
    </Head>
    <section>
    <h1>First post</h1>
    <article>
        <p>Ucimo da koristimo Next.js sa Reactom</p>
    </article>
    <div>
    <Link href="/">
        <a> Back to home</a>
       </Link>
    </div>
    </section>
    </>
    )
}