import React from 'react'

function Content() {

    let cities = ['Istanbul', 'Havana', 'Tahran', 'Paris', 'Baku']

    return (
        <>
            {
                cities.map((item, key) => (<li>{item}</li>))
            }
        </>
    )
}

export default Content
