import React from 'react'

export default function Intercambianles(props) {
    const { intercambiable } = props;
  
    let arr = intercambiable?.split(",");
    
    return (
      <div className="flex font-normal ">
                {arr?.map((ar) => (
               <div className="flex flex-row">            
            <p className="cursor-pointer hover:border-b-2 hover:border-amarillo ">
              {ar}&nbsp;&nbsp;
            </p>             
          </div>
        ))}
      </div>
    );
}
