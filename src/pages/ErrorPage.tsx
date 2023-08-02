import { Stack, Center, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Center minH="85vh">
        <Stack textAlign="center" gap={6}>
          <Heading fontSize="7xl">Oops</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occured."}
          </Text>
        </Stack>
      </Center>
    </>
  );
};

export default ErrorPage;
