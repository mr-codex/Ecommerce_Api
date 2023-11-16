# ECommerce API
### Introduction

Eommcerce API is an API for an ecommerce platform admin to manage product inventory

### Support Features

* ADD a product 
    *  request:<br>
       &emsp; product: { <br>
         &emsp;   &emsp;  name: laptop,<br>
         &emsp;   &emsp;  quantity: 10<br>
         &emsp;  }
    * response:<br>
           &emsp;  data: {<br>
          &emsp; &emsp;   &emsp;   product: {<br>
        &emsp;  &emsp;   &emsp;   &emsp;  name: laptop,<br>
        &emsp;   &emsp;   &emsp;   &emsp; quantity: 10<br>
           &emsp;   &emsp;   }<br>
        &emsp;    }
<br>
<br>


* Get all products
    * response:<br>
        &emsp;    data: { <br>
        &emsp; &emsp;   &emsp; products: [ <br>
        &emsp;&emsp; &emsp;   &emsp;   { <br>
         &emsp;  &emsp;&emsp; &emsp;   &emsp;  id: 1, <br>
         &emsp;  &emsp;&emsp; &emsp;   &emsp;name: laptop <br>
         &emsp;  &emsp;&emsp; &emsp;   &emsp;quantity: 10 <br>
   &emsp;&emsp; &emsp;   &emsp; }, <br>
        &emsp;  &emsp;&emsp; &emsp;   &emsp; { <br>
     &emsp;  &emsp;  &emsp;&emsp; &emsp;   &emsp;    id: 2, <br>
    &emsp;   &emsp;  &emsp;&emsp; &emsp;   &emsp;   name: camera <br>
  &emsp;    &emsp;  &emsp;&emsp; &emsp;   &emsp;    quantity: 5 <br>
         &emsp;  &emsp;&emsp; &emsp;   &emsp;}, <br>

    &emsp;&emsp; &emsp;   &emsp;   ] <br>
&emsp; &emsp;   &emsp;   } 
<br>
<br>



* Delete a product
    *  response:<br>
    &emsp;data: {<br>
   &emsp; &emsp;message: “product deleted”<br>
  &emsp;  }

<br>
<br>


* UpdateProduct product quantity
     * response : <br>
           &emsp;    data: {<br>
        &emsp;   &emsp;   product: {<br>
         &emsp;   &emsp;   &emsp;  id: 1,<br>
         &emsp;   &emsp;   &emsp;  name: laptop,<br>
         &emsp;   &emsp;   &emsp;  quantity: 20<br>
         &emsp;   &emsp;  },<br>
       &emsp;   &emsp;    message: updated successfully<br>
        &emsp;   }



### Usage
* Clone git repository in your system :  https://github.com/mr-codex/Ecommerce_Api.git
* Run npm installl to install all the dependencies
* Run npm start to start the application.
* Connect to the API using Postman on port 8000.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /products | To Get all Products|
| POST | /products/create| To add a product |
| POST | /products/:id/update_quantity/?number=10| To Update Product quantity |
| DELETE |  /products/:id|To Delete a product |


### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.