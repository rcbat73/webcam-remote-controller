import { useEffect } from 'react';

const useWebCamViewer = (cameraViewPanel) => {
    const WebCam = window.WebCam;

    useEffect(() => {
        if(cameraViewPanel){
            const node = WebCam.getCameraNode();
            cameraViewPanel.appendChild(node);
            return () => {
                cameraViewPanel.removeChild(node);
            }
        }
    }, [cameraViewPanel, WebCam]);
};

export default useWebCamViewer;
