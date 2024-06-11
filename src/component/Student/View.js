import React,{ useState,useEffect} from 'react'
import '../Student/view.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
function View() {
  const [state1, setstate] = useState([]);
  const [errs, seterrs] = useState('')

const {id} =useParams();
  useEffect(() => {
    axios.get('http://localhost:3333/user/' + id)
      .then((res) => {
        setstate(res.data)
      })
      .catch((err) => {
        seterrs(err.message)
      })

  },[])
  return (
    <div className='main'>
      {errs ? (<p>this is {errs}</p>):(
      // {errs}
      <div className='container'>
        <h1>detail of user</h1>
        <p>Name:{state1.name}</p>
        <p>email:{state1.email}</p>
        <p>email:{state1.phone}</p>
      </div>
       )}
       <div className='btn'>
      <Link to={`/edit/${id}`}className='edit' >edit</Link>
      <Link to='/'className='back' >back</Link>
      </div>
    </div>
  )
}

export default View
