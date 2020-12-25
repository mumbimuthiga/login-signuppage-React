import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <form>
            <h3>Log in </h3>
            <div className='form-group'>
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder=" EnterEmail Address"></input>
            </div>
            <div className='form-group'>
            <label>Password</label>
            <input type="password" className='form-control'placeholder="Enter Password"></input>
            </div>
            <div className="form-control">
            <div className="custom-control custom-checkbox">
            <input type="checkbox" className='custom-control-input' id="customCheck1"></input>
            <label className='custom-control-label' htmlFor="customCheck1">Remember Me</label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right"> forgot 
        <a href="/">Password</a>
        </p>
            </form>
        )
    }
}
