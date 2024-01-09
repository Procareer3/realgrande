const House = (props) => {
    if(!props.houseInfo){
        return <h1>....loading</h1>
    }

    // console.log(props)
    return ( 
    <div>
        <div className='row'>
            <div className='col-sm-7 mt-2 w-50'>
           {props.houseInfo.address}
            </div>
           <div className='col-sm-5 m-0 p-0 mt-2'>
                 <span><b>Price: USD {props.houseInfo.price}</b></span>
            </div>
        </div> 
        
        <div className='row align-self-bottom w-100'>
            <img className="col-sm-7 img-thumbnail w-50" src={"/images/"+ props.houseInfo.photo}
            style={{width:"200px", height: "475px"}}
            alt='house'></img>
            <div className='col-sm-5 mt-3 w-50'>
                <span>{props.houseInfo.description}</span>
            </div>
        </div>
    </div>
    );
}
 
export default House;