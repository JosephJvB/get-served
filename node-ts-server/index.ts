// ts clone of node-server/index.js
// there has to be a better way to do this, but I wont spend time on it now.
import * as express from 'express'
import { Request, Response } from 'express'
import { join } from 'path'
const app: express.Application = express()

// careful: this route is relative to dist/ dir. Not index.ts
const staticFilePath: string = join(__dirname + '../../../static')

app.use(express.static(staticFilePath, {
  /* https://expressjs.com/en/4x/api.html#express.static adding this for education's sake
  maxAge: 9000, ms
  setHeaders: {headers Object},
  redirect: true*/
}))

app.get('*', (req: Request, res: Response): void => {
  res.sendFile(staticFilePath, 'index.html')
})

app.listen(3003)