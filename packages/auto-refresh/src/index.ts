import * as chokidar from 'chokidar'
import { program } from 'commander'
import { type WebSocket, WebSocketServer } from 'ws'

/**
 * Adapted from: https://github.com/souporserious/next-remote-refresh/blob/60387a25fa3183b65834844b5ccf0d9ebde2991b/server.js
 */
program.argument('<path>', 'Path to watch').action(async (path: string) => {
  const createServer = () => {
    const wss = new WebSocketServer({ port: 5500 })

    let sockets: WebSocket[] = []

    const watcher = chokidar
      .watch(path, {
        cwd: process.cwd(),
        ignoreInitial: true
      })
      .on('all', (_, filePath) => {
        console.log(`[auto-refresh]: ${filePath} updated`)
        for (const socket of sockets) socket.send('refresh')
      })

    return wss
      .on('listening', () => {
        console.log(
          `[auto-refresh]: server is listening on port ${wss.options.port}`
        )
      })
      .on('error', console.error)
      .on('connection', (ws) => {
        sockets.push(ws)
        ws.on('close', () => {
          sockets = sockets.filter((socket) => socket !== ws)
        })
      })
      .on('close', () => {
        watcher.close()
      })
  }

  const server = createServer()

  await new Promise((resolve, reject) => {
    server.on('listening', resolve)
    server.on('error', reject)
    server.on('close', reject)
  })
})

program.parse(process.argv)
