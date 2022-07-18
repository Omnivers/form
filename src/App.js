import logo from './logo.svg';
import './App.css';
import React from 'react';

const reg = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
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
                emailIsValid: (reg.test(e.target.value))
            })
        }
        handlePasswordChange =(e) =>{
            this.setState({
                password : e.target.value, 
            })
            if(this.state.password.length>=4){
                this.setState({
                    passwordIsValid:true
                })  
            }else{
                this.setState({
                    passwordIsValid:false
                })
            }
        }
        handleRememberMeChange =() =>{
            this.state.rememberMe===false ? (this.setState({rememberMe:true})): (this.setState({rememberMe:false}))
        }
        handleSubmit = (e) => {
            e.preventDefault()
            if(this.state.emailIsValid===true && this.state.passwordIsValid===true){
                this.setState({isSubmitted:true})
            }
        }
    render(){
        return(
            this.state.isSubmitted ===false ?(
            <div className='formulaire' >
                <form className='theform container d-flex justify-content-center flex-column' onSubmit={this.handleSubmit}>
                    <h1 className='d-flex justify-content-center titre'>LOGIN</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmailChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group checker">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-check checker">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleRememberMeChange}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary submito">Submit</button>
                </form>
            </div>
        ):
        <>
        <h1 className='d-flex justify-content-center titre'>LOGIN</h1>
        <div className='d-flex justify-content-center titre'>Succeed</div>
        </>
        )
    }
}

export default App;
