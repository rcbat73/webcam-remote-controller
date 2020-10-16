import React, { useState } from 'react';
import styled from 'styled-components';
import CameraControlPanelContainer from './CameraControlPanelContainer';
import CamerasList from './CamerasList';

const CameraOptionsContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 1em;
    @media (max-width: 500px) {
        height: 100%;
        width: 100%;
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
    font-size: 1em;
    :focus {
        outline: 0;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 670px) {
        margin-top: 20px;
    }
`;

const CameraOptions = () => {
    const [option, setOption] = useState('cameras');
    const setTabColor = (selectedOption) => option === selectedOption ? '#206299' : '#4682B4';

    return (
        <CameraOptionsContainer>
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
            {
                option === 'cameras' ? <CamerasList /> : <CameraControlPanelContainer />
            }
        </CameraOptionsContainer>
    );
};

export default CameraOptions;
