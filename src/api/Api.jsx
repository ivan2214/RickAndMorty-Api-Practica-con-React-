import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Api = () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const [todo, setTodos] = useState([]);
  const [info, setInfo] = useState({});

  const fetchApi = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setTodos(json.results);
        setInfo(json.info);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi(URL);
  }, []);

  const onPrevius = () => {
    fetchApi(info.prev);
  };
  const onNext = () => {
    fetchApi(info.next);
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      gap="10"
    >
      <Pagination onPrevius={onPrevius} onNext={onNext} prev={info.prev} next={info.next} />
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent={"center"}
      >
        {todo.map((item) => (
          <Card item={item} />
        ))}
      </Box>
      <Pagination onPrevius={onPrevius} onNext={onNext} prev={info.prev} next={info.next} />
    </Box>
  );
};

export default Api;
