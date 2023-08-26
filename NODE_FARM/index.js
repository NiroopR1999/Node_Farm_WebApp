// Importing the required modules
const http = require("http"); // Module for creating an HTTP server
const fs = require("fs"); // Module for file system operations
const url = require("url"); // Module for parsing URLs
const PORT = process.env.PORT || 4000;

// Reading template files and data file synchronously
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf8");
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");

// Parsing the JSON data from the data file
const dataObj = JSON.parse(data);

// Function to replace placeholders in the template with actual data
const replaceTemplate = (template, product) => {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  return output;
}

// Creating an HTTP server
http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true); // Parsing request URL

  // Handling different routes based on the pathname
  if (pathname === "/overview" || pathname === "/") {
    // Generating HTML for the overview page
    const cardHtml = dataObj.map(e => replaceTemplate(tempCard, e)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(output);
  } else if (pathname === "/product") {
    // Generating HTML for the product page based on query parameter
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(output);
  } else if (pathname === "/api") {
    // Sending JSON data for the API page
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    // Handling not found pages
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Server Error");
  }
})
// Listening on port 4000 and IP address 127.0.0.1
.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listening on port ${PORT}`);
});
