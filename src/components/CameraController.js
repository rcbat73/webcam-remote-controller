import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CameraControllerContext from '../context';
import CameraViewer from './CameraViewer';
import CameraOptions from './CameraOptions';
import useRequestCameras from '../hooks/useRequestCameras';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    @media (max-width: 670px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
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