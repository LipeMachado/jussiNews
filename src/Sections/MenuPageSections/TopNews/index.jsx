import React from 'react';
import {
    TopNewsContainerSection,
    TopNewsTitleH1
} from './style.jsx';

import { Categories } from '../../../Components/Categories/';
import { Posts } from '../../../Components/Posts/';

import SamsungPost from '../../../Assets/SamsungNewsPost.png'; 

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
            />
        </TopNewsContainerSection>
    );
}