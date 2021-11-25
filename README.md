# noodle

## Requiriments 
 - [Node](https://nodejs.org/en/)
 - [Npm](https://www.npmjs.com/)

## First steps:
 - Run `npm -i`

 A local server will be run on port 3030.


## To list customers

URL: `http://localhost:3030/api/v1/customers` 

Method: GET

## To insert customer

URL: `http://localhost:3030/api/v1/customers` 

Method: POST

Body: 
```
{
    "name": "Filipe Siciliano",
    "birthDate": "11/09/1985",
    "email": "filipesiciliano@gmail.com",
    "cellphone": "(21) 98037-6116"
}
```

## To update customer

URL: `http://localhost:3030/api/v1/customers/:customerID` 

Method: PUT

Body: 
```
{
    "name": "Filipe Marino"
}
```

## To delete customer

URL: `http://localhost:3030/api/v1/customers/:customerID` 

Method: DELETE