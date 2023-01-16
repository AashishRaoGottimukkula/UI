import React, { useState } from "react";

function Colors() {
    const [color, setColor] = useState('Red');

    return (
        <>
            <button type="button" onClick={() => setColor('Yellow')}>Yellow</button>
            <button type="button" onClick={() => setColor('Green')}>Green</button>
            <button type="button" onClick={() => setColor('Pink')}>Pink</button>
            <button type="button" onClick={() => setColor('Black')}>Black</button>
            <button type="button" onClick={() => setColor('White')}>White</button>

            <p>{`The Current color is : ${color}`}</p>
        </>
    );

}

export default Colors;