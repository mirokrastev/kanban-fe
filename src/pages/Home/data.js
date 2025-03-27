const data = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: 1,
        title: 'Design Homepage',
        description: 'Create a modern and responsive homepage design',
        dueDate: 'Mar 30',
        assignee: 'John Doe',
        label: 'Design'
      },
      {
        id: 2,
        title: 'Implement Authentication',
        description: 'Set up user authentication system',
        dueDate: 'Mar 28',
        assignee: 'Jane Smith',
        label: 'Backend'
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: 3,
        title: 'Project Setup',
        description: 'Initialize project structure and dependencies',
        dueDate: 'Mar 25',
        assignee: 'Mike Johnson',
        label: 'Setup'
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: []
  }
];

export default data;
