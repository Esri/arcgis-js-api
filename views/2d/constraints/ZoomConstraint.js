// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../layers/support/LOD"],function(e,t,o,i,r,s,a){var c=function(e){function t(){e.apply(this,arguments),this._lodByScale={},this._scales=[],this.effectiveLODs=null,this.effectiveMinZoom=-1,this.effectiveMaxZoom=-1,this.effectiveMinScale=0,this.effectiveMaxScale=0,this.enabled=!0,this.lods=null,this.minZoom=-1,this.maxZoom=-1,this.minScale=0,this.maxScale=0,this.snapToZoom=!0}return o(t,e),t.prototype.initialize=function(){var e=this,t=this,o=t.lods,i=t.minScale,r=t.maxScale,s=t.minZoom,a=t.maxZoom,c=-1,n=-1,l=!1,f=!1;if(0!==i&&0!==r&&r>i&&(y=[r,i],i=y[0],r=y[1]),!o||!o.length)return this._set("effectiveMinScale",i),void this._set("effectiveMaxScale",r);o=o.map(function(e){return e.clone()}),o.sort(function(e,t){return t.scale-e.scale}),o.forEach(function(e,t){return e.level=t});for(var p,h=0,m=o;h<m.length;h++){var v=m[h];!l&&i>0&&i>=v.scale&&(c=v.level,l=!0),!f&&r>0&&r>=v.scale&&(n=p?p.level:-1,f=!0),p=v}-1===s&&(s=0===i?0:c),-1===a&&(a=0===r?o.length-1:n),s=Math.max(s,0),s=Math.min(s,o.length-1),a=Math.max(a,0),a=Math.min(a,o.length-1),s>a&&(u=[a,s],s=u[0],a=u[1]),i=o[s].scale,r=o[a].scale,o.splice(0,s),o.splice(a-s+1,o.length),o.forEach(function(t,o){e._lodByScale[t.scale]=t,e._scales[o]=t.scale}),this._set("effectiveLODs",o),this._set("effectiveMinZoom",s),this._set("effectiveMaxZoom",a),this._set("effectiveMinScale",i),this._set("effectiveMaxScale",r);var y,u},t.prototype.constrain=function(e,t){if(!this.enabled||t&&e.scale===t.scale)return e;var o=this.effectiveMinScale,i=this.effectiveMaxScale,r=e.targetGeometry,s=t&&t.targetGeometry,a=0!==i&&e.scale<i,c=0!==o&&e.scale>o;if(a||c){var n=c?o:i;if(s){var l=(n-t.scale)/(e.scale-t.scale);r.x=s.x+(r.x-s.x)*l,r.y=s.y+(r.y-s.y)*l}e.scale=n}return this.snapToZoom&&this.effectiveLODs&&(e.scale=this._getClosestScale(e.scale)),e},t.prototype.zoomToScale=function(e){if(!this.effectiveLODs)return 0;e-=this.effectiveMinZoom,e=Math.max(0,e);var t=this._scales;if(0>=e)return t[0];if(e>=t.length)return t[t.length-1];var o=Math.round(e-.5),i=Math.round(e);return t[i]+(i-e)*(t[o]-t[i])},t.prototype.scaleToZoom=function(e){if(!this.effectiveLODs)return-1;var t,o,i=this._scales,r=0,s=i.length-1;for(r;s>r;r++){if(t=i[r],o=i[r+1],e>=t)return r+this.effectiveMinZoom;if(o===e)return r+1+this.effectiveMinZoom;if(t>e&&e>o)return r+1-(e-o)/(t-o)+this.effectiveMinZoom}return r},t.prototype.snapScale=function(e,t){if(void 0===t&&(t=.95),!this.effectiveLODs)return e;var o=this.scaleToZoom(e),i=(o+1)%Math.floor(o+1);return i>=t?this.zoomToScale(Math.ceil(o)):this.zoomToScale(Math.floor(o))},t.prototype.clone=function(){return new t({enabled:this.enabled,lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})},t.prototype._getClosestScale=function(e){return this._lodByScale[e]?this._lodByScale[e].scale:(e=this._scales.reduce(function(t,o,i,r){return Math.abs(o-e)<=Math.abs(t-e)?o:t},this._scales[0]),this._lodByScale[e].scale)},i([r.property({readOnly:!0})],t.prototype,"effectiveLODs",void 0),i([r.property({readOnly:!0})],t.prototype,"effectiveMinZoom",void 0),i([r.property({readOnly:!0})],t.prototype,"effectiveMaxZoom",void 0),i([r.property({readOnly:!0})],t.prototype,"effectiveMinScale",void 0),i([r.property({readOnly:!0})],t.prototype,"effectiveMaxScale",void 0),i([r.property()],t.prototype,"enabled",void 0),i([r.property({type:[a]})],t.prototype,"lods",void 0),i([r.property()],t.prototype,"minZoom",void 0),i([r.property()],t.prototype,"maxZoom",void 0),i([r.property()],t.prototype,"minScale",void 0),i([r.property()],t.prototype,"maxScale",void 0),i([r.property()],t.prototype,"snapToZoom",void 0),t=i([r.subclass("esri.views.2d.constraints.ZoomConstraint")],t)}(r.declared(s));return c});