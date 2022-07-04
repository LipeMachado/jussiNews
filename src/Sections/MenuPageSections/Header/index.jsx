import React, { useState, useRef } from 'react';
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

import { Logo } from '../../../Components/Logo/'
import { ArrowProfileMenu } from '../../../Components/ArrowProfileMenu/'
import { ProfileMenu } from '../ProfileMenu/'
import { UseClickOutside } from '../../../Components/UseClickOutside/'

export function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    const ToggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const ContainerProfileMenu = useRef(null);

    UseClickOutside(ContainerProfileMenu, () => setOpenMenu(false));

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
                <MyProfileDiv ref={ContainerProfileMenu}>
                    <ArrowProfileMenu text="My Profile" onClick={() => ToggleOpenMenu()} />
                    <ProfileMenu className={openMenu ? 'active' : 'disable'}/>
                </MyProfileDiv>
            </ProfileDiv>
        </NavBarHeader>
    );
}