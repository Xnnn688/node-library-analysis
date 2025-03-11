// 引入所需的模块
import Koa from 'koa'
import { koaBody } from 'koa-body'
import Router from 'koa-router'
import cors from '@koa/cors'
import { analysis } from './analysis'

const app = new Koa()
const router = new Router()

// 使用 koa-body 中间件来处理文件上传
app.use(koaBody({ multipart: true, json: true }))

app.use(cors())

app.use('/analysis', analysis)

app.use(router.routes()).use(router.allowedMethods())

export default app
