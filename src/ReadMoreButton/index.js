import React, { useState } from 'react';
import { Button } from './styled';

const ReadMoreButton = ({ content }) => {

    const [show, setShow] = useState(false);
    
    return content.length > 1000 ? (
        <>
            {show ? content : `${content.slice(0, 900)}...`}
            <Button onClick={() => setShow((show) => !show)}> {show ? "Read less" : "Read more"}</Button>
        </>
    ) : (<>{content} </>)
}

export default ReadMoreButton;