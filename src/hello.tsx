import React from 'react'

export default function Hello() {
  return <div>
    <div>Hello, {name}</div>
    <input type='checkbox' checked onChange={() => undefined}/>
  </div>
};

