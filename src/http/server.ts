import fastify from "fastify";

const app = fastify()

app.get('/hello', (req, res) => {
    
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!');
})