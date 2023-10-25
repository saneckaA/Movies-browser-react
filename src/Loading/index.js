import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Container } from './styled';

const Loading = () => {
  return (
    <Container>
      <ColorRing
        visible={true}
        height="140"
        width="140"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Container>
  )
};

export default Loading;