// const express = require('express');
// const cors = require('cors');
// const app = express();

// Use CORS middleware
// app.use(cors({
//   origin: 'http://localhost:3000'  // Allow only your frontend to make requests
// }));

// app.use(cors({origin: true, credentials: true}));

// Your existing routes and other middleware
// app.get('/api/tasks', (req, res) => {
//   res.json({ tasks: [] });
// });

// app.listen(8080, () => {
//   console.log('Server running on port 8080');
// });


//....................................................................

// const cors = require('cors');
// const express = require('express');
// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',  // This ensures your frontend can make requests
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']  // If you use custom headers
// }));

// app.get('/api/tasks', (req, res) => {
//   res.json({ tasks: [] });
// });

// app.listen(8080, () => {
//   console.log('Server running on port 8080');
// });

//.......................................................................


// const express = require('express');
// const cors = require('cors');
// const app = express();

// Use the CORS middleware
// app.use(cors({
//   origin: 'http://localhost:3000',  // Allow only your frontend
//   methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods if necessary
//   credentials: true                 // If you're using cookies or credentials
// }));

// const PORT = process.env.PORT || 3001;  // Change to another port
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//..................................................................................


const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON requests

// Define the /api/tasks route
// app.get('/api/tasks', async (req, res) => {
//   try {
//     const response = await axios.get('http://localhost:8080/api/tasks');
//     res.json(response.data);  // Forward the response from the backend to the frontend
//   } catch (error) {
//     console.error('Error fetching tasks from Spring backend:', error);
//     res.status(500).send('Error fetching tasks');
//   }
// });

// app.get('/api/tasks', async (req, res) => {
//   console.log('Middleware /api/tasks endpoint hit');  // Add this line
//   try {
//     const response = await axios.get('http://localhost:8080/api/tasks');
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching tasks from Spring backend:', error);
//     res.status(500).send('Error fetching tasks');
//   }
// });

// app.listen(3001, () => {
//   console.log('Middleware running on port 3001');
// });

