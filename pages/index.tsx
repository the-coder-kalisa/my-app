import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from "axios"
const Home: NextPage = () => {
  const [resp, setResp] = useState("kalisa");
  useEffect(() =>{
    const getData = async() =>{
    const response = await(await axios.get('/api/hello')).data;
    setResp(response);
    }
    getData()
  },[])
  return (
    <div className="bg-red-500">
      <h1 className="text-4xl font-bold text-[blue]">Hello World</h1>
      <div>{resp}</div>
    </div>
  )
}

export default Home
