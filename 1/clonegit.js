const download = require('download-git-repo')
const ora = require('ora')
const repo = {
  source: 'github:vuejs/vue',
  target: 'test'
}
const process = ora(`${repo.source} download......`)

process.start()

download(repo.source, repo.target, err => {
  err ? process.fail() : process.succeed()
})
