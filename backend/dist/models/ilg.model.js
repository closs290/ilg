"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ILGSchema = new mongoose_1.Schema({
    language: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    phrases: {
        type: Array
    },
    freeTranslation: {
        type: String
    }
});
exports.ILGs = mongoose_1.model('ILG', exports.ILGSchema);
