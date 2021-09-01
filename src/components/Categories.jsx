import React from 'react'

export default function Categories(props) {
    const [state, setstate] = React.useState(0);
    
    return (
        <div className="categories">
            {props.categoryNames &&
          (  <ul>     
                        
                {props.categoryNames.map((name, index)=>
                <li 
                    className ={state === index?"active":""}
                    onClick={()=>setstate(index)} 
                    key= {`${name}_${index}`}
                >{name}</li>
                )}
                
            </ul>)
            }
        </div>
    )
}
