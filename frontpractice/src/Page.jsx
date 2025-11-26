import React from 'react'

function Page(props) {

  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Class:{props.class}</h2>
    </div>
  )
}

export default Page;
