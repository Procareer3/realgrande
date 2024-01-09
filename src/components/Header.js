import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <div className='header row bg-warning align-items-center'>
            <div className='col-sm-3'>
                <Link to="/"> <img className="logo w-25" src="/images/logo.png" alt="/logo"></img></Link>
            </div>
            <div className='col-sm-6 text-center'><h4>Your Real Estate Destination</h4></div>
            <div className='d-flex col-sm-3 justify-content-end'>
                <Link to='/login'><button className="full-view btn btn-success mx-1">Log in</button></Link>
               <Link to='/signup'> <button className="full-view btn btn-info mx-1 ">Sign Up</button></Link>
                <button className="response"><FontAwesomeIcon icon={faRightToBracket} /></button>
                <button className="response"><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
        </div>
    );
}

 
export default Header;