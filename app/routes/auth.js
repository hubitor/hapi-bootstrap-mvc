const loginCtrl = fw.getController('auth');

module.exports =
[
    { 
        method: 'GET', path: '/login', options: 
        { 
            handler: loginCtrl.render, 
            auth: { mode: 'try' }, 
            plugins: { 'hapi-auth-cookie': { redirectTo: false } }
        } 
    },
    { 
        method: 'POST', path: '/auth', options: 
        { 
            handler: loginCtrl.login, 
            auth: { mode: 'try' }, 
            plugins: { 'hapi-auth-cookie': { redirectTo: false } },
            tags: ['api'],
            validate: 
            {
                payload: 
                {
                    email: fw.param.string().required(),
                    password: fw.param.string().required()
                }
            }
        } 
    },
    { 
        method: 'GET', path: '/logout', options: 
        { 
            handler: loginCtrl.logout
        } 
    }        
];