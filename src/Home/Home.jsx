import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";

const Home = () => {
    return (
        <div>
            The home page
            <img src={treefrog} alt="tree frog" />
            <Form />
        </div>
    )
}

export default Home
