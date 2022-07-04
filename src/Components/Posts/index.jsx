import React from 'react';
import {
    PostsContainerSection,
    PostsBoxDiv,
    PostsTextsDiv,
    PostsTitleH1,
    PostsParagraphP,
    PostsImageDiv,
    PostsImageImg
} from './style.jsx';

export function Posts(props) {
    return (
        <PostsContainerSection>
            <PostsBoxDiv>
                <PostsTextsDiv>
                    <PostsTitleH1>{props.Title}</PostsTitleH1>
                    <PostsParagraphP>{props.Paragraph}</PostsParagraphP>
                </PostsTextsDiv>
                <PostsImageDiv>
                    <PostsImageImg src={props.Src} alt={props.Alt} />
                </PostsImageDiv>
            </PostsBoxDiv>
        </PostsContainerSection>
    );
}