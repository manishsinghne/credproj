import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Student/addnew.css'
import axios from 'axios'
function Addnew() {
  const [values, setvalue] = useState({
    name: '',
    email: '',
    phone: ''

  })
  const[err,seterr]=useState()
  const Navigate = useNavigate();
  const handlesub = (e) => {
    e.preventDefault()
          // condition for blank form sub

    if(!values.name ||!values.email || !values.phone){
      seterr(' require to fill first')
      return
    }
    axios.post('http://localhost:3333/user', values)
      .then(res => {
        console.log(res)
        Navigate('/')
      })
      .catch(err => console.log('err'))

      

  }
  return (
    <div className='main'>
{err && <p className='err'>{err}</p>}
      <div className='container'>
        <div><h1>Add a user</h1>
        </div>
        <form onSubmit={handlesub}>
          <div className='alllist'>
            <div >
              <label>Name</label>
              <input type='text' name='name' className='wide-input' onChange={(e) => setvalue({ ...values, name: e.target.value })} />
            </div>
            <div>
              <label>Email</label>
              <input type='email' className='wide-input' onChange={(e) => setvalue({ ...values, email: e.target.value })} />
            </div>
            <div>
              <label>Phone</label>
              <input type='number' className='wide-input' onChange={(e) => setvalue({ ...values, phone: e.target.value })} />
            </div>
            <div className='li'> <button className='sub' >Submit</button><Link to='/' className='sub'>Back</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addnew
