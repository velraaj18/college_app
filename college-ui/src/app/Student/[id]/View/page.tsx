import React from 'react'

const ViewStudent = async ({params} : {params : Promise<{id : string}>}) => {
    const {id} = await params;
    console.log(id)
return (
    <div>{id}</div>

  )
}

export default ViewStudent