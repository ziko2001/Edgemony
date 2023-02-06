const authorize = (req, res, next) =>{
const {user} = req.query 

if(user === 'zakaria'){
    req.user = {name: 'zakaria'}
    next()
}else{
    console.log(user)
    res.status(401).send('Non sei autorizzato')
}

}

module.exports = authorize