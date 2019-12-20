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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Evented","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures","../../webgl-engine/lib/Intersector"],function(e,t,r,i,o,n,s,a,c,l,p,d,f,h,u){var v=f.empty(),y=l.mat4f64.create(),m=d.vec3f64.create(),x=d.vec3f64.create(),g=d.vec3f64.create(),R={spatialReference:null,extent:v,context:"scene"},b=s.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.initialize=function(){var e=this.layerView.view;this.view=e,this.renderCoordsHelper=e.renderCoordsHelper,this.intersector=new u(e.viewingMode),this.intersector.options.store=0;var t=this.layerView.layer.fullExtent;this.zmin=t.zmin,this.zmax=t.zmax},t.prototype.getElevation=function(e){if(h.isPoint(e)){if(!this.renderCoordsHelper.toRenderCoords(e,m))return b.error("could not project point for elevation alignment"),null}else if(!this.renderCoordsHelper.toRenderCoords(e,this.spatialReference,m))return b.error("could not project point for elevation alignment"),null;var t=this.layerView.elevationOffset,r=this.zmin+t,i=this.zmax+t;return p.vec3.copy(x,m),p.vec3.copy(g,m),this.renderCoordsHelper.setAltitude(i,x),this.renderCoordsHelper.setAltitude(r,g),this.intersector.reset(x,g),this.intersectionHandler.intersect(this.intersector,null,x,g),this.intersector.results.min.getIntersectionPoint(m)?this.renderCoordsHelper.getAltitude(m):null},t.prototype.layerChanged=function(){this.spatialReference&&(R.extent=this.computeLayerExtent(),R.spatialReference=this.spatialReference,this.emit("elevation-change",R))},t.prototype.objectChanged=function(e){this.spatialReference&&(R.extent=this.computeObjectExtent(e),R.spatialReference=this.spatialReference,this.emit("elevation-change",R))},t.prototype.computeObjectExtent=function(e){return f.empty(v),this.expandExtent(e,v),v},t.prototype.computeLayerExtent=function(){f.empty(v);for(var e=0,t=this.layerView.getLoadedNodes();e<t.length;e++){var r=t[e];this.expandExtent(r,v)}return v},t.prototype.expandExtent=function(e,t){var r=e.renderObb;if(r){c.mat4.fromQuat(y,r.quaternion),y[12]=r.center[0],y[13]=r.center[1],y[14]=r.center[2];for(var i=0;i<8;++i)m[0]=1&i?r.halfSize[0]:-r.halfSize[0],m[1]=2&i?r.halfSize[1]:-r.halfSize[1],m[2]=4&i?r.halfSize[2]:-r.halfSize[2],p.vec3.transformMat4(m,m,y),this.renderCoordsHelper.fromRenderCoords(m,m,this.spatialReference),f.expand(t,m)}else if(e.renderMbs){var o=e.renderMbs[3],n=p.vec3.copy(x,e.renderMbs);n[0]-=o,n[1]-=o,n[2]-=o;var s=p.vec3.copy(g,e.renderMbs);s[0]+=o,s[1]+=o,s[2]+=o;for(var i=0;i<8;++i)m[0]=1&i?n[0]:s[0],m[1]=2&i?n[1]:s[1],m[2]=4&i?n[2]:s[2],this.renderCoordsHelper.fromRenderCoords(m,m,this.spatialReference),f.expand(t,m)}return t},i([a.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([a.property({constructOnly:!0})],t.prototype,"intersectionHandler",void 0),i([a.property()],t.prototype,"view",void 0),i([a.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([a.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(a.declared(n.EventedMixin(o)))});