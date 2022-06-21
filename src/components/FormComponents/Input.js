import { useEffect, useRef, useState } from "react";

const Input = ({checkInput, type}) => {

    const [input, setInput] = useState("");
    const inputRef = useRef();
    const errorMessageRef = useRef();

    useEffect(() => {
    }, [input])

    return(
        <div>
        <input ref={inputRef} className="input" onChange={(event) => {
            setInput(event.target.value)
            checkInput(event.target.value, inputRef, errorMessageRef)
        }}
        value={input} type={type} id="register_page--input"/>
        <p ref={errorMessageRef}></p>

        </div>
    )
}

export default Input