import { unities } from "../../unities";
const UnityOptions = (props) => {
  
    return (
        <>
             
              {unities.map((unit, index) => 
                              <option key={index}  selected={(props.preselectedUnity == unit.name) ? 'selected' : ''} defaultValue={unit.name}>{unit.name}</option>

              )}
        </>
    )
};
export default UnityOptions;