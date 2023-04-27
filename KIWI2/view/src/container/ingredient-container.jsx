import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import FormIngredientComponent from '../component/form-ingredient-component'

class IngredientContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,

            // Liste d'ingredient
            ingredients: []
        }

        // Ajustment du contexte d'exécution pour avoir accès à l'instance avec this.
        // Première façon en utilisant .bind(this) et le même résultat est obtenu
        // avec la fonctions fléchée comme dans les exemples suivants.
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ ingredients: response })
            })
    }

    handleInputOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAddOnClick = () => {
        this.setState({
            formValues: {},
            showForm: true
        })
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    renderFormIngredient () {
        return (
            <div>
                <h1>Ajouter un ingredient</h1>
                <FormIngredientComponent action='/ingredients' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom:' type='text' name='ingredientName' />
                    <InputComponent onChange={this.handleInputOnChange} label='Categorie:' type='text' name='ingredientCategorie' />
                </FormIngredientComponent>
            </div>
        )
    }

    renderList () {
        return (
            <div>
                <h1>Liste des ingrédients</h1>
                {this.state.ingredients.map(ingredient => (
                    <ul key={ingredient.id}>
                        <li key={ingredient.id}>{ingredient.name}</li>
                    </ul>
                ))}
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.state.showForm ? this.renderFormIngredient() : this.renderList()}
            </div>
        )
    }
}

export default IngredientContainer
