import React, { useState } from 'react';
import {
    NavBarHeader,
    LogoDiv,
    TextLogoDiv,
    TextLogoH1,
    SearchDiv,
    ProfileDiv,
    MyProfileDiv
} from './style.jsx';
import { MagnifyingGlass, User } from 'phosphor-react';

import { Logo } from '../../../Components/Logo/';
import { ArrowProfileMenu } from '../../../Components/ArrowProfileMenu/'

export function Header() {

    return (
        <NavBarHeader>
            <LogoDiv>
                <Logo />
                <TextLogoDiv>
                    <TextLogoH1>JÜSSI NEWS</TextLogoH1>
                </TextLogoDiv>
            </LogoDiv>
            <SearchDiv>
                <input placeholder="Pesquisa de notícias" />
                <span><MagnifyingGlass size={21} /></span>
            </SearchDiv>
            <ProfileDiv>
                <User size={24} />
                <MyProfileDiv>
                    <ArrowProfileMenu text="My Profile" />
                </MyProfileDiv>
            </ProfileDiv>
        </NavBarHeader>
    );
}