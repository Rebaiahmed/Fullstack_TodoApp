import React from 'react';


class SignInPage extends React.Component {



    constructor(props) {
        super(props);

        
        this.state = {
            email: '',
            password: '',
            submitted: false,
            loading: false,
            error: '',
            errorEmail : false
        };

       
    }



  //____________to Handlle Input__________//

    handleChange =(e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }



//______HandleSubmit_________//

handleSubmit =(e) =>
{
    e.preventDefault();


    this.setState({submitted:true});

    let { email , password, errorEmail} = this.state ;
     
     this.setState({errorEmail: !validator.validate(email) })
    




}




    

    render() {

        let { email , password , submitted ,errorEmail } = this.state ;
          return (
            <div className="col-md-6 col-md-offset-3">
              
                <h2>Sign In</h2>

                <form name="form" onSubmit={this.handleSubmit}>

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name="email" value={email} placeholder="Enter email" 
    onChange={this.handleChange}>
    {
        submitted && !email &&
        <p> Email is required </p>
    }

    {
        submitted && errorEmail &&
        <p> Email is not valid </p>
    }



   
  </div>


  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" value={password} 
    onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>



  <button type="submit" class="btn btn-primary">Submit</button>
</form>

               
            </div>
        );
    }
}

export  default SignInPage ;