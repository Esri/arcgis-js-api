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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../Graphic","../../../symbols","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/accessorSupport/diffUtils","../../../core/libs/gl-matrix-2/vec3f64","./graphics/Graphics3DCore","./i3s/I3SGeometryUtil","../support/GraphicsMap"],function(e,r,t,i,a,o,l,s,n,p,d,c,h,u,y){Object.defineProperty(r,"__esModule",{value:!0});var b=function(e){function r(r){var t=e.call(this,r)||this;return t.loadedGraphics=new y.GraphicsMap,t.slicePlaneEnabled=!1,t._renderingInfo={symbol:new o.PointSymbol3D},t._handles=new s,t._attachmentGraphicsByNode=new Map,t}return i(r,e),r.prototype.initialize=function(){var e=this;this._labelGraphicsCore=new h({owner:this,layer:this.layer,preferredUpdatePolicy:0,elevationFeatureExpressionEnabled:!1,graphicSymbolSupported:!1,getRenderingInfoWithoutRenderer:!0,hasZ:!0,hasM:!1});var r=this.view.labeler.addGraphicsOwner(this._labelGraphicsCore,null,{emptySymbolLabelSupported:!0,elevationInfoOverride:{mode:"absolute-height",offset:0},disablePlacement:{logEntityDescription:"3D Object Scene Layer features"}}),t=this.view.deconflictor.addGraphicsOwner(this._labelGraphicsCore);this._labelGraphicsCore.setup({labeler:r,deconflictor:t}).then(function(){e.destroyed||e._labelGraphicsCore.startCreateGraphics()}),this._handles.add([this.layer.watch("labelingInfo",function(r,t){d.diff(r,t)&&e._labelGraphicsCore.updateLabelingInfo()})])},r.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null),null!=this._labelGraphicsCore&&(this._labelGraphicsCore.destroy(),this._labelGraphicsCore=null),this.view=null},r.prototype.addNodeMeta=function(e,r){var t=this,i=0,o=e.filteredIds,l=e.featureIds.map(function(l,s){u.boundingBoxTop(s,t.collection,e.objectHandle,v);var p={type:"point",x:v[0],y:v[1],z:v[2],spatialReference:t.view.renderSpatialReference,hasZ:!0,hasM:!1},d=r(s,e),c=!1;return n.isNone(o)?c=!0:i<o.length&&l===o[i]&&(c=!0,i++),{objectId:l,uid:a.generateUID(),attributes:d,visible:c,geometry:p}});this.loadedGraphics.addManyAndDeduplicate(l),this._attachmentGraphicsByNode.set(e.node.index,l)},r.prototype.setNodeMetaAttributes=function(e,r){for(var t=this._attachmentGraphicsByNode.get(e.node.index),i=0;i<t.length;i++){t[i].attributes=r(i,e)}this._labelGraphicsCore.updateLabelingInfo(e.featureIds)},r.prototype.applyFilterChange=function(e){var r=this._attachmentGraphicsByNode.get(e.node.index);if(r)if(n.isNone(e.filteredIds))for(var t=0,i=r;t<i.length;t++){var a=i[t];a.visible||(a.visible=!0,f.graphic=a,f.property="visible",f.oldValue=!1,f.newValue=!0,this._labelGraphicsCore.graphicUpdateHandler(f))}else for(var o=0,l=0,s=r;l<s.length;l++){var a=s[l],p=a.visible;o<e.filteredIds.length&&a.objectId===e.filteredIds[o]?(a.visible=!0,o++):a.visible=!1,p!==a.visible&&(f.graphic=a,f.property="visible",f.oldValue=p,f.newValue=a.visible,this._labelGraphicsCore.graphicUpdateHandler(f))}},r.prototype.removeNodeMeta=function(e){this.loadedGraphics.removeManyObjectIds(e.featureIds)},r.prototype.getRenderingInfo=function(){return this._renderingInfo},t([p.property()],r.prototype,"view",void 0),t([p.property()],r.prototype,"layer",void 0),t([p.property()],r.prototype,"collection",void 0),t([p.property()],r.prototype,"loadedGraphics",void 0),t([p.property({aliasOf:"_labelGraphicsCore.updating"})],r.prototype,"updating",void 0),t([p.property()],r.prototype,"slicePlaneEnabled",void 0),t([p.property()],r.prototype,"_labelGraphicsCore",void 0),r=t([p.subclass("esri.views.3d.layers.I3SMeshViewLabeler")],r)}(p.declared(l)),f={graphic:null,property:null,oldValue:null,newValue:null},v=c.vec3f64.create();r.default=b});