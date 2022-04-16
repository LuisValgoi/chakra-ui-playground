import React from 'react';

import { Stack, Text, Avatar } from '@chakra-ui/react';
import { NextPage } from 'next';

const PageComponent: NextPage = () => {
  return (
    <Stack mt="8" align="center">
      <Avatar
        size="2xl"
        name="Luis Valgoi"
        src="https://avatars.githubusercontent.com/u/8363610?v=4"
      />

      <Text fontWeight="bold" fontSize="4xl">
        Luis Valgoi
      </Text>
    </Stack>
  );
};

export default PageComponent;
