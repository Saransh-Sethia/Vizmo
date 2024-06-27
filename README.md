# Vizmo

## Blogging Platform
This is a RESTful API which is used for managing a Blog Platform by wich users can Create a Blog, Get all Blogs, Get a Single Blog, Update a Blog , Delete a Blog and Filter a Blog. 

## Technologies Used
*  **Node.js**: Runtime environment for the backend.
* **Express**: Framework used to build the API.
* **MongoDB**: Database to store task data.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
* **Render**: Hosting platform where the API is deployed.

## Testing Framework
 **POSTMAN**

## API Endpoints
Below are the available routes within this API:

* ### REGISTER USER
    **POST**  `/api/auth/register`
     
     * Used to create a new user provided with username, preferences and watchHistory

     * ### BODY
      {
      "username" : Give any username here
      "Email" : Give any Email here
      "Password" : Set the password for a particular User

*  ### LOGIN USER
     **POST** `/api/auth/login`

     * Used to login an already registerd user provided with email and password

     * ### BODY
             {
                "Email" : "Give the already registered Email Id",
                "Password" : Give the password as set during registering the user
             }

* ### Create a Blog
   **POST**  `/api/blogs`

   * Used to create a Blog for Logged In users
   * We have to enter the token in the Authrorization key of the Header section in Postman.

            {
              Authorization : Bearer token
            }

   * ### BODY
            {
              "title" : Give a Blog title,

              "content" : Give specific content for the blog
              mentioned,
            }

* ### List All Blogs
   **GET** `/api/blogs`

   * Retrieves all the blogs stored in the database for a particular User.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### List a Single Blog

   **GET** `/api/blogs/:id`

   * Retrieve a Single Blog by giving the respective Blog ID.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }


* ### UPDATE a Blog
   **PUT** `/api/blogs/:id`

   * Update a Blog with a specific ID.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

     
* ### Delete a Blog
   **DELETE** `/api/blogs/:id`

   * Deletes a Blog with a specific ID.
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }

* ### Filter a Blog
   **GET** `/api/blogs/?title=title`
   **GET** `/api/blogs/?author=author`

   * Filter the blogs according to title and author
   * We have to enter the token in the Authrorization key of the Header section in Postman.
   
            {
              Authorization : Bearer token
            }
