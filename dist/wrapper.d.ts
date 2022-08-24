import { HttpsProxyAgent } from "https-proxy-agent";
import { RequestInit, Response } from "node-fetch";
export default class NodeWrapper {
    proxyAgent?: HttpsProxyAgent;
    constructor(proxy?: string);
    get(url: string, options?: RequestInit): Promise<Response>;
}
