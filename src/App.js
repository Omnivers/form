import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            rememberMe: false,
            emailIsValid: false,
            passwordIsValid: false,
            isSubmitted: false
        }
    }
        handleEmailChange =(e)=>{
            this.setState({
                email : e.target.value,
            })
            console.log(this.state.email);
        }
    render(){
        return(
            <div className='formulaire'>
                <form className='theform container d-flex justify-content-center flex-column'>
                    <h1 className='d-flex justify-content-center titre'>LOGIN</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmailChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )}
}

export default App;
