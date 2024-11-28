import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CreateF1driver } from '../../models/f1drivers'


export  function CreateF1driverForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();


  const sendData = async () => {
    const res = await CreateF1driver(formData);
    if (res.status === 201) return navigate(`/created-driver/${res.payload._id}`);
    setInfo(res.message);
  }


  const handleInput = (e) => {
    
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  }

  return (
    <div>
      <h1>create monkey</h1>
      <form action="">
        <input type="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
        <input type="text" name="age" placeholder="Enter age" required onChange={handleInput}/>
        <input type="text" name="wins" placeholder="Enter wins" required onChange={handleInput}/>
        <input type="text" name="championship" placeholder="enter championship" required onChange={handleInput}/>
        <button onClick={handleButton}>
        add new f1 driver
      </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>go back</p>
      </Link>
    </div>
  )
}
