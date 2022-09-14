import React, { useContext, useEffect, useState } from 'react';
import { LanguageSelector } from '../App';
import { ReactComponent as GlobeIcon } from '../assets/images/icon/globe.svg';
import ImageMap from "image-map";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useContext(LanguageSelector);

    const languageSwitchHandler = (lang) => {
        window.localStorage.setItem("language", lang);
        setLanguage(lang);
        ImageMap('img[useMap]');
    }


    return (
        <div className="flex justify-end ml-5">
            <GlobeIcon />
            <select defaultValue={language} onChange={(e) => languageSwitchHandler(e.target.value)} id="languageSelector" className="text-base">
                <option value="EN">EN</option>
                <option value="BN">BN</option>
            </select>
            <style>{`
                            #languageSelector {
                                border: none !important;
                                background-color: transparent; 
                                font-family: 'Montserrat', sans-serif;
                            }
                        `}</style>
        </div>
    );
};

export default LanguageSwitcher;