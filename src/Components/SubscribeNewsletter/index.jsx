import React from 'react';
import {
    NewsletterContainerDiv
} from './style.jsx';

export function SubscribeNewsletter() {
    return (
        <NewsletterContainerDiv>
            <span>Subscribe to our newsletter</span>
            <input placeholder="Enter Email" />
            <button>Subscribe</button>
        </NewsletterContainerDiv>
    );
}