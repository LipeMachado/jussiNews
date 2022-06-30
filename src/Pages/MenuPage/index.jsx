import React from 'react';
import {
    MainContainerSection,
    Aside
} from './style.jsx';

import { Header } from '../../Sections/MenuPageSections/Header/'
import { Nav } from '../../Sections/MenuPageSections/Nav/'
import { TopNews } from '../../Sections/MenuPageSections/TopNews/'
import { SubscribeNewsletter } from '../../Components/SubscribeNewsletter/'

export function InitialPage() {
    return (
        <>
            <Header />
            <MainContainerSection>
                <Nav />
                <TopNews />
                <Aside>
                    <SubscribeNewsletter />
                </Aside>
            </MainContainerSection>
        </>
    )
}