 import React, {useState} from 'react';

function Contador(){
    const [Contador, setContador] = useState (1);

    return (
        <div className="text-center mt-4">
            <h1>contador</h1>
            <p>{Contador}</p>

        </div>
    )
}
export default Contador