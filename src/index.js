// const h1 = document.createElement('h1')
// h1.innerHTML='I am Learning ReactJS';

// document.getElementById("root").appendChild(h1)

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Fragment>
     <h1>I am Learning React JS</h1>
     <h2>Hiii</h2>
    <h2>Hiii</h2>
    <h2>Hiii</h2>
  </Fragment>,
  document.getElementById("root"),
  ()=>console.log("rendered")
);


