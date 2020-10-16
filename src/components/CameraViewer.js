import React, { useEffect, useRef, useContext } from 'react';
import CameraControllerContext from '../context';
import useWebCamViewer from '../hooks/useWebCamViewer';

const CameraViewer = () => {
    const cameraViewPanelRef = useRef(null);
    const { cameraPosition, camerasList } = useContext(CameraControllerContext);

    const webCam = window.WebCam;
    const cameraViewPanel = cameraViewPanelRef.current;

    useWebCamViewer(cameraViewPanel);

    useEffect(() => {
        if(camerasList.length){
            webCam.move(cameraPosition.x, cameraPosition.y);
        }
    }, [camerasList, cameraPosition, webCam]);

    const style = {
        border: '3px solid #65a5db',
        borderRadius: '3px',
    };

    return (
        <div ref={cameraViewPanelRef} style={style} />
    );

};

export default CameraViewer;
