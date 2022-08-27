import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Api = () => {
  const URL = "https://fakestoreapi.com/products";

  const [todo, setTodos] = useState([]);

  const fetchApi = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi(URL);
  }, []);

  return (
    <Box
      width="100%"
      display="flex"
      flexWrap="wrap"
      justifyContent={"center"}
      
      
    >
      {todo.map((item) => (
        <Card item={item} />
      ))}
    </Box>
  );
};

export default Api;
