import { Link } from "react-router-dom"

export default function ListLinkF1(props) {
  return (
   <>
   
   <Link to={`/view-driver/${props._id}`}>
   <p>{props.name}</p>
   </Link>
   
   </>
  )
}
 