# Job Search Platform Challenge

## Project Description

This project aims to develop a platform for job posting and searching using different frontend frameworks and libraries. It is an excellent opportunity to compare the approaches and capabilities of these tools.

## Technologies to Explore

- ReactJS
- NextJS
- Vue
- Svelte
- Angular

## Backend API

The existing backend API provides the following endpoints:

- `GET /jobs` - Get a list of jobs
- `POST /jobs` - Create a new job
- `GET /jobs/me` - Get my jobs
- `POST /jobs/:id/apply` - Apply to a job

- `POST /auth/signin` - Log-in in to the app
- `POST /auth/signup` - Create a new user(SignUp)

## Turbo Repo Commands

To manage the monorepo with Turbo Repo, you can use the following commands:

- `turbo run build` - Build all projects in the monorepo
- `turbo run lint` - Run linters on all projects
- `turbo run test` - Run tests on all projects

## Project Structure

The project is organized as follows:

```
/apps
    /react-app
    /nextjs-app
    /vue-app
    /svelte-app
    /angular-app
    /nestjs-be
```

## Contributions

Contributions are welcome. Please follow the contribution guidelines and ensure your changes pass all tests and linters before submitting a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
