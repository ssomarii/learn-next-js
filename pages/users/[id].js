import Back from "../../components/back";
import Head from "next/head";

function UserInfo({users}) {
    return(
        <div>
            <Head>
                <title>Детальная юзера</title>
            </Head>
            <Back />
            <h1>{users.name}</h1>
            <div>{users.email}</div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
};

export default UserInfo