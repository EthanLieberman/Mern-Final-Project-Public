import React from 'react'

const Map = (props) => {

    const { address } = props
    // console.log(map.type)

    // Renders a map generated from a Google Maps API call centered on the winning restaurant's location
    return (
        <div>
            <iframe
                style={{ border: '0', height: '400px', width: '100%' }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/search?key={Private_key_here}&q=${address}`}>
            </iframe>
        </div>
    )
}

export default Map