import React, { useEffect } from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "../components/FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useFontContext } from "../context/fontContext";
import '@dotlottie/player-component';
import { color } from "framer-motion";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { screenSize, darkmode } = useFontContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => {
      submit("http://localhost:3000/contact", values)
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      comment: Yup.string().required('Comment is required'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const optionStyle = {
    backgroundColor: "#4d5061",
  }

  return (
    <FullScreenSection
      containerStyle={{ 
        backgroundColor: darkmode ? "#1d1d16" : "#4d5061",
        color: "white"
      }}
      py={16}
      spacing={8}
      id="contact-section"
      minHeight="auto"
    >

      <Flex flexWrap={"wrap"}>
        <VStack flex={1}>
          <Heading as="h1" id="contactme-section">
            Contact me
          </Heading>
          <dotlottie-player src="https://lottie.host/aee2251f-8e74-4431-8def-fca6b503ee50/tQMFCHcdHU.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></dotlottie-player>
          <VStack alignItems="center" justifyContent="space-between" w={screenSize}>
            <Text>
              <HStack>
                <Text color="red.400">Note :</Text><Text>Because of the technical issues, </Text>
              </HStack>
            </Text>
            <Text>
              Please kindly contact through direct email
            </Text>
            <Text>
              rather than through this contact section
            </Text>
          </VStack>
        </VStack>
        <Box flex={1}>
          <VStack w={screenSize} alignItems="flex-start" m={"auto"}>

            <Box p={6} rounded="md" w="100%">
              <form onSubmit={formik.handleSubmit} >
                <VStack spacing={4}>
                  <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      {...formik.getFieldProps("firstName")}
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select id="type" name="type" {...formik.getFieldProps("type")}>
                      <option style={optionStyle} value="hireMe">Freelance project proposal</option>
                      <option style={optionStyle} value="employMe">Hire as employee</option>
                      <option style={optionStyle} value="openSource">
                        Open source consultancy session
                      </option>
                      <option style={optionStyle} value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                      id="comment"
                      name="comment"
                      height={250}
                      {...formik.getFieldProps("comment")}
                    />
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                  </FormControl>
                  <Button isDisabled={formik.errors.firstName || formik.errors.email || formik.errors.comment ? true : false} bg="#439775" _hover={{ bg: "#48bf84" }} type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </FullScreenSection>
  );
};

export default LandingSection;
