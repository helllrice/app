import React from 'react';
import { catalog } from '../store/catalog';
import { useEffect } from 'react';


  export default function Card() {
    useEffect( () => {
        catalog.getItem()
        console.log(catalog)
      }, [])
    return (
        <div>
            <ul>
              {catalog.list.map(item => (
                <li> 
                  {item.name} 
                  <img src="https://pickcase.ua${item.url}" alt="sss"/>
                </li>
              ))}
            </ul>
        </div>
    )
}
