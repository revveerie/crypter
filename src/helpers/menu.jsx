import { useState, useEffect } from 'react';

function checkClassCurrent (classCurrent) {
    classCurrent.forEach((classCurrent) => {
        if (classCurrent.classList.contains('current')) {
            classCurrent.classList.remove('current');
        }
    });
}

export default function navigationLinkClick() {
    useEffect(() => {
        const navigationItem = document.querySelectorAll('.navigation__item');
        const navigationLink = document.querySelectorAll('.navigation__link');
        let linkText = document.querySelectorAll('.navigation__link-text');
        let linkImage = document.querySelectorAll('.navigation__link-image_hidden');

        navigationLink.forEach((navigationLink) => {
            navigationLink.addEventListener('click', event => {
                let linkTextCurrent = navigationLink.querySelector('.navigation__link-text');
                let linkImageCurrent = navigationLink.querySelector('.navigation__link-image_hidden');
                let navigationItemCurrent = navigationLink.parentNode;
        
                checkClassCurrent(navigationItem);
                checkClassCurrent(linkText);
                checkClassCurrent(linkImage);
        
                navigationItemCurrent.classList.add('current');
                linkTextCurrent.classList.add('current');
                linkImageCurrent.classList.add('current');
                
                localStorage.setItem('currentText', linkTextCurrent.textContent);
                localStorage.setItem('currentImage', linkImageCurrent.getAttribute('src'));
                localStorage.setItem('currentItem', navigationItemCurrent.innerHTML);
            });
        });

        let currentText = localStorage.getItem('currentText');
        let currentImage = localStorage.getItem('currentImage');
        let currentItem = localStorage.getItem('currentItem');

        linkText.forEach((linkText) => {
            if (linkText.textContent == currentText) {
                linkText.classList.add('current');
            }
        });
        linkImage.forEach((linkImage) => {
            if (linkImage.getAttribute('src') == currentImage) {
                linkImage.classList.add('current');
            }
        });
        navigationItem.forEach((navigationItem) => {
            if (navigationItem.innerHTML == currentItem) {
                navigationItem.classList.add('current');
            }
        });
    });
}