import React from 'react';
import {
    PostsContainerSection,
    PostsBoxDiv,
    PostsTextsDiv,
    PostsTitleH1,
    PostsParagraphP,
    PostsOptionsDiv,
    PostsShareTextSpan,
    PostsTimeSpan,
    PostsShareDiv,
    PostsImageDiv,
    PostsImageImg
} from './style.jsx';

import { Export } from 'phosphor-react';

export function Posts(props) {
    return (
        <PostsContainerSection>
            <PostsBoxDiv>
                <PostsTextsDiv>
                    <PostsTitleH1>{props.Title}</PostsTitleH1>
                    <PostsParagraphP>{props.Paragraph}</PostsParagraphP>
                    <PostsOptionsDiv>
                        <PostsTimeSpan>{ props.Time }</PostsTimeSpan>
                        <PostsShareDiv>
                            <Export size={16} />
                            <PostsShareTextSpan>Share</PostsShareTextSpan>
                        </PostsShareDiv>
                    </PostsOptionsDiv>
                </PostsTextsDiv>
                <PostsImageDiv>
                    <PostsImageImg src={props.Src} alt={props.Alt} />
                </PostsImageDiv>
            </PostsBoxDiv>
        </PostsContainerSection>
    );
}