import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllDrivers } from '../../models/f1drivers'
import ListLinkF1 from './ListLinkF1'
export  function ViewAll() {

  const [drivers, setDrivers] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const res = await getAllDrivers();
    if (res.status === 500 || res.status === 404) return setLoaded(null);
    if (res.status === 200) {
      setDrivers(res.payload)
      setLoaded(true)
    }
  }

  useEffect(() => {
    load();
  }, []);


  if (isLoaded === null) {
    return (
      <>
      <p>drivers not exist</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
      <p>loading drivers</p>
      </>
    )
  }
  return (
    <div>
      <h1>view all drivers</h1>
      {

        drivers.map((driver, index) => (
          <ListLinkF1 key={index}  {...driver}/>
        ))
      }
<Link to={"/"}>
<button>home</button>
</Link>


    </div>
  )
}
