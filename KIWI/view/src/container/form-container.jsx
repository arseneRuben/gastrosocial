import React, { Component } from 'react'

class FormContainer extends Component {
    constructor () {
        super()

        this.state = {
            categories: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:8080/categories', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ categories: response })
            })
    }

    render () {
        return (

            <div>
                <h1>les categories</h1>
                <pre>
                    {JSON.stringify(this.state.categories)}
                </pre>
            </div>
        )
    }
}

export default FormContainer
