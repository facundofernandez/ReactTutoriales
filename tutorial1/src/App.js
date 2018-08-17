
import React from 'react';


const HeadLine = () =>{
    return <h1 className="title">Hola Mundo</h1>
}

const Greeting = (props) =>{
    const { name, age } = props;
    return <p>Test de react {name} ({age}) </p>  
}

export const App = () =>{
    return (
        <div>
            <HeadLine />
            <Greeting name="Facundo" age={25} />
        </div>
    )
}


Greeting.propTypes = {
    name: React.propTypes.string,
    age: React.propTypes.number
}