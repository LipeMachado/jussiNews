import React from 'react';
import {
    TopNewsContainerSection,
    TopNewsTitleH1
} from './style.jsx';

import { Categories } from '../../../Components/Categories/';

export function TopNews() {
    return (
        <TopNewsContainerSection>
            <TopNewsTitleH1>Top News for you</TopNewsTitleH1>
            <Categories />
        </TopNewsContainerSection>
    );
}