import { useRef, useState } from "react";
import {useOnClickOutside } from "./useOnClickOutside";

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    const ref = useRef();

    useOnClickOutside(ref, openModal, () => setOpenModal(false));

    return ( 
        <div>
            <button onClick={() => setOpenModal(true)}>Modal</button>
            {openModal && (
                <div ref={ref}>
                    <span onClick={() => setOpenModal(true)}></span>
                    <p>Keep going Mma!</p>
                </div>
            )}
        </div>
     );
}
 
export default Modal;

