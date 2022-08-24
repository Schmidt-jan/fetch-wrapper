import { HttpsProxyAgent } from "https-proxy-agent";
const fetch = (url, init) => import("node-fetch").then(({ default: fetch }) => fetch(url, init));
export default class NodeWrapper {
    constructor(proxy) {
        if (proxy) {
            this.proxyAgent = new HttpsProxyAgent(proxy);
        }
    }
    async get(url, options) {
        if (options) {
            return fetch(url, { agent: this.proxyAgent });
        }
        return fetch(url);
    }
}
//# sourceMappingURL=wrapper.js.map