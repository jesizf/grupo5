const fs = require('fs');
const path = require('path');
const bcrypt=require('bcryptjs');
const users=require(path.join(__dirname,'../data/users.json'))

module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        register: (req, res) => {
            return res.render('register',{title: 'register'})
        },
        processRegister : (req,res) => {
            const {nombre, apellido,email,pass} = req.body;
                let user = {
                    id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
                    name : nombre.trim(),
                    apellido : apellido.trim(),
                    email : email.trim(),
                    password : bcrypt.hashSync(pass,10),
                    avatar : 'default.png',
                    rol : "user"
                }
                users.push(user);
                fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
                return res.redirect('/')
                /*
                req.session.userLogin = {
                    id : user.id,
                    name : user.name,
                    avatar : user.avatar,
                    rol : user.rol
                }
                
                return res.redirect('/')
            }else{
                return res.render('register',{
                    errores : errors.mapped(),
                    old : req.body
                })
            }
          
        },return res.send(req.body)}*/
    }}
