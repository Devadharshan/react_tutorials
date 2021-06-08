import React from 'react'; /*  to import react*/
import ReactDOM from 'react-dom' /* to connect to the public folder html file so that browser renders the js file */

/* creating class or function means we are creating a component */

/* component can be an class or an function */

const App = () =>{
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))  /* .render renders the two things 1. the  component app and 2. where to render it*/

/* the 'root' is the div tag in the public index.html file  we are selecting from t=he 'root' by using the get element by id*/


/* <App/> we are returning an component so we use <App/> to tell react that it is a valid component*/
