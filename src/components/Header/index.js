// Header.js
import React from "react";
import { View, Flex, Text, Avatar, Divider } from "@adobe/react-spectrum";
import User from "@spectrum-icons/workflow/User";

function Header() {
  return (
    <View padding="size-200">
      <Flex alignItems="center" justifyContent="space-between">
        <Text>
          <h2>Hava Havai</h2>
        </Text>
        <Flex alignItems="center">
          <Avatar size="S" marginEnd="size-100">
            <User />
          </Avatar>
        </Flex>
      </Flex>
      <Divider size="S" />
    </View>
  );
}

export default Header;
