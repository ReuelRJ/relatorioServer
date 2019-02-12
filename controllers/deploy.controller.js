const Deploy = require('../models/deploy');


const deployCtrl = {};

deployCtrl.getAllDeploys = async (req, res) => {
    const deploy = await Deploy.find() 
    res.json(deploy);
}

deployCtrl.createDeploy = async (req, res) => {
    const deploy = new Deploy(req.body)
    await deploy.save();
    console.log( req.body);
    res.json({
        status: 'Deploy registrado'
    })
}

deployCtrl.getByid = async (req, res) => {
    const deploy = await Deploy.findById(req.params.id);
    res.json(deploy);
}

deployCtrl.editDeploy = async (req, res) => {
    const { id } = req.params;
    const deploy = {
        emailPO : req.body.emailPO,
        po : req.body.po,
        data : req.body.data,
        servico : req.body.servico,
        status : req.body.status,
        versao : req.body.versao,
        releaseTFS : req.body.releaseTFS,
        obs : req.body.obs
    }
    await Deploy.findByIdAndUpdate(id, {$set: deploy}, {new: true});
    res.json('Deploy atualizado');
}

deployCtrl.deleteDeploy = async (req, res) => {
    await Deploy.findByIdAndRemove(req.params.id)
    res.json({status:"Registro de Deploy Removido"})
}

module.exports = deployCtrl;