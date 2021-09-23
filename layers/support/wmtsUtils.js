/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/maybe","../../geometry/Extent","../../geometry/Point","../../geometry/projectionEllipsoid","../../geometry/support/WKIDUnitConversion","../ogc/xmlUtils","./TileInfo"],(function(e,t,n,i,r,l,o,s,a){"use strict";const c=90.71428571428571,u=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function p(e,n){var i,r;e=e.replace(/ows:/gi,"");const l=(new DOMParser).parseFromString(e,"text/xml").documentElement,o=new Map,s=new Map,a=m("Contents",l);if(!a)throw new t("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=m("OperationsMetadata",l),u=null==c?void 0:c.querySelector("[name='GetTile']"),p=null==u?void 0:u.getElementsByTagName("Get"),d=p&&Array.prototype.slice.call(p),f=null!=(i=(null==n||null==(r=n.url)?void 0:r.indexOf("https"))>-1)&&i;let x,T,y=n.serviceMode,S=n&&n.url;if(d&&d.length&&d.some((e=>{const t=m("Constraint",e);return!t||w("AllowedValues","Value",y,t)?(S=e.attributes[0].nodeValue,!0):(!t||w("AllowedValues","Value","RESTful",t)||w("AllowedValues","Value","REST",t)?T=e.attributes[0].nodeValue:t&&!w("AllowedValues","Value","KVP",t)||(x=e.attributes[0].nodeValue),!1)})),!S)if(T)S=T,y="RESTful";else if(x)S=x,y="KVP";else{const e=m("ServiceMetadataURL",l);S=e&&e.getAttribute("xlink:href")}const C=S.indexOf("1.0.0/");-1===C&&"RESTful"===y?S+="/":C>-1&&(S=S.substring(0,C)),"KVP"===y&&(S+=C>-1?"":"?"),f&&(S=S.replace(/^http:/i,"https:"));const b=h("ServiceIdentification>ServiceTypeVersion",l),E=h("ServiceIdentification>AccessConstraints",l),V=g("Layer",a),R=g("TileMatrixSet",a),I=V.map((e=>{const t=h("Identifier",e);return o.set(t,e),M(t,e,R,f,b)}));return{copyright:E,dimensionMap:s,layerMap:o,layers:I,serviceMode:y,tileUrl:S}}function d(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((n=>{n.scale=96*n.scale/t.dpi,n.resolution=U(t.spatialReference.wkid,n.scale*c/96,e.id)})),t.dpi=96)}))})),e}function f(e){return e.nodeType===Node.ELEMENT_NODE}function m(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(f(i)&&i.nodeName===e)return i}return null}function g(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];f(r)&&r.nodeName===e&&n.push(r)}return n}function x(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];f(r)&&r.nodeName===e&&n.push(r)}return n.map((e=>e.textContent))}function h(e,t){return e.split(">").forEach((e=>{t&&(t=m(e,t))})),t&&t.textContent}function w(e,t,n,i){let r;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=m(t,i),l=e&&e.textContent;if(l===n||n.split(":")&&n.split(":")[1]===l)return r=i,!0}return!1})),r}function M(e,t,n,i,r){const l=h("Abstract",t),o=x("Format",t);return{id:e,fullExtent:C(t),fullExtents:b(t),description:l,formats:o,styles:E(t,i),title:h("Title",t),tileMatrixSets:V(r,t,n)}}function T(e,t){var n;const i=[],r=null==(n=e.layerMap)?void 0:n.get(t);if(!r)return;const l=g("ResourceURL",r),o=g("Dimension",r);let s,a,c,u;return o.length&&(s=h("Identifier",o[0]),a=x("Default",o[0])||x("Value",o[0])),o.length>1&&(c=h("Identifier",o[1]),u=x("Default",o[1])||x("Value",o[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:u}),l.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(s&&a.length)if(t.indexOf("{"+s+"}")>-1)t=t.replace("{"+s+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+s.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+s.length+2))}if(c&&u.length)if(t.indexOf("{"+c+"}")>-1)t=t.replace("{"+c+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+c.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+c.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function y(e,t,n,i,r,l,o,s){const{dimensionMap:a}=e,c=T(e,t),u=a.get(t).dimensions&&a.get(t).dimensions[0],p=a.get(t).dimensions2&&a.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===i&&(e=t,!0))),e||(e=c[o%c.length]),d=e.template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,n).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}function S(e,t,n,i){const{dimensionMap:r}=e,l=T(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];o=l[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,i),o=o.replace(/\{TileMatrixSet\}/gi,n),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,s)}return o}function C(e){const t=m("WGS84BoundingBox",e),n=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(n[0]),ymin:parseFloat(n[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function b(e){const t=[];return s.visitXML(e,{BoundingBox:e=>{const n=e.getAttribute("crs"),i=I(n),r=n.includes("epsg")&&A(i.wkid);let l,o,a,c;s.visitXML(e,{LowerCorner:e=>{[l,o]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([l,o]=[o,l])},UpperCorner:e=>{[a,c]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([a,c]=[c,a])}}),t.push({xmin:l,ymin:o,xmax:a,ymax:c,spatialReference:i})}}),t}function E(e,t){return g("Style",e).map((e=>{const n=m("LegendURL",e),i=m("Keywords",e),r=i&&x("Keyword",i);let l=n&&n.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return{abstract:h("Abstract",e),id:h("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:h("Title",e)}}))}function V(e,t,n){return g("TileMatrixSetLink",t).map((e=>m("TileMatrixSet",e).textContent)).map((i=>R(e,i,t,n)))}function R(e,t,n,i){const r=x("TileMatrix",w("TileMatrixSetLink","TileMatrixSet",t,n)),l=i.find((e=>{const n=m("Identifier",e),i=n&&n.textContent;return!!(i===t||t.split(":")&&t.split(":")[1]===i)})),o=N(l),s=o.spatialReference,c=s.wkid,u=m("TileMatrix",l),p=[parseInt(h("TileWidth",u),10),parseInt(h("TileHeight",u),10)],d=[];if(r.length)r.forEach(((e,n)=>{const i=w("TileMatrix","Identifier",e,l);d.push(O(i,c,n,t))}));else{g("TileMatrix",l).forEach(((e,n)=>{d.push(O(e,c,n,t))}))}const f=v(e,l,o,p,d[0]).toJSON(),M=new a({dpi:96,spatialReference:s,size:p,origin:o,lods:d}).toJSON();return{id:t,fullExtent:f,tileInfo:M}}function I(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const i=F(e);return n.isSome(i)&&(t=i),{wkid:t}}function N(e){const t=h("SupportedCRS",e).toLowerCase(),n=I(t),i=h("TopLeftCorner",m("TileMatrix",e)).split(" "),l=i[0].split("E").map((e=>Number(e))),o=i[1].split("E").map((e=>Number(e))),s=l.length>1?l[0]*10**l[1]:l[0],a=o.length>1?o[0]*10**o[1]:o[0];return t.includes("epsg")&&A(n.wkid)?new r({x:a,y:s,spatialReference:n}):new r({x:s,y:a,spatialReference:n})}function v(e,t,n,r,l){const o=m("BoundingBox",t);let s,a,c,u,p,d;if(o&&(s=h("LowerCorner",o).split(" "),a=h("UpperCorner",o).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),d=parseFloat(a[1]);else{const e=m("TileMatrix",t),i=parseInt(h("MatrixWidth",e),10),o=parseInt(h("MatrixHeight",e),10);c=n.x,d=n.y,u=c+i*r[0]*l.resolution,p=d-o*r[1]*l.resolution}return L(e,n.spatialReference)?new i(p,c,d,u,n.spatialReference):new i(c,p,u,d,n.spatialReference)}function L(e,t){return"1.0.0"===e&&A(t.wkid)}function A(e){return u.some((([t,n])=>e>=t&&e<=n))}function F(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}function O(e,t,n,i){const r=h("Identifier",e),l=h("ScaleDenominator",e).split("E").map((e=>Number(e)));let o;o=l.length>1?l[0]*10**l[1]:l[0];const s=U(t,o,i);o*=96/c;return{cols:parseInt(h("MatrixWidth",e),10),level:n,levelValue:r,scale:o,resolution:s,rows:parseInt(h("MatrixHeight",e),10)}}function U(e,t,n){let i;return i=o.hasOwnProperty(String(e))?o.values[o[e]]:"default028mm"===n?6370997*Math.PI/180:l.getReferenceEllipsoidFromWKID(e).metersPerDegree,7*t/25e3/i}e.getTileUrlFromResourceUrls=y,e.getTileUrlTemplateFromResourceUrls=S,e.parseCapabilities=p,e.parseResourceInfo=d,Object.defineProperty(e,"__esModule",{value:!0})}));
