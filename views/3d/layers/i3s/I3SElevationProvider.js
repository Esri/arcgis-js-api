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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../../../core/Logger","../../../../geometry/Point","../../webgl-engine/lib/Selector","../../support/Evented","../../support/aaBoundingRect","../../lib/glMatrix"],function(e,t,r,i,o,n,s,a,c,l,p,d){var h=p.create(p.NEGATIVE_INFINITY),u={spatialReference:null,extent:h},f=d.vec3d.create(),y=d.vec3d.create(),v=d.vec3d.create(),g=s.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider"),x=1,E=function(e){function t(t){return e.call(this)||this}return r(t,e),t.prototype.initialize=function(){this.renderCoordsHelper=this.layerView.view.renderCoordsHelper,this.intersectLayers=[this.stageLayer],this.selector=new c(this.layerView.view.viewingMode);var e=this.layerView.layer.fullExtent;this.zmin=e.zmin,this.zmax=e.zmax},t.prototype.getElevation=function(e){if(e instanceof a){if(!this.renderCoordsHelper.toRenderCoords(e,f))return g.error("could not project point for elevation alignment"),-(1/0)}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,f))return g.error("could not project point for elevation alignment"),-(1/0);var t=this.layerView.elevationOffset,r=this.zmin+t,i=this.zmax+t;return d.vec3d.set(f,y),d.vec3d.set(f,v),this.renderCoordsHelper.setAltitude(i,y),this.renderCoordsHelper.setAltitude(r,v),this.selector.init(this.intersectLayers,y,v,null,null,x,!1),this.selector.getMinResult().getIntersectionPoint(f)?this.renderCoordsHelper.getAltitude(f):-(1/0)},t.prototype.objectCreated=function(e){this.objectChanged(e)},t.prototype.objectDeleted=function(e){this.objectChanged(e)},t.prototype.visibilityChanged=function(e){void 0!==e?this.objectChanged(e):this.spatialReference&&(u.extent=this.computeLayerExtent(this.intersectLayers[0]),u.spatialReference=this.spatialReference,this.emit("elevation-change",u))},t.prototype.objectChanged=function(e){this.spatialReference&&(u.extent=this.computeObjectExtent(e),u.spatialReference=this.spatialReference,this.emit("elevation-change",u))},t.prototype.computeObjectExtent=function(e){return p.set(h,p.NEGATIVE_INFINITY),this.expandExtent(e,h),h},t.prototype.computeLayerExtent=function(e){p.set(h,p.NEGATIVE_INFINITY);for(var t=0,r=e.getObjects();t<r.length;t++){var i=r[t];this.expandExtent(i,h)}return h},t.prototype.expandExtent=function(e,t){for(var r=e.getBBMin(!0),i=e.getBBMax(!0),o=0;8>o;++o)f[0]=1&o?r[0]:i[0],f[1]=2&o?r[1]:i[1],f[2]=4&o?r[2]:i[2],d.mat4d.multiplyVec3(e.objectTransformation,f),this.renderCoordsHelper.fromRenderCoords(f,f,this.spatialReference),p.expand(t,f);return t},i([o.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([o.property({constructOnly:!0})],t.prototype,"stageLayer",void 0),i([o.property({readOnly:!0,aliasOf:"layerView.view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([o.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(o.declared(n,l.Evented));return E});