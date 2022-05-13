import styles from "../styles/second.module.scss";
import Link from "next/link";
import Back from "../components/back";
import Layout from "../components/Layout";
import Head from "next/head";

function Second() {
    return <div className={styles.content}>
        <Head>
            <title>Первая страница</title>
        </Head>
        <Layout />
        <Back />
        <div className={styles.content__title}>
            Страница с комментариями
        </div>
        <div className={styles.content__list}>

        </div>
    </div>
}

export default Second