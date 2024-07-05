import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  View,
  Heading,
  Breadcrumbs,
  Item,
  Tabs,
  Text,
  TabList,
  TabPanels,
  ListBox,
  Button,
  AlertDialog,
  DialogTrigger,
  ActionButton,
} from "@adobe/react-spectrum";

function AirportDetail() {
  const { airportName } = useParams();
  const paths = window.location.pathname.split("/").filter((path) => path);

  const [activeTab, setActiveTab] = useState("terminals");
  const [showMessage, setShowMessage] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSaveClick = () => {
    setShowMessage(true);
  };

  return (
    <View padding="size-200">
      <Breadcrumbs>
        <Item key="home">
          <Link to="/home">Home</Link>
        </Item>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <Item key={to}>
              <Link to={to}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </Item>
          );
        })}
      </Breadcrumbs>

      <View marginTop="size-200">
        <Heading level={1}>{airportName}</Heading>
        <Tabs aria-label="Airport Details">
          <TabList>
            <Item
              key="terminals"
              isSelected={activeTab === "terminals"}
              onClick={() => handleTabClick("terminals")}
            >
              Terminals
            </Item>
            <Item
              key="transport"
              isSelected={activeTab === "transport"}
              onClick={() => handleTabClick("transport")}
            >
              Transport
            </Item>
            <Item
              key="contact"
              isSelected={activeTab === "contact"}
              onClick={() => handleTabClick("contact")}
            >
              Contact Details
            </Item>
          </TabList>
          <TabPanels>
            <Item key="terminals">
              {activeTab === "terminals" && (
                <View>
                  <Heading level={2}>Terminal Information</Heading>
                  <Text>Terminal details for {airportName}</Text>
                  <DialogTrigger>
                    <ActionButton>Save</ActionButton>
                    <AlertDialog
                      title="Terminal title"
                      variant="Description"
                      primaryActionLabel="Confirm"
                    >
                      Description
                    </AlertDialog>
                  </DialogTrigger>
                </View>
              )}
            </Item>
            <Item key="transport">
              {activeTab === "transport" && (
                <View>
                  <Heading level={2}>Transport Information</Heading>
                  <Text>Transport details for {airportName}</Text>
                </View>
              )}
            </Item>
            <Item key="contact">
              {activeTab === "contact" && (
                <View>
                  <Heading level={2}>Contact Details</Heading>
                  <Text>Contact details for {airportName}</Text>
                </View>
              )}
            </Item>
          </TabPanels>
        </Tabs>

        <View marginTop="size-400">
          <Heading level={2}>Services</Heading>
          <ListBox aria-label="Links">
            <Item href="" target="_blank">
              Lost & Found
            </Item>
            <Item href="" target="_blank">
              Lounge
            </Item>
            <Item href="" target="_blank">
              Money Exchange
            </Item>
          </ListBox>
        </View>
      </View>

      <View marginTop="size-200" justifyContent="end" alignItems="end">
        <Button variant="cta" size="S" onPress={handleSaveClick}>
          Save
        </Button>
      </View>

      {showMessage && (
        <View marginTop="size-200">
          <Text>Your changes have been saved.</Text>
        </View>
      )}
    </View>
  );
}

export default AirportDetail;
