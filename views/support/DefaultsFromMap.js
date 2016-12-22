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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","dojo/_base/lang","../../core/Accessor","../../core/watchUtils","../../core/HandleRegistry"],function(e,t,i,s,r,a,o,n,l){var p=function(e){function t(i){e.call(this),this.isDone=!1,this.spatialReference=null,this.extent=null,this.mapCollectionPaths=t.DefaultMapCollectionPaths.slice(),this._handles=new l,this._waitTask=null,this._isStarted=!1}return i(t,e),t.prototype.normalizeCtorArgs=function(e){return e=a.mixin({},e),this._set("view",e.view),delete e.view,e},t.prototype.initialize=function(){var e=this;this.watch("mapCollectionPaths",function(){e._isStarted&&(e.reset(),e.start())})},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1),this._cancelLoading()},t.prototype.reset=function(){this._handles.removeAll(),this._isStarted=!1,this._set("spatialReference",null),this._set("extent",null),this._set("isDone",!1)},t.prototype.start=function(){this._handles.removeAll(),this._isStarted=!0;for(var e=this._updateLayerChange.bind(this),t=0;t<this.mapCollectionPaths.length;t++)this._handles.add(n.on(this.view,"map."+this.mapCollectionPaths[t],"change",e,e,e))},t.prototype.supportedSpatialReferenceForLayer=function(e){return e.spatialReference&&this.view.isSpatialReferenceSupported(e.spatialReference,e)?e.spatialReference:void 0},t.prototype._ownerNameFromCollectionName=function(e){var t=e.lastIndexOf(".");return-1===t?"view":"view."+e.slice(0,t)},t.prototype._ensureLoadedOwnersFromCollectionName=function(e){for(var t,i=this._ownerNameFromCollectionName(e),s=i.split("."),r=0;r<s.length&&(t=this.get(s.slice(0,r+1).join(".")),t);r++)if(t.load&&!t.isFulfilled())return{owner:null,loading:t.load()};return{owner:t}},t.prototype._cancelLoading=function(){this._waitTask=null},t.prototype._updateWhen=function(e){var t=this,i=!0,s=!1,r=e.always(function(){i?s=!0:r===t._waitTask&&t._update()});return i=!1,s||(this._waitTask=r),s},t.prototype._updateLayerChange=function(){this.spatialReference||this.isDone&&this._set("isDone",!1),this._update()},t.prototype._update=function(){if(this._cancelLoading(),!this.isDone){for(var e=!1,t=0;t<this.mapCollectionPaths.length;t++){var i="map."+this.mapCollectionPaths[t],s=this._ensureLoadedOwnersFromCollectionName(i);if(s.loading&&!this._updateWhen(s.loading)){e=!0;break}var r=s.owner;if(!(!r||r.isRejected&&r.isRejected())){var a=this.view.get(i);if(a&&this._processSpatialReferenceSources(a)){e=!0;break}}}e||this._set("isDone",!0),this.isDone&&!this.spatialReference&&this.defaultSpatialReference&&this._set("spatialReference",this.defaultSpatialReference)}},t.prototype._processSpatialReferenceSources=function(e){for(var t=0;t<e.length;t++){var i=e.getItemAt(t);if(i.load&&!i.isFulfilled()&&!this._updateWhen(i.load()))return!0;if(!i.load||i.isResolved()){var s=i.fullExtent,r=this.supportedSpatialReferenceForLayer(i);if(!r&&this.extent||!s||this._set("extent",s),r)return this._set("spatialReference",r),this._set("isDone",!0),!0;var a=i;if(a.layers&&this._processSpatialReferenceSources(a.layers))return!0}}return!1},t.DefaultMapCollectionPaths=["basemap.baseLayers","layers","ground.layers","basemap.referenceLayers"],s([r.property({readOnly:!0})],t.prototype,"isDone",void 0),s([r.property({readOnly:!0})],t.prototype,"view",void 0),s([r.property({readOnly:!0})],t.prototype,"spatialReference",void 0),s([r.property({readOnly:!0})],t.prototype,"extent",void 0),s([r.property()],t.prototype,"mapCollectionPaths",void 0),s([r.property()],t.prototype,"defaultSpatialReference",void 0),t=s([r.subclass("esri.views.support.DefaultsFromMap")],t)}(r.declared(o));return p});