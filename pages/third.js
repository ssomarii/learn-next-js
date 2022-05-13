import styles from "../styles/third.module.scss";
import Image from "next/image";
import Link from "next/link";
import Back from "../components/back";
import Image1 from "../public/be7f11c93b.jpg"
import Layout from "../components/Layout";
import Head from "next/head";

function Third() {
    return <div className={styles.content}>
        <Head>
            <title>Первая страница</title>
        </Head>
        <Layout />
        <Back />
        <div className={styles.content__title}>
            Страница с картинками
        </div>
        <div className={styles.content__list}>
            <Image src={Image1} alt="Bicycle" />
            <div className={styles.content__text}>
                Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text
            </div>
            <Image src="https://i.pinimg.com/originals/01/4e/c2/014ec2b55716e57a777f6fdaf1dd75f1.png" height={500} width={507} alt="Wow its picture" />
        </div>
    </div>
}

export default Third