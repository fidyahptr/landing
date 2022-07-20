import React from 'react';
import { Image, Box, Text, Flex } from '@chakra-ui/react';
import Facebook from './img/facebook.png';
import Twitter from './img/twitter.png';

const index = () => {
    return (
        <div>
            <Box bg={'#3A3A3A'} align="center" p={5}>
                <Text fontSize='md' color='white' mb={2}>
                    Copyright &copy; 2016 PT. Company
                    </Text>
                <Flex direction="row" justify="center">
                    <Image
                        w="20px"
                        h="25px"
                        src={Facebook}
                        alt='img'
                        mr={4}
                    />
                    <Image
                        w="20px"
                        h="25px"
                        src={Twitter}
                        alt='img'
                    />
                </Flex>


            </Box>


        </div>
    );
}

export default index;
