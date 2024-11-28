import { useParams,Link } from "react-router-dom"

export function CreatedDriver() {

    const {id} = useParams();
    return (
        <>

<h1>New driver was created: {id}</h1>
<Link to={`/view-driver/${id}`}>
<p>view driver</p>
</Link>
<Link to={"/"}>
<p>return to homepage</p>
</Link>
        </>
    )
}