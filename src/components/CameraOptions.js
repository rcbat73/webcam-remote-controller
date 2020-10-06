import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CameraControlPanelContainer from './CameraControlPanelContainer';
import CamerasList from './CamerasList';

const CameraOptionsContainer = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1em;
    @media (max-width: 500px) {
        height: 100%;
        width: 100%;
        margin: 40px;
    }
`;

const Button = styled.button`
    height: 30px;
    width: 100px;
    padding: 5px;
    border-style: none;
    border-radius: 5px 5px 0 0;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 0.7em;
    :focus {
        outline: 0;
    }
`;

const ButtonsContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    @media (max-width: 500px) {
        height: 80px;
        width: 180px;
        border-radius: 15px 15px 0 0;
    }
`;

const OptionsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        width: 50%;
    }
`;

const CameraOptions = () => {
    const [option, setOption] = useState('cameras');
    const [dimensions, setDimensions] = useState({ height: '100%', width: '100%' });
    const cameraViewPanel = window.WebCam.getCameraNode();

    useEffect(() => {
        if(cameraViewPanel){
            setDimensions({
                height: parseInt(cameraViewPanel.style.height),
                width: parseInt(cameraViewPanel.style.width),
            });
        }
    }, [cameraViewPanel]);

    const setTabColor = (selectedOption) => option === selectedOption ? '#206299' : '#4682B4';

    return (
        <CameraOptionsContainer height={dimensions.height} width={dimensions.width}>
            <ButtonsContainer>
                <Button
                    onClick={() => setOption('cameras')}
                    backgroundColor={setTabColor('cameras')}
                >
                    Cameras
                </Button>
                <Button
                    onClick={() => setOption('control')}
                    backgroundColor={setTabColor('control')}
                >
                    Control
                </Button>
            </ButtonsContainer>
            <OptionsContainer>
                {
                    option === 'cameras' ? <CamerasList /> : <CameraControlPanelContainer />
                }
            </OptionsContainer>
        </CameraOptionsContainer>
    );
};

export default CameraOptions;
