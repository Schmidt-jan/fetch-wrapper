import {HttpsProxyAgent} from "https-proxy-agent";
import { RequestInfo, RequestInit, Response } from "node-fetch";

const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => fetch(url, init));

export default class NodeWrapper {
    proxyAgent?: HttpsProxyAgent;

    constructor(proxy?: string) {
        if (proxy) {
            this.proxyAgent = new HttpsProxyAgent(proxy)
        }
    }

    async get(url:string, options?: RequestInit): Promise<Response> {
        if (options) {
            return fetch(url, {agent: this.proxyAgent});
        }

        return fetch(url)
    }
}