import React from 'react'
import { Link } from 'react-router-dom'
import { CreateForm } from '../Monkey/CreateForm'

export default function Home() {
  return (
    <>
    <h1>skibidi</h1>

    <Link to={"/create-monkey"}>
    <p>add new monkey</p>
    </Link>
    
    <Link to={"/view-all"}>
    <p>monkeys</p>
    </Link>
    </>
  )
}
