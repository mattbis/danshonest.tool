import { SqliteDriver } from '@mikro-orm/sqlite'
import { EntityManager, EntityRepository, MikroORM, type Options } from '@mikro-orm/sqlite'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
// future enhancements 
/*
    autoLoadEntities: true,
    type: 'sqlite',
    metadataProvider: ReflectMetadataProvider
    highlighter: new SqlHighlighter(),
    extensions: [SeedManager, Migrator],
*/

// return SQLite configuration
export function getMikroOrmConfig():Options {
    return {
        entities: [
            'dist/modules/**/*.entity.js'
        ],
        entitiesTs: [
            'modules/**/*.entity.ts'
        ],
        dbName: 'var/db/danshonest.sqlite3',
        baseDir: __dirname,
        debug: true,
        driver: SqliteDriver,
        metadataProvider: TsMorphMetadataProvider
    }
}
