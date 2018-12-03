import React, { useState } from 'react'
import { Repos } from './GitQuery'

function Repositories(){
    const [username, setName] = useState('olivierjm')

    function handleNameChange({target:{ value }}){
        setName(value)
    }
    return(
        <div>
            <input value={username} type='text' onChange={handleNameChange} />
            <Repos login={username}/>
        </div>
    )
}

export default Repositories