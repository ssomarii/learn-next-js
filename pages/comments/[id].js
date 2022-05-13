import {useRouter} from "next/router";


export default function CommentId() {
    const router = useRouter();
    const {id} = router.query;
}
