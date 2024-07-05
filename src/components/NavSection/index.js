import React from "react";
import { Link } from "react-router-dom";
import { View, Flex, Heading, Text } from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import ViewGrid from "@spectrum-icons/workflow/ViewGrid";

function NavSection() {
  return (
    <View padding="size-50" width="15vh" height="80vh">
      <Flex direction="column" gap="size-200">
        <View>
          <Flex
            direction="column"
            gap="size-100"
            marginStart="size-200"
            marginTop="size-200"
          >
            <Link to="/home">
              <Home />
              <Text>Home</Text>
            </Link>
            <Link to="/dashboard">
              <ViewGrid />
              <Text>Dashboard</Text>
            </Link>
          </Flex>
        </View>
        <View>
          <Heading level={3}>Services</Heading>
          <Flex direction="column" gap="size-50" marginStart="size-200">
            <Link to="/services/airports">
              <Text>Airports</Text>
            </Link>
            <Text>Videos</Text>
          </Flex>
        </View>
        <View>
          <Heading level={3}>Others</Heading>
          <Flex
            direction="column"
            gap="size-200"
            marginStart="size-200"
            marginTop="size-200"
          >
            <Text>List1</Text>
            <Text>List2</Text>
            <Text>List3</Text>
          </Flex>
        </View>
      </Flex>
    </View>
  );
}

export default NavSection;
