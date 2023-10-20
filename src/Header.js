import React from "react";

const Header = () => {
    const jumpToRelevantDiv = (id) => {
        const relevantDiv = document.getElementById(id);
        const yOffset = -60;
        const y = relevantDiv.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return (
        <ul className='list-style-none staticHeader'>
            <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('aboutMe')}>About</li>
            <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('mySkills')}>Skills</li>
            <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('myQualifications')}>Qualifications</li>
            <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('contactMe')}>Contact</li>
        </ul>
    )
}

export default Header;