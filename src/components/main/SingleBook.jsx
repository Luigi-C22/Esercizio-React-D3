import { render } from "@testing-library/react";
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import './Card.css';

class SingleBook extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false
        }
    }

    coverClick = () => {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }

    render() {
        const {selected} = this.state;

        return (
            <Card className={`bgColor ${selected ? "selected" : ""}`}>
                <Card.Img variant="top" src={this.props.img} onClick={this.coverClick} />
                <Card.Body>
                    <Card.Title className="titleEllips">{this.props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        );
    }
}

export default SingleBook;