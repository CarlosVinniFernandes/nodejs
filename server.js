// import { createServer } from 'node:http'

// const server = createServer((request, response) =>{
//     response.write("ao")

//     return response.end()
// })

// server.listen(3333)

// GET -> Buscar operação
// POST -> Criar operação
// PUT -> Alteração
// DELETE 
// PATCH -> Atualizar uma pequena informação

import { fastify } from 'fastify'
// import { DataBaseMemory } from './database-memory.js'
import { DataBasePostgres } from './database-postgres.js'

const server = fastify()

// const database = new DataBaseMemory()
const database = new DataBasePostgres()

// Request Body

server.post('/videos', async (request, reply) =>{
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,
    })
    

    return reply.status(201).send()
})

server.get('/videos', async (request) =>{
    const search = request.query.search
        
    const videos = await database.list(search)

    return videos
})

// Route Parameter, quando eu usar o put, devo colocar o ID
server.put('/videos/:id', async(request, reply) =>{
    const videoID = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoID,{
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) =>{
    const videoID = request.params.id

    await database.delete(videoID)

    return reply.status(204).send()
})

server.listen({
    port: process.env.PORT ?? 3333,
})