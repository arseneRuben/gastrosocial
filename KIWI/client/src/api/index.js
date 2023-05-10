


const baseUrl = 'http://localhost:8000'

export function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}


export const fetchRecipes = () => fetch(`${baseUrl}/recipes`).then(response => {
    return response.json()
}).catch(error=>{
    console.log(error)
})
export const updateRecipe = (id, updatedRecipe) => fetch(`${baseUrl}/recipes/${id}`, buildHeader('PUT', updatedRecipe))


export const fetchRecipe = (id)=> fetch(`${baseUrl}/recipes/${id}`)
export const createRecipe = (newRecipe) => fetch(`${baseUrl}/recipes`, buildHeader('POST', newRecipe))
export const deleteRecipe = (id) => fetch(`${baseUrl}/recipes/${id}`, { method: 'DELETE' }).then(response => {
    return response.json()
}).catch(error=>{
    console.log(error)
})
export const likeRecipe = (id) =>fetch(`/recipes/${id}/like`, { method: 'PUT' }).then(response => {
    return response.json()
}).catch(error=>{
    console.log(error)
})
export const fetchIngredient = (id) =>  fetch(`${baseUrl}/ingredients/${id}`)
export const fetchIngredients = ()  =>   fetch(`${baseUrl}/ingredients`)
export const createIngredient = (newIngredient) => fetch(`${baseUrl}/ingredients`, buildHeader('POST', newIngredient))
export const updateIngredient = (id, updatedIngredient) => fetch(`${baseUrl}/ingredients/${id}`, buildHeader('PUT', updatedIngredient))
export const deleteIngredient = (id) => fetch(`${baseUrl}/ingredients/${id}`, buildHeader('DELETE', null))




/*
export const createImage = (newImage, recipeId, userId) => API.post(`/recipes/${recipeId}/images`, newImage);

export const fetchRecipesByTitle = (title) => API.get(`/recipes/search?title=${title}`);
export const fetchRecipesByCreator = (name) => API.get(`/recipes/creator?name=${name}`);
export const fetchRecipesBySearch = (searchQuery) => API.get(`/recipes/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const comment = (value, id) => API.recipe(`/recipes/${id}/commentRecipe`, { value });
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);


export const fetchIngredient = (id) => API.get(`/ingredients/${id}`);
export const fetchIngredients = () => API.get(`/ingredients`);
export const fetchIngredientsByTitle = (title) => API.get(`/ingredients/search?title=${title}`);
export const createIngredient = (newIngredient) => API.post(`/ingredients`, newIngredient);
export const updateIngredient = (id, updatedIngredient) => API.patch(`/ingredients/${id}`, updatedIngredient);
export const deleteIngredient = (id) => API.delete(`/ingredients/${id}`);

export const signIn = (formData) => API.recipe('/users/signin', formData);
export const signUp = (formData) => API.recipe('/users/signup', formData);

export const upload  = (formData) =>API.post("/upload-images", formData);*/