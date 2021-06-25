// const env = 'local'
const env ='prod'

let DOMAIN = 'http://localhost:8080'
if(env === 'prod') {
    DOMAIN = 'https://displaynews-app-server.herokuapp.com'
} 

export {DOMAIN};
