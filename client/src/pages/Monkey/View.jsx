import { Link, useParams, useNavigate } from "react-router-dom"
import { getMonkeyById, deleteMonkey } from "../../models/monkeys"
import { useState, useEffect } from "react"


export function View() {
  const { id } = useParams();
  const [monkey, setMonkey] = useState()
  const [isLoaded, setLoaded] = useState(false)
  const [info, setInfo] = useState()
  const [formData, setFormData] = useState()
  const navigate = useNavigate()


  const load = async () => {
    const data = await getMonkeyById(id)
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setMonkey(data.payload)
      setLoaded(true)
    }

  }

  useEffect(() => {
    load()
  }, [])

  const handleInput = (e) => {
    setFormData(e.target.value)
  }

  const handleButton = async (e) => {
    e.preventDefault()
    if (monkey.name === formData) {
      const data = await deleteMonkey(id);
      if (data.status === 200) return navigate("/")
      return setInfo(data.message)
    }
    setInfo("wrong input")
  }

  if (isLoaded === null) {
    return (
      <>
        <p>no monkey</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>monkey loading</p>
      </>
    )
  }


  return (
    <>
      <h1>view monkey</h1>

      <p>{id}</p>

      <p>{monkey.name}</p>
      <p>{monkey.race}</p>
      <p>{monkey.gender}</p>
      <form>
        <input type="text" placeholder="Enter monkey name to delete" onChange={handleInput} />
        <button onClick={handleButton}>delete monkey</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-monkey/${id}`}>
      <button>update monkey</button>
      </Link>
      <Link to={"/"}>
        <p>go back home</p>
      </Link>
    </>
  )
}
