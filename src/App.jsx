
import "./App.css";

const MyApp = () => {
    let heading = "Hello World";

    const onChangeHeading = () => {
        heading = "Heading changed";
        console.log(heading);
    }

    return (
        <div className="main-cont">
            <h1>{heading}</h1>
            <button onClick={onChangeHeading} className="btn btn-primary">change heading</button>
        </div>
    );
}

export default MyApp;