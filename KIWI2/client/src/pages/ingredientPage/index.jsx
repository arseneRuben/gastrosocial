import { Component } from 'react';
function renderItem (item) {
return (
    <div  key={item.id} id={item.id} class="carousel-item">
        <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Fake image"/>
        <div className="container">
          <div className="carousel-caption text-left">
            <h1>{item.name}</h1>
            <p>{item.unity}</p>
          </div>
        </div>
      </div>
    )
}

class IngredientPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // list of ingredients
            ingredients: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:8000/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ ingredients: responseObject })
            })
    }

    render () {
        return (
            <div className="carousel-inner">
                    {this.state.ingredients.map((item) => renderItem(item))}

            </div>
        )
    }

  
    

    
}
export default IngredientPage;