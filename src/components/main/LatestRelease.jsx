import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from "./SingleBook";
import ScifiBook from '../../data/scifi.json';
import { Navbar } from "react-bootstrap";

class LatestRelease extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchText:'',
        };
    }
searchChange = (event) => {
    this.setState({searchText: event.target.value});
}

    render() {
        const { searchText} = this.state;

        const filteredBooks = ScifiBook.filter((book) => {
            return book.title.includes(searchText);
        });
        return (
           
            <Container>
 <Navbar bg="primary" data-bs-theme="dark" className="searchStyle">
                <label htmlFor="searchInput" className="mx-3 ">INSERT TEXT TO FIND HERE </label>
                
                <input className="mx-3"
                type="text" 
                id="searchInput" 
                value={searchText} 
                onChange={this.searchChange} 
                placeholder="search by title"
                 />
</Navbar>
                <Row className="d-flex flex-wrap gap-3">
                    {
                        filteredBooks.map((book) => 
                            (
                                <SingleBook
                                key = {book.asin}
                                img = {book.img}
                                asin = {book.asin}
                                title ={book.title}
                                book={book}
                                />
                            )
                        )
                    }
                </Row>
            </Container>
         
        );
    }
}
export default LatestRelease;