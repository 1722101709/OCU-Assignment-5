const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connection = require('./db.config.js');

connection.query('SELECT * FROM Person', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Results:', results);
});


// Routing

// GET Request to retrieve whole data from the table
app.get('/', (req, res) => {
  connection.query('SELECT * FROM Person', (err, results) => {
    if (err) {
      console.error('Error while retrieving the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    res.status(200).json(results);
  });
});

// GET Request to retrieve specific row from the table
app.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM Person WHERE Id = ?", [id],(err, results) => {
    if (err) {
      console.error('Error while retrieving the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    res.status(200).json(results);
  });
});

// POST Request to add data into the table
app.post('/add', (req, res) => {
  const data = req.body;
  connection.query('INSERT INTO Person SET ?', data, (err, result) => {
    if (err) {
      console.error('Error while inserting the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    data.Id = result.insertId;
    res.status(200).json(data);
  });
});



// GET the all the data from the table based on Name
app.get('/Name/:query', (req, res) => {
  const query = req.params.query;
  connection.query('SELECT * FROM Person WHERE Name LIKE ?', [`%${query}%`],(err, results) => {
    if (err) {
      console.error('Error while retrieving the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.status(200).json(results);
  });
});


// PUT Request to update the table data through id
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;

  connection.query('UPDATE Person SET ? WHERE Id = ?', [data, id], (err, result) => {
    if (err) {
      console.error('Error while updating the data::', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    connection.query('SELECT * FROM Person WHERE Id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error while retrieving the data after updating:', err);
          res.status(500).json({ error: 'An error occurred' });
          return;
        }
        res.status(200).json(result);
    })

  });
});

// DELETE Request to delete the table data through id
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM Person WHERE Id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error while deleting the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  });
});

// Delete All the data

app.delete('/deleteAll', (req, res) => {
  connection.query('DELETE FROM Person', (err, result) => {
    if (err) {
      console.error('Error while deleting the data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    res.status(200).json({ message: 'All rows deleted successfully' });
  });
});


// set port, listen for requests
const PORT = 1729;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
