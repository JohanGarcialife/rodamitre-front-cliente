import React from 'react'

export default function Formadopor(props) {
  const { formadopor } = props;

  let arr = formadopor?.split(",");
  


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
