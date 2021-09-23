"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2199],{92835:(e,t,r)=>{r.d(t,{Z:()=>y});var s,i=r(43697),l=r(10736),n=r(70586),o=r(35463),a=r(5600),u=(r(80442),r(75215),r(92604),r(71715)),p=r(52525),c=r(30556);let h=s=class extends l.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return d}static get empty(){return m}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(s.allTime)}get isEmpty(){return this.equals(s.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new s({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,n.pC)(this.start)?this.start.getTime():this.start,r=(0,n.pC)(this.end)?this.end.getTime():this.end,s=(0,n.pC)(e.start)?e.start.getTime():e.start,i=(0,n.pC)(e.end)?e.end.getTime():e.end;return t===s&&r===i}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.Po)(this.start,(t=>(0,o.JE)(t,e))),r=(0,n.Po)(this.end,(t=>(0,o.Nm)((0,o.JE)(t,e),1,e)));return new s({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return s.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,n.R2)(this.start,-1/0,(e=>e.getTime())),r=(0,n.R2)(this.end,1/0,(e=>e.getTime())),i=(0,n.R2)(e.start,-1/0,(e=>e.getTime())),l=(0,n.R2)(e.end,1/0,(e=>e.getTime()));let o,a;if(i>=t&&i<=r?o=i:t>=i&&t<=l&&(o=t),r>=i&&r<=l?a=r:l>=t&&l<=r&&(a=l),!isNaN(o)&&!isNaN(a)){const e=new s;return e.start=o===-1/0?null:new Date(o),e.end=a===1/0?null:new Date(a),e}return s.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new s,{start:i,end:l}=this;return(0,n.pC)(i)&&(r.start=(0,o.Nm)(i,e,t)),(0,n.pC)(l)&&(r.end=(0,o.Nm)(l,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=(0,n.pC)(this.start)&&(0,n.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,n.pC)(this.end)&&(0,n.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new s({start:t,end:r})}};(0,i._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"end",void 0),(0,i._)([(0,u.r)("end")],h.prototype,"readEnd",null),(0,i._)([(0,c.c)("end")],h.prototype,"writeEnd",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"isAllTime",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"isEmpty",null),(0,i._)([(0,a.Cb)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"start",void 0),(0,i._)([(0,u.r)("start")],h.prototype,"readStart",null),(0,i._)([(0,c.c)("start")],h.prototype,"writeStart",null),h=s=(0,i._)([(0,p.j)("esri.TimeExtent")],h);const d=new h,m=new h({start:void 0,end:void 0});var y=h},25929:(e,t,r)=>{r.d(t,{f:()=>l,i:()=>c,p:()=>d,r:()=>o,t:()=>n,w:()=>a});var s=r(70586),i=r(17452);function l(e,t){const r=t&&t.url&&t.url.path;if(e&&r&&(e=(0,i.hF)(e,r,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=(0,i.PF)(e,t.portalItem.itemUrl);p.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return h(e,t&&t.portal)}function n(e,t,r=0){if(!e)return e;!(0,i.YP)(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let s=(0,i.hF)(e);if(t){const r=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(r){const l=h(r,t.portal);s=(0,i.PF)(h(s,t.portal),l,l),s!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(s)}}return s=function(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?(0,i.Ie)(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}(s,t&&t.portal),(0,i.YP)(s)&&(s=(0,i.Fv)(s)),null!=t&&t.resources&&null!=t&&t.portalItem&&!(0,i.YP)(s)&&!(0,i.HK)(s)&&0===r&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(s)}),s}function o(e,t,r){return l(e,r)}function a(e,t,r,s){const i=n(e,s);void 0!==i&&(t[r]=i)}const u=/\/items\/([^\/]+)\/resources\//,p=/^\.\/resources\//;function c(e){const t=(0,s.pC)(e)?e.match(u):null;return(0,s.pC)(t)?t[1]:null}function h(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const r=`${t.urlKey}.${t.customBaseUrl}`;return(0,i.D6)(i.Gd,`${i.Gd.scheme}://${r}`)?(0,i.Ie)(e,t.portalHostname,r):(0,i.Ie)(e,r,t.portalHostname)}var d=Object.freeze({__proto__:null,fromJSON:l,toJSON:n,read:o,write:a,itemIdFromResourceUrl:c})},35270:(e,t,r)=>{r.d(t,{h$:()=>i,VL:()=>l,rW:()=>a,B7:()=>o});const s={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){var t;return null!=(t=s[e.toLowerCase()])?t:null}function l(e){const t=i(e);return t?[...t]:t}function n(e,t,r){r<0&&++r,r>1&&--r;const s=6*r;return s<1?e+(t-e)*s:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function o(e,t,r,s=1){const i=(e%360+360)%360/360,l=r<=.5?r*(t+1):r+t-r*t,o=2*r-l;return[Math.round(255*n(o,l,i+1/3)),Math.round(255*n(o,l,i)),Math.round(255*n(o,l,i-1/3)),s]}function a(e){const t=e.length>5,r=t?8:4,s=(1<<r)-1,i=t?1:17,l=t?9===e.length:5===e.length;let n=Number("0x"+e.substr(1));if(isNaN(n))return null;const o=[0,0,0,1];let a;return l&&(a=n&s,n>>=r,o[3]=i*a/255),a=n&s,n>>=r,o[2]=i*a,a=n&s,n>>=r,o[1]=i*a,a=n&s,n>>=r,o[0]=i*a,o}},10699:(e,t,r)=>{r.d(t,{I:()=>n});var s=r(43697),i=r(52525);let l=0;const n=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+l++})}};return t=(0,s._)([(0,i.j)("esri.core.Identifiable")],t),t};let o=class extends(n(class{})){};o=(0,s._)([(0,i.j)("esri.core.Identifiable")],o)},16453:(e,t,r)=>{r.d(t,{R:()=>v,w:()=>w});var s=r(43697),i=r(18855),l=r(70586),n=r(22974),o=r(31263);class a{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.kk),this._values=new Map}clone(e){const t=new a,r=this._originStores[0];r&&r.forEach(((e,r)=>{t.set(r,(0,n.d9)(e),0)}));for(let r=2;r<o.kk;r++){const s=this._originStores[r];s&&s.forEach(((s,i)=>{e&&e.has(i)||t.set(i,(0,n.d9)(s),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let s=this._originStores[r];if(s||(s=new Map,this._originStores[r]=s),s.set(e,t),!this._values.has(e)||(0,l.j0)(this._propertyOriginMap.get(e))<=r){const s=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),s!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const s=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return s}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],s=r&&r.get(e),i=this._values.get(e);return this._values.set(e,s),this._propertyOriginMap.set(e,t),i!==s}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var u=r(50549),p=r(1153),c=r(52525);const h=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,l.j0)((0,p.vw)(this)),r=t.metadatas,s=t.store,i=new a;t.store=i,s.keys().forEach((e=>{i.set(e,s.get(e),0)})),Object.keys(r).forEach((e=>{t.internalGet(e)&&i.set(e,t.internalGet(e),0)}))}read(e,t){(0,u.ij)(this,e,t)}getAtOrigin(e,t){const r=d(this),s=(0,o.M9)(t);if("string"==typeof e)return r.get(e,s);const i={};return e.forEach((e=>{i[e]=r.get(e,s)})),i}originOf(e){return(0,o.x3)(this.originIdOf(e))}originIdOf(e){return d(this).originOf(e)}revert(e,t){const r=d(this),s=(0,o.M9)(t),i=(0,p.vw)(this);let l;l="string"==typeof e?"*"===e?r.keys(s):[e]:e,l.forEach((e=>{i.invalidate(e),r.revert(e,s),i.commit(e)}))}};return t=(0,s._)([(0,c.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function d(e){return(0,p.vw)(e).store}let m=class extends(h(i.Z)){};m=(0,s._)([(0,c.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],m);var y=r(76169);const g=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return f(this).delete(e,(0,o.M9)(t))}write(e={},t){return(0,y.cW)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,p.vw)(this).setAtOrigin(e,t,(0,o.M9)(r))}removeOrigin(e){const t=f(this),r=(0,o.M9)(e),s=t.keys(r);for(const e of s)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=f(this),s=(0,o.M9)(t),i=this.get(e);for(let t=s+1;t<o.kk;++t)r.delete(e,t);r.set(e,i,s)}toJSON(e){return this.write({},e)}};return t=(0,s._)([(0,c.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function f(e){return(0,p.vw)(e).store}const v=e=>{let t=class extends(g(h(e))){constructor(...e){super(...e)}};return t=(0,s._)([(0,c.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(v(i.Z)){};w=(0,s._)([(0,c.j)("esri.core.MultiOriginJSONSupport")],w)},62357:(e,t,r)=>{r.d(t,{vW:()=>o,F2:()=>i,Wz:()=>l,t_:()=>n});const s=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function i(e){return e?e/72*96:0}function l(e){return e?72*e/96:0}function n(e){if("string"==typeof e){if(s.test(e)){const t=e.match(s),r=Number(t[1]),i=t[3]&&t[3].toLowerCase(),n="-"===e.charAt(0),o="px"===i?l(r):r;return n?-o:o}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function o(e=0,t=0){return{x:e,y:t}}},35463:(e,t,r)=>{r.d(t,{rJ:()=>o,Nm:()=>l,JE:()=>n}),r(80442);const s={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function l(e,t,r){const s=new Date(e.getTime());if(t&&r){const e=i[r],{getter:l,setter:n,multiplier:o}=e;s[n](s[l]()+t*o)}return s}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function o(e,t,r){return 0===e?0:e*s[t]/s[r]}},29600:(e,t,r)=>{r.d(t,{Z:()=>b});var s=r(43697),i=r(68773),l=(r(66577),r(3172)),n=r(20102),o=r(32448),a=r(10699),u=r(83379),p=r(92604),c=r(95330),h=r(17452),d=r(5600),m=(r(80442),r(75215),r(52525)),y=r(6570),g=r(82971);let f=0;const v=p.Z.getLogger("esri.layers.Layer");let w=class extends(o.Z.EventedMixin((0,a.I)(u.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.Z(-180,-90,180,90,g.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+f++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,s=await r.e(3529).then(r.bind(r,63529));try{return await s.fromUrl(t)}catch(e){throw v.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},s=await r.e(8008).then(r.bind(r,28008));try{return await s.fromItem(t)}catch(e){const r=t&&t.portalItem,s=r&&r.id||"unset",l=r&&r.portal&&r.portal.url||i.Z.portalUrl;throw v.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+l+"', id: '"+s+"')",e),e}}initialize(){this.when().catch((e=>{var t,r;(0,c.D_)(e)||p.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,h.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,l.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,s._)([(0,d.Cb)({type:String})],w.prototype,"attributionDataUrl",void 0),(0,s._)([(0,d.Cb)({type:y.Z})],w.prototype,"fullExtent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],w.prototype,"hasAttributionData",null),(0,s._)([(0,d.Cb)({type:String})],w.prototype,"id",void 0),(0,s._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],w.prototype,"legendEnabled",void 0),(0,s._)([(0,d.Cb)({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),(0,s._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],w.prototype,"opacity",void 0),(0,s._)([(0,d.Cb)()],w.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],w.prototype,"parsedUrl",null),(0,s._)([(0,d.Cb)({type:Boolean})],w.prototype,"popupEnabled",void 0),(0,s._)([(0,d.Cb)({type:Boolean})],w.prototype,"attributionVisible",void 0),(0,s._)([(0,d.Cb)({type:g.Z})],w.prototype,"spatialReference",void 0),(0,s._)([(0,d.Cb)({type:String})],w.prototype,"title",void 0),(0,s._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),(0,s._)([(0,d.Cb)()],w.prototype,"url",void 0),(0,s._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],w.prototype,"visible",void 0),w=(0,s._)([(0,m.j)("esri.layers.Layer")],w);var b=w},16199:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s=r(43697),i=(r(66577),r(3172)),l=r(20102),n=r(16453),o=r(19153),a=r(17452),u=r(5600),p=(r(80442),r(75215),r(92604),r(71715)),c=r(52525),h=r(30556),d=r(29600),m=r(78096),y=r(38009),g=r(16859),f=r(34760),v=r(72965),w=r(39450),b=r(11145),_=r(5833),C=r(6570),S=r(82971),I=r(13473);let T=class extends((0,m.h)((0,f.Q)((0,v.M)((0,y.q)((0,g.I)((0,n.R)(d.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new C.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,S.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=S.Z.WebMercator,this.subDomains=null,this.tileInfo=new b.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new I.Z({x:-20037508.342787,y:20037508.342787,spatialReference:S.Z.WebMercator}),spatialReference:S.Z.WebMercator,lods:[new w.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new w.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new w.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new w.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new w.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new w.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new w.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new w.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new w.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new w.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new w.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new w.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new w.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new w.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new w.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new w.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new w.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new a.R9(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new l.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&S.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,s=new a.R9(t),i=s.scheme?s.scheme+"://":"//",l=i+s.authority+"/";if(-1===s.authority.indexOf("{subDomain}"))e.push(l);else if(r&&r.length>0&&s.authority.split(".").length>1)for(const t of r)e.push(i+s.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new a.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,a.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,a.Fv)(e)),t.templateUrl=e}fetchTile(e,t,r,s={}){const{signal:l}=s,n=this.getTileUrl(e,t,r),o={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,i.default)(n,o).then((e=>e.data))}getTileUrl(e,t,r){const s=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,o.gx)(this.urlPath,{level:s,z:s,col:r,x:r,row:t,y:t})}};(0,s._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],T.prototype,"copyright",void 0),(0,s._)([(0,u.Cb)({type:C.Z,json:{write:!0}})],T.prototype,"fullExtent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"legendEnabled",void 0),(0,s._)([(0,u.Cb)({type:["show","hide"]})],T.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)()],T.prototype,"levelValues",null),(0,s._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],T.prototype,"isReference",void 0),(0,s._)([(0,u.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],T.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"popupEnabled",void 0),(0,s._)([(0,u.Cb)({type:S.Z})],T.prototype,"spatialReference",void 0),(0,s._)([(0,p.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],T.prototype,"readSpatialReference",null),(0,s._)([(0,u.Cb)({type:[String],json:{write:!0}})],T.prototype,"subDomains",void 0),(0,s._)([(0,u.Cb)({type:b.Z,json:{write:!0}})],T.prototype,"tileInfo",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],T.prototype,"tileServers",null),(0,s._)([(0,u.Cb)({json:{read:!1}})],T.prototype,"type",void 0),(0,s._)([(0,u.Cb)()],T.prototype,"urlPath",null),(0,s._)([(0,u.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],T.prototype,"urlTemplate",void 0),(0,s._)([(0,p.r)("urlTemplate",["urlTemplate","templateUrl"])],T.prototype,"readUrlTemplate",null),(0,s._)([(0,h.c)("urlTemplate",{templateUrl:{type:String}})],T.prototype,"writeUrlTemplate",null),(0,s._)([(0,u.Cb)({type:_.Z,json:{write:!0}})],T.prototype,"wmtsInfo",void 0),T=(0,s._)([(0,c.j)("esri.layers.WebTileLayer")],T);var M=T},16859:(e,t,r)=>{r.d(t,{I:()=>b});var s=r(43697),i=r(40330),l=r(3172),n=r(66643),o=r(20102),a=r(92604),u=r(70586),p=r(95330),c=r(17452),h=r(5600),d=(r(80442),r(75215),r(71715)),m=r(52525),y=r(30556),g=r(65587),f=r(15235),v=r(86082);const w=a.Z.getLogger("esri.layers.mixins.PortalLayer"),b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new f.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const s=await r.e(8062).then(r.bind(r,18062));return(0,p.k_)(t),await s.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,p.D_)(e)||w.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this.fetchUserHasEditingPrivileges(e).catch((e=>((0,p.r9)(e),!0))))}async fetchUserHasEditingPrivileges(e){const t=this.url?null==i.id?void 0:i.id.findCredential(this.url):null;if(!t)return!0;const r=_.credential===t?_.user:await this.fetchEditingUser(e);return _.credential=t,_.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async fetchEditingUser(e){var t,r;const s=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user;if(s)return s;const o=i.id.findServerInfo(this.url);if(null==o||!o.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,p=g.Z.getDefault();if(p&&p.loaded&&(0,c.Fv)(p.restUrl)===(0,c.Fv)(a))return p.user;const h=`${a}/community/self`,d=(0,u.pC)(e)?e.signal:null,m=await(0,n.q6)((0,l.default)(h,{authMode:"no-prompt",query:{f:"json"},signal:d}));return m.ok?v.default.fromJSON(m.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||g.Z.getDefault());return r&&s&&!(0,c.tm)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,s._)([(0,h.Cb)({type:f.default})],t.prototype,"portalItem",null),(0,s._)([(0,d.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,s._)([(0,y.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,s._)([(0,h.Cb)()],t.prototype,"resourceReferences",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,s._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},_={credential:null,user:null}},34760:(e,t,r)=>{r.d(t,{Q:()=>f});var s=r(43697),i=r(92604),l=r(95330),n=r(5600),o=(r(80442),r(75215),r(52525)),a=r(81049),u=r(87538);const p=new a.Z,c=new WeakMap;function h(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let m=0,y=0;function g(){const e=Date.now();for(const r of p)if(r.refreshInterval){var t;e-(null!=(t=c.get(r))?t:0)+5>=6e4*r.refreshInterval&&(c.set(r,e),r.refresh(e))}}(0,u.EH)((()=>{const e=Date.now();let t=0;for(const r of p)t=d(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?c.get(r)||c.set(r,e):c.delete(r);if(t!==y){if(y=t,clearInterval(m),0===y)return void(m=0);m=setInterval(g,y)}}));const f=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,l.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{!function(e){h(e)&&p.push(e)}(this)}),(()=>{}))}destroy(){h(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,l.R8)(this._debounceHasDataChanged()).then((t=>{t&&(this._set("refreshTimestamp",e),this.emit("refresh"))}),(e=>{i.Z.getLogger(this.declaredClass).error(e)}))}async hasDataChanged(){return!0}};return(0,s._)([(0,n.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,s._)([(0,n.Cb)()],t.prototype,"refreshParameters",null),t=(0,s._)([(0,o.j)("esri.layers.mixins.RefreshableLayer")],t),t}},39450:(e,t,r)=>{r.d(t,{Z:()=>p});var s,i=r(43697),l=r(10736),n=r(5600),o=(r(80442),r(75215)),a=(r(92604),r(52525));let u=s=class extends l.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new s({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,i._)([(0,n.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"cols",void 0),(0,i._)([(0,n.Cb)({type:o.z8,json:{write:!0}})],u.prototype,"level",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"levelValue",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{write:!0}})],u.prototype,"resolution",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"rows",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{write:!0}})],u.prototype,"scale",void 0),u=s=(0,i._)([(0,a.j)("esri.layers.support.LOD")],u);var p=u},11145:(e,t,r)=>{r.d(t,{Z:()=>C});var s,i=r(43697),l=r(35454),n=r(10736),o=r(70586),a=r(67900),u=r(5600),p=(r(80442),r(75215)),c=(r(92604),r(71715)),h=r(52525),d=r(30556),m=r(13473),y=r(82971),g=r(24470),f=r(8744),v=r(40488),w=r(39450);const b=new l.Xn({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let _=s=class extends n.wq{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:r,size:i=256,spatialReference:l=y.Z.WebMercator,numLODs:n=24}=e;if(!(0,f.JY)(l)){const e=[];if(r)for(let t=0;t<r.length;t++){const s=r[t];e.push({level:t,scale:s,resolution:s})}else{let t=5e-4;for(let r=n-1;r>=0;r--)e.unshift({level:r,scale:t,resolution:t}),t*=2}return new s({dpi:96,lods:e,origin:new m.Z(0,0,l),size:[i,i],spatialReference:l})}const o=(0,f.C5)(l),u=e.origin?new m.Z({x:e.origin.x,y:e.origin.y,spatialReference:l}):new m.Z(o?{x:o.origin[0],y:o.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),p=1/(39.37*(0,a.c9)(l)*96),c=[];if(r)for(let e=0;e<r.length;e++){const t=r[e],s=t*p;c.push({level:e,scale:t,resolution:s})}else{let e=(0,f.sT)(l)?512/i*591657527.5917094:256/i*591657527.591555;const r=Math.ceil(n/t);c.push({level:0,scale:e,resolution:e*p});for(let s=1;s<r;s++){const r=e/2**t,i=r*p;c.push({level:s,scale:r,resolution:i}),e=r}}return new s({dpi:96,lods:c,origin:u,size:[i,i],spatialReference:l})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const r=(0,f.C5)(e);return e.isWrappable&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}readOrigin(e,t){return m.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,r=0;const s=[];this._levelToLOD={},e&&(t=-1/0,r=1/0,e.forEach((e=>{s.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,this._levelToLOD[e.level]=e}))),this._set("scales",s),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const r=Math.floor(e),s=r+1;return t[r]/(t[r]/t[s])**(e-r)}}scaleToZoom(e){const t=this.scales,r=t.length-1;let s=0;for(;s<r;s++){const r=t[s],i=t[s+1];if(r<=e)return s;if(i===e)return s+1;if(r>e&&i<e)return s+Math.log(r/e)/Math.log(r/i)}return s}snapScale(e,t=.95){const r=this.scaleToZoom(e);return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))}tileAt(e,t,r,s){const i=this.lodAt(e);if(!i)return null;let l,n;if("number"==typeof t)l=t,n=r;else if((0,f.fS)(t.spatialReference,this.spatialReference))l=t.x,n=t.y,s=r;else{const e=(0,v.iV)(t,this.spatialReference);if((0,o.Wi)(e))return null;l=e.x,n=e.y,s=r}const a=i.resolution*this.size[0],u=i.resolution*this.size[1];return s||(s={id:null,level:0,row:0,col:0,extent:(0,g.Ue)()}),s.level=e,s.row=Math.floor((this.origin.y-n)/u+.001),s.col=Math.floor((l-this.origin.x)/a+.001),this.updateTileInfo(s),s}updateTileInfo(e,t=0){let r=this.lodAt(e.level);if(!r&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(r=t)}if(!r)return;const s=e.level-r.level,i=r.resolution*this.size[0]/2**s,l=r.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,g.Ue)()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:r}=this.lodAt(t.level),s=r*this.size[0],i=r*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+s,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return s.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let r=0;r<e.length;r++){const s=e[r];this._upsampleLevels[s.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/s.resolution:0},t=s}}};(0,i._)([(0,u.Cb)({type:Number,json:{write:!0}})],_.prototype,"compressionQuality",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{write:!0}})],_.prototype,"dpi",void 0),(0,i._)([(0,u.Cb)({type:String,json:{read:b.read,write:b.write,origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"format",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],_.prototype,"isWrappable",null),(0,i._)([(0,u.Cb)({type:m.Z,json:{write:!0}})],_.prototype,"origin",void 0),(0,i._)([(0,c.r)("origin")],_.prototype,"readOrigin",null),(0,i._)([(0,u.Cb)({type:[w.Z],value:null,json:{write:!0}})],_.prototype,"lods",null),(0,i._)([(0,u.Cb)({readOnly:!0})],_.prototype,"minScale",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],_.prototype,"maxScale",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],_.prototype,"scales",void 0),(0,i._)([(0,u.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],_.prototype,"size",void 0),(0,i._)([(0,c.r)("size",["rows","cols"])],_.prototype,"readSize",null),(0,i._)([(0,d.c)("size",{cols:{type:p.z8},rows:{type:p.z8}})],_.prototype,"writeSize",null),(0,i._)([(0,u.Cb)({type:y.Z,json:{write:!0}})],_.prototype,"spatialReference",void 0),_=s=(0,i._)([(0,h.j)("esri.layers.support.TileInfo")],_);var C=_},5833:(e,t,r)=>{r.d(t,{Z:()=>p});var s,i=r(43697),l=r(10736),n=r(22974),o=r(5600),a=(r(75215),r(80442),r(92604),r(52525));let u=s=class extends l.wq{constructor(e){super(e)}clone(){return new s({customLayerParameters:(0,n.d9)(this.customLayerParameters),customParameters:(0,n.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,i._)([(0,o.Cb)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,i._)([(0,o.Cb)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=s=(0,i._)([(0,a.j)("esri.layer.support.WMTSLayerInfo")],u);var p=u},99282:(e,t,r)=>{r.d(t,{a:()=>l});var s=r(67900),i=r(68441);const l={inches:(0,s.En)(1,"meters","inches"),feet:(0,s.En)(1,"meters","feet"),"us-feet":(0,s.En)(1,"meters","us-feet"),yards:(0,s.En)(1,"meters","yards"),miles:(0,s.En)(1,"meters","miles"),"nautical-miles":(0,s.En)(1,"meters","nautical-miles"),millimeters:(0,s.En)(1,"meters","millimeters"),centimeters:(0,s.En)(1,"meters","centimeters"),decimeters:(0,s.En)(1,"meters","decimeters"),meters:(0,s.En)(1,"meters","meters"),kilometers:(0,s.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,s.ty)(1,"meters",i.sv.radius)}},65242:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>l});var s=r(75215);function i(e){const t=(0,s.vU)(100*(1-e));return Math.max(0,Math.min(t,100))}function l(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}}}]);