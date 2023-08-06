import { useRouter } from "next/router"

export default function Note({getNote}){
    const router = useRouter()
    const {id} = router.query
    const {title,body} = getNote({id})
    return (
        <div>
            <h1>Note: {id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}