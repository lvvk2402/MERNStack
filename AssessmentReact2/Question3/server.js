const express = require('express');
const app = express();
const productRouter = require('./productRouter'); // Import your product router

app.use('/api/products', productRouter); // Use the product router

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
