// Setup the Welcome message

// declare the function for the component
function Welcome(props) {

    // return something for the component to render
    // setup props to be used in the Parent, in this case App.jsx
    return (
        <h3 className="welcome">Welcome {props.name}!</h3>
    );
}

// export the component
export default Welcome