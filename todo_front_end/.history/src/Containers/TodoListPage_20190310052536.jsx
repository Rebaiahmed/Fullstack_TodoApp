import React from 'react';


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

export  default  TodoListPage;