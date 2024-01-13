import React from 'react';
import ReactDOM from 'react-dom';
import './Loader.module.css';

const Loader = () => {
    return ReactDOM.createPortal(
        <>

           



        </>,

        document.getElementById('portal')
    )
}

export default Loader;