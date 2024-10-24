const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "date": "2024-10-01",
          "category": "Development",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Description of Task 2",
          "date": "2024-10-02",
          "category": "Design",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Description of Task 3",
          "date": "2024-10-03",
          "category": "Testing",
          "active": true,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "date": "2024-10-04",
          "category": "Research",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Description of Task 2",
          "date": "2024-10-05",
          "category": "Development",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Description of Task 3",
          "date": "2024-10-06",
          "category": "Design",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "date": "2024-10-07",
          "category": "Testing",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Description of Task 2",
          "date": "2024-10-08",
          "category": "Development",
          "active": true,
          "new": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Task 3",
          "description": "Description of Task 3",
          "date": "2024-10-09",
          "category": "Design",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "date": "2024-10-10",
          "category": "Research",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Description of Task 2",
          "date": "2024-10-11",
          "category": "Development",
          "active": true,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Description of Task 3",
          "date": "2024-10-12",
          "category": "Testing",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "date": "2024-10-13",
          "category": "Design",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Description of Task 2",
          "date": "2024-10-14",
          "category": "Development",
          "active": false,
          "new": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Description of Task 3",
          "date": "2024-10-15",
          "category": "Research",
          "active": false,
          "new": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

 export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  };

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
  };