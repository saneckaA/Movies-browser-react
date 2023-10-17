import React from 'react';
import { Container, First, Previous, Pages, Next, Last, Prev, Nex } from './styled';

const Pagination = () => {

    return (
        <Container >
            <Prev>
                <First>
                    <img src="images/prev.svg" /> First
                </First>
                <Previous>
                    <img src="images/prev.svg" /> Previous
                </Previous>
            </Prev>
            <Pages>
                Page <span></span> of <span></span>
            </Pages>
            <Nex>
                <Next >
                    Next <img src="images/next.svg" />
                </Next>
                <Last >
                    Last <img src="images/next.svg" />
                </Last>
            </Nex>
        </Container>
    )
}

export default Pagination;