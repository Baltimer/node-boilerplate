let mongoose = require('mongoose');
let validator = require('validator');

let exampleSchema = new mongoose.Schema({
    example: String,
    // another_example: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true,
    //     validate: (value) => {
    //         return validator.isAlphanumeric(value);
    //     }
    // }
});

module.exports = mongoose.model('Example', exampleSchema);

/**
 * Accepted Shcema types:
 *  - Array
 *  - Boolean
 *  - Buffer
 *  - Date
 *  - Mixed* (A generic / flexible data type)
 *  - Number
 *  - ObjectId*
 *  - String
 * 
 *   * Mixed and ObjectId are defined under require(‘mongoose’).Schema.Types
 */