import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createMonkey } from '../../models/monkeys'


export  function CreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();


  const sendData = async () => {
    const res = await createMonkey(formData);
    if (res.status === 201) return navigate(`/created-monkey/${res.payload._id}`);
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
        <input type="text" name="race" placeholder="Enter race" required onChange={handleInput}/>
        <input type="text" name="gender" placeholder="Enter gender" required onChange={handleInput}/>
        <button onClick={handleButton}>
        Add new monkey
      </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
      <p>go back</p>
      </Link>
    </div>
  )
}
