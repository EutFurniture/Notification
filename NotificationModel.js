import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import back from "./back5.jpg";
import Link from '@material-ui/core/Link';
import Button from 'react-bootstrap/Button';
import NotificationResult from './NotificationResult';


const Background = styled.div`
    width: 50%;
    height: 50%;
    background: rgba(0,0,0,0);
    position: fixed;
    display: flex;
    top: 100px;
    left: 620px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const ModelWrapper = styled.div`
    width: 600px;
    height: 350px;
    box-shadow:0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModelImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: blue;

`

const ModelContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p{
        margin-bottom: 1rem;
    }
   
    button{
        padding: 10px 24px;
        background: blue;
        color: #fff;
        border: none;
        border-radius:10px;
    }
`;
const CloseModelButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const NotificationModel = ({showModel, setShowModel}) => {
    return(
        <>
        {showModel ? (
            <Background>
                <ModelWrapper showModel={showModel}>
                    <ModelImg src={back}
                    alt='camera '/>
                    <ModelContent>
                        <NotificationResult/>
                    </ModelContent>
                    <CloseModelButton aria-label='Close model' onClick={()=> setShowModel(prev => !prev)}/>
                </ModelWrapper>
            </Background>
        ) : null}

        </>
    );
};