import { Link, useParams, useNavigate } from "react-router-dom"
import { getF1driverById, deleteF1driver } from "../../models/f1drivers"
import { useState, useEffect } from "react"


export function ViewF1() {
  const { id } = useParams();
  const [driver, setDriver] = useState()
  const [isLoaded, setLoaded] = useState(false)
  const [info, setInfo] = useState()
  const [formData, setFormData] = useState()
  const navigate = useNavigate()


  const load = async () => {
    const data = await getF1driverById(id)
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setDriver(data.payload)
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
    if (driver.name === formData) {
      const data = await deleteF1driver(id);
      if (data.status === 200) return navigate("/")
      return setInfo(data.message)
    }
    setInfo("wrong input")
  }

  if (isLoaded === null) {
    return (
      <>
        <p>no driver</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>driver loading</p>
      </>
    )
  }


  return (
    <>
      <h1>view driver</h1>

      <p>{id}</p>

      <p>{driver.name}</p>
      <p>{driver.age}</p>
      <p>{driver.wins}</p>
      <p>{driver.Championship}</p>
      <form>
        <input type="text" placeholder="Enter driver name to delete" onChange={handleInput} />
        <button onClick={handleButton}>delete driver</button>
        <p>{info}</p>
      </form>
      <Link to={`/update-driver/${id}`}>
      <button>update driver</button>
      </Link>
      <Link to={"/"}>
        <p>go back home</p>
      </Link>
    </>
  )
}
