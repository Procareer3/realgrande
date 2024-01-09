import { useParams } from 'react-router-dom'
import House from './House';

const SearchedHouse = (props) => {
    const {id} = useParams();

    //**Note param is a string not a number */
    // let paramObj = useParams();
    // let searched = props.allhouses.find(house => {
    //     return paramObj.id == house._id
    // })
     
    return ( 
       <>
        <House houseInfo={props.allhouses[id]}/>
       </>
     );
}
 
export default SearchedHouse;