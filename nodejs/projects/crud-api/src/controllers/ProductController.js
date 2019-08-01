const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports= {

    async index(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);            
        } catch (error) {
            return res.send(error);
        }
    },
    
    async show(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            return res.json(product);
        } catch (error) {
            return res.send(error);
        }
    },

    async store(req, res) {
        try {
            const product = await Product.create(req.body);
            return res.json(product);
        } catch (error) {
            return res.send(error);
        }
    },

    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
            return res.json(product);
        } catch (error) {
            return res.send(error);
        }
    },

    async destroy(req, res) {
        try {
            await Product.findByIdAndRemove(req.params.id);
            return res.send();
        } catch (error) {
            return res.send(error);
        }
    }
}