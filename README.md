# Node_Farm_WebApp
Node Farm is a simple web application built using Node.js that displays information about various products in a farm. It includes overview, product details, and API endpoints to retrieve product data.

## Project Structure

The project structure is organized as follows:
- `index.js`: The main Node.js file that sets up the server and handles routing.
- `package.json`: The project's package configuration file with dependencies and scripts.
- `render.yaml`: Configuration file for deploying the project (if applicable).
- `dev-data/data.json`: Contains sample data about farm products in JSON format.
- `templates/template-card.html`: HTML template for displaying individual product cards.
- `templates/template-overview.html`: HTML template for the overview page with all product cards.
- `templates/template-product.html`: HTML template for displaying detailed information about a single product.

## How to Run

1. Clone the repository:

```sh
git clone https://github.com/yourusername/node-farm.git
```

2. Navigate to the project directory:

```sh
cd node-farm
```

3. Install dependencies:

```sh
npm install
```

4. Run the application:

```sh
node index.js
```

5. Open a web browser and visit `http://localhost:4000` to see the Node Farm application in action.

## Features

- Overview Page: Displays a list of product cards.
- Product Page: Displays detailed information about a selected product.
- API Endpoint: Provides product data in JSON format via the `/api` route.

## Usage

- Visit the homepage `/overview` to see the list of products.
- Click on a product card to view detailed information on the product page.
- You can also access the product data in JSON format via the `/api` route.

## Customization

You can customize the templates and data in the following ways:

- Modify the `data.json` file in the `dev-data` directory to add, update, or remove products.
- Adjust the HTML templates in the `templates` directory to change the appearance of the pages.
