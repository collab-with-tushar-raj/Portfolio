import React from 'react';
import { QUALIFICATIONS_DATA } from './constants';
import Image from 'react-bootstrap/Image';

const Qualifications = () => {
    return (
        <div className='mt-4' id='myQualifications'>
            <h3>My Qualifications</h3>
            <div className='row mt-4'>
                {QUALIFICATIONS_DATA.map(qual => <div key={qual.id} className='col-md-6'>
                    <div className='row align-center'>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/${qual.logo}`}
                            className='quali_logo col-md-2'
                            roundedCircle />
                        <span className='col-md-10 text-align-left'>{qual.year}</span>
                    </div>
                    <div className='col-md-10 text-align-left qual-desc'>
                        <h5>{qual.title}</h5>
                        <p>{qual.description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Qualifications;