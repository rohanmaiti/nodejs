# POSTGRES SQL
* LIFE CYCLE OF A SQL DB
- 1. Bring your DB
- 2. Tell the schema
- 3. Put data 
- 4. Update data

# you can put data in a sql database using a nodejs application, java application, golang application, via terminal.... etc

# lets see how to use sql data base using terminal 
- 1. step1: Running the database
- 2. Using a library that lets you connect and put data in it 
- 3. creating a table and defining it's schema
- 4. Run quires on the database to interact with the data (insert update  and delete)


# what is sql injection ?
>>  login data ------>   BE server ---- storing the data directly to DB -----> DB
    so user can update your SQL data base
# below is the wrong way of inserting data into database
async function insertData({ username, email, password }) {
  await client.connect();
  const insertQuery = `
  INSERT INTO users (username, email, password) VALUES (`${username}`, `${email}`, `${password}`)
  `;
  const res = await client.query(insertQuery);
  console.log("Insertion success:", res);
}

# below is the right way of inserting data into database
async function insertData({ username, email, password }) {
  await client.connect();
  const insertQuery = `
  INSERT INTO users (username, email, password) VALUES ($1, $2, $3)
  `;
  const res = await client.query(insertQuery, [username, email, password]);
  console.log("Insertion success:", res);
}

# Relationship and Transactions
- * Foreign Key
- * Joining two table is hard 
