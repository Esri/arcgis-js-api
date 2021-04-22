/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/urlUtils","../../chunks/persistableUrlUtils"],(function(e,r,t,n){"use strict";const s=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],i=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),o=/(.*)\/(\d+)\/?$/i;function u(e){return!!i.test(e)}function a(e){const r=t.urlToObject(e),n=r.path.match(i)||r.path.match(l);if(!n)return null;const[,s,o,u,a]=n,c=o.indexOf("/");return{title:f(-1!==c?o.slice(c+1):o),serverType:u,sublayer:null!=a&&""!==a?parseInt(a,10):null,url:{path:s}}}function c(e){const r=t.urlToObject(e).path.match(o);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function f(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function d(e,t){const n=[];if(e){const t=a(e);r.isSome(t)&&t.title&&n.push(t.title)}if(t){const e=f(t);n.push(e)}if(2===n.length){if(-1!==n[0].toLowerCase().indexOf(n[1].toLowerCase()))return n[0];if(-1!==n[1].toLowerCase().indexOf(n[0].toLowerCase()))return n[1]}return n.join(" - ")}function v(e){if(!e)return!1;const r=".arcgis.com/",t="//services",n="//tiles",s="//features",i=-1!==(e=e.toLowerCase()).indexOf(r),l=-1!==e.indexOf(t)||-1!==e.indexOf(n)||-1!==e.indexOf(s);return i&&l}function m(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())}function p(e,r){return e?t.removeTrailingSlash(t.removeQueryParameters(e,r)):e}function S(e){let{url:n}=e;if(!n)return{url:n};n=t.removeQueryParameters(n,e.logger);const s=t.urlToObject(n),i=a(s.path);let l;if(r.isSome(i))null!=i.sublayer&&null==e.layer.layerId&&(l=i.sublayer),n=i.url.path;else if(e.nonStandardUrlAllowed){const e=c(s.path);r.isSome(e)&&(n=e.serviceUrl,l=e.sublayerId)}return{url:t.removeTrailingSlash(n),layerId:l}}function y(e,r,s,i,l){n.write(r,i,"url",l),i.url&&null!=e.layerId&&(i.url=t.join(i.url,s,e.layerId.toString()))}function h(e){if(!e)return!1;const r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),n=-1!==r.indexOf("/mapserver/wmsserver"),s=-1!==r.indexOf("/imageserver/wmsserver"),i=-1!==r.indexOf("/wmsserver");return t&&(n||s||i)}function w(e){if(!e)return!1;const r=new t.Url(t.makeAbsolute(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}e.cleanTitle=f,e.isArcGISUrl=u,e.isHostedAgolService=v,e.isHostedSecuredProxyService=m,e.isServerOrServicesAGOLUrl=w,e.isWmsServer=h,e.parse=a,e.parseNonStandardSublayerUrl=c,e.sanitizeUrl=p,e.sanitizeUrlWithLayerId=S,e.serverTypes=s,e.titleFromUrlAndName=d,e.writeUrlWithLayerId=y,Object.defineProperty(e,"__esModule",{value:!0})}));
