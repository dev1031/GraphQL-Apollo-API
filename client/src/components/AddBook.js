import React from 'react';
import { graphql } from '@apollo/react-hoc'; 
import  compose  from 'lodash.flowright'

import { getAuthorsQuery  , addBookMutation , getBooksQuery} from './../components/queries/queries'

class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            genre : '',
            authorId : '' 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(this.state);
        this.props.addBookMutation({
            variables :{
                name : this.state.name,
                genre : this.state.genre,
                authorId : this.state.authorId
            },
            refetchQueries : [{query : getBooksQuery}]
        });
        //'addBookMuatation'-->this name is givem because of the name defined in end of the line see line 74
        //of this page .
        //variables is passed to the queries--> addBookMutation
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return (<option>Loading</option>)
        }else{
            return( data.authors.map((author)=>{
                return <option key ={author.id} value = {author.id}>{author.name}</option>
            }))
        }
    }
    render(){
        //console.log(this.props.data)
        return(
            <form id="add-book" onSubmit = { this.handleSubmit }>
                <div className="field">
                <label>Book name:</label>
                <input type="text" name = "name" onChange = {this.handleChange }/>
                </div>

                <div className="field">
                <label>Genre:</label>
                <input type="text" name = "genre" onChange = {this.handleChange }/>
                </div>

                <div className="field">
                <label>Author:</label>
                <select name = "authorId" onChange ={ this.handleChange }>
                    <option >Select Author</option>
                    {this.displayAuthors()}
                </select>
                </div>

                <button>+</button>

            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery,{ name : "getAuthorsQuery"}),
    graphql(addBookMutation,{ name : "addBookMutation"})
    )(AddBook)