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

define(["require","exports","tslib","./Collection","./Handles","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass"],(function(t,o,e,r,n,i,s){"use strict";return function(t){function o(o){var e=t.call(this,o)||this;return e._handles=new n,e.root=null,e}return e.__extends(o,t),o.prototype.initialize=function(){var t=this;this._handles.add(this.rootCollectionNames.map((function(o){return t.watch("root."+o,(function(){return t.updateCollections()}),!0)}))),this.updateCollections()},o.prototype.destroy=function(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null},o.prototype.updateCollections=function(){var t=this;this._collections=this.rootCollectionNames.map((function(o){return t.get("root."+o)})).filter((function(t){return null!=t})),this.refresh()},o.prototype.refresh=function(){var t=this,o=this._handles;o.remove("collections"),this.removeAll();for(var e=[],r=[],n=0,i=this._collections;n<i.length;n++){var s=i[n];this._processCollection(e,r,s)}this.push.apply(this,r);for(var c=0,l=e;c<l.length;c++){s=l[c];o.add(s.on("after-changes",(function(){return t.refresh()})),"collections")}},o.prototype._createNewInstance=function(t){return new r(t)},o.prototype._processCollection=function(t,o,e){var r=this;e&&(t.push(e),e.forEach((function(e){e&&(r.itemFilterFunction&&!r.itemFilterFunction(e)||o.push(e),r.getChildrenFunction&&r._processCollection(t,o,r.getChildrenFunction(e)))})))},e.__decorate([i.property()],o.prototype,"rootCollectionNames",void 0),e.__decorate([i.property()],o.prototype,"root",void 0),e.__decorate([i.property()],o.prototype,"getChildrenFunction",void 0),e.__decorate([i.property()],o.prototype,"itemFilterFunction",void 0),o=e.__decorate([s.subclass("esri.core.CollectionFlattener")],o)}(r)}));