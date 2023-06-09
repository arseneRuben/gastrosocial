import React, { Component } from 'react'
import CategoryForm from './Category/CategoryForm'
import EditIcon from '@mui/icons-material/Edit';

 class  Categories extends Component {
  
    constructor (props) {
        super(props)
        this.state = {
            categories: []
        }
        this.handleAddCatagory = this.handleAddCatagory.bind(this)
        this.handleOnEdit = this.handleOnEdit.bind(this)
       
    }

    
    handleOnEdit(event){
        
        fetch(`http://localhost:8000/categories/${event.target.id}`)
        .then(response => {
            
             return response.json()
        })
        .then(responseObject => {
            this.setState({ ...this.state,category: responseObject[0] })
        }).catch(error=>{
            console.log(error)
        })
    }
    handleAddCatagory(newCategory){
        this.setState({...this.state,categories : this.state.categories.concat([newCategory])});
        
    }

  
    componentWillMount() {
        fetch('http://localhost:8000/categories')
            .then(response => {
                 return response.json()
            })
            .then(responseObject => {
                this.setState({ ...this.state,categories: responseObject })
              
            }).catch(error=>{
                console.log(error)
            })
    }
   
 

    render () {
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
                             <EditIcon className='card-link'  id={item._id}  onClick={this.handleOnEdit} />
                        </div>  
                    )} 
            
                </div>
            </div>
            <div className='col-4'>
                <CategoryForm handleAddCatagory = {this.handleAddCatagory} category={this.state.category}/>
            </div>
            
        </div>
    )
 }
}

export default Categories