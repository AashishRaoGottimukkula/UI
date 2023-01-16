import React, { useEffect, useState } from "react";

function Hello() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        setTimeout(() => { setDate(date = new Date()); }, 1000);
    });
    return (
        <div>
            <p>{`Date and Time : ${date}`}</p>
        </div>
    );
}

export default Hello;