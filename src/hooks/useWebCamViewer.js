import { useEffect } from 'react';

const useWebCamViewer = (cameraViewPanel) => {
    const WebCam = window.WebCam;

    useEffect(() => {
        if(cameraViewPanel){
            const node = WebCam.getCameraNode();
            cameraViewPanel.appendChild(node);
            const imgContainer = cameraViewPanel.children[0];
            imgContainer.style = {};
            imgContainer.classList.add('camera-viewer');

            return () => {
                cameraViewPanel.removeChild(node);
            }
        }
    }, [cameraViewPanel, WebCam]);
};

export default useWebCamViewer;
