# Test Api Postman & MongoDB

This project is a simple API for managing users, providing endpoints for user registration, user authentication, and API documentation generated with Swagger.

## Description

This project utilizes Node.js and Express to create a RESTful API. MongoDB is used to store user data. Authentication is performed using JSON Web Tokens (JWT). API documentation is automatically generated with Swagger.

## Installation

### Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/ismaelac8/TestApiPostman.git
```

### Install Dependencies

Once the repository is cloned, navigate to the project directory and install the dependencies using npm:

```bash
cd your-repository
npm install
```

## Usage

Once the dependencies are installed, you can start the API with the following command:

```bash
npm start
```

Ensure you have a MongoDB instance running if you are using a local database. You can then interact with the API using tools like Postman or cURL.

## Endpoints

The project provides the following endpoints:

- `POST /api/register`: Registers a new user.
- `POST /api/login`: Authenticates a user and returns a JWT token.
- `GET /api-docs`: Accesses the API documentation generated with Swagger.

## Images of execution

CMD - API
![CMD - API](https://github.com/ismaelac8/TestApiPostman/blob/main/img/API_CON.png)

REGISTER
![Register](https://github.com/ismaelac8/TestApiPostman/blob/main/img/POST_1.png)

FAIL REGISTER
![Fail Register](https://github.com/ismaelac8/TestApiPostman/blob/main/img/POST_LESSNAME.png)

LOGIN
![Login](https://github.com/ismaelac8/TestApiPostman/blob/main/img/SPOSTcreenshot%202024-06-09%20112221.png)

PASS FAIL
![Pass fail](https://github.com/ismaelac8/TestApiPostman/blob/main/img/badpass.png)

MONGODB
![MongoDB](https://github.com/ismaelac8/TestApiPostman/blob/main/img/mongodb.png)

## API Documentation

The API documentation is available at the `/api-docs` route when the API is running. You can access it from your browser to explore the different endpoints, their parameters, and responses.

## Contribution

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Open a pull request.

Please ensure you follow the contribution guidelines and respect the code of conduct.

## Requirements

This project uses the following Node.js dependencies, listed in the `requirements.txt` file:

```plaintext
bcryptjs==2.4.3
express==4.17.1
jsonwebtoken==8.5.1
mongoose==6.1.2
swagger-jsdoc==7.0.0
swagger-ui-express==4.1.6
```

## Questions or Issues?

If you have any questions or encounter any issues, feel free to open an issue in this repository.
