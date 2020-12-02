import preLoader from "../../../utils/images/Spin-1s-200px.png";
import React from "react";

let Preloader = (props) => {
    return   <div style = { {backgroundColor: 'white'}}>
        <img src={preLoader} />
    </div>
}

export default Preloader;