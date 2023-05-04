## m13c-e-commerce-back-end


## Description

The m13c-e-commerce-back-end is an e-commerce back end application built using Express.js, Sequelize ORM, and MySQL. The application includes API routes for managing products, categories, and tags.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

## Installation

1. Clone the repository.
2. Install the necessary dependencies by running 'npm install'.
3. Create a .env file at the root of the project and add the following variables with your MySQL credentials and database name:  

    - DB_USER=<your_mysql_username>              
    - DB_PW=<your_mysql_password>
    - DB_NAME=<your_database_name>

4. Run 'mysql -u <your_mysql_username> -p' and enter your MySQL password when prompted.
5. In the MySQL shell, run 'source db/schema.sql;' to create the database.
6. Exit the MySQL shell by running 'quit;'.
7. Run 'npm run seed' to seed the database with sample data.
8. Start the server by running 'npm run start'.


## Usage

Use an API testing tool like Insomnia Core to test the API routes for categories, products, and tags:

- GET all categories, products, or tags
- GET a single category, product, or tag by ID
- POST (create) a new category, product, or tag
- PUT (update) an existing category, product, or tag by ID
- DELETE a category, product, or tag by ID

Please note that this project is only focused on the back end, and there is no front end to interact with the API. Therefore, using an API testing tool like Insomnia Core or Postman is essential for testing the routes.


## Demo Video

[Demo Video](https://drive.google.com/file/d/1vU3UWp_X4LY_VBRb9Ky25Z0_TrdUcxfa/view?usp=share_link) - A walkthrough video demonstrating the application's functionality.


## Technologies

- Node.js
- Express.js
- Sequelize
- MySQL


## License

This project is licensed under the MIT License.
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)


## Contributing

To contribute to this project, please follow the standard [fork and pull request workflow](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).


## Questions

For questions or additional information, please contact:

- [AGHenderson97](https://github.com/AGHenderson97)
- agh.pe.gatech@outlook.com


## User Story:

- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria:

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database
