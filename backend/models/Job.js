const mongoose = require("mongoose");



const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    lastDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Job", JobSchema);





