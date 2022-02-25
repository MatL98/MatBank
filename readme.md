# MatBank

MatBank is a FullStack proyect made with Reactjs and NodeJs.
The app simulate a kind of "expense schedule" or a "Home Banking", when the user can create, read, update, and delete operations.

You can register a new user or use: 

- mail: test@mail.com
- username: test
- password: test123

## Tools Used

- React.Js
- React Router Dom
- Style Components
- Axios
- Node.Js
- Express.Js
- Sequelize
- JWT
- MySql


## How to install the project

  1. You must clone this repo using (`git clone https://github.com/MatL98/MatBank.git`)
  2. Then you will have to install all the dependencies of the project, for that you will have to execute (`npm install`)
  3. Start XAMMP and press start on Apache and MySql.
  4. For this example create an .env with this data
      SESSION_SECRET="xhiperMegaSecreTx"
      PORT=3001
      DB_DB=bank
      DB_USER=root
      DB_PASSWORD=""
      DB_DIALECT=mysql
      DB_HOST=localhost
  5. Finally, you can run the project and test using  (`npm start`) in server and client.