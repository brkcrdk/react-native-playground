import React from 'react';
import {Container, Text, Accordion} from '../../components';
import {useTheme} from '../../hooks';
const AccordionTest = () => {
  const {currentTheme} = useTheme();

  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Accordion component example
      </Text>
      <Accordion />
    </Container>
  );
};

export default AccordionTest;
