const mongoose = require('mongoose');
const { Schema }  = mongoose;

const deploySystemSchema = new Schema ({
    emailPO: {type: String, require: false},
    po: {type: String, require: false},
    data: {type: String, require: false},
    servico: {type: String, require: false},
    status: {type: Boolean, require: false},
    versao: {type: String, require: false},
    releaseTFS: {type: Number, require: false},
    obs: {type: String, require: false}
},{collection: 'deploySystem'}
);

module.exports =  mongoose.model('deploy', deploySystemSchema);