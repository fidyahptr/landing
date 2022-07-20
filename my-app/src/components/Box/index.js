import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react';
import Light from './img/light.png';
import Bank from './img/bank.png';
import Balance from './img/balance.png';

const index = () => {
    return (
        <div>
            <Flex justify="center" mx={10} py={10}>
                <Stack align="center">
                    <Heading py={3}>Our Values</Heading>
                    <Flex direction={{ base: 'column', md: 'row' }} w="100%" py={5} px={10} gap={8}>

                        <Box border='3px' borderColor={'#db524f'} bg={'#dd7a78'} p={5}>
                            <Flex direction="column" align="center">
                                <Image
                                    w="22px"
                                    h="40px"
                                    src={Light}
                                    alt='img'
                                />
                                <Text fontWeight="bold" color='white' mt={2} mb={5}>INNOVATIVE</Text>
                                <Text fontSize='md' color='white' align="center">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate iste optio mollitia,
						doloribus perspiciatis magni fuga at.</Text>
                            </Flex>
                        </Box>

                        <Box bg={'#7aa97c'} p={5}>
                            <Flex direction="column" align="center">
                                <Image
                                    w="35px"
                                    h="40px"
                                    src={Bank}
                                    alt='img'
                                />
                                <Text fontWeight="bold" color='white' mt={2} mb={5}>LOYALTY</Text>
                                <Text fontSize='md' color='white' align="center">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate iste optio mollitia,
						doloribus perspiciatis magni fuga at.</Text>
                            </Flex>
                        </Box>

                        <Box bg={'#6ba5c7'} p={5}>
                            <Flex direction="column" align="center">
                                <Image
                                    w="38px"
                                    h="40px"
                                    src={Balance}
                                    alt='img'
                                />
                                <Text fontWeight="bold" color='white' mt={2} mb={5}>RESPECT</Text>
                                <Text fontSize='md' color='white' align="center">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate iste optio mollitia,
						doloribus perspiciatis magni fuga at.</Text>
                            </Flex>
                        </Box>

                    </Flex>
                </Stack>
            </Flex>
        </div >
    );
}

export default index;
