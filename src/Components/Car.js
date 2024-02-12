function Car(params){
    const {carInfo} = params
    const {brand , color} = carInfo
    return(
        <div>
            <h2>{`I am ${color} ${brand} Car!`}</h2>
        </div>
    );
}

export default Car