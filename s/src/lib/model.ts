import { 
    EntityManager, 
    EntityRepository, 
    MikroORM, 
    Options 
} from '@mikro-orm/sqlite'

export interface Model {
    orm: MikroORM
    em: EntityManager
    dataSource: EntityRepository<DataSource>
    transform: EntityRepository<Transform>
    //tag: EntityRepository<Tag>
}

let cache: Model

export async function initORM(options: Options) {
    if (cache) return cache
    
    const orm = await MikroORM.init(options)
    
    // save to cache before returning
    cache = {
        orm,
        em: orm.em,
        dataSource: orm.em.getRepository(DataSource),
        transform: orm.em.getRepository(Transform),
        //tag: orm.em.getRepository(Tag),
    }

    return cache
}