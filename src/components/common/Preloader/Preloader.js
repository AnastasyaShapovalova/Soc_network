import preLoader from "../../../utils/images/";
import React from "react";

let Preloader = (props) => {
    return   <div style = { {backgroundColor: 'white'}}>
        <img src={preLoader} />
    </div>
}

export default Preloader;