import { type IGitHubRepos } from '../models/IGitHubRepos'
import { BaseService } from './base'

export class GitHubAPI {
    private service = new BaseService('https://api.github.com')

    constructor(private userName: string) {}

    public getRepos = async () => (await this.service.get<IGitHubRepos[]>(`users/${this.userName}/repos`)).filter(r => r.visibility === 'public')
}