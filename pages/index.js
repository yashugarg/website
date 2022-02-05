import Head from "next/head";
import Header from "../components/header";
import Landing from "../components/landing";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Builtree</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="relative">
                <Landing />
            </main>
        </div>
    );
}