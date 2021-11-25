const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customersDB = app.data.customers;
    const controller = {};

    const { 
        customers: customersMock
    } = customersDB;

    controller.listCustomers = (req, res) => res.status(200).json(customersDB);

    controller.saveCustomers = (req, res) => {
        customersMock.data.push({
            id: uuidv4(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            email: req.body.email,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        res.status(201).json(customersMock);
    }

    controller.removeCustomers = (req, res) => {
        const {
            customerId,
        } = req.params;

        const foundCustomerIndex = customersMock.data.findIndex(customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message: 'Customer not found.',
                success: false,
                customers: customersMock,
            });
        } else {
            customersMock.data.splice(foundCustomerIndex, 1);
            res.status(200).json({
                message: 'Customer found and deleted with success!',
                success: true,
                customers: customersMock,
            });
        }
    };

    controller.updateCustomers = (req, res) => {
        const {
            customerId,
        } = req.params;


        const foundCustomerIndex = customersMock.data.findIndex(customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message: 'Customer not found.',
                success: false,
                customers: customersMock,
            });
        } else {
            const newCustomer = {
                id: customerId,
                name: req.body.name || customersMock.data[foundCustomerIndex].name,
                birthDate: req.body.birthDate || customersMock.data[foundCustomerIndex].birthDate,
                cellphone: req.body.cellphone || customersMock.data[foundCustomerIndex].cellphone,
                email: req.body.email || customersMock.data[foundCustomerIndex].email,
                createdAt: customersMock.data[foundCustomerIndex].createdAt,
                updatedAt: new Date()
            };

            customersMock.data.splice(foundCustomerIndex, 1, newCustomer);

            res.status(200).json({
                message: 'Customer found and updated with success!',
                success: true,
                customers: customersMock,
            });
        }
    }

    return controller;
}