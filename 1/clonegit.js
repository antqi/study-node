const { promisify } = require('util')

const repo = {
  source: 'github:vuejs/vue',
  target: 'test'
}
clone(repo)

async function clone(repo) {
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`${repo.source} downloading......`)
  process.start()
  try {
    await download(repo.source, repo.target)
    process.succeed()
  } catch (error) {
    process.fail()
  }
}
