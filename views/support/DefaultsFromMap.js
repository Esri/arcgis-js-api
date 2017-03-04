// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","dojo/_base/lang","../../core/Accessor","../../core/watchUtils","../../core/HandleRegistry"],function(e,t,i,r,a,s,o,n,l){var p=c=function(e){function t(t){var i=e.call(this)||this;return i.isDone=!1,i.spatialReference=null,i.extent=null,i.mapCollectionPaths=c.DefaultMapCollectionPaths.slice(),i._handles=new l,i._waitTask=null,i._isStarted=!1,i}return i(t,e),t.prototype.normalizeCtorArgs=function(e){return e=s.mixin({},e),this._set("view",e.view),delete e.view,e},t.prototype.initialize=function(){var e=this;this.watch("mapCollectionPaths",function(){e._isStarted&&(e.reset(),e.start())})},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1),this._cancelLoading()},t.prototype.reset=function(){this._handles.removeAll(),this._isStarted=!1,this._set("spatialReference",null),this._set("extent",null),this._set("isDone",!1)},t.prototype.start=function(){this._handles.removeAll(),this._isStarted=!0;for(var e=this._updateLayerChange.bind(this),t=0;t<this.mapCollectionPaths.length;t++)this._handles.add(n.on(this.view,"map."+this.mapCollectionPaths[t],"change",e,e,e))},t.prototype.supportedSpatialReferenceForLayer=function(e){return e.spatialReference&&this.view.isSpatialReferenceSupported(e.spatialReference,e)?e.spatialReference:void 0},t.prototype._ownerNameFromCollectionName=function(e){var t=e.lastIndexOf(".");return-1===t?"view":"view."+e.slice(0,t)},t.prototype._ensureLoadedOwnersFromCollectionName=function(e){for(var t,i=this._ownerNameFromCollectionName(e),r=i.split("."),a=0;a<r.length&&(t=this.get(r.slice(0,a+1).join(".")),t);a++)if(t.load&&!t.isFulfilled())return{owner:null,loading:t.load()};return{owner:t}},t.prototype._cancelLoading=function(){this._waitTask=null},t.prototype._updateWhen=function(e){var t=this,i=!0,r=!1,a=e.always(function(){i?r=!0:a===t._waitTask&&t._update()});return i=!1,r||(this._waitTask=a),r},t.prototype._updateLayerChange=function(){this.spatialReference||this.isDone&&this._set("isDone",!1),this._update()},t.prototype._update=function(){if(this._cancelLoading(),!this.isDone){for(var e=!1,t=0;t<this.mapCollectionPaths.length;t++){var i="map."+this.mapCollectionPaths[t],r=this._ensureLoadedOwnersFromCollectionName(i);if(r.loading&&!this._updateWhen(r.loading)){e=!0;break}var a=r.owner;if(!(!a||a.isRejected&&a.isRejected())){var s=this.view.get(i);if(s&&this._processSpatialReferenceSources(s)){e=!0;break}}}e||this._set("isDone",!0),this.isDone&&!this.spatialReference&&this.defaultSpatialReference&&this._set("spatialReference",this.defaultSpatialReference)}},t.prototype._processSpatialReferenceSources=function(e){for(var t=0;t<e.length;t++){var i=e.getItemAt(t);if(i.load&&!i.isFulfilled()&&!this._updateWhen(i.load()))return!0;if(!i.load||i.isResolved()){var r=i.fullExtent,a=this.supportedSpatialReferenceForLayer(i);if(!a&&this.extent||!r||this._set("extent",r),a)return this._set("spatialReference",a),this._set("isDone",!0),!0;var s=i;if(s.layers&&this._processSpatialReferenceSources(s.layers))return!0}}return!1},t}(a.declared(o));p.DefaultMapCollectionPaths=["basemap.baseLayers","layers","ground.layers","basemap.referenceLayers"],r([a.property({readOnly:!0})],p.prototype,"isDone",void 0),r([a.property({readOnly:!0})],p.prototype,"view",void 0),r([a.property({readOnly:!0})],p.prototype,"spatialReference",void 0),r([a.property({readOnly:!0})],p.prototype,"extent",void 0),r([a.property()],p.prototype,"mapCollectionPaths",void 0),r([a.property()],p.prototype,"defaultSpatialReference",void 0),p=c=r([a.subclass("esri.views.support.DefaultsFromMap")],p);var c;return p});