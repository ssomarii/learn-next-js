import styles from "../styles/back.module.scss";
import Link from "next/link";

function Back() {
    return(
        <div className={styles.back}>
            <Link href="/first">
                <a>Назад</a>
            </Link>
        </div>
    )
}

export default Back

//Не знаю, нужно ли как-то по-другому прописать ссылку. Возможно есть способ без указания прямого направления - /first.
//А какая-то общая логика, что "Назад" - это назад, а не по определённой ссылке?