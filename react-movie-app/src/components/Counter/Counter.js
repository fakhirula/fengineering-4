import { useState, useEffect } from "react";

function Counter() {
    function addAngka() {
        setAngka(angka + 1);
    }

    function manipulateDOM() {
        console.log("Lifecycle: Component di-mount");
        document.title = `Angka: ${angka}`;
    }

    const [angka, setAngka] = useState(0);
    
    useEffect(manipulateDOM, [angka]);

    console.log("Lifecycle: Component di-render");

    return (
      <div>
            <p>Result: {angka}</p>
            <button onClick={addAngka}>Add</button>
      </div>
    );;
}

export default Counter;