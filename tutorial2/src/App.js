
import React from 'react';

const image = '/tutorial2/src/icon.png'


export class App extends React.Component{

    constructor(props){
        
        super(props);

        this.state={
            buyItems: ['milk','pan','coca']
        }
    }

    render(){
        const {buyItems} = this.state;
        return (
            <div>
                <header>
                    <img src={image}/>
                    <h1>Shopping List</h1>  
                </header>
                <div className="content"> 
                    
                    {
                        buyItems.map(item =>{
                            return <p key={item}>{item}</p>
                        })
                    }
                </div>
            </div> 
        )
    }
}