import React, { Component } from "react";
import Typical from "react-typical";


class Discribe extends Component {


    render() {
   
        return (
            <div>
                <Typical
                steps={['Un graphiste',1000, 'qui fait impression !', 3000 , 'Et aussi du web !!!', 5000]}
                loop={Infinity}
                wrapper="b"
            />
            </div>
        )
    }
}

export default Discribe;