import React, { useState } from "react";
import "./App.css";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

export default () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea OnEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.Container>
    </div>
  );
};
