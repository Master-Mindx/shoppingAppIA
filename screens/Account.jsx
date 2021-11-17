import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
  Divider,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LogoutDialog from "../components/LogoutDialog";

export default function Account({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <React.Fragment>
        <StatusBar backgroundColor="#df8d8e" />
        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          width={Dimensions.get("screen").width}
          marginTop={39}
          paddingTop={5}
          alignSelf="center"
          alignContent="space-between"
        >
          <Pressable
            opacity={0.9}
            onPress={() => {
              navigation.goBack();
            }}
            marginLeft={2}
            flex={1}
            flexDirection="row"
            alignItems="baseline"
          >
            <Ionicons name="chevron-back" size={24} color="black" />
            <Heading marginLeft={1} fontFamily="ZenKakuGothicNewBold">
              Account
            </Heading>
          </Pressable>
        </HStack>
        <VStack>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Username
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              Some weird name
            </Text>
          </HStack>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Email
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              Some weird email
            </Text>
          </HStack>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              First Name
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              Some weird name
            </Text>
          </HStack>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Last Name
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              Some weird name
            </Text>
          </HStack>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Phone
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              Some weird number
            </Text>
          </HStack>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Settings
            </Text>
          </Pressable>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Log Out
            </Text>
          </Pressable>
          <Divider />
          <LogoutDialog
            isOpen={isOpen}
            onClose={onClose}
            navigation={navigation}
          />
        </VStack>
      </React.Fragment>
      <Box margin={7}></Box>
    </>
  );
}
