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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/Collection","../../core/JSONSupport","../../core/maybe","../../core/urlUtils","../../core/accessorSupport/decorators","./SceneModification"],(function(r,e,t,o,n,i,s,u,c,a){"use strict";return function(r){function e(e){var t=r.call(this,e)||this;return t.url=null,t}var n;return t.__extends(e,r),n=e,e.prototype.toJSON=function(r){return this.toArray().map((function(e){return e.toJSON(r)})).filter((function(r){return!!r.geometry}))},e.prototype.clone=function(){return new n({url:this.url,items:this.items.map((function(r){return r.clone()}))})},e.prototype._readModifications=function(r,e){for(var t=0,o=r;t<o.length;t++){var n=o[t];this.add(a.fromJSON(n,e))}},e.fromJSON=function(r,e){var t=new n;return t._readModifications(r,e),t},e.fromUrl=function(r,e,i){return t.__awaiter(this,void 0,void 0,(function(){var c,l,f,p,_,d,g;return t.__generator(this,(function(y){switch(y.label){case 0:return c={url:u.urlToObject(r),origin:"service"},[4,o(r,{responseType:"json",signal:s.get(i,"signal")})];case 1:for(l=y.sent(),f=e.toJSON(),p=[],_=0,d=l.data;_<d.length;_++)g=d[_],p.push(a.fromJSON(t.__assign(t.__assign({},g),{geometry:t.__assign(t.__assign({},g.geometry),{spatialReference:f})}),c));return[2,new n({url:r,items:p})]}}))}))},t.__decorate([c.property({type:String})],e.prototype,"url",void 0),e=n=t.__decorate([c.subclass("esri.layers.support.SceneModifications")],e)}(i.JSONSupportMixin(n.ofType(a)))}));