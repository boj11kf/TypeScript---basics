import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    /* 
        A typescript nem elemzi olyan mélyen a kódunkat,
        hogy biztosan tudja, egyes érték lehet-e undefined
        vagy sem. Mivel alapvetően előfordulhat, hogy a ref-et
        azelőtt akarjuk kiolvasni, hogy értéket kapott
        (mondjuk, nem a submitHandlerbe, hanem azon kívül rakjuk)
        ezért automatikus odatette a ? operátort a current után.

        De, ha mi biztosan tudjuk, hogy az érték nem lesz undefined
        vagy null, akkor mehet a ! operátor.
        const enteredText = todoTextInputRef.current?.value;
    */
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo</label>
      <input type="text" name="" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
