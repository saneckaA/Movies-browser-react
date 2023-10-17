import React from 'react';
import { Container, Text, Image } from './styled';

const NoResults = () => {
    return (
        <Container>
            <Text>
                Sorry, there are no results for ""
            </Text>
            <Image>
                <img src="images/no_results.png" />
            </Image>
        </Container>
    )
};

export default NoResults;