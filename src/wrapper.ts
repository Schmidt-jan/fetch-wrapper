import {HttpsProxyAgent} from "https-proxy-agent";
import fetch, {RequestInit, Response} from "node-fetch";

export default class NodeWrapper {
    proxyAgent?: HttpsProxyAgent;

    constructor(proxy?: string) {
        if (proxy) {
            this.proxyAgent = new HttpsProxyAgent(proxy)
        }
    }

    get = (url:string, options?: RequestInit): Promise<Response> => {
        if (options) {
            return fetch(url, {agent: this.proxyAgent});
        }

        return fetch(url)
    }
}