import React, { useEffect, useState } from 'react';

const Spinner = () => {
    const [show, setShow] = React.useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 1000);
    });

    if (show) {
        return (
            <div className="spinner"></div>
        );
    } else {
        return (
            <></>
        );
    }
}

export default Spinner;