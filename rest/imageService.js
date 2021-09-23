/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","../core/maybe","../geometry/support/normalizeUtils","./utils","./support/ImageIdentifyResult","./support/ImageSampleResult"],(function(t,e,n,r,o,s,i,a){"use strict";function l(t){const e=null==t?void 0:t.time;if(e&&(null!=e.start||null!=e.end)){const n=[];null!=e.start&&n.push(e.start),null!=e.end&&-1===n.indexOf(e.end)&&n.push(e.end),t.time=n.join(",")}}function u(t,e,n){return p.apply(this,arguments)}function p(){return(p=e._asyncToGenerator((function*(t,e,n){const i=s.parseUrl(t),a=e.geometry?[e.geometry]:[],u=yield o.normalizeCentralMeridian(a),p=e.toJSON();l(p);const c=u&&u[0];r.isSome(c)&&(p.geometry=c.toJSON());const m=s.encode({...i.query,f:"json",...p});return s.asValidOptions(m,n)}))).apply(this,arguments)}function c(t,e,n){return m.apply(this,arguments)}function m(){return(m=e._asyncToGenerator((function*(t,e,r){const o=yield u(t,e,r),i=s.parseUrl(t),{data:a}=yield n(`${i.path}/computeStatisticsHistograms`,o),{statistics:l}=a;return null!=l&&l.length&&l.forEach((t=>{t.avg=t.mean,t.stddev=t.standardDeviation})),{statistics:l,histograms:a.histograms}}))).apply(this,arguments)}function d(t,e,n){return y.apply(this,arguments)}function y(){return(y=e._asyncToGenerator((function*(t,e,r){const o=yield u(t,e,r),i=s.parseUrl(t),{data:a}=yield n(`${i.path}/computeHistograms`,o);return{histograms:a.histograms}}))).apply(this,arguments)}function f(t,e,n){return g.apply(this,arguments)}function g(){return(g=e._asyncToGenerator((function*(t,e,i){var u,p;const c=e.toJSON();l(c),null!=(u=c.outFields)&&u.length&&(c.outFields=c.outFields.join(","));const m=yield o.normalizeCentralMeridian(e.geometry),d=null==m?void 0:m[0];r.isSome(d)&&(c.geometry=d.toJSON());const y=s.parseUrl(t),f=s.encode({...y.query,f:"json",...c}),g=s.asValidOptions(f,i),{data:h}=yield n(`${y.path}/getSamples`,g),S=null==h||null==(p=h.samples)?void 0:p.map((t=>{const e="NaN"===t.value||""===t.value?null:t.value.split(" ").map((t=>Number(t)));return{...t,pixelValue:e}}));return a.fromJSON({samples:S})}))).apply(this,arguments)}function h(t,e,n){return S.apply(this,arguments)}function S(){return(S=e._asyncToGenerator((function*(t,e,a){const l=s.parseUrl(t),u=e.geometry?[e.geometry]:[];return o.normalizeCentralMeridian(u).then((t=>{const o=e.toJSON(),i=t&&t[0];r.isSome(i)&&(o.geometry=JSON.stringify(i.toJSON()));const u=s.encode({...l.query,f:"json",...o}),p=s.asValidOptions(u,a);return n(l.path+"/identify",p)})).then((t=>i.fromJSON(t.data)))}))).apply(this,arguments)}t.computeHistograms=d,t.computeStatisticsHistograms=c,t.getSamples=f,t.identify=h,Object.defineProperty(t,"__esModule",{value:!0})}));
