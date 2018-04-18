// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/Accessor","../core/kebabDictionary","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/webMercatorUtils"],function(t,r,e,o,s,i,n,a,u,p,l){var y=n({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});return function(t){function r(r){var e=t.call(this)||this;return e.disableExtraQuery=!1,e.extent=null,e.num=10,e.query=null,e.sortField=null,e.start=1,e}return e(r,t),i=r,Object.defineProperty(r.prototype,"sortOrder",{get:function(){return this._get("sortOrder")||"asc"},set:function(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new i({disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},r.prototype.toRequestOptions=function(t,r){var e;if(this.extent){var o=l.project(this.extent,p.WGS84);o&&(e=o.xmin+","+o.ymin+","+o.xmax+","+o.ymax)}var i=this.query;!this.disableExtraQuery&&t.extraQuery&&(i="("+i+")"+t.extraQuery);var n={bbox:e,q:i,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(n.sortField=y.toJSON(this.sortField),n.sortOrder=this.sortOrder),{query:s.mixin(r,n)}},o([a.property()],r.prototype,"disableExtraQuery",void 0),o([a.property({type:u})],r.prototype,"extent",void 0),o([a.property()],r.prototype,"num",void 0),o([a.property()],r.prototype,"query",void 0),o([a.property()],r.prototype,"sortField",void 0),o([a.property()],r.prototype,"sortOrder",null),o([a.property()],r.prototype,"start",void 0),r=i=o([a.subclass("esri.portal.PortalQueryParams")],r);var i}(a.declared(i))});