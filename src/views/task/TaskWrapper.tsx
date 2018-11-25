import * as React from "react";
import { useState } from 'react';
import Task from "./Task";
import "./task.css";

const mock = {
  cardsVisible: 0,
  distance: 610,
  image: "elephant",
  prize: 45000,
};

const TaskWrapper = () => {
  const [calculatedWidth, setNewWidth] = useState(100);

  const handleChangeWidth = (newWidth = null) => {
    let updatedWidth;
    if(mock.distance > 200) {
      updatedWidth = 66
    } else if(mock.distance > 600) {
      updatedWidth = 33;
    } else {
      updatedWidth = 0;
    }
    setNewWidth(updatedWidth);
  }

  return(
    <Task
      handleChangeWidth={handleChangeWidth}
      prize={mock.prize}
      calculatedWidth={calculatedWidth}
      image={mock.image}
      distance={mock.distance} />
    );
};

export default TaskWrapper;
