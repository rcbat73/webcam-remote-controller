import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CameraControllerContext from '../context';
import CameraViewer from './CameraViewer';
import CameraOptions from './CameraOptions';
import useRequestCameras from '../hooks/useRequestCameras';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

const CameraController = () => {
    const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0});
    const [camerasList, setCamerasList] =  useState([]);
    const [source, setSource] = useState('');

    const { Provider } = CameraControllerContext;

    const { data } = useRequestCameras('http://runningios.com/screamingbox/cameras.json');

    useEffect(() => {
        setCamerasList(data);
    }, [data]);

    return (
        <Provider value={{ setCameraPosition, cameraPosition, camerasList, source, setSource }} >
            <Container>
                <CameraViewer />
                <CameraOptions />
            </Container>
        </Provider>
    );
};

export default CameraController;