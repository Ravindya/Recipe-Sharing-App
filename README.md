## Recipe Sharing App

This is a full-stack recipe-sharing application built with Angular 18 for the frontend and Spring Boot for the backend. The database is managed using MySQL in a Docker container. This application allows users to register, log in, create, edit, share, like, and delete recipes. Data persistence ensures that user data and recipes are stored and retrieved seamlessly.

## Features

- **User Registration & Login:** Users can sign up with their email and log in at any time.
- **Recipe Creation:** Users can create new recipes and share them with others.
- **Edit Recipes:** Users can update their recipes using the edit feature.
- **Like Recipes:** Users can like recipes shared by others.
- **Delete Recipes:** Users can delete recipes they have created.
- **Persistent Data:** Data is stored in a MySQL database, ensuring that it is available across sessions.

## Screenshots
![Screenshot of Recipe Sharing App](/assets/SH1.png)
![Screenshot of Recipe Sharing App](/assets/SH2.png)
![Screenshot of Recipe Sharing App](/assets/SH3.png)
![Screenshot of Recipe Sharing App](/assets/SH4.png)
![Screenshot of Recipe Sharing App](/assets/SH5.png)
![Screenshot of Recipe Sharing App](/assets/SH6.png)
![Screenshot of Recipe Sharing App](/assets/SH7.png)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (with npm) - [Download here](https://nodejs.org/)
- **Angular CLI** - Install globally using `npm install -g @angular/cli`
- **Java Development Kit (JDK)** - [Download here](https://www.oracle.com/java/technologies/javase-downloads.html)
- **Docker** - [Download here](https://www.docker.com/products/docker-desktop/)

### Installation

Follow these steps to set up the project on your local machine:

#### 1. Clone the Repository

Begin by cloning the GitHub repository to your local machine:

```bash
git clone <your-github-repo-url>
cd recipe-sharing-app
```

This will create a directory named `recipe-sharing-app` and place the project files inside.

#### 2. Set Up the Backend

The backend is built with Spring Boot and requires a MySQL database, which we will run inside a Docker container.

**Navigate to the Backend Directory:**

Open your terminal and navigate to the backend directory:

```bash
cd recipe-sharing-backend
```

**Run the Docker Container for MySQL:**

Use Docker Compose to start the MySQL container:

```bash
docker compose up
```

This command will set up and start a MySQL container based on the configuration provided in the `docker-compose.yml` file. The database will be ready to use by the Spring Boot application.

**Run the Spring Boot Application:**

To start the backend service:

1. Open the backend project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
2. Locate the `RecipeSharingAppApplication` class in the `src/main/java/com/ravi/` directory.
3. Run the `RecipeSharingAppApplication` class.

This will start the Spring Boot application, which will connect to the MySQL database running in Docker.

#### 3. Set Up the Frontend

The frontend is built with Angular 18.

**Install Dependencies:**

Install the required Node.js packages:

```bash
npm install
```

This command will install all dependencies listed in the `package.json` file.

**Run the Angular Development Server:**

To start the frontend application:

1. Run the following command to serve the Angular app locally:

```bash
ng serve
```

2. Alternatively, you can start the application using the start script defined in `package.json`:

```bash
npm start
```

The Angular app will compile and be accessible at http://localhost:4200.

## Running the Application

Once both the frontend and backend are set up and running, you can access the full application.

**Access the Application:**

Open your web browser and go to:

```
http://localhost:4200
```

This will load the Angular frontend, which interacts with the Spring Boot backend via REST APIs.

**Using the Application:**

- Sign Up: Create a new account using the registration form.
- Log In: Log in with your credentials to access the app’s features.
- Create Recipes: Use the “Create Recipe” feature to share your culinary creations.
- Edit Recipes: Modify your recipes by clicking the edit button next to them.
- Like Recipes: Like recipes shared by other users.
- Delete Recipes: Remove any of your recipes if needed.
- Logout: Log out when finished. Your data will be saved and retrieved upon your next login.

## Troubleshooting

If you encounter any issues, check the following:

- Ensure Docker is running and the MySQL container is active.
- Verify that the backend service is connected to the database.
- Make sure the frontend server

## Contribution
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or create a pull request. Follow these steps to contribute:

Fork the repository.
Create a new branch:

git checkout -b feature-name
Make your changes and commit them:
git commit -m 'Add some feature'

Push to the branch:
git push origin feature-name

Open a pull request.

## Version
1.0.0

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for checking out the Recipe Sharing Full Stack Project. Enjoy your adventure & improve your skill!

### Contact :
Ravindya Jayasooriya<br>
[ravindyadivanjani@gmail.com](mailto:ravindyadivanjani@gmail.com)
