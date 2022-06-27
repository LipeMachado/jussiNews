import React, { useState } from 'react';
import {
    ArrowProfileContainerMenuDiv,
    MyProfileTextH2,
    ArrowProfileContainerDiv
} from './style.jsx';

export function ArrowProfileMenu(props){
    
    const [active, setActive] = useState(false); 
    
    const SwitchMode = () => {
        setActive(!active);
    };

    return (
        <ArrowProfileContainerMenuDiv onClick={SwitchMode}>
            <MyProfileTextH2>
                {props.text}
            </MyProfileTextH2>

            <ArrowProfileContainerDiv style={{
                transform: active ? "rotate(225deg)" : "rotate(135deg)",
                marginBottom: active ? "2px" : "7px"
            }} />
        </ArrowProfileContainerMenuDiv>
    );
}