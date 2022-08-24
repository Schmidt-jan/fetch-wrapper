import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";
export default class NodeWrapper {
    constructor(proxy) {
        this.get = (url, options) => {
            if (options) {
                return fetch(url, { agent: this.proxyAgent });
            }
            return fetch(url);
        };
        if (proxy) {
            this.proxyAgent = new HttpsProxyAgent(proxy);
        }
    }
}
//# sourceMappingURL=wrapper.js.map