import React from 'react';
import './Search.css'


const Search = (props) => {
    //Logic here is to target the value in the input and update it through state function.
    return (
        

        <div className='form'>
            <input className='input'
                name='Search-Value'
                value={props.value}
                onChange={(event) => props.SetSearchValue(event.target.value)}
                placeholder='Search movies...'
            ></input>
        </div>



// <AsyncPaginate 
//         placeholder="Search Movies...."
//         debounceTimeout={600}
//         value={props.value}
//         onChange={(event) => props.SetSearchValue(event.target.value)}
//         loadOptions={null}
        
//         />


    )


}

export default Search;