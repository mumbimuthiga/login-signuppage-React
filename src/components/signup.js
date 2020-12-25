import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <form>
                <h3>SignUp </h3>
                <div className="form-group">
                <label>FirstName</label>
                <input type="text" className="form-control" placeholder=" First Name"></input>
                </div>

                <div className="form-group">
                <label>LastName</label>
                <input type="text" className="form-control" placeholder="Last Name"></input>
                </div>

                <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Email Address"></input>
                </div>

                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"></input>
                </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}
