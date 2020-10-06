import { useState, useEffect } from 'react';

const useMouseMoveManagement = (element, referencePoint, isControlActive) => {
    const { x, y } = referencePoint;
    const [position, setPosition] = useState({ x, y });

    useEffect(() => {
        if(element){
            const mouseMovehandler = (event) => {
                if(isControlActive) {
                    setPosition({
                        x: event.clientX - x,
                        y: -(event.clientY - y),
                    });
                }
            };

            element.addEventListener("mousemove", mouseMovehandler);
            return () => element.removeEventListener("mousemove", mouseMovehandler);
        }

    }, [element, position, isControlActive, x, y]);

    return position;
};

export default useMouseMoveManagement;
