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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","dojo/_base/lang","../../core/Accessoire","../../core/watchUtils","../../core/HandleRegistry"],function(e,t,i,n,o,s,r,a,l){var h=function(e){function t(){e.call(this)}return i(t,e),t.prototype.dojoConstructor=function(){this._handles=new l,this._waitTask=null,this._spatialReference=null,this._extent=null,this._isDone=!1,this._isStarted=!1},t.prototype.normalizeCtorArgs=function(e){return e=s.mixin({},e),this._view=e.view,delete e.view,e},t.prototype.initialize=function(){var e=this;this.watch("mapCollectionPaths",function(){e._isStarted&&(e.reset(),e.start())})},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1),this._cancelLoading()},t.prototype.reset=function(){this._handles.removeAll(),this._isStarted=!1,this._spatialReference=null,this.notifyChange("spatialReference"),this._extent=null,this.notifyChange("extent"),this._isDone=!1,this.notifyChange("isDone")},t.prototype.start=function(){this._handles.removeAll(),this._isStarted=!0;for(var e=this._updateLayerChange.bind(this),t=0;t<this.mapCollectionPaths.length;t++)this._handles.add(a.on(this._view,this.mapCollectionPaths[t],"change",e,e,e))},t.prototype._ownerNameFromCollectionName=function(e){var t=e.lastIndexOf(".");return-1===t?"view":"view."+e.slice(0,t)},t.prototype._ensureLoadedOwnersFromCollectionName=function(e){for(var t,i=this._ownerNameFromCollectionName(e),n=i.split("."),o=0;o<n.length&&(t=this.get(n.slice(0,o+1).join(".")),t);o++)if(t.load&&!t.isFulfilled())return{owner:null,loading:t.load()};return{owner:t}},t.prototype._cancelLoading=function(){this._waitTask=null},t.prototype._updateWhen=function(e){var t=this,i=!0,n=!1,o=e.always(function(){i?n=!0:o===t._waitTask&&t._update()});return i=!1,n||(this._waitTask=o),n},t.prototype._updateLayerChange=function(){this.spatialReference||this._isDone&&(this._isDone=!1,this.notifyChange("isDone")),this._update()},t.prototype._update=function(){if(this._cancelLoading(),!this._isDone){this._isDone=!0;for(var e=0;e<this.mapCollectionPaths.length;e++){var t=this.mapCollectionPaths[e],i=this._ensureLoadedOwnersFromCollectionName(t);if(i.loading&&!this._updateWhen(i.loading)){this._isDone=!1;break}var n=i.owner;if(!(!n||n.isRejected&&n.isRejected())){var o=this.view.get(t);if(o&&this._processSpatialReferenceSources(o))break}}this._isDone&&this.notifyChange("isDone")}},t.prototype._processSpatialReferenceSources=function(e){for(var t=0;t<e.length;t++){var i=e.getItemAt(t);if(i.load&&!i.isFulfilled()&&!this._updateWhen(i.load()))return this._isDone=!1,!0;if(!i.load||i.isResolved()){var n=i.fullExtent;if(!i.spatialReference&&this._extent||!n||(this._extent=n,this.notifyChange("extent")),i.spatialReference)return this._spatialReference=i.spatialReference,this.notifyChange("spatialReference"),!0;var o=i;if(o.layers&&this._processSpatialReferenceSources(o.layers))return!0}}return!1},n([o.shared("esri.views.support.DefaultsFromMap")],t.prototype,"declaredClass",void 0),n([o.shared(["map.basemap.baseLayers","map.layers","map.ground.layers"])],t.prototype,"defaultMapCollectionPaths",void 0),n([o.property({readOnly:!0,getter:function(){return this._isDone}})],t.prototype,"isDone",void 0),n([o.property({readOnly:!0,getter:function(){return this._view}})],t.prototype,"view",void 0),n([o.property({readOnly:!0,getter:function(){return this._spatialReference}})],t.prototype,"spatialReference",void 0),n([o.property({readOnly:!0,getter:function(){return this._extent}})],t.prototype,"extent",void 0),n([o.property({dependsOn:["view.defaultsFromMapCollectionPaths"],getter:function(){return this.view.defaultsFromMapCollectionPaths||this.defaultMapCollectionPaths}})],t.prototype,"mapCollectionPaths",void 0),t=n([o.subclass()],t)}(r);return h});