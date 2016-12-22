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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/kebabDictionary","../geometry/Extent","../geometry/support/webMercatorUtils","../geometry/SpatialReference","dojo/_base/lang"],function(t,r,e,o,s,i,n,u,a,p,l){var y=n({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"}),d=function(t){function r(r){t.call(this),this.disableExtraQuery=!1,this.extent=null,this.num=10,this.query=null,this.sortField=null,this.start=1}return e(r,t),Object.defineProperty(r.prototype,"sortOrder",{get:function(){return this._get("sortOrder")||"asc"},set:function(t){("asc"===t||"desc"===t)&&this._set("sortOrder",t)},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new r({disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},r.prototype.toRequestOptions=function(t,r){var e;if(this.extent){var o=a.project(this.extent,p.WGS84);o&&(e=o.xmin+","+o.ymin+","+o.xmax+","+o.ymax)}var s=this.query;!this.disableExtraQuery&&t.extraQuery&&(s="("+s+")"+t.extraQuery);var i={bbox:e,q:s,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=y.toJSON(this.sortField),i.sortOrder=this.sortOrder),{query:l.mixin(r,i)}},o([s.property()],r.prototype,"disableExtraQuery",void 0),o([s.property({type:u})],r.prototype,"extent",void 0),o([s.property()],r.prototype,"num",void 0),o([s.property()],r.prototype,"query",void 0),o([s.property()],r.prototype,"sortField",void 0),o([s.property()],r.prototype,"sortOrder",null),o([s.property()],r.prototype,"start",void 0),r=o([s.subclass("esri.portal.PortalQueryParams")],r)}(s.declared(i));return d});