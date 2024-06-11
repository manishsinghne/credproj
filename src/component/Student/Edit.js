import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link,useParams ,useNavigate} from 'react-router-dom';
function Edit() {
  const {id}=useParams()
  const [state, setstate] = useState([]);
  const [errs, seterrs] = useState('')
  const [values, setvalue] = useState({
    name: '',
    email: '',
    phone: ''

  })

  const Navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3333/user/'+id)
      .then((res) => {
        setvalue(res.data)
      })
      .catch((err) => {
        seterrs(err.message)
      })

  }, [])
  const handleup = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3333/user/'+id, values)
      .then(res => {
        console.log(res)
        Navigate('/')
      })
      .catch(err => console.log('err'))

  }
  return (
    <div>
      edit
      <div className='main'>

<div className='container'>
  <div><h1>Add a user</h1>
  </div>
  <form onSubmit={handleup} >
    <div className='alllist'>
      <div >
        <label>Name</label>
        <input type='text' name='name' className='wide-input'value={values.name} onChange={e=>setvalue({...values,name:e.target.value})} />
      </div>
      <div>
        <label>Email</label>
        <input type='email' className='wide-input' value={values.email} onChange={e=>setvalue({...values,email:e.target.value})} />
      </div>
      <div>
        <label>Phone</label>
        <input type='number' className='wide-input' value={values.phone} onChange={e=>setvalue({...values,phone:e.target.value})}/>
      </div>
      <div className='li'> <button className='sub'>update</button><Link to='/' className='sub'>Back</Link></div>
    </div>
  </form>
</div>
</div>
    </div>
  )
}

export default Edit
