import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CameraControllerContext from '../context';

const CamerasListContainer = styled.ul`
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 20px;
    text-align: left;
`;

const CamerasListItem = styled.li`
    padding: 10px;
    margin-bottom: 10px;
    border-left: 5px solid #206299;
    border-radius: 3px;
    background-color: #65a5db;
    color: black;
    cursor: pointer;
    &:hover {
        border-left: 4px solid #65a5db;
        background-color: #206299;
        color: white;
    }
`;

const CamerasList = () => {
    const [isListLoaded, setIsListLoaded] = useState(false);
    const webCam = window.WebCam;
    const { camerasList, source, setSource } = useContext(CameraControllerContext);

    useEffect(() => {
        if(!isListLoaded && camerasList.length){
            webCam.setSource(source ? source : camerasList[0].source);
            setIsListLoaded(true);
        }
    }, [isListLoaded, webCam, camerasList, source]);

    const onClickHandler = (source) => {
        webCam.setSource(source);
        setSource(source);
    };

    return (
        <CamerasListContainer>
            {
                camerasList.map((camera) => {
                    const { id, name, source } = camera;
                    return (
                        <CamerasListItem key={id} onClick={() => onClickHandler(source)}>
                            {name}
                        </CamerasListItem>
                    )
                })
            }
        </CamerasListContainer>
    );
};

export default CamerasList;

