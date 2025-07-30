export class LocalStorageHelper<T> {
    
    constructor(private key: string, private transformStringData = (v: T | undefined): T | undefined => {if (v) return this.transformStringData(v) as T}) {}

    private inBrowser = () => typeof localStorage !== 'undefined'

    public get = () => !this.inBrowser() ? undefined : this.transformStringData((v => !v ? undefined : JSON.parse(v) as T)(localStorage.getItem(this.key)))
    
    public set(value: T) {
        if (this.inBrowser()) localStorage.setItem(this.key, JSON.stringify(value)) 
    }
}