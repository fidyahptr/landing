import React from 'react';
import { FormControl, VStack, FormLabel, Input, Textarea, FormErrorMessage, Stack, Button, Box, Heading, Flex } from '@chakra-ui/react';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import * as Yup from 'yup';

const index = () => {

    return (
        <div>
            <Flex justify="center" mb={10}>
                <Box mx={10} align={"center"} w={{ base: '100%', md: '40%' }}>
                    <Heading py={3}>Contact Us</Heading>

                    <Formik
                        initialValues={{
                            name: '',
                            email: "",
                            message: ''
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('This field is required!'),
                            email: Yup.string()
                                .email("Invalid email address")
                                .required("This field is required!"),
                            message: Yup.string().required('This field is required!'),
                        })}
                    >
                        {(formik) => (
                            <VStack
                                as="form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    formik.handleSubmit();
                                }}
                            >
                                <FormControl id="nama" isInvalid={!!formik.errors.name}>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange('name')}
                                    />
                                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                                </FormControl>
                                <FormControl id="email" isInvalid={!!formik.errors.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange('email')}
                                    />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl id="email" isInvalid={!!formik.errors.message}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        value={formik.values.message}
                                        size='sm'
                                        onChange={formik.handleChange('message')}
                                    />
                                    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                                </FormControl>
                                <Stack spacing={10} pt={2} mt={4}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        w={"100%"}
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        type="submit"
                                    >
                                        Submit
            </Button>
                                </Stack>
                            </VStack>
                        )}
                    </Formik>
                </Box>
            </Flex>
        </div>
    );
}

export default index;
