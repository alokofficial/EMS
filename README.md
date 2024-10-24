This app is for the employees management app, which contains task assign to the employee, completed task, rejected task, and the failed task. Two types of the role has been created like user role and admin role.

TechStack used in the APP was:
1. Vite
2. React
3. Tailwind CSS
4. React-icons
5. 

## Folder Structure
```
EMS
 |-- public
 |-- src
      |-- components
            |-- Auth
                |-- Login.jsx
            |-- Dashboard
                |-- AdminDashboard.jsx
                |-- EmployeeDashboard.jsx
            |-- other
                |-- AllTask.jsx
                |-- CreateTask.jsx
                |-- Header.jsx
                |-- TaskListNumbers.jsx
            |-- TaskList
                |-- AcceptTask.jsx
                |-- CompleteTask.jsx
                |-- FailedTask.jsx
                |-- NewTask.jsx
                |-- TaskList.jsx
      |-- context
            |-- AuthProvider.jsx
      |-- pages
      |-- utils
            |-- localStorage.jsx

      |-- App.jsx
      |-- main.jsx
      |-- index.css  
 |-- index.html
 |-- package.json
 |-- tailwind.config.js
 |-- vite.config.js    


```      
### Login.jsx
~~~
The Login.jsx file is used to handle the login functionality of the application. The login form will be validated and if the credentials are correct then the user will be redirected to the respective dashboard page. The context of the Login page is as follows:

- The login form is rendered with the email and password fields.

- When the user submits the form the handleLogin function is triggered.

- The handleLogin function checks if the email and password are correct.

- If the credentials are correct then the user is redirected to the respective dashboard page.

- If the credentials are incorrect then an alert will be shown with the message "Invalid Credentials".

~~~

### AdminDashboard.jsx
~~~
The AdminDashboard.jsx file is responsible for displaying the admin dashboard. It includes components for viewing all tasks and creating new tasks. The context of the AdminDashboard page is as follows:

- The dashboard displays a header and two main sections: task creation and task overview.

- The CreateTask component allows the admin to add new tasks for employees.

- The AllTask component lists all tasks assigned to employees.
~~~

### EmployeeDashboard.jsx
~~~
The EmployeeDashboard.jsx file is responsible for displaying the employee dashboard. It includes components for viewing task numbers and task lists. The context of the EmployeeDashboard page is as follows:

- The dashboard displays a header and two main sections: task list numbers and task details.

- The TaskListNumbers component shows a summary of task statuses.

- The TaskList component displays detailed task information.
~~~

### AllTask.jsx
~~~
The AllTask.jsx file is used to display a list of all tasks. Each task includes details such as the employee assigned, task description, and status. The context of the AllTask component is as follows:

- Tasks are displayed in a scrollable container with different background colors based on status.

- Tasks include employee names, task descriptions, and statuses.
~~~

### CreateTask.jsx
~~~
The CreateTask.jsx file is used for creating new tasks. It provides a form to enter task details like title, description, and category. The context of the CreateTask component is as follows:

- The form includes fields for task title, description, and category.

- Submitting the form triggers a function to add the task to the task list.
~~~

### Header.jsx
~~~
The Header.jsx file is responsible for rendering the application's header. It includes navigation and branding elements. The context of the Header component is as follows:

- The header displays the application name and navigation links.

- It is included in both admin and employee dashboards.
~~~

### TaskListNumbers.jsx
~~~
The TaskListNumbers.jsx file is used to display a summary of task statuses. It shows counts for new, completed, and failed tasks. The context of the TaskListNumbers component is as follows:

- Displays task numbers categorized by status.

- Helps employees quickly understand their workload.
~~~

### TaskList.jsx
~~~
The TaskList.jsx file is responsible for rendering a list of tasks with details. Each task card includes a title, description, priority, and due date. The context of the TaskList component is as follows:

- Displays tasks in a horizontal scrolling list with priority labels.

- Each task card includes details such as title, description, and due date.
~~~
