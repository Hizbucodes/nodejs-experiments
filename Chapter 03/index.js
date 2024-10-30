const fs = require("fs");
const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);

    console.log(parsedURL);

    const products = fs.readFileSync("./product.json", "utf-8");

    if (
      parsedURL.pathname === "/products" &&
      req.method === "GET" &&
      parsedURL.query.id == undefined
    ) {
      res.end(products);
    } else if (
      parsedURL.pathname === "/products" &&
      req.method === "GET" &&
      parsedURL.query.id != undefined
    ) {
      const productArray = JSON.parse(products);
      let product = productArray.find((product) => {
        return product.id == parsedURL.query.id;
      });

      if (product != undefined) {
        res.end(JSON.stringify(product));
      } else {
        res.end(JSON.stringify({ message: "Product Not Found With This ID" }));
      }
    } else if (
      parsedURL.pathname === "/product" &&
      req.method === "POST" &&
      parsedURL.query.id == undefined
    ) {
      let product = "";

      req.on("data", (chunk) => {
        product += chunk;
      });

      req.on("end", () => {
        let productArray = JSON.parse(products);
        let newProducts = JSON.parse(product);

        productArray.push(newProducts);

        fs.writeFile("./product.json", JSON.stringify(productArray), (err) => {
          if (err == null) {
            res.end(
              JSON.stringify({ message: "Product created successfully" })
            );
          } else {
            res.end(
              JSON.stringify({
                message: "Cannot Create product, Something went wrong",
              })
            );
          }
        });
      });
    }
  })
  .listen(8000);
