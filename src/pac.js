/*
  Installing/using this software, you agree that this software is
  only for study purposes and its authors and service providers  
  take no responsibilities for any consequences.
*/
function _check_regex_list(i, o) {
    ":80/" === o.slice(0, 4) && (o = o.slice(3));
    for (var c = 0; c < i.length; c++)
        if (i[c].test(o)) return !0;
    return !1
}

function _check_patterns(i, o, c, m) {
    return !(!i.hasOwnProperty(o) || !_check_regex_list(i[o], c.slice(m + o.length))) || !!_check_regex_list(i.any, c.slice(m))
}

function _find_proxy(i, o, c, m) {
    return _check_patterns(i.white, o, c, m) ? "DIRECT" : _check_patterns(i.proxy, o, c, m) ? _proxy_str : "DIRECT"
}

function FindProxyForURL(i, o) {
    var c = i.slice(0, 6);
    return "http:/" === c ? _find_proxy(_http_map, o, i, 7) : "https:" === c ? _find_proxy(_https_map, o, i, 8) : "DIRECT"
}
var _http_map = {
        white: {
            any: [],
            "bangumi.bilibili.com": [/^\/index\/ding\-count\.json$/i]
        },
        proxy: {
            any: [/^[^\/]*\.cupid\.iqiyi\.com\//i, /^[^\/]*\.video\.qq\.com\//i, /^[^\/]*\.dpool\.sina\.com\.cn\//i, /^[^\/]*\.letv\.com\//i, /^[^\/]*\.api\.tv\.itc\.cn\//i, /^[^\/]*\.letv\.cn\//i, /^[^\/]*\.ssports\.com\//i],
            "acs.youku.com": [/^\//i],
            "pl-ali.youku.com": [/^\//i],
            "list.youku.com": [/^\//i, /^\//i, /^\//i, /^\//i],
            "api.youku.com": [/^\//i],
            "play.youku.com": [/^\//i],
            "play-dxk.youku.com": [/^\//i],
            "play-ali.youku.com": [/^\//i],
            "ups.youku.com": [/^\//i],
            "video.tudou.com": [/^\//i],
            "www.tudou.com": [/^\//i, /^\//i, /^\//i, /^\//i, /^\//i, /^\//i, /^\//i],
            "s.plcloud.music.qq.com": [/^\//i],
            "i.y.qq.com": [/^\//i, /^\//i],
            "c.y.qq.com": [/^\//i, /^\//i],
            "api.unipay.qq.com": [/^\//i],
            "hot.vrs.sohu.com": [/^\//i],
            "live.tv.sohu.com": [/^\//i],
            "pad.tv.sohu.com": [/^\//i],
            "my.tv.sohu.com": [/^\//i],
            "hot.vrs.letv.com": [/^\//i],
            "api.le.com": [/^\//i],
            "player.pc.le.com": [/^\//i],
            "player-pc.le.com": [/^\//i],
            "data.video.qiyi.com": [/^\//i, /^\//i, /^\//i],
            "data.video.iqiyi.com": [/^\//i, /^\//i, /^\//i],
            "cache.vip.qiyi.com": [/^\//i],
            "cache.video.qiyi.com": [/^\//i],
            "cache.vip.iqiyi.com": [/^\//i],
            "cache.video.iqiyi.com": [/^\//i],
            "iplocation.geo.qiyi.com": [/^\//i, /^\//i],
            "iplocation.geo.iqiyi.com": [/^\//i],
            "v.api.hunantv.com": [/^\//i, /^\//i],
            "mobile.api.hunantv.com": [/^\//i, /^\//i],
            "v.api.mgtv.com": [/^\//i],
            "pcweb.api.mgtv.com": [/^\//i],
            "acc.music.qq.com": [/^\//i],
            "182.254.116.117": [/^\//i],
            "api.appsdk.soku.com": [/^\//i],
            "app.bilibili.com": [/^\//i, /^\//i],
            "bangumi.bilibili.com": [/^\//i, /^\//i, /^\//i],
            "122.72.82.31": [/^\//i],
            "211.151.158.155": [/^\//i],
            "info.zb.qq.com": [/^\//i],
            "info.zb.video.qq.com": [/^\//i],
            "qzs.qq.com": [/^\//i],
            "vd.l.qq.com": [/^\//i],
            "vi.l.qq.com": [/^\//i],
            "dispatcher.video.sina.com.cn": [/^\//i],
            "geo.js.kankan.com": [/^\//i],
            "web-play.pptv.com": [/^\//i],
            "v.pptv.com": [/^\//i],
            "web-play.pplive.cn": [/^\//i],
            "tools.aplusapi.pptv.com": [/^\//i],
            "live.pptv.com": [/^\//i],
            "dyn.ugc.pps.tv": [/^\//i],
            "v.pps.tv": [/^\//i],
            "inner.kandian.com": [/^\//i],
            "ipservice.163.com": [/^\//i],
            "so.open.163.com": [/^\//i],
            "zb.s.qq.com": [/^\//i],
            "ip.kankan.com": [/^\//i],
            "vxml.56.com": [/^\//i],
            "music.sina.com.cn": [/^\//i, /^\//i],
            "play.baidu.com": [/^\//i],
            "v.iask.com": [/^\//i, /^\//i],
            "tv.weibo.com": [/^\//i],
            "wtv.v.iask.com": [/^\//i, /^\//i, /^\//i],
            "video.sina.com.cn": [/^\//i],
            "www.yinyuetai.com": [/^\//i, /^\//i],
            "www.kugou.com": [/^\//i],
            "www.kuwo.cn": [/^\//i],
            "antiserver.kuwo.cn": [/^\//i],
            "ipcheck.kuwo.cn": [/^\//i],
            "api.letv.com": [/^\//i, /^\//i, /^\//i, /^\//i, /^\//i, /^\//i],
            "api.www.letv.com": [/^\//i],
            "st.live.letv.com": [/^\//i],
            "live.gslb.letv.com": [/^\//i, /^\//i],
            "live.g3proxy.lecloud.com": [/^\//i],
            "api.live.letv.com": [/^\//i],
            "static.itv.letv.com": [/^\//i],
            "ip.apps.cntv.cn": [/^\//i],
            "vdn.apps.cntv.cn": [/^\//i, /^\//i, /^\//i, /^\//i, /^\//i],
            "vdn.live.cntv.cn": [/^\//i, /^\//i],
            "cctv1.vtime.cntv.cloudcdn.net": [/^\//i],
            "cctv5.vtime.cntv.cloudcdn.net": [/^\//i],
            "cctv5plus.vtime.cntv.cloudcdn.net": [/^\//i],
            "cctv13.vtime.cntv.cloudcdn.net": [/^\//i],
            "sports1pull.live.wscdns.com": [/^\//i],
            "vip.sports.cntv.cn": [/^\//i, /^\//i, /^\//i],
            "211.151.157.15": [/^\//i],
            "www.youku.com": [/^\//i],
            "www.soku.com": [/^\//i],
            "search.api.3g.youku.com": [/^\//i],
            "search.api.3g.tudou.com": [/^\//i],
            "api.tv.sohu.com": [/^\//i, /^\//i],
            "ac.qq.com": [/^\//i, /^\//i, /^\//i],
            "live.api.hunantv.com": [/^\//i],
            "www.qie.tv": [/^\//i],
            "www.bilibili.com": [/^\//i, /^\//i],
            "interface.bilibili.com": [/^\//i, /^\//i],
            "m10.music.126.net": [/^\//i],
            "douban.fm": [/^\//i],
            "www.xiami.com": [/^\//i, /^\//i, /^\//i],
            "lixian.xunlei.com": [/^\//i],
            "lixian.vip.xunlei.com": [/^\//i],
            "dynamic.cloud.vip.xunlei.com": [/^\//i],
            "cloud.vip.xunlei.com": [/^\//i],
            "www.iqiyi.com": [/^\//i],
            "36.110.222.105": [/^\//i],
            "36.110.222.119": [/^\//i],
            "36.110.222.146": [/^\//i],
            "36.110.222.156": [/^\//i],
            "123.125.89.6": [/^\//i],
            "123.125.89.101": [/^\//i],
            "123.125.89.102": [/^\//i],
            "123.125.89.103": [/^\//i],
            "123.125.89.157": [/^\//i],
            "123.125.89.159": [/^\//i],
            "123.126.32.134": [/^\//i],
            "123.59.122.75": [/^\//i],
            "123.59.122.76": [/^\//i],
            "123.59.122.77": [/^\//i],
            "123.59.122.104": [/^\//i],
            "111.206.208.36": [/^\//i],
            "111.206.208.37": [/^\//i],
            "111.206.208.38": [/^\//i],
            "111.206.208.61": [/^\//i],
            "111.206.208.62": [/^\//i],
            "111.206.208.163": [/^\//i],
            "111.206.208.164": [/^\//i],
            "111.206.208.166": [/^\//i],
            "111.206.211.145": [/^\//i],
            "111.206.211.146": [/^\//i],
            "111.206.211.147": [/^\//i],
            "111.206.211.148": [/^\//i],
            "111.206.211.129": [/^\//i],
            "111.206.211.130": [/^\//i],
            "111.206.211.131": [/^\//i],
            "220.181.153.113": [/^\//i],
            "14.152.77.32": [/^\//i],
            "14.152.77.26": [/^\//i],
            "14.152.77.25": [/^\//i],
            "14.152.77.22": [/^\//i],
            "183.232.229.22": [/^\//i],
            "183.232.229.21": [/^\//i],
            "183.232.229.25": [/^\//i],
            "183.232.229.32": [/^\//i],
            "115.182.200.51": [/^\//i],
            "115.182.200.50": [/^\//i],
            "115.182.200.54": [/^\//i],
            "115.182.200.53": [/^\//i],
            "115.182.200.52": [/^\//i],
            "115.182.63.51": [/^\//i],
            "115.182.63.93": [/^\//i],
            "ark.letv.com": [/^\//i],
            "search.lekan.letv.com": [/^\//i],
            "pay.youku.com": [/^\//i],
            "pay.tudou.com": [/^\//i],
            "aid.video.qq.com": [/^\//i],
            "aidbak.video.qq.com": [/^\//i],
            "pay.video.qq.com": [/^\//i],
            "paybak.video.qq.com": [/^\//i],
            "chrome.2345.com": [/^\//i, /^\//i],
            "music.163.com": [/^\//i, /^\//i, /^\//i],
            "ssports.com": [/^\//i],
            "ssports.smgbb.cn": [/^\//i],
            "kandian.com": [/^\//i],
            "u.y.qq.com": [/^\//i],
            "a.play.api.3g.youku.com": [/^\//i],
            "i.play.api.3g.youku.com": [/^\//i, /^\//i],
            "api.3g.youku.com": [/^\//i, /^\//i, /^\//i, /^\//i, /^\//i],
            "tv.api.3g.youku.com": [/^\//i, /^\//i, /^\//i],
            "play.api.3g.youku.com": [/^\//i, /^\//i, /^\//i],
            "i-play.mobile.youku.com": [/^\//i],
            "play.api.3g.tudou.com": [/^\//i],
            "tv.api.3g.tudou.com": [/^\//i],
            "api.3g.tudou.com": [/^\//i],
            "access.tv.sohu.com": [/^\//i],
            "iface.iqiyi.com": [/^\//i, /^\//i],
            "iface2.iqiyi.com": [/^\//i, /^\//i, /^\//i],
            "cache.m.iqiyi.com": [/^\//i],
            "dynamic.app.m.letv.com": [/^\//i],
            "dynamic.meizi.app.m.letv.com": [/^\//i],
            "dynamic.search.app.m.letv.com": [/^\//i],
            "dynamic.live.app.m.letv.com": [/^\//i],
            "listso.m.areainfo.ppstream.com": [/^\//i],
            "epg.api.pptv.com": [/^\//i],
            "play.api.pptv.com": [/^\//i],
            "m.letv.com": [/^\//i],
            "api.mob.app.letv.com": [/^\//i],
            "static.api.sports.letv.com": [/^\//i],
            "api.itv.letv.com": [/^\//i],
            "data.bilibili.com": [/^\//i],
            "3g.music.qq.com": [/^\//i],
            "mqqplayer.3g.qq.com": [/^\//i],
            "proxy.music.qq.com": [/^\//i],
            "proxymc.qq.com": [/^\//i],
            "220.249.243.70": [/^\//i],
            "117.185.116.152": [/^\//i],
            "101.227.139.217": [/^\//i],
            "59.37.96.220": [/^\//i],
            "140.207.69.99": [/^\//i],
            "103.7.31.186": [/^\//i],
            "103.7.30.89": [/^\//i],
            "182.254.34.151": [/^\//i],
            "223.167.82.139": [/^\//i],
            "101.227.169.200": [/^\//i],
            "182.254.11.174": [/^\//i],
            "183.192.192.139": [/^\//i],
            "163.177.90.61": [/^\//i],
            "14.18.245.250": [/^\//i],
            "183.232.126.23": [/^\//i],
            "183.232.119.198": [/^\//i],
            "182.254.4.234": [/^\//i],
            "203.205.151.23": [/^\//i],
            "ip2.kugou.com": [/^\//i],
            "ip.kugou.com": [/^\//i],
            "client.api.ttpod.com": [/^\//i],
            "mobi.kuwo.cn": [/^\//i],
            "nmobi.kuwo.cn": [/^\//i],
            "mobilefeedback.kugou.com": [/^\//i],
            "tingapi.ting.baidu.com": [/^\//i],
            "music.baidu.com": [/^\//i],
            "serviceinfo.sdk.duomi.com": [/^\//i],
            "spark.api.xiami.com": [/^\//i, /^\//i, /^\//i, /^\//i],
            "sns.video.qq.com": [/^\//i],
            "v5.pc.duomi.com": [/^\//i],
            "tms.is.ysten.com": [/^:8080\//i],
            "internal.check.duokanbox.com": [/^\//i],
            "180.153.225.136": [/^\//i],
            "118.244.244.124": [/^\//i],
            "210.129.145.150": [/^\//i],
            "182.16.230.98": [/^\//i],
            "103.65.41.126": [/^\//i],
            "103.65.41.125": [/^\//i]
        }
    },
    _https_map = {
        white: {
            any: []
        },
        proxy: {
            any: [/^[^\/]*\.video\.qq\.com\//i],
            "dmd-fifajs-h5-ikuweb.youku.com": [/^\//i],
            "dmd-fifa-h5-ikuweb.youku.com": [/^\//i],
            "acs.youku.com": [/^\//i],
            "ups.youku.com": [/^\//i],
            "c.y.qq.com": [/^\//i],
            "api.unipay.qq.com": [/^\//i],
            "hot.vrs.sohu.com": [/^\//i],
            "cache.video.iqiyi.com": [/^\//i],
            "v.api.mgtv.com": [/^\//i],
            "pcweb.api.mgtv.com": [/^\//i],
            "info.zb.qq.com": [/^\//i],
            "info.zb.video.qq.com": [/^\//i],
            "qzs.qq.com": [/^\//i],
            "vd.l.qq.com": [/^\//i],
            "vi.l.qq.com": [/^\//i],
            "ppi.api.pptv.com": [/^\//i],
            "zb.s.qq.com": [/^\//i],
            "www.bilibili.com": [/^\//i],
            "interface.bilibili.com": [/^\//i],
            "bangumi.bilibili.com": [/^\//i],
            "douban.fm": [/^\//i],
            "pstream.api.mgtv.com": [/^\//i],
            "u.y.qq.com": [/^\//i],
            "app.bilibili.com": [/^\//i],
            "openapi.youku.com": [/^\//i],
            "61.135.196.99": [/^\//i],
            "220.181.185.150": [/^\//i],
            "111.13.127.46": [/^\//i],
            "211.151.50.10": [/^\//i],
            "123.126.99.57": [/^\//i],
            "123.126.99.39": [/^\//i],
            "220.181.154.137": [/^\//i]
        }
    },
    _proxy_str = "PROXY proxy.uku.im:443; DIRECT;";