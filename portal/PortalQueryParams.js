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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessoireSupport/typescript","../core/Accessoire","../core/jsonDictionary","../geometry/Extent","../geometry/support/webMercatorUtils","../geometry/SpatialReference","dojo/_base/lang"],function(t,e,r,o,s,i,n,u,a,p,l){var y=n({title:"title",created:"created",type:"type",owner:"owner",avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"}),d=function(t){function e(){t.call(this),this.disableExtraQuery=null,this.extent=null,this.num=null,this.query=null,this.sortField=null,this.sortOrder=null,this.start=null}return r(e,t),e.prototype._sortOrderSetter=function(t,e){return"asc"===t||"desc"===t?t:e},e.prototype.clone=function(){return new e({disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})},e.prototype.toRequestOptions=function(t,e){var r;if(this.extent){var o=a.project(this.extent,p.WGS84);o&&(r=o.xmin+","+o.ymin+","+o.xmax+","+o.ymax)}var s=this.query;!this.disableExtraQuery&&t.extraQuery&&(s="("+s+")"+t.extraQuery);var i={bbox:r,q:s,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=y.toJSON(this.sortField),i.sortOrder=this.sortOrder),{query:l.mixin(e,i)}},o([s.shared("esri.portal.PortalQueryParams")],e.prototype,"declaredClass",void 0),o([s.property({value:!1})],e.prototype,"disableExtraQuery",void 0),o([s.property({type:u})],e.prototype,"extent",void 0),o([s.property({value:10})],e.prototype,"num",void 0),o([s.property()],e.prototype,"query",void 0),o([s.property()],e.prototype,"sortField",void 0),o([s.property({value:"asc"})],e.prototype,"sortOrder",void 0),o([s.property({value:1})],e.prototype,"start",void 0),e=o([s.subclass()],e)}(i);return d});