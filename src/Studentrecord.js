import React, { useState, useEffect } from 'react'

function Studentrecord() {
    const [data, setdata] = useState([])
    const [err, seterr] = useState()
    const [load, setload] = useState(true)
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:3333/studentdetail')

                const jsondata = await response.json()
                setdata(jsondata)

            }
            catch (error) {
                seterr(error, 'its error')
            }
            finally {
                setload(false)
            }
        }
        fetchdata()

    }, [])
    if (err) return <p>this is an json error </p>
    if (load) return <p>this is ....loadding.......</p>
    return (
        <div>
            <ul>
                {data.map((e, i) => (
                    <li key={i}>
                        <p>{e.studentName}</p>
                        <p >{e.studentemail}</p>
                        <p>{e.id}</p>

                    </li>
                ))}
            </ul>
            {err}
        </div>
    )
}

export default Studentrecord
