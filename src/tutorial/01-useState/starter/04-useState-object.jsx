import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(23)
  const [hobby, setHobby] = useState('reading book ')

const displayPerson = () =>{
  setName('john')
  setAge (33)
  setHobby('playing game')
}

  return <div>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3> Enjoys with :{hobby}</h3>
    <button className='btn' onClick={displayPerson}> show me</button>
  </div>

};

export default UseStateObject;
