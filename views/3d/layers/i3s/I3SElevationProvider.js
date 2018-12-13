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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures","../../support/Evented","../../webgl-engine/lib/Selector"],function(e,t,r,o,i,n,s,a,p,c,l,d){var u=p.empty(),h={spatialReference:null,extent:u},y=a.vec3f64.create(),f=a.vec3f64.create(),v=a.vec3f64.create(),g=n.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(e){function t(t){return e.call(this)||this}return r(t,e),t.prototype.initialize=function(){var e=this.layerView.view;this.view=e,this.renderCoordsHelper=e.renderCoordsHelper,this.intersectLayers=[this.stageLayer],this.selector=new d(e.viewingMode);var t=this.layerView.layer.fullExtent;this.zmin=t.zmin,this.zmax=t.zmax},t.prototype.getElevation=function(e){if(c.isPoint(e)){if(!this.renderCoordsHelper.toRenderCoords(e,y))return g.error("could not project point for elevation alignment"),-1/0}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,y))return g.error("could not project point for elevation alignment"),-1/0;var t=this.layerView.elevationOffset,r=this.zmin+t,o=this.zmax+t;return a.vec3.copy(f,y),a.vec3.copy(v,y),this.renderCoordsHelper.setAltitude(o,f),this.renderCoordsHelper.setAltitude(r,v),this.selector.init(this.intersectLayers,f,v,null,null,1,!1),this.selector.minResult.getIntersectionPoint(y)?this.renderCoordsHelper.getAltitude(y):-1/0},t.prototype.layerChanged=function(){this.spatialReference&&(h.extent=this.computeLayerExtent(this.intersectLayers[0]),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.objectChanged=function(e){this.spatialReference&&(h.extent=this.computeObjectExtent(e),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.computeObjectExtent=function(e){return p.empty(u),this.expandExtent(e,u),u},t.prototype.computeLayerExtent=function(e){p.empty(u);for(var t=0,r=e.getObjects();t<r.length;t++){var o=r[t];this.expandExtent(o,u)}return u},t.prototype.expandExtent=function(e,t){for(var r=e.getBBMin(!0),o=e.getBBMax(!0),i=0;i<8;++i)y[0]=1&i?r[0]:o[0],y[1]=2&i?r[1]:o[1],y[2]=4&i?r[2]:o[2],a.vec3.transformMat4(y,y,e.objectTransformation),this.renderCoordsHelper.fromRenderCoords(y,y,this.spatialReference),p.expand(t,y);return t},o([s.property({constructOnly:!0})],t.prototype,"layerView",void 0),o([s.property({constructOnly:!0})],t.prototype,"stageLayer",void 0),o([s.property()],t.prototype,"view",void 0),o([s.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=o([s.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(s.declared(i,l.Evented))});