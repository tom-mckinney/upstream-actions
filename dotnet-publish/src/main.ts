import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as io from '@actions/io'

async function run(): Promise<void> {
  try {
    core.info(core.getState('github.ref'))
    core.info(core.getInput('github.ref'))
    const projectPath = core.getInput('project-path')
    const dotnetPath = await io.which('dotnet')
    await exec.exec(dotnetPath, ['test', projectPath])
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
