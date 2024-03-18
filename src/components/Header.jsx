const Header = (props) => {
    return (
        <div>
            <h1 className="font-medium text-2xl">Hello {props.name}</h1>
            <p>I help you manage ypur activites:)</p>
        </div>
    )


}

export default Header