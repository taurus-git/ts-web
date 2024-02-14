const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Добавление пользовательского middleware для CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // Разрешить запросы только с этого источника
    res.header('Access-Control-Allow-Headers', '*') // Разрешить все заголовки
    next()
})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
