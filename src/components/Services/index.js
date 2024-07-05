import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  View,
  Flex,
  Heading,
  Button,
  Checkbox,
  Text,
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  Breadcrumbs,
  Item,
  ActionGroup,
} from "@adobe/react-spectrum";
import Draw from "@spectrum-icons/workflow/Draw";
import Delete from "@spectrum-icons/workflow/Delete";

const columns = [
  { name: "All Airports", uid: "select" },
  { name: "Airport Name", uid: "name" },
  { name: "Country", uid: "country" },
  { name: "Code", uid: "code" },
  { name: "Terminals", uid: "terminals" },
];

const rows = [
  {
    id: 1,
    name: "John F. Kennedy International Airport",
    country: "USA",
    code: "JFK",
    terminals: "4",
  },
  {
    id: 2,
    name: "Heathrow Airport",
    country: "UK",
    code: "LHR",
    terminals: "5",
  },
  {
    id: 3,
    name: "Toronto Pearson International Airport",
    country: "Canada",
    code: "YYZ",
    terminals: "3",
  },
  {
    id: 4,
    name: "Tokyo Haneda Airport",
    country: "Japan",
    code: "HND",
    terminals: "2",
  },
];

function Services() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <View padding="size-200" width="85vh">
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

      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="size-200"
      >
        <Heading level={2}>Airports</Heading>
        <Button variant="cta">Add File</Button>
      </Flex>

      <TableView
        aria-label="Example table with dynamic content"
        maxWidth="size-6000"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <Column
              key={column.uid}
              align={column.uid === "terminals" ? "end" : "start"}
            >
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <Row key={item.id}>
              {(columnKey) => (
                <Cell>
                  {columnKey === "select" ? (
                    <Checkbox aria-label={`Select ${item.name}`} />
                  ) : columnKey === "name" ? (
                    <Link to={`/services/airports/${item[columnKey]}`}>
                      <Text>{item[columnKey]}</Text>
                    </Link>
                  ) : (
                    item[columnKey]
                  )}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>

      <Flex justifyContent="end" marginTop="size-200">
        <ActionGroup buttonLabelBehavior="hide">
          <Item key="edit">
            <Draw />
            <Text>Edit</Text>
          </Item>

          <Item key="delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
      </Flex>
    </View>
  );
}

export default Services;
