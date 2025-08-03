import { type IGitHubRepo } from '../models/IGitHubRepo'
import { BaseService } from './base'
import { LocalStorageHelper } from '../helpers/localStorage';

type LSRespObj = {
    lastFetched: Date,
    repos: IGitHubRepo[]
}

export class GitHubAPI {
    private service = new BaseService('https://api.github.com')
    private LSRepos: LocalStorageHelper<LSRespObj>

    constructor(private userName: string) {
        this.LSRepos = new LocalStorageHelper<LSRespObj>(`${userName}-repos`.toLowerCase(), (d: LSRespObj | undefined) => {if (d) return {...d, lastFetched: new Date(d.lastFetched)} satisfies LSRespObj as LSRespObj})
    }

    public getRepos = async () => {
        const respObj = this.LSRepos.get()

         return respObj && respObj.lastFetched.getDay() <= new Date(Date.now() + (864 * 10 ** 5)).getDay() ? respObj.repos : (async () => {
                const repos = (await this.service.get<IGitHubRepo[]>(`users/${this.userName}/repos`)).filter(r => r.visibility === 'public') ?? []

                if (repos.length > 0) this.LSRepos.set({lastFetched: new Date(), repos} satisfies LSRespObj as LSRespObj)

                return repos
            })()
    }
}