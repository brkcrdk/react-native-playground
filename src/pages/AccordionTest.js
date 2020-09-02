import React from 'react';
import {Container, Text, Accordion} from '../../components';

const AccordionTest = () => {
  return (
    <Container>
      <Text color="#fff" fontSize={20} marginBottom={20}>
        Accordion component example
      </Text>
      <Accordion />
    </Container>
  );
};

export default AccordionTest;
