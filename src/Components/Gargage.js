import Car from "./Car";
function Garage(){
    const carInfo = { brand : 'Audi',color : 'Red'}
    const carList  = [{brand : 'Ford',color : 'black'},
                      {brand :'BMW', color: 'White'},
                      {brand : 'Suzuki',color : 'Blue'}
                    ];
    return(
        <div>
            <h1>This is Gargage.Who Lives Here?</h1>

            {/* conditional Rendering */}
            { carInfo.brand !== undefined && carInfo.color!== undefined ?
            <Car carInfo = {carInfo}/> : null }
            <ul>
                {carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo = {carInfo}/></li> )}
            </ul>

        </div>
    );
}

export default Garage