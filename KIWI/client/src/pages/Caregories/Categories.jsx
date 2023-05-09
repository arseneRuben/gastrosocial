import React, { Component } from 'react'
import CategoryForm from './Category/CategoryForm'
import EditIcon from '@mui/icons-material/Edit';

 class  Categories extends Component {
  
    constructor (props) {
        super(props)
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/categories')
            .then(response => {
                 return response.json()
            })
            .then(responseObject => {
                this.setState({ categories: responseObject })
              
            }).catch(error=>{
                console.log(error)
            })
    }

    render () {
        console.log(this.state.categories)
    return (
        
        <div className='row container'>
            <div className='col-8'>
                <h1 className='text-center'> Liste des categories</h1>
                <div className="d-flex justify-content-between row">
                    {this.state.categories.map((item) => 
                        <div className='card col-md-3 p-12' key={item._id}>
                        
                            <div className="card-title">
                                <h5>{item.name}</h5>
                            </div>
                            <div className="card-body">
                                <p>{item.description}</p> 
                             </div>
                             <EditIcon className='card-link'  />
                        </div>  
                    )} 
            
                </div>
            </div>
            <div className='col-4'>
                <CategoryForm />
            </div>
            
        </div>
    )
 }
}

export default Categories