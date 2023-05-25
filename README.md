# OCU-Assignment-5 (Node)

## Modules Used

- [x] express
- [x] mysql2
- [x] nodemon
- [x] cors

## HTTP requests to server (CRUD)

- GET
  - **/** &nbsp;&nbsp;&nbsp;&nbsp; => Returns the data of all the persons
  - **/:id** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; => Returns the person details with Id as 'id'
  - **/Name/:query** &nbsp;&nbsp;&nbsp; => Returns details of everyone whose name has 'query'
- POST
  - **/add** &nbsp;&nbsp;&nbsp; => Add the posted data into the database and returns added details as acknowledgement.
- UPDATE
  - **/update/:id** &nbsp;&nbsp;&nbsp; => Updates the details of person with Id as 'id'.
- DELETE
  - **/delete/:id** &nbsp;&nbsp;&nbsp; => deletes the deatails of the person with Id as id
  - **/deleteAll** &nbsp;&nbsp;&nbsp; => deletes every record in the table.
