/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../Color","../../../../core/screenUtils","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Material","./graphicUtils","./elevationAlignmentUtils","./ElevationAligners","./ElevationContext","./Graphics3DObject3DGraphicLayer","./symbolComplexity","./Graphics3DSymbolLayer","./pointUtils","../../webgl-engine/materials/LineCalloutMaterial"],(function(e,t,n,a,i,r,o,l,s,c,u,d,m,p,h,f){"use strict";let y=function(e){function p(t,n){var a;return(a=e.call(this,t,null,n,x)||this)._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1},a.ensureDrapedStatus(!1),a}t._inheritsLoose(p,e);var y=p.prototype;return y.doLoad=async function(){this._material=new f.LineCalloutMaterial(this.materialParameters),this._context.stage.add(this._material)},y.destroy=function(){e.prototype.destroy.call(this),this._context.stage.remove(this._material),this._material=null},y.perInstanceMaterialParameters=function(e){const t=this.materialParameters;return t.screenOffset=e.screenOffset||[0,0],t.centerOffsetUnits=e.centerOffsetUnits||"world",t},y._defaultElevationInfoNoZ=function(){return C},y.createGraphics3DGraphic=function(e){const t=e.renderingInfo,a=e.graphic,i=this.setGraphicElevationContext(a,new u.ElevationContext,t.elevationOffset||0),r=t.symbol,o="on-the-ground"===this._elevationContext.mode&&("cim"===r.type||!r.symbolLayers.some((e=>"object"===e.type||"text"===e.type)));if("label-3d"!==r.type&&o)return null;const s=l.computeCentroid(a.geometry);return n.isNone(s)?null:this._createAs3DShape(s,i,t,a.uid)},y.layerOpacityChanged=function(){return n.isNone(this._material)||this._material.setParameterValues(this.materialParameters),!0},y.layerElevationInfoChanged=function(e,t,a){const i=this._elevationContext.mode,r=s.elevationModeChangeUpdateType(p.elevationModeChangeTypes,a,i);return r!==s.SymbolUpdateType.UPDATE||e.forEach((e=>{const a=t(e);n.isSome(a)&&this.updateGraphicElevationContext(e.graphic,a)})),r},y.slicePlaneEnabledChanged=function(){return n.isNone(this._material)||this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled}),!0},y.physicalBasedRenderingChanged=function(){return!0},y.pixelRatioChanged=function(){return!0},y.setGraphicElevationContext=function(t,n,a=0){const i=e.prototype.setGraphicElevationContext.call(this,t,n);return i.addOffsetRenderUnits(a),i},y.updateGraphicElevationContext=function(e,t){this.setGraphicElevationContext(e,t.elevationContext,t.metadata.elevationOffset),t.needsElevationUpdates=s.needsElevationUpdates2D(t.elevationContext.mode)},y.updateGeometry=function(e,t){return!1},y.computeComplexity=function(){return{primitivesPerFeature:2,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:m.emptySymbolComplexity.memory}},y.createVertexData=function(e){const{translation:t,centerOffset:n}=e;return[["position",t?{size:3,data:[t[0],t[1],t[2]],exclusive:!0}:{size:3,data:[0,0,0],exclusive:!0}],["normal",{size:3,data:[0,0,1],exclusive:!0}],["auxpos1",n?{size:4,data:[n[0],n[1],n[2],n[3]],exclusive:!0}:{size:4,data:[0,0,0,1],exclusive:!0}]]},y._getOrCreateMaterial=function(e){const t=this.perInstanceMaterialParameters(e),a=f.LineCalloutMaterial.uniqueMaterialIdentifier(t);if(n.isSome(this._material)&&a===this._material.uniqueMaterialIdentifier)return{material:this._material,isUnique:!1};if(e.materialCollection){let i=e.materialCollection.get(a);return n.isNone(i)&&(i=new f.LineCalloutMaterial(t),e.materialCollection.add(a,i)),{material:i,isUnique:!1}}return{material:new f.LineCalloutMaterial(t),isUnique:!0}},y._createAs3DShape=function(e,t,n,a){const i=[new r.Geometry(this.createVertexData(n),g,1)],o=this._getOrCreateMaterial(n),l=h.createStageObjectForHUD(this._context,e,i,[o.material],null,null,t,this._context.layer.uid,a);if(null===l)return null;const u=c.perObjectElevationAligner,m=new d(this,l.object,i,o.isUnique?[o.material]:null,null,u,t);return m.metadata={elevationOffset:n.elevationOffset||0},m.alignedSampledElevation=l.sampledElevation,m.needsElevationUpdates=s.needsElevationUpdates2D(t.mode),h.extendPointGraphicElevationContext(m,e,this._context.elevationProvider),m},t._createClass(p,[{key:"materialParameters",get:function(){const e=this.symbol,t=e.callout,r=n.isSome(t.color)?a.toUnitRGBA(t.color):[0,0,0,0];r[3]*=this._getLayerOpacity();const l=i.pt2px(t.size||0);let s=null;if(e.verticalOffset){const{screenLength:t,minWorldLength:n,maxWorldLength:a}=e.verticalOffset;s={screenLength:i.pt2px(t),minWorldLength:n||0,maxWorldLength:null!=a?a:1/0}}const c=n.isSome(t.border)&&n.isSome(t.border.color)?a.toUnitRGBA(t.border.color):null,u="object"===e.symbolLayers.getItemAt(0).type,d=!u,m=u?0:void 0,p="label-3d"===e.type;return{color:r,size:l,verticalOffset:s,screenSizePerspective:this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:null,screenOffset:[0,0],centerOffsetUnits:"world",borderColor:c,occlusionTest:d,shaderPolygonOffset:m,depthHUDAlignStart:p,slicePlaneEnabled:this._context.slicePlaneEnabled,renderOccluded:o.materialParametersDefaults.renderOccluded}}}]),p}(p.Graphics3DSymbolLayer);y.elevationModeChangeTypes={definedChanged:s.SymbolUpdateType.UPDATE,staysOnTheGround:s.SymbolUpdateType.UPDATE,onTheGroundChanged:s.SymbolUpdateType.RECREATE};const v=new Uint16Array([0]),g=[["position",v],["normal",v],["auxpos1",v]],C={mode:"relative-to-ground",offset:0},x={ignoreDrivers:!0,renderPriority:0,renderPriorityStep:1};e.Graphics3DLineCalloutSymbolLayer=y,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}));
