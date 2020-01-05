import * as core from '@actions/core'
import {promisify} from 'util'
import {exec} from 'child_process'

async function run(): Promise<void> {
  try {
    const projectPath: string = core.getInput('project-path')
    await promisify(exec)(`dotnet test ${projectPath}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
