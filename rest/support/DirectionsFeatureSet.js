/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{unwrap as t}from"../../core/maybe.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{reader as s}from"../../core/accessorSupport/decorators/reader.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import a from"./DirectionsFeature.js";import n from"./FeatureSet.js";import p from"../../geometry/Extent.js";import i from"../../geometry/SpatialReference.js";import m from"../../geometry/Polyline.js";import l from"../../geometry/Point.js";let u=class extends n{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){if(!e)return[];const r=t.summary.envelope.spatialReference??t.spatialReference,s=r&&i.fromJSON(r);return e.map((e=>{const t=this._decompressGeometry(e.compressedGeometry),r=new m({...t,spatialReference:s}),o=e.events?.map((e=>{const{arriveTimeUTC:t,ETA:r,point:{x:o,y:n,z:p},strings:i}=e;return new a({geometry:new l({x:o,y:n,z:p,hasZ:void 0!==p,spatialReference:s}),attributes:{ETA:r,arriveTimeUTC:t},strings:i})}))??[];return new a({attributes:e.attributes,events:o,geometry:r,strings:e.strings})}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>t(e))),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map((({strings:e})=>e))}_decompressGeometry(e){let t=0,r=0,s=0,o=0;const a=[];let n,p,i,m,l,u,c,y,h=0,f=0,d=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),0===parseInt(l[h],32)){h=2;const e=parseInt(l[h],32);h++,u=parseInt(l[h],32),h++,1&e&&(f=l.indexOf("|")+1,c=parseInt(l[f],32),f++),2&e&&(d=l.indexOf("|",f)+1,y=parseInt(l[d],32),d++)}else u=parseInt(l[h],32),h++;for(;h<l.length&&"|"!==l[h];){n=parseInt(l[h],32)+t,h++,t=n,p=parseInt(l[h],32)+r,h++,r=p;const e=[n/u,p/u];f&&(m=parseInt(l[f],32)+s,f++,s=m,e.push(m/c)),d&&(i=parseInt(l[d],32)+o,d++,o=i,e.push(i/y)),a.push(e)}return{paths:[a],hasZ:f>0,hasM:d>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new m({spatialReference:t});const r=[];for(const n of e)for(const e of n.paths)r.push(...e);const s=[];r.forEach(((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||s.push(e)}));const{hasM:o,hasZ:a}=e[0];return new m({hasM:o,hasZ:a,paths:[s],spatialReference:t})}};e([r({type:p,json:{read:{source:"summary.envelope"}}})],u.prototype,"extent",void 0),e([r()],u.prototype,"features",void 0),e([s("features")],u.prototype,"readFeatures",null),e([r()],u.prototype,"geometryType",void 0),e([r({readOnly:!0})],u.prototype,"mergedGeometry",null),e([r()],u.prototype,"routeId",void 0),e([r()],u.prototype,"routeName",void 0),e([r({value:null,readOnly:!0})],u.prototype,"strings",null),e([r({json:{read:{source:"summary.totalDriveTime"}}})],u.prototype,"totalDriveTime",void 0),e([r({json:{read:{source:"summary.totalLength"}}})],u.prototype,"totalLength",void 0),e([r({json:{read:{source:"summary.totalTime"}}})],u.prototype,"totalTime",void 0),u=e([o("esri.rest.support.DirectionsFeatureSet")],u);const c=u;export{c as default};