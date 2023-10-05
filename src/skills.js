import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PROGRESS_BAR_DATA } from './constants';

const Skills = () => {
    return (
        <div className='mt-4' id='mySkills'>
            <h3>My Skills</h3>
            <div className='row mt-4'>
                {PROGRESS_BAR_DATA.map(skill => <div key={skill.id} className='col-md-6 mt-4'>
                    <h5 className='text-align-left'>{skill.name}</h5>
                    <ProgressBar now={skill.level} label={`${skill.level}%`} />
                </div>)}
            </div>
        </div>
    )
}

export default Skills;