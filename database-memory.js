<<<<<<< HEAD
import { randomUUID } from 'node:crypto'

export class DataBaseMemory {
    #videos = new Map()

    // Set -> Quase array, mas não aceita valores duplicados

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) =>{
            const id = videoArray[0]
            const data = videoArray[1]

            return{
                id,
                ...data
            }
        })
        .filter(video =>{
            if(search){
                return video.title.includes(search)
            }
            return true
        })
    
    }

    create(video) {
        const videoID = randomUUID() // Retorna um ID unico

        this.#videos.set(videoID, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
=======
import { randomUUID } from 'node:crypto'

export class DataBaseMemory {
    #videos = new Map()

    // Set -> Quase array, mas não aceita valores duplicados

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) =>{
            const id = videoArray[0]
            const data = videoArray[1]

            return{
                id,
                ...data
            }
        })
        .filter(video =>{
            if(search){
                return video.title.includes(search)
            }
            return true
        })
    
    }

    create(video) {
        const videoID = randomUUID() // Retorna um ID unico

        this.#videos.set(videoID, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
>>>>>>> e37509b (Api Node com Postgres)
}