# ScholarDASH

Built a student dashboard that makes use of some randomized data. The dashboard shows easy to understand data, formatted in a way that is easy for a user to use.

This project includes some existing code which helped complete the features.

- [`src/data/data.json`](./src/data/data.json): This contains data for over 200 students. Each student has multiple properties associated with them. Some important ones include:
  - `id`: A unique ID associated with each student.
  - `profilePhoto`: A randomly generated photo from [fakerface.rest](https://fakerface.rest).
  - `cohort`: An object represent which "cohort" the student is in.

## Features:

### ✩ Student list

- Created a list of students that displays when first arrive on the page.
- Each students' data appears with specific infomation.

### ✩ Cohort list

- Created a list of cohorts based on the data available.
- Sorted and formatted the Cohort list.

### ✩ Interactive cohort list

Updated the cohort list so that when any of the cohorts are clicked the student list updates to only show students in that cohort.

### ✩ Improved student list

Updated the interactive student list by adding features to display additional student details.

### ✩ 1-on-1 section

Created a section in the student details section that contains information about a student's 1-on-1 with an instructor.

### ✩ Interactive 1-on-1 section

Improved the 1-on-1 section with a working form.

### ✩ Styled the application

Improved the look and feel of my application by styling all components.

## Resource:

- [ReactJS: Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Deployed Site

- https://645b20c7c48da67769b0cb38--teal-sunburst-97de05.netlify.app/
