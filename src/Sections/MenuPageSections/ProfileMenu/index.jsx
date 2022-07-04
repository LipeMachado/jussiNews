import React from 'react';
import { 
    ProfileMenuContainerSection,
    MenuItemsDiv,
    ItemMetamaskDiv
} from './style.jsx';

import { IconMetamask } from '../../../Assets/Icons/IconMetamask.jsx';

export function ProfileMenu(props) {

    return (
        <ProfileMenuContainerSection className={props.className} >
            <MenuItemsDiv>
                <ItemMetamaskDiv>
                    <IconMetamask />
                    <span>Metamask</span>
                </ItemMetamaskDiv>
            </MenuItemsDiv>
        </ProfileMenuContainerSection>
    );
}