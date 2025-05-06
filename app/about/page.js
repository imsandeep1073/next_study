import React from 'react'


async function takeTime() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
   
}

const page = async () => {
    await takeTime()
    // throw new Error('This is a custom error')
    return (
        <div>THis is a about page</div>
    )
}

export default page