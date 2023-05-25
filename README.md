# OCU-Assignment-5 (Node)

## Modules Used

- [x] express
- [x] mysql2
- [x] nodemon
- [x] cors

## HTTP requests to server (CRUD)

- GET
  1. '/' => Returns the data of all the persons
  2. '/:id' => Returns the person details with Id as 'id'
  3. '/Name/:query' => Returns details of everyone whose name has 'query'
- POST
  i. '/add' => Add the posted data into the database and returns added details as acknowledgement.
- UPDATE
  i. '/update/:id' => Updates the details of person with Id as 'id'.
- DELETE
  i. '/delete/:id' => deletes the deatails of person based on id
  ii. '/deleteAll' => deletes every record.
