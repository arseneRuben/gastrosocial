
import SyncIcon from '@mui/icons-material/Sync';
import { Component } from 'react';

class IngredientPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // list of ingredients
            ingredients: []
        }
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ ingredients: responseObject })
            })
    }

    
};
export default IngredientPage;