import React from 'react';
import {
    MainContainerSection
} from './style.jsx';

import { Header } from '../../Sections/MenuPageSections/Header/'
import { Nav } from '../../Sections/MenuPageSections/Nav/'

export function InitialPage() {
    return (
        <>
            <Header />
            <MainContainerSection>
                <Nav />
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    safkaskfm
                </div>
                <div>
                    asjnfsagn
                </div>
            </MainContainerSection>
        </>
    )
}