// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures","../../lib/glMatrix","../../support/Evented","../../webgl-engine/lib/Selector"],function(e,t,r,i,o,n,s,a,l,p,c,d){var u=a.empty(),h={spatialReference:null,extent:u},y=p.vec3d.create(),f=p.vec3d.create(),v=p.vec3d.create(),g=n.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(e){function t(t){return e.call(this)||this}return r(t,e),t.prototype.initialize=function(){this.renderCoordsHelper=this.layerView.view.renderCoordsHelper,this.intersectLayers=[this.stageLayer],this.selector=new d(this.layerView.view.viewingMode);var e=this.layerView.layer.fullExtent;this.zmin=e.zmin,this.zmax=e.zmax},t.prototype.getElevation=function(e){if(l.isPoint(e)){if(!this.renderCoordsHelper.toRenderCoords(e,y))return g.error("could not project point for elevation alignment"),-1/0}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,y))return g.error("could not project point for elevation alignment"),-1/0;var t=this.layerView.elevationOffset,r=this.zmin+t,i=this.zmax+t;return p.vec3d.set(y,f),p.vec3d.set(y,v),this.renderCoordsHelper.setAltitude(i,f),this.renderCoordsHelper.setAltitude(r,v),this.selector.init(this.intersectLayers,f,v,null,null,1,!1),this.selector.getMinResult().getIntersectionPoint(y)?this.renderCoordsHelper.getAltitude(y):-1/0},t.prototype.layerChanged=function(){this.spatialReference&&(h.extent=this.computeLayerExtent(this.intersectLayers[0]),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.objectChanged=function(e){this.spatialReference&&(h.extent=this.computeObjectExtent(e),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.computeObjectExtent=function(e){return a.empty(u),this.expandExtent(e,u),u},t.prototype.computeLayerExtent=function(e){a.empty(u);for(var t=0,r=e.getObjects();t<r.length;t++){var i=r[t];this.expandExtent(i,u)}return u},t.prototype.expandExtent=function(e,t){for(var r=e.getBBMin(!0),i=e.getBBMax(!0),o=0;o<8;++o)y[0]=1&o?r[0]:i[0],y[1]=2&o?r[1]:i[1],y[2]=4&o?r[2]:i[2],p.mat4d.multiplyVec3(e.objectTransformation,y),this.renderCoordsHelper.fromRenderCoords(y,y,this.spatialReference),a.expand(t,y);return t},i([s.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([s.property({constructOnly:!0})],t.prototype,"stageLayer",void 0),i([s.property({readOnly:!0,aliasOf:"layerView.view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([s.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(s.declared(o,c.Evented))});