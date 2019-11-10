import React from 'react'
import { graphql } from '@apollo/react-hoc'
import { getBookQuery} from './../components/queries/queries'

class BookDetails extends React.Component{
    displayBookDetails(){
        const { book } = this.props.data;
        if(book){
            return(
                <div>
                    <h1>{book.name}</h1>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author</p>
                    <ul className = 'other-books'>
                        {
                            book.author.books.map((item)=>{
                                return (<li key = {item.id}>{item.name}</li>)
                            })
                        }
                    </ul>
                </div>
            )
        }else{
            return (<div>No Book Selected</div>)
        }
    };
    render(){
        //console.log(this.props)
       
        return(
            <div id = "book-datails">
                {this.displayBookDetails()}
            </div>
            )
        }
}

export default graphql(getBookQuery ,{
    options : (props)=>{
        return {
            variables : {
                id : props.bookId
            }
        }
    }
})(BookDetails);