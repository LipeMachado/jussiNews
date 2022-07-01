import React, { useState } from 'react';
import { 
    CategoriesContainerSection,
    CategoriesDiv
} from './styled.jsx';

export function Categories() {
    const [categoryActive, setCategoryActive] = useState('All');
    
    const ActiveCategoriy = (index) => {
        setCategoryActive(index);
    }

    return (
        <CategoriesContainerSection>
            <CategoriesDiv onClick={() => ActiveCategoriy('All')} className={categoryActive === 'All' ? 'active' : 'disable'}>All</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('Android')} className={categoryActive === 'Android' ? 'active' : 'disable'}>Android</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('Cricket')} className={categoryActive === 'Cricket' ? 'active' : 'disable'}>Cricket</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('Iphone')} className={categoryActive === 'Iphone' ? 'active' : 'disable'}>Iphone</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('Google')} className={categoryActive === 'Google' ? 'active' : 'disable'}>Google</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('NanoTechnology')} className={categoryActive === 'NanoTechnology' ? 'active' : 'disable'}>Nano Technology</CategoriesDiv>
            <CategoriesDiv onClick={() => ActiveCategoriy('MentalHealth')} className={categoryActive === 'MentalHealth' ? 'active' : 'disable'}>Mental Health</CategoriesDiv>
        </CategoriesContainerSection>
    );
} 