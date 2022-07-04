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
        <ArrowProfileContainerMenuDiv onClick={() => { SwitchMode(); props.onClick(); }}>
            <MyProfileTextH2>
                {props.text}
            </MyProfileTextH2>

            <ArrowProfileContainerDiv style={{
                transform: active ? "rotate(135deg)" : "rotate(225deg)",
                marginBottom: active ? "7px" : "2px"
            }} />
        </ArrowProfileContainerMenuDiv>
    );
}