import React, { Component } from 'react'

class FormContainer extends Component {
    constructor () {
        super()

        this.state = {
            categories: [],
            ingredient: []
        }
    }

    /* componentDidMount () {
        fetch('http://localhost:8080/categories', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ categories: response })
            })
    } */

    componentDidMount () {
        fetch('http://localhost:8080/recipe', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ ingredient: response })
            })
    }

    render () {
        return (
            <div>
                <h1>les categories</h1>
                <pre>
                    {JSON.stringify(this.state.categories)}
                </pre>

                <h1>Liste d'ingredient</h1>
                <p>
                    {JSON.stringify(this.state.ingredient)}
                </p>
            </div>
        )
    }
}

export default FormContainer
