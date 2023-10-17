import React from 'react';
import { Container, Image, Title, SubTitle, Button } from './styled';

const Error = () => {
    return (
        <Container>
            <Image>
                <img src="images/error.png" />
            </Image>
            <Title>
                Ooops! Something went wrong...
            </Title>
            <SubTitle>
                Please check your network connection <br /> and try again
            </SubTitle>
            <Button to="/movies">
                <button>Back to home page</button>
            </Button>
        </Container>
    )
}

export default Error;