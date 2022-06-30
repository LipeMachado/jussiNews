import React, { useState } from "react";
import {
    NavContainerSection,
    NavListContainerDiv,
    NavListUl,
    NavPointActiveSpan
} from './style.jsx';
import {
    House,
    Suitcase,
    Bell,
    Gear
} from 'phosphor-react';

export function Nav() {

    const [selectNavOption, setSelectNavOption] = useState(1);

    const SelectOption = (index) => {
        setSelectNavOption(index);
    }

    return (
        <NavContainerSection>
            <NavListContainerDiv>
                <NavListUl>
                    <li onClick={() => SelectOption(1)} className={selectNavOption === 1 ? 'active' : 'disable'}>
                        <NavPointActiveSpan></NavPointActiveSpan>
                        <div>
                            <House size={24} />
                            <h1>Top News</h1>
                        </div>
                    </li>
                    <li onClick={() => SelectOption(2)} className={selectNavOption === 2 ? 'active' : 'disable'}>
                        <NavPointActiveSpan></NavPointActiveSpan>
                        <div>
                            <Suitcase size={24} />
                            <h1>Business</h1>
                        </div>
                    </li>
                    <li onClick={() => SelectOption(3)} className={selectNavOption === 3 ? 'active' : 'disable'}>
                        <NavPointActiveSpan></NavPointActiveSpan>
                        <div>
                            <Bell size={24} />
                            <h1>Notification</h1>
                        </div>
                    </li>
                    <li onClick={() => SelectOption(4)} className={selectNavOption === 4 ? 'active' : 'disable'}>
                        <NavPointActiveSpan></NavPointActiveSpan>
                        <div>
                            <Gear size={24} />
                            <h1>Settings</h1>
                        </div>
                    </li>
                </NavListUl>
            </NavListContainerDiv>
        </NavContainerSection>
    );
}