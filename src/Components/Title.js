function Title({ filmTitle}) {
    console.log("in title", filmTitle);
    return (
        <div >
            <h3 className="App-header">  Title of the movies is : {filmTitle} </h3>
        </div>
    )
}

export default Title