function tasksTypes(deadlines, day) {
  const tasks = [0, 0, 0];
  for (let i = 0; i < deadlines.length; i++) {
    const currTask = deadlines[i];
    if (currTask <= day) {
      tasks[0]++;
    } else if (currTask > day && currTask <= day + 7) {
      tasks[1]++;
    } else {
      tasks[2]++;
    }
  }
  return tasks;
}
