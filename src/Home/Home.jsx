import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";

const Home = () => {
    return (
        <div>
            The home page
            <h1>I changed this homepage</h1>
            <img src={treefrog} alt="tree frog" />
            <Form />
        </div>
    )
}

export default Home
