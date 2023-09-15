/**
 * Surffy NetFunnel Web Agent
 * 
 * @Version 1.4.5
 * @author jhh@stclab.com
 * @branch dev
 * @Tagcode
    (function(w,d,s,uri,fn){
        w[fn] = w[fn] || function(){ var c = {}; c.tenantApiUrl = arguments[0]; c.tenantNFUrl = arguments[1]; (w[fn].l = w[fn].l || []).push(c); };
        var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.charset = 'utf-8'; o.src = uri; p.parentNode.insertBefore(o,p);
    })(window,document,'script','https://dev-agent-lib.surffy.io/netfunnel-latest.min.js','nfTag');
    nfTag('https://nf-setting.api.surffy.io/id/nf-setting.json', 'https://tenant.nf.surffy.io');
 */

chrome.storage.local.get("tenantKey", ({ tenantKey }) => {

    if (tenantKey !== "") {
        console.log("storage.local.get tenantKey ? ", tenantKey)

        window.tenantKey = tenantKey;
        var tenantKey = window.tenantKey;
        window['nfTag'] = window['nfTag'] || function () { var c = {}; c.tenantApiUrl = arguments[0]; c.tenantNFUrl = arguments[1]; (window['nfTag'].l = window['nfTag'].l || []).push(c); };
        nfTag(`https://nf-setting.surffy.io/${tenantKey}/nf-setting.json`, `https://${tenantKey}.surffy.io`);

        /*
            STCLab NetFUNNEL agent JS Script
        */
    }
    else {
        console.log("Please enter your tenant ID");
    }

})