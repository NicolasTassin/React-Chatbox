import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Connection extends Component {
    state = {
        pseudo: "",
        goToChat: false
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({goToChat: true})
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }
    render() {
        if (this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return (
            <div className="connectionBox">
                <form className="connection" onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        placeholder="Pseudo"
                        type="text" required></input>
                    <button type="submit">GO</button>
                </form>

            </div>
        )
    }
}

export default Connection