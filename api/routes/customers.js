module.exports =  app => {
    const controller = app.controllers.customers;
    
    app.route('/api/v1/customers')
        .get(controller.listCustomers)
        .post(controller.saveCustomers);

    app.route('/api/v1/customers/:customerId')
        .delete(controller.removeCustomers)
        .put(controller.updateCustomers);
}