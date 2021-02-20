function smartAssigning(names, statuses, projects, tasks) {
  let currPerson = 0;
  
  for (let i = 0; i < names.length; i++) {
    if (!statuses[i]) {
      if (tasks[i] < tasks[currPerson]) {
        currPerson = i;
      } else if (tasks[i] === tasks[currPerson]) {
        if (projects[i] < projects[currPerson]) {
          currPerson = i;
        }
      }
    }  
  }
  return names[currPerson];
}
