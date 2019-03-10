import React from 'react';
import validator from "email-validator";

import ErorMsg from '../Components/ErrorMsg';

class TodoListPage extends React.Component {



    constructor(props) {
        super(props);

        
        this.state = {
            list :[]

       
    }

}

    //____________to Handlle Input__________//

   

    render() {
       
        return (
            <div className="col-md-6 col-md-offset-3">
              
                <h1>Todo-list-Page</h1>
            </div>
        );
    }
}

export  default SignInPage ;