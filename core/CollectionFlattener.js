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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Collection","./Handles","./accessorSupport/decorators"],(function(t,o,e,r,n,i,s){return function(t){function o(o){var e=t.call(this,o)||this;return e._handles=new i,e.root=null,e}return e(o,t),o.prototype.initialize=function(){var t=this;this._handles.add(this.rootCollectionNames.map((function(o){return t.watch("root."+o,(function(){return t.updateCollections()}),!0)}))),this.updateCollections()},o.prototype.destroy=function(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null},o.prototype.updateCollections=function(){var t=this;this._collections=this.rootCollectionNames.map((function(o){return t.get("root."+o)})).filter((function(t){return null!=t})),this.refresh()},o.prototype.refresh=function(){var t=this,o=this._handles;o.remove("collections"),this.removeAll();for(var e=[],r=[],n=0,i=this._collections;n<i.length;n++){var s=i[n];this._processCollection(e,r,s)}this.push.apply(this,r);for(var l=0,c=e;l<c.length;l++){var p=c[l];o.add(p.on("after-changes",(function(){return t.refresh()})),"collections")}},o.prototype._createNewInstance=function(t){return new n(t)},o.prototype._processCollection=function(t,o,e){var r=this;e&&(t.push(e),e.forEach((function(e){e&&(o.push(e),r._processCollection(t,o,r.getChildrenFunction(e)))})))},r([s.property()],o.prototype,"rootCollectionNames",void 0),r([s.property()],o.prototype,"root",void 0),r([s.property()],o.prototype,"getChildrenFunction",void 0),o=r([s.subclass("esri.core.CollectionFlattener")],o)}(s.declared(n))}));