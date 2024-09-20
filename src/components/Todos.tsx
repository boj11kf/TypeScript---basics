import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

/* 
    Alapvetően, ha a React.FC-t használjuk,
    az FC-ből alapértelmezetten elérhető a children prop
    props.children módon. 

    A generic tipussal pedig megadhatunk továbbiakat is

*/
const Todos: React.FC = () => {
  const { items, deleteTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item, index) => (
        <TodoItem key={index} text={item.text} onDelete={deleteTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;

/* bind */
/*  
  props.onDelete.bind(null, item.id)  
  ezzel nem kell propként továbbadni az id-t,
  és bonyolítani a kódot, mivel a szülőkomponensben
  megvan, hozzá bind()-olja, köti az id értéket, és úgy adja tovább.

*/

/* const Todos: React.FC<{ items: Todo[], onDelete: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item, index) => (
        <TodoItem key={index} todo={item} onDelete={props.onDelete}/>
      ))}
    </ul>
  );
};

export default Todos; */
