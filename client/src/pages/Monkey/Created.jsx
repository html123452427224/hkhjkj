import { useParams,Link } from "react-router-dom"

export function Created() {

    const {id} = useParams();
    return (
        <>

<h1>New monkey was created: {id}</h1>
<Link to={`/view-monkey/${id}`}>
<p>view monkey</p>
</Link>
<Link to={"/"}>
<p>return to homepage</p>
</Link>
        </>
    )
}