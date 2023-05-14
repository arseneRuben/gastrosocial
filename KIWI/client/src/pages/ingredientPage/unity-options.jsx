import { unities } from "../../unities";
const UnityOptions = (props) => {
  
    return (
        <>
              <option defaultValue="">Choisi...</option>
              {unities.map(unit => 
                              <option  selected={(props.preselectedUnity == unit.name) ? 'selected' : ''} defaultValue={unit.name}>{unit.name}</option>

                )}
        </>
    )
};
export default UnityOptions;