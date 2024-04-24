import {bootstrap} from './server-dev'

bootstrap().catch(err => {
    console.error(err)
    process.exit(1)
})