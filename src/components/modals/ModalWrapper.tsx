import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalWrapperProps {
    children: React.ReactNode,
    wrapperId: string,

}

const ModalWrapper = ({children, wrapperId = "portal-wrapper"}: ModalWrapperProps) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);
    

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        if(!element) {
            systemCreated = true;
            element = document.createElement('div');
            element.setAttribute('id', wrapperId);
            document.body.appendChild(element);
        };
        setWrapperElement(element);

        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};


export { ModalWrapper };