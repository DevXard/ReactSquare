import { useState } from 'react'
import NewBoxForm from './newBoxForm';
import Box from './Box';
import {v4 as uuid} from 'uuid'

const BoxList = () => {
    const [data, setData] = useState(
        []
    )
        console.log(data)
    const addNewSquare = (square) => {
        setData(data => ([...data, {...square, id:uuid()}]))
    }
    
    const removeSquare = (id) => {
        setData(data => data.filter(squ => squ.id !== id))
        
    }
    return (
        <div>
            <NewBoxForm addNewSquare={addNewSquare} />
            {data.map( square => <Box removeSquare={removeSquare} id={square.id} key={square.id} color={square.color} width={square.width} height={square.height} />)}
        </div>
    )
}

export default BoxList;
