
# Backend Server Setup

This repository contains the backend server setup for handling submissions and retrieval of data from a Visual Basic application. Below are the details on how to set up, run, and interact with the backend server.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

- Ensure that `db.json` exists in the root directory of the project. Initially, it should contain an empty array (`[]`), where submissions will be stored.

## Running the Server

To start the backend server, run the following command:

```bash
node dist/index.js
```

The server will start on `http://localhost:3000`.

## API Endpoints

### `POST /submit`

Use this endpoint to submit a new entry. The request body should be a JSON object representing the submission with the following fields:

- `name` (String): Name of the submitter.
- `email` (String): Email of the submitter.
- `phone` (String): Phone number of the submitter.
- `github_link` (String): GitHub profile link of the submitter.
- `stopwatch_time` (String): Stopwatch time recorded during submission.

### `GET /read`

Use this endpoint to retrieve all submissions stored in `db.json`.

If successful, it returns an array of submission objects. If no submissions are found, it returns a 404 error.

## Example Usage

- **Submit a new entry:** Make a POST request to `http://localhost:3000/submit` with a JSON body containing the submission details.

- **Retrieve all submissions:** Make a GET request to `http://localhost:3000/read` to get all stored submissions.

## Error Handling

- The server handles errors gracefully and provides appropriate error messages and status codes when submissions cannot be read or stored.

## Additional Notes

- Ensure `db.json` has appropriate read and write permissions for the server process.

---

Feel free to customize this README according to any specific setup or usage details relevant to your application. This template provides a basic structure to inform users about how to interact with your backend server.
