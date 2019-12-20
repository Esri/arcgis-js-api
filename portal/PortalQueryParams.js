// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/jsonMap","../core/lang","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/webMercatorUtils"],function(t,r,e,o,s,i,n,a,u,p,l,c){var y=new n.default({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});return function(t){function r(r){var e=t.call(this,r)||this;return e.categories=null,e.disableExtraQuery=!1,e.extent=null,e.num=10,e.query=null,e.sortField=null,e.start=1,e}o(r,t),i=r,Object.defineProperty(r.prototype,"sortOrder",{get:function(){return this._get("sortOrder")||"asc"},set:function(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new i({categories:this.categories?a.clone(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},r.prototype.toRequestOptions=function(t,r){var o;this.categories&&(o=this.categories.map(function(t){return Array.isArray(t)?JSON.stringify(t):t}));var s;if(this.extent){var i=c.project(this.extent,l.WGS84);i&&(s=i.xmin+","+i.ymin+","+i.xmax+","+i.ymax)}var n=this.query;!this.disableExtraQuery&&t.extraQuery&&(n="("+n+")"+t.extraQuery);var a={categories:o,bbox:s,q:n,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(a.sortField=y.toJSON(this.sortField),a.sortOrder=this.sortOrder),{query:e({},r,a)}};var i;return s([u.property()],r.prototype,"categories",void 0),s([u.property()],r.prototype,"disableExtraQuery",void 0),s([u.property({type:p})],r.prototype,"extent",void 0),s([u.property()],r.prototype,"num",void 0),s([u.property()],r.prototype,"query",void 0),s([u.property()],r.prototype,"sortField",void 0),s([u.property()],r.prototype,"sortOrder",null),s([u.property()],r.prototype,"start",void 0),r=i=s([u.subclass("esri.portal.PortalQueryParams")],r)}(u.declared(i))});