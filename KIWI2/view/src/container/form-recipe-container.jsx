import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import ListComponent from 'component/list-component'
import FormComponent from 'component/form-component'
import FormIngredientComponent from '../component/form-ingredient-component'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class FormRecipeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            recipes: [],
            // Liste d'ingredient
            ingredients: []
        }

        // Ajustment du contexte d'exécution pour avoir accès à l'instance avec this.
        // Première façon en utilisant .bind(this) et le même résultat est obtenu
        // avec la fonctions fléchée comme dans les exemples suivants.
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    /* componentDidMount () {
        fetch('http://localhost:8080/recipes', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                console.log(responseObject)
                this.setState({ recipes: responseObject })
            })

         fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ ingredients: response })
            })
    } */

    componentDidMount () {
        fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ ingredients: response })
            })
    }

    /**
     * Tout les chants du formulaire exécute cette méthode sur l'évènement onChange
     *
     * Exemple de state pour le formulaire.
     * Le id est ajouté à la création et les autres propriétés représentent le name et value des balises <input>
     * {
     *  id: 1
     *  userName: 'abc',
     *  firstName: 'b',
     *  lastName: 'c'
     * }
     */
    handleInputOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    handleItemOnClick = (event) => {
        // Le <span> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/recipes/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    formValues: responseObject,
                    showForm: true
                })
            })
    }

    handleItemDeleteOnClick = (event) => {
        // Le <button> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/recipes/' + id, { method: 'DELETE' })
            .then(response => response.json())
            .then(response => {
                this.setState({ recipes: response })
            })
    }

    handleAddOnClick = () => {
        this.setState({
            formValues: {},
            showForm: true
        })
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    recipes: responseObject,
                    showForm: false
                })
            })
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    renderForm () {
        return (
            <div>
                <h1>Formulaire</h1>
                <FormComponent action='/recipes' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom de recette:' type='text' name='proposedtitle' value={this.state.formValues.proposedtitle} />
                    <InputComponent onChange={this.handleInputOnChange} label='Description:' type='text' name='proposeddescription' value={this.state.formValues.proposeddescription} />
                    <InputComponent onChange={this.handleInputOnChange} label='Createur :' type='text' name='userid' value={this.state.formValues.userid} />
                    <InputComponent onChange={this.handleInputOnChange} label='Nom adopte de recette:' type='text' name='adoptedtitle' value={this.state.formValues.adoptedtitle} />
                    <InputComponent onChange={this.handleInputOnChange} label='Description adptee:' type='text' name='adopteddescription' value={this.state.formValues.adopteddescription} />
                    <InputComponent onChange={this.handleInputOnChange} label='Status:' type='text' name='status' value={this.state.formValues.status} />
                </FormComponent>
            </div>

        )
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
                <h1>Liste</h1>
                <ListComponent
                    recipes={this.state.recipes}
                    onItemClick={this.handleItemOnClick}
                    onItemDeleteClick={this.handleItemDeleteOnClick}
                    onAddClick={this.handleAddOnClick}
                    onAddClick1={this.handleAddOnClick1}
                />
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

export default FormRecipeContainer
