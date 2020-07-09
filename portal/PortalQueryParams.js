// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Accessor","../core/jsonMap","../core/lang","../core/accessorSupport/decorators","../geometry/Extent","../geometry/SpatialReference","../geometry/support/webMercatorUtils"],(function(t,e,r,o,s,i,n,a,u,p){var c=new s.default({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});return function(t){function e(e){var r=t.call(this,e)||this;return r.categories=null,r.disableExtraQuery=!1,r.extent=null,r.num=10,r.query=null,r.sortField=null,r.start=1,r}var o;return r.__extends(e,t),o=e,Object.defineProperty(e.prototype,"sortOrder",{get:function(){return this._get("sortOrder")||"asc"},set:function(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new o({categories:this.categories?i.clone(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},e.prototype.toRequestOptions=function(t,e){var o,s;if(this.categories&&(o=this.categories.map((function(t){return Array.isArray(t)?JSON.stringify(t):t}))),this.extent){var i=p.project(this.extent,u.WGS84);i&&(s=i.xmin+","+i.ymin+","+i.xmax+","+i.ymax)}var n=this.query;!this.disableExtraQuery&&t.extraQuery&&(n="("+n+")"+t.extraQuery);var a={categories:o,bbox:s,q:n,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(a.sortField=this.sortField.split(",").map((function(t){return c.toJSON(t.trim())})).join(","),a.sortOrder=this.sortOrder),{query:r.__assign(r.__assign({},e),a)}},r.__decorate([n.property()],e.prototype,"categories",void 0),r.__decorate([n.property()],e.prototype,"disableExtraQuery",void 0),r.__decorate([n.property({type:a})],e.prototype,"extent",void 0),r.__decorate([n.property()],e.prototype,"num",void 0),r.__decorate([n.property()],e.prototype,"query",void 0),r.__decorate([n.property()],e.prototype,"sortField",void 0),r.__decorate([n.property()],e.prototype,"sortOrder",null),r.__decorate([n.property()],e.prototype,"start",void 0),e=o=r.__decorate([n.subclass("esri.portal.PortalQueryParams")],e)}(o)}));