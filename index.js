import open, {openApp, apps} from 'open'

const FIREFOX= {app: {name: 'firefox'}}
//(async function() {
    // todo --firefox, --chrome, --opera, --edge
    await open('http://localhost:3001', FIREFOX)
    await open('http://localhost:4200', FIREFOX)
//})()
