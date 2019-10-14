// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Evented","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures","../../webgl-engine/lib/Intersector"],function(e,t,r,i,o,n,s,a,c,l,p,d,u){var h=p.empty(),y={spatialReference:null,extent:h,context:"scene"},f=l.vec3f64.create(),v=l.vec3f64.create(),g=l.vec3f64.create(),x=s.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(e){function t(t){return e.call(this)||this}return r(t,e),t.prototype.initialize=function(){var e=this.layerView.view;this.view=e,this.renderCoordsHelper=e.renderCoordsHelper,this.intersectLayers=[this.stageLayer],this.intersector=new u(e.viewingMode);var t=this.layerView.layer.fullExtent;this.zmin=t.zmin,this.zmax=t.zmax},t.prototype.getElevation=function(e){if(d.isPoint(e)){if(!this.renderCoordsHelper.toRenderCoords(e,f))return x.error("could not project point for elevation alignment"),null}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,f))return x.error("could not project point for elevation alignment"),null;var t=this.layerView.elevationOffset,r=this.zmin+t,i=this.zmax+t;return c.vec3.copy(v,f),c.vec3.copy(g,f),this.renderCoordsHelper.setAltitude(i,v),this.renderCoordsHelper.setAltitude(r,g),this.intersector.intersect(this.intersectLayers,v,g,null,null,1,!1),this.intersector.results.min.getIntersectionPoint(f)?this.renderCoordsHelper.getAltitude(f):null},t.prototype.layerChanged=function(){this.spatialReference&&(y.extent=this.computeLayerExtent(this.intersectLayers[0]),y.spatialReference=this.spatialReference,this.emit("elevation-change",y))},t.prototype.objectChanged=function(e){this.spatialReference&&(y.extent=this.computeObjectExtent(e),y.spatialReference=this.spatialReference,this.emit("elevation-change",y))},t.prototype.computeObjectExtent=function(e){return p.empty(h),this.expandExtent(e,h),h},t.prototype.computeLayerExtent=function(e){p.empty(h);for(var t=0,r=e.getObjects();t<r.length;t++){var i=r[t];this.expandExtent(i,h)}return h},t.prototype.expandExtent=function(e,t){for(var r=e.getBBMin(!0),i=e.getBBMax(!0),o=0;o<8;++o)f[0]=1&o?r[0]:i[0],f[1]=2&o?r[1]:i[1],f[2]=4&o?r[2]:i[2],c.vec3.transformMat4(f,f,e.objectTransformation),this.renderCoordsHelper.fromRenderCoords(f,f,this.spatialReference),p.expand(t,f);return t},i([a.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([a.property({constructOnly:!0})],t.prototype,"stageLayer",void 0),i([a.property()],t.prototype,"view",void 0),i([a.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([a.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(a.declared(n.EventedMixin(o)))});