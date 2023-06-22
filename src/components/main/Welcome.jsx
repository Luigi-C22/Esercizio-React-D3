import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-1">Welcome at Sci-Fi BookShop</h1>
                <p className="lead">You are in the right place where to choose your favorite Sci-Fi book</p>
                <hr className="my-4" />
                <p>A large selection of your favorite titles.</p>
                
            </div>
        );
    }
}

export default Welcome;