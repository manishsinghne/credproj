import React, { useState, useEffect } from 'react'
import '../Student/list.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Home2() {
  const [state, setstate] = useState([]);
  const [errs, seterrs] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3333/user')
      .then((res) => {
        setstate(res.data)
      })
      .catch((err) => {
        seterrs(err.message)
      })

  }, [])
  const handledel=(id)=>{
    axios.delete(`http://localhost:3333/user/${id}`)
    .then(()=>setstate(state.filter((e)=>e.id != id))
  )
  .catch((err)=>seterrs('its err'))
  }
  return (
    <div>
      {errs&&<p>{errs}</p>}
      <div className='data'>
      <div className='hh'>
        <h2 >List of User</h2>
      </div>
      <div className='add'>
        <Link to='/Addnew'>add++
        </Link>
      </div>
        <table >
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th >action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((e, i) => (

              <tr key={i}>
                {/* <td>{e.id}</td> */}
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>
                <Link to={`/view/${e.id}`} className='read'>Read</Link>
                <Link to={`/edit/${e.id}`} className='edit'>Edit</Link> 
                 <button onClick={()=>handledel(e.id)} className='delete'> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home2
