import * as React from 'react';
import Task from './Task';
import './task.css';

const mock = {
  image: 'elephant',
  prize: 45000
}

const TaskWrapper = () => {
  return(
    <Task
      prize={mock.prize}
      image={mock.image} />
  );
}

export default TaskWrapper;