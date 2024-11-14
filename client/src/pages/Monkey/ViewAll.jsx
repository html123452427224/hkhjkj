import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllMonkeys } from '../../models/monkeys'
export  function ViewAll() {

  const [monkeys, setMonkeys] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllMonkeys();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setMonkeys(res.payload)
      setLoaded(true)
    }
  }

  useEffect(() => {
    load();
  }, []);


  if (isLoaded === null) {
    return (
      <>
      <p>monkeys not exist</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
      <p>loading monkeys</p>
      </>
    )
  }
  return (
    <div>
      <h1>view all monkeys</h1>
    </div>
  )
}
