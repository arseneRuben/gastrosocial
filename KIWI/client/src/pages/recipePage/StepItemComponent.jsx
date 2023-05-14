const StepItemComponent = ({ image, description }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">  
    <p>{description}</p>
    <div className="image-parent">
        <img src={image} className="img-fluid rounded-circle" height="300" width="200" alt={image}/>
        </div>
    </li>
  )

  export default StepItemComponent