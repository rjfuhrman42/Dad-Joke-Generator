import React, {Component} from "react"

class Jokes extends Component
{
    constructor()
    {
        super()
        this.state = {
            currentJoke: "Press the Button to Generate a Dad Joke!",
            dadJokes: []
        }

        this.handleChange = this.handleChange.bind(this)
        
    }

    componentDidMount()
    {

    }

    handleChange()
    {
        fetch("https://icanhazdadjoke.com/", 
        {
            headers : {
                'Accept': 'application/json'
        }})
            .then(response => response.json())
            .then(data => {
                this.setState({currentJoke: data.joke})
            })
    }

    render()
    {
        const {currentJoke} = this.state
        
        return(
            <div className="jokeContainer">
                <div className="joke">
                    <p>{currentJoke}</p>
                </div>
                <button className="hvrGrow" onClick={this.handleChange}>Dad Joke!</button>
            </div>
        )
    }
}

export default Jokes