import React from 'react';
import {
    TopNewsContainerSection,
    TopNewsTitleH1
} from './style.jsx';

import { Categories } from '../../../Components/Categories/';
import { Posts } from '../../../Components/Posts/';

import SamsungPost from '../../../Assets/SamsungNewsPost.png'; 
import BattlegroundsPost from '../../../Assets/BattlegroundsNewsPost.png';
import WindowsPost from '../../../Assets/WindowsNewsPost.png';
import PetrolPost from '../../../Assets/PetrolNewsPost.jpeg';

export function TopNews() {
    return (
        <TopNewsContainerSection>
            <TopNewsTitleH1>Top News for you</TopNewsTitleH1>
            <Categories />
            <Posts
                Title="Samsung Galaxy F22 launched in India: Price, features, other details"
                Paragraph="Samsung Galaxy F22 has been launched in India. The new smartphone 
                has been priced in the mid-range segment. The new smartphone is powered by a 
                MediaTek chipset and features a high refresh rate AMOLED display."
                Src={SamsungPost}
                Time="15 mins ago"
            />
            <Posts
                Title="Battlegrounds Mobile India iOS release date"
                Paragraph="The reason behind their disappointment is that iPhone users have been.."
                Time="30 mins ago"
                Src={BattlegroundsPost}
            />
            <Posts
                Title="Petrol, diesel prices -  July 6: Fuel prices unchanged after touching record high"
                Paragraph="The price of petrol remained unchanged on July 6 after 
                reaching a new record high on the previous day, according to a price notification by state-owned.."
                Src={PetrolPost}
                Time="50 mins ago"
            />
            <Posts
                Title="How to install Windows 11 on almost any unsupported PC"
                Paragraph="Microsoft is allowing some unsupported computers.."
                Src={WindowsPost}
                Time="57 mins ago"
            />
        </TopNewsContainerSection>
    );
}