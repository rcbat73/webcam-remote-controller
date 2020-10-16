import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import CameraControllerContext from '../context';
import useMousePositioning from '../hooks/useMousePositioning';

const CameraControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
`;

const HelpText = styled.p`
    color: white;
`;

const CameraControlCircle = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    border: 3px dotted white;
    border-radius: 50% 50%;
    &:hover {
        cursor: move;
    }
`;

const CameraControlPanelContainer = () => {
    const [referencePoint, setReferencePoint] = useState({ x: 0, y: 0 });
    const [isControlActive, setIsControlActive] = useState(false);

    const { setCameraPosition } = useContext(CameraControllerContext);

    const panelRef = useRef(null);

    const setReferenceHandler = (event) => {
        setReferencePoint({ x: event.clientX, y: event.clientY });
        setIsControlActive(true);
    }

    const clearReferenceHandler = (event) => {
        setIsControlActive(false);
    }

    const { x, y } = useMousePositioning(panelRef.current, referencePoint, isControlActive);

    useEffect(() => {
        setCameraPosition({ x, y });
    }, [setCameraPosition, x, y]);

    return (
        <CameraControlPanel>
            <HelpText>Click in the circle and drag</HelpText>
            <CameraControlCircle
                height="200"
                width="200"
                onMouseDown={setReferenceHandler}
                onMouseUp={clearReferenceHandler}
                ref={panelRef}
            />
        </CameraControlPanel>
    );
};

export default CameraControlPanelContainer;
