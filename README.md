# Match Card Maker

An actual description and whatnot is pending.

---
#### Development - Getting Started
1. Clone the app from the github repo
2. Run `yarn install` in both the `client` and `server` folders
3. If you want to set up postgres server, you can do so, or use `docker-compose` to use the provided container in the `server` folder
4. Add an `.env` file in the `server` folder with any config overrides if it becomes necessary. You can find all used env keys in the `server/config` folder as an example
5. To start the client, run `yarn run dev` while inside the `client` folder
6. To start the server, run `yarn run dev` while inside the `server` folder
  - This will require a currently running instance of postgres. Either on the machine natively or through the provided docker container
7. Browse to `localhost:3000` to access the running app. 

Notes:
- The root url of the server `localhost:8080/` is not intended to be used during development. Only sub routes (such as `/api` `/auth`) will work as intended. There is a proxy setting set in the webpack config to point to these routes.