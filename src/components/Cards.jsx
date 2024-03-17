const Cards = (props) => {

    return (
        // <div className="flex gap-2">
            <div  style={{backgroundColor:props.bgcolor}} className=" p-3  py-5 border rounded-md text-2xl text-center  flex-grow " >
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        // </div>

    )
}

export default Cards