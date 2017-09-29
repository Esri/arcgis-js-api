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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Evented","../../layers/support/LOD","./constraints/ZoomConstraint","./constraints/RotationConstraint"],function(o,e,t,r,n,i,a,p,s,l){var c=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.enabled=!0,e.lods=null,e.minScale=0,e.maxScale=0,e.minZoom=-1,e.maxZoom=-1,e.rotationEnabled=!0,e.snapToZoom=!0,e}return t(e,o),e.prototype.initialize=function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)},e.prototype.destroy=function(){this.view=null,this._set("_zoom",null),this._set("_rotation",null)},Object.defineProperty(e.prototype,"_rotation",{get:function(){return new l({rotationEnabled:this.rotationEnabled})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_defaultLODs",{get:function(){var o=this.get("view.defaultsFromMap.tileInfo"),e=this.get("view.spatialReference");return o&&e&&o.spatialReference.equals(e)?o.lods:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_zoom",{get:function(){return new s({lods:this.lods||this._defaultLODs,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})},enumerable:!0,configurable:!0}),e.prototype.canZoomInTo=function(o){var e=this.effectiveMaxScale;return 0===e||o>=e},e.prototype.canZoomOutTo=function(o){var e=this.effectiveMinScale;return 0===e||e>=o},e.prototype.constrain=function(o,e){return this.enabled?(this._zoom.constrain(o,e),this._rotation.constrain(o,e),o):o},e.prototype.fit=function(o){return this.enabled&&this.snapToZoom?(this._zoom.fit(o),o):o},e.prototype.zoomToScale=function(o){return this._zoom.zoomToScale(o)},e.prototype.scaleToZoom=function(o){return this._zoom.scaleToZoom(o)},e.prototype.snapScale=function(o){return this._zoom.snapToClosestScale(o)},e.prototype.snapToNextScale=function(o){return this._zoom.snapToNextScale(o)},e.prototype.snapToPreviousScale=function(o){return this._zoom.snapToPreviousScale(o)},r([n.property({readOnly:!0,aliasOf:"_zoom.effectiveLODs"})],e.prototype,"effectiveLODs",void 0),r([n.property({readOnly:!0,aliasOf:"_zoom.effectiveMinScale"})],e.prototype,"effectiveMinScale",void 0),r([n.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"})],e.prototype,"effectiveMaxScale",void 0),r([n.property({readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"})],e.prototype,"effectiveMinZoom",void 0),r([n.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"})],e.prototype,"effectiveMaxZoom",void 0),r([n.property()],e.prototype,"enabled",void 0),r([n.property({type:[p]})],e.prototype,"lods",void 0),r([n.property()],e.prototype,"minScale",void 0),r([n.property()],e.prototype,"maxScale",void 0),r([n.property()],e.prototype,"minZoom",void 0),r([n.property()],e.prototype,"maxZoom",void 0),r([n.property()],e.prototype,"rotationEnabled",void 0),r([n.property()],e.prototype,"snapToZoom",void 0),r([n.property()],e.prototype,"view",void 0),r([n.property({type:l,dependsOn:["rotationEnabled"]})],e.prototype,"_rotation",null),r([n.property({dependsOn:["view.spatialReference","view.defaultsFromMap.tileInfo"]})],e.prototype,"_defaultLODs",null),r([n.property({readOnly:!0,type:s,dependsOn:["lods","minZoom","maxZoom","minScale","maxScale","snapToZoom","_defaultLODs"]})],e.prototype,"_zoom",null),e=r([n.subclass("esri.views.2d.MapViewConstraints")],e)}(n.declared(i,a));return c});