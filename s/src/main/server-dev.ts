import { FastifyPluginAsync, fastify as _fastify } from 'fastify'
//import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload'
import { RequestContext } from '@mikro-orm/core'

import { getMikroOrmConfig } from '../conf/mikroorm-config'
import { initORM } from '../lib/model'

export interface TBootstrapOptions {
    port: number
}

export async function bootstrap({port}:TBootstrapOptions= {port:3001}){
    const model= await initORM(getMikroOrmConfig())
    const srv= _fastify()

    // register request context hook
    srv.addHook('onRequest', (req, rep, done) => {
        RequestContext.create(model.orm.em, done)
    })

    // shut down the connection when closing the app
    srv.addHook('onClose', async () => {
        await model.orm.close()
    })

    // srv.get('/article', async request => {
    //     const { limit, offset } = request.query as { limit?: number; offset?: number };
    //     const [items, total] = await db.article.findAndCount({}, {
    //     limit, offset,
    //     });

    //     return { items, total };
    // });

    const url = await srv.listen({ port })

    return { srv, url }
}