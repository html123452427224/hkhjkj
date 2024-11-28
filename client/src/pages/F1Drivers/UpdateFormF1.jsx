import React from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { updateF1driver, getF1driverById } from '../../models/f1drivers'


export  function UpdateFormF1() {
  const { id } = useParams();
  const [driver, setDriver] = useState()
  const [isLoaded, setLoaded] = useState(false)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

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


  const sendData = async () => {
    const res = await updateF1driver(id, formData);
    if (res.status === 200) return navigate(`/view-driver/${res.payload._id}`);
    setInfo(res.message);
  }


  const handleInput = (e) => {
    
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleButton = (e) => {
    e.preventDefault();
    sendData();
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
    <div>
      <h1>update driver</h1>
      <form action="">
        <input type="text" name="name" placeholder="Enter name" required onChange={handleInput} defaultValue = {driver.name}/>
        <input type="text" name="age" placeholder="Enter age" required onChange={handleInput} defaultValue = {driver.race}/>
        <input type="text" name="wins" placeholder="Enter wins" required onChange={handleInput} defaultValue={driver.gender}/>
        <input type='text' name="Championships" placeholder='Enter championships' required onChange={handleInput} defaultValue={driver.Championship}/>
        <button onClick={handleButton}>
        update driver
      </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>go back</p>
      </Link>
    </div>
  )
}
