import styles from "../styles/first.module.scss";
import Link from "next/link";
import Head from "next/head";
import Back from "../components/back";
import MainTitle from "../components/MainTitle";
import Layout from "../components/Layout";

function First({users}) {
    return <div className={styles.content}>
        <Head>
            <title>Первая страница</title>
        </Head>
        <Layout />
        <Back />
        <MainTitle text="Страница с данными, полученными с getStaticProps и getServerSideProps" />
        <div className={styles.content__list}>
            <div className={styles.content__listItem}>
                {
                    users.map((user) => (
                        <span key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </span>
                    ))
                }
            </div>
            <div className={styles.content__listItem}>
                {users.map((user) => (<span key={user.id}>{user.username}</span>))}
            </div>
            <div className={styles.content__listItem}>
                {users.map((user) => (<span key={user.id}>{user.address.street}</span>))}
            </div>
        </div>
    </div>
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await res.json();
    return {
        props: {
            users,
        }
    }
}

export default First
