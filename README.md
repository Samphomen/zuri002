
# ZuriUser API
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Node.js](https://img.shields.io/badge/Node.js-339933.svg)

![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg)

![Render](https://img.shields.io/badge/Hosted_on-Render-09B5A5.svg)



Welcome to the ZuriUser API that allows you to **CREATE**, **READ**, **UPDATE** and **DELETE** a person from the database.
This repo was created in line with the Zuri Internships tasks.


## Table Of Contents
- UML and ER Diagramns for resources.
- Standard formats for requests and response.


## UML and ER Diagrams
| Person   | 
| -------- | 
| ID -Pk   |
| Name - String |
|_________________
| Create()  |
| Read() |
| Update() |
| Delete()  |
 

## Standard formats for requests and response.
For additional information regarding the standardized formats for requests and responses, please refer to the documentation available at this
[link](https://documenter.getpostman.com/view/26947782/2s9YC4VtJ2)

## Sample usage of the API.
## Getting Started
Base URL: `https://psilo-zuri-002.onrender.com`

If you are using a local server, the base url will be `http://localhost:5000`.

## API Endpoints
| Endpoint | Functionality | Description | HTTP method |
| --- | --- | --- | --- |
| `/api/` | Create | Create a new person | `POST` |
| `/api/:id` | Read | Get a single person | `GET` |
| `/api/:id` | Update | Update a single person | `PUT` |
| `/api/:id` | Delete | Delete a single person | `DELETE` |

### Create a new person
- Endpoint: `/api`
- HTTP method: `POST`

```json
{
    "name": "Pami",
    "value": "admin4"
}
```
- Example Response(success):
```json
{
    "id": 3,
    "name": "Pami",
    "value": "admin4",
    "updatedAt": "2023-09-13T20:57:28.824Z",
    "createdAt": "2023-09-13T20:57:28.824Z"
}
```


## Retrieve a User by ID
- Endpoint: `/api/:id`
- HTTP method: `GET`
- Description: Get a single person by id
- Example Response(success):
```json
{
    "id": 3,
    "name": "Pami"
}
```
- Example Response(error): -Incase the person is not found
```json
{
    "message": "User not found"
}
```

## Update a User by ID
- Endpoint: `/api/:id`
- HTTP method: `PUT`
- Description: Update a single person by id
- Path Parameter: `id` (type.objectID, required)
- Request body: `name` (string, required)
- Request body example:
```json
{
    "name":"Ishaq"
}
```
- Example Response(success):
```json
{
    "id": 3,
    "name": "Pami"
}
```
- Example Response(error): -Incase the person is not found
```json
{
    "message": "User not found"
}
```
```
## Delete a User by ID
- Endpoint: `/api/:id`
- HTTP method: `DELETE`
- Description: Delete a single person by id
- Path Parameter: `id` (types.objectID, required)
```
- Example Response(error): -Incase the person is not found
```json
{
    "message": "User not found"
}
```
- For additional information regarding the sample usage of this API, please refer to the documentation available at this [link](https://documenter.getpostman.com/view/26947782/2s9YC4VtJ2)