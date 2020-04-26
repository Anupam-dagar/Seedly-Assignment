# Seedly Assignment

## Instructions to Run

1. Clone the repository using `https://github.com/Anupam-dagar/React-Redux-Saga-Learning-Project.git`
2. Use the command `yarn` to install the dependencies.
3. Create a .env file in root of the project. It contains the server endpoint to be used. .env has the following format. Replace values if needed but for local deployment, these values should work.

```
REACT_APP_SERVER_ENDPOINT=http://localhost:4000
```
4. This application uses `json-server` to mock the backend API.
5. `json-server` runs on `http://localhost:4000` by default. Run the script generatedata.js using `node generatedata.js` to generate a fake json database schema. This create a `db.json` which is used as a json database.
6. Run the React server using `yarn dev`. Using `yarn dev` concurrently starts `json-server` and application server.
7. Head over to [http://localhost:3000](http://localhost:3000) see the application running.
