import React  from 'react';

import  './search-box.css';
///here we are using functionl component
export const Searchbox = ({placeholder, handlechange}) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handlechange}/>   

)
