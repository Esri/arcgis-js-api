// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Evented","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/Intersector"],(function(e,t,r,i,n,o,s,a,c,p,l,d,h,v){var f=h.empty(),u=p.mat4f64.create(),m=d.vec3f64.create(),y=d.vec3f64.create(),x=d.vec3f64.create(),g=s.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(e){function t(t){var r=e.call(this,t)||this;return r.tmpEvent={spatialReference:null,extent:f,context:"scene"},r}return r(t,e),t.prototype.initialize=function(){this.view=this.layerView.view,this.renderCoordsHelper=this.view.renderCoordsHelper,this.intersector=new v.Intersector(this.view.viewingMode),this.intersector.options.store=0;var e=this.layerView.layer.fullExtent;this.zmin=e.zmin,this.zmax=e.zmax,this.tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"},t.prototype.getElevation=function(e,t,r,i){if(m[0]=e,m[1]=t,m[2]=r,!this.renderCoordsHelper.toRenderCoords(m,i,m))return g.error("could not project point for elevation alignment"),null;var n=this.layerView.elevationOffset,o=this.zmin+n,s=this.zmax+n;return l.vec3.copy(y,m),l.vec3.copy(x,m),this.renderCoordsHelper.setAltitude(s,y),this.renderCoordsHelper.setAltitude(o,x),this.intersector.reset(y,x),this.intersectionHandler.intersect(this.intersector,null,y,x),this.intersector.results.min.getIntersectionPoint(m)?this.renderCoordsHelper.getAltitude(m):null},t.prototype.layerChanged=function(){this.spatialReference&&(this.tmpEvent.extent=this.computeLayerExtent(),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))},t.prototype.objectChanged=function(e){this.spatialReference&&(this.tmpEvent.extent=this.computeObjectExtent(e),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))},t.prototype.computeObjectExtent=function(e){return h.empty(f),this.expandExtent(e,f),f},t.prototype.computeLayerExtent=function(){h.empty(f);for(var e=0,t=this.layerView.getLoadedNodes();e<t.length;e++){var r=t[e];this.expandExtent(r,f)}return f},t.prototype.expandExtent=function(e,t){var r=e.renderObb;if(r){c.mat4.fromQuat(u,r.quaternion),u[12]=r.center[0],u[13]=r.center[1],u[14]=r.center[2];for(var i=0;i<8;++i)m[0]=1&i?r.halfSize[0]:-r.halfSize[0],m[1]=2&i?r.halfSize[1]:-r.halfSize[1],m[2]=4&i?r.halfSize[2]:-r.halfSize[2],l.vec3.transformMat4(m,m,u),this.renderCoordsHelper.fromRenderCoords(m,m,this.spatialReference),h.expand(t,m)}else if(e.renderMbs){var n=e.renderMbs[3],o=l.vec3.copy(y,e.renderMbs);o[0]-=n,o[1]-=n,o[2]-=n;var s=l.vec3.copy(x,e.renderMbs);s[0]+=n,s[1]+=n,s[2]+=n;for(i=0;i<8;++i)m[0]=1&i?o[0]:s[0],m[1]=2&i?o[1]:s[1],m[2]=4&i?o[2]:s[2],this.renderCoordsHelper.fromRenderCoords(m,m,this.spatialReference),h.expand(t,m)}return t},i([a.property({constructOnly:!0})],t.prototype,"layerView",void 0),i([a.property({constructOnly:!0})],t.prototype,"intersectionHandler",void 0),i([a.property()],t.prototype,"view",void 0),i([a.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],t.prototype,"spatialReference",void 0),t=i([a.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],t)}(a.declared(o.EventedMixin(n)))}));