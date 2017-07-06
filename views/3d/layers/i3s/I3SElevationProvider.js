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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../../../core/Logger","../../../../geometry/Point","../../webgl-engine/lib/Selector","../../support/Evented","../../support/aaBoundingRect","../../lib/glMatrix"],function(e,t,r,o,n,i,s,a,c,l,p,d){var u=p.create(p.NEGATIVE_INFINITY),h={spatialReference:null,extent:u},f=d.vec3d.create(),v=d.vec3d.create(),y=d.vec3d.create(),g=s.getLogger("esri.layers.SceneService"),x=1,E=function(e){function t(t,r){var o=e.call(this)||this;return o.layerView=t,o.renderCoordsHelper=o.layerView.view.renderCoordsHelper,o.intersectLayers=[r],o.selector=new c(o.layerView.view.viewingMode),o.zmin=t.layer.fullExtent.zmin,o.zmax=t.layer.fullExtent.zmax,o}return r(t,e),t.prototype.getElevation=function(e){if(e instanceof a){if(!this.renderCoordsHelper.toRenderCoords(e,f))return g.error("could not project point for elevation alignment"),-(1/0)}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,f))return g.error("could not project point for elevation alignment"),-(1/0);return d.vec3d.set(f,v),d.vec3d.set(f,y),this.renderCoordsHelper.setAltitude(this.zmax,v),this.renderCoordsHelper.setAltitude(this.zmin,y),this.selector.init(this.intersectLayers,v,y,null,null,x,!1),this.selector.getMinResult().getIntersectionPoint(f)?this.renderCoordsHelper.getAltitude(f):-(1/0)},t.prototype.objectCreated=function(e){this.objectChanged(e)},t.prototype.objectDeleted=function(e){this.objectChanged(e)},t.prototype.visibilityChanged=function(e){void 0!==e?this.objectChanged(e):this.spatialReference&&(h.extent=this.computeLayerExtent(this.intersectLayers[0]),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.objectChanged=function(e){this.spatialReference&&(h.extent=this.computeObjectExtent(e),h.spatialReference=this.spatialReference,this.emit("elevation-change",h))},t.prototype.computeObjectExtent=function(e){return p.set(u,p.NEGATIVE_INFINITY),this.expandExtent(e,u),u},t.prototype.computeLayerExtent=function(e){p.set(u,p.NEGATIVE_INFINITY);for(var t=0,r=e.getObjects();t<r.length;t++){var o=r[t];this.expandExtent(o,u)}return u},t.prototype.expandExtent=function(e,t){for(var r=e.getBBMin(!0),o=e.getBBMax(!0),n=0;8>n;++n)f[0]=1&n?r[0]:o[0],f[1]=2&n?r[1]:o[1],f[2]=4&n?r[2]:o[2],d.mat4d.multiplyVec3(e.objectTransformation,f),this.renderCoordsHelper.fromRenderCoords(f,f,this.spatialReference),p.expand(t,f);return t},t}(n.declared(i,l.Evented));return o([n.property()],E.prototype,"layerView",void 0),o([n.property({readOnly:!0,aliasOf:"layerView.view.elevationProvider.spatialReference"})],E.prototype,"spatialReference",void 0),E=o([n.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],E)});