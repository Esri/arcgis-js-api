/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import"../../../../geometry.js";import t from"../../../../core/Accessor.js";import{PositionHint as r,indexOf as i}from"../../../../core/arrayUtils.js";import s from"../../../../core/Logger.js";import{clamp as o}from"../../../../core/mathUtils.js";import{isNone as n,isSome as a,unwrap as l}from"../../../../core/maybe.js";import{whenOnce as c}from"../../../../core/reactiveUtils.js";import{getUnitString as p}from"../../../../core/unitUtils.js";import{property as u}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as g}from"../../../../core/accessorSupport/decorators/subclass.js";import{t as d,a as f,s as y}from"../../../../chunks/vec3.js";import{WhereClause as h}from"../../../../core/sql/WhereClause.js";import{projectBoundingSphere as m,load as S,project as j,projectVectorToVector as w}from"../../../../geometry/projection.js";import{create as E}from"../../../../geometry/support/aaBoundingBox.js";import{fromValues as b,expandWithNestedArray as R,expand as F}from"../../../../geometry/support/aaBoundingRect.js";import{earth as v}from"../../../../geometry/support/Ellipsoid.js";import{project as _}from"../../../../geometry/support/webMercatorUtils.js";import I from"../../../../layers/support/FeatureFilter.js";import{objectIdFilter as M,filterInPlace as k}from"./I3SUtil.js";import T from"../../../../geometry/SpatialReference.js";const D=s.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let C=class extends t{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){c((()=>l(this.viewFilter)?.geometry||a(this.layerFilter))).then((()=>this.loadAsyncModule(import("../../../../geometry/geometryEngine.js").then((e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters())})))))}get sortedObjectIds(){if(n(this.viewFilter)||n(this.viewFilter.objectIds))return null;const e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=a(this.viewFilter)?this.viewFilter.where:null;if(n(e)||!e)return null;try{return h.create(e,this.layerFieldsIndex)}catch(t){D.error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,i){const s=this.sortedObjectIds;a(s)&&e.push((e=>M(s,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const o=this._layerMaskGeometries,n=this._geometryEngine;if(a(o)&&a(this.layerFilter)&&a(n)){const s=this.layerFilter.spatialRelationship;e.push(((e,a)=>L(n,e,a,i,t,r,o,s)))}const l=this._viewMaskGeometries;if(a(l)&&a(this.viewFilter)&&a(n)){const s=this.viewFilter.spatialRelationship;e.push(((e,o)=>L(n,e,o,i,t,r,l,s)))}}isMBSGeometryVisible(e,t,r){const i=this._layerMaskGeometries,s=this._geometryEngine;if(a(i)&&a(this.layerFilter)&&a(s)){const o=this.layerFilter.spatialRelationship,n=i[0].spatialReference||t;if(!m(e,r,W,n))return D.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0;return B(s,W,i,n,o)}const o=this._viewMaskGeometries;if(a(o)&&a(this.viewFilter)&&a(s)){const i=this.viewFilter.spatialRelationship,n=o[0].spatialReference||t;if(!m(e,r,W,n))return D.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0;return B(s,W,o,n,i)}return!0}get parsedGeometry(){const e=this._viewMaskGeometries,t=this._layerMaskGeometries;return n(e)||n(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return n(e)||n(this._geometryEngine)?null:O(this._geometryEngine,e.geometry,e.spatialRelationship)}get _viewMaskGeometries(){if(n(this.viewFilter)||n(this._geometryEngine))return null;const{geometry:e}=this.viewFilter;if(n(e))return null;const{distance:t,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,s="mesh"===e.type?e.extent:e;if(n(t)||0===t)return O(this._geometryEngine,s,i);const o=r||p(s.spatialReference);if(s.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(s,t,o);return O(this._geometryEngine,e,i)}const l=_(s,T.WGS84);if(a(l)){const e=_(this._geometryEngine.geodesicBuffer(l,t,o),s.spatialReference);return O(this._geometryEngine,e,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(S().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let c=null;try{c=j(s,T.WGS84)}catch(u){}if(c)try{c=j(this._geometryEngine.geodesicBuffer(c,t,o),s.spatialReference)}catch(u){c=null}return c||D.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s.spatialReference.wkid}) to WGS84.`),O(this._geometryEngine,c,i)}static checkSupport(e){return!n(e)&&(e.timeExtent?(D.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!A(e.spatialRelationship)||(D.warn(`Filters with spatialRelationship other than ${G.join(", ")} are not supported for mesh scene layers`),!1))}};e([u()],C.prototype,"layerFilter",void 0),e([u({type:I})],C.prototype,"viewFilter",void 0),e([u()],C.prototype,"layerFieldsIndex",void 0),e([u()],C.prototype,"loadAsyncModule",void 0),e([u()],C.prototype,"applyFilters",void 0),e([u()],C.prototype,"addSqlFilter",void 0),e([u({readOnly:!0})],C.prototype,"sortedObjectIds",null),e([u({readOnly:!0})],C.prototype,"parsedWhereClause",null),e([u({readOnly:!0})],C.prototype,"parsedGeometry",null),e([u({readOnly:!0})],C.prototype,"_layerMaskGeometries",null),e([u({readOnly:!0})],C.prototype,"_viewMaskGeometries",null),e([u()],C.prototype,"_projectionEngineLoaded",void 0),e([u()],C.prototype,"_geometryEngine",void 0),C=e([g("esri.views.3d.layers.i3s.I3SMeshViewFilter")],C);const G=(e=>e)(["contains","intersects","disjoint"]);function A(e){return null!=e&&G.includes(e)}var x;function O(e,t,s){if(n(t))return null;if("disjoint"===s&&"polygon"===t.type){const s=new Array(t.rings.length);for(let e=0;e<t.rings.length;++e){const r=b(1/0,1/0,-1/0,-1/0);R(r,t.rings[e]),s[e]={type:"polygon",rings:[t.rings[e]],spatialReference:t.spatialReference,aabr:r}}s.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const o=new Set,n=new r;for(let t=0;t<s.length;++t){const r=s[t];for(let e=t+1;e<s.length;++e){const t=s[e];if(t.aabr[0]>=r.aabr[2])break;o.add(t)}o.forEach((t=>{if(r!==t)if(t.aabr[2]<=r.aabr[0])o.delete(t);else if(e.intersects(r,t)){r.rings=r.rings.concat(t.rings),F(r.aabr,t.aabr,r.aabr),delete r._geVersion,o.delete(t);const e=i(s,t,s.length,n);s.splice(e,1)}})),o.add(r)}for(const e of s)delete e.aabr;return s}return[t]}function B(e,t,r,i,s){const o=K(e,t,i);return r.every((t=>V(e,t,o,s)!==x.DISCARD))}function L(e,t,r,i,s,o,n,a){const l=n[0].spatialReference||s.spatialReference;if(!m(r.node.mbs,o,W,l))return void D.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=K(e,W,l),p=P(a,s,l,i,r.objectHandle);for(const u of n){if(0===t.length)return;switch(V(e,u,c,a)){case x.DISCARD:return void(t.length=0);case x.KEEP:continue}k(t,r.featureIds,(t=>Z(e,u,t,p)))}}!function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"}(x||(x={}));const W=[0,0,0,0];function P(e,t,r,i,s){const o=t.renderSpatialReference,n=new Map,a={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let c,p;switch(e){case"intersects":c=(e,t,r)=>e.intersects(t,r)?x.KEEP:x.TEST,p=U;break;case"contains":c=(e,t,r)=>e.contains(t,r)?x.TEST:x.DISCARD,p=U;break;default:c=(e,t,r)=>e.disjoint(t,r)?x.TEST:x.DISCARD,p=q}return{collection:i,object:s,type:e,maskSR:r,renderSR:o,aabbCache:n,triangle:a,positions:l,triangleTest:c,geometryTest:p}}function K(e,t,r){const i={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},s=!r.isWGS84&&!r.isWebMercator,n=Number.isNaN(t[3])?0:o(t[3],0,2*v.radius),a=s?e.buffer(i,n,1):e.geodesicBuffer(i,n,1);return a.type="polygon",a}function V(e,t,r,i){switch(i){case"intersects":case"contains":return U(e,t,r);case"disjoint":return q(e,t,r)}}function U(e,t,r){return e.intersects(t,r)?e.contains(t,r)?x.KEEP:x.TEST:x.DISCARD}function q(e,t,r){return e.intersects(t,r)?e.contains(t,r)?x.DISCARD:x.TEST:x.KEEP}const N=2**-32;function Z(e,t,r,i){const{collection:s,object:o,renderSR:n,maskSR:a,geometryTest:l,aabbCache:c}=i;let p=c.get(r);if(!p){const e=s.getObjectTransform(o);s.getComponentAabb(o,r,$);const t=[[$[0],$[1],0],[$[0],$[4],0],[$[3],$[4],0],[$[3],$[1],0]];for(let r=0;r<4;++r)d(t[r],t[r],e.rotationScale),f(t[r],t[r],e.position),w(t[r],n,t[r],a);p={rings:[t],hasZ:!1,hasM:!1,type:"polygon",spatialReference:a},p.rings[0][4]=p.rings[0][0],c.set(r,p)}switch(l(e,t,p)){case x.DISCARD:return!1;case x.KEEP:return!0}const{triangle:u,triangleTest:g,positions:h}=i,m=u.rings[0][0],S=u.rings[0][1],j=u.rings[0][2],E=s.getObjectTransform(o);s.getComponentPositions(o,r,h);const{indices:b,data:R,stride:F,startIndex:v,endIndex:_}=h;for(let I=v;I<_;I+=3){const r=F*b[I+0],i=F*b[I+1],s=F*b[I+2];y(m,R[r+0],R[r+1],R[r+2]),y(S,R[i+0],R[i+1],R[i+2]),y(j,R[s+0],R[s+1],R[s+2]),d(m,m,E.rotationScale),d(S,S,E.rotationScale),d(j,j,E.rotationScale),f(m,m,E.position),f(S,S,E.position),f(j,j,E.position),w(m,n,m,a),w(S,n,S,a),w(j,n,j,a);const o=S[0]-m[0],l=S[1]-m[1],c=j[0]-m[0],p=j[1]-m[1];if(!(Math.abs(o*p-l*c)<N))switch(delete u._geVersion,g(e,t,u)){case x.DISCARD:return!1;case x.KEEP:return!0}}return"intersects"!==i.type}const $=E();export{C as I3SMeshViewFilter};