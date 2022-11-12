import express, { Application } from 'express'

const app: Application = express()
const port: string = process.env.PORT || '3000'

app.set('port', port)

export default app