import React from 'react';

const Images=(props)=>{

    const imag = props.image;
    console.log(imag);
    return(
            <div className="col-md3">
                <img src={imag.src.large} alt="Not Found"
                className='img-fluid'
                />
            </div>
    );
};

export default Images;