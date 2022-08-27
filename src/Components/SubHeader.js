import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './SubHeader.css'

function SubHeader() {
    return (
        <div className='subheader'>
            <div className='subheader__nav'>
                <MenuIcon className="subheader__menuIcon"/>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        <strong>All</strong>
                    </span>
                </div>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        Today's Deals
                    </span>
                </div>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        Customer Service
                    </span>
                </div>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        Registry
                    </span>
                </div>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        Gift Cards
                    </span>
                </div>
                <div className='subheader__option'>
                    <span className='subheader__optionLineOn'>
                        Sell
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;