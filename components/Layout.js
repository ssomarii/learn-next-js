import MainTitle from "./MainTitle";
import Head from "next/head";

function Layout({children}) {
    return <>
        <Head>
            <meta name="description" content="Это глобальный дескрипшен, который оторбажается на всех страницах" />
        </Head>
        <MainTitle />
        {children}
    </>
}

export default Layout;