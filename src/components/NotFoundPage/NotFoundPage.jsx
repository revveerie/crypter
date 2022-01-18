import React from 'react';
import { Link } from 'react-router-dom';

import Computer from '../../assets/images/computer.png';

const Notfoundpage = () => {
    return (
        <>
            <div className="not-found">
                <p className="not-found__text">Sorry, this page doesn&apos;t exist</p>
                <p className="not-found__text">Go back to the <Link to='/' className='not-found__link'>homepage</Link></p>
                <div className="not-found__image">
                    <img src={Computer} />
                </div>
            </div>
        </>
    )
}

export default Notfoundpage;