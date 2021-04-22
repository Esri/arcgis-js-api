/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","../../../../core/Error","../../../../core/urlUtils","../../../../core/promiseUtils","../../../../support/arcadeOnDemand","../../../../Color","../../../../symbols/CIMSymbol","../../../../core/screenUtils","../../../../symbols/support/IconSymbol3DLayerResource","../../../../symbols","../../../../core/asyncUtils","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../symbols/support/utils","../../../../chunks/mat4f64","../../../../chunks/vec2f64","../../../../chunks/vec4f64","../../../../chunks/vec4","../../../../geometry/support/aaBoundingBox","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/materials/HUDMaterial","./graphicUtils","./elevationAlignmentUtils","./ElevationAligners","./ElevationContext","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./pointUtils","../../terrain/OverlayRenderer","../../../2d/arcade/callExpressionWithFeature","./constants","./Graphics3DDrapedGraphicLayer","./sdfPrimitives","../support/FastSymbolUpdates","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/lib/Texture"],(function(e,t,i,r,s,a,n,o,l,c,h,u,d,m,_,p,f,y,g,S,x,b,v,P,z,R,M,T,w,C,E,I,O,U,D,A,L,G,F,V){"use strict";const k=g.create(),N=p.fromValues(0,0,1),H=16,B=1.5,j=128,q=.5,W=[q/2,q/2,1-q/2,1-q/2],Z=[j*q,j*q];let $=function(t){function m(e,i,r,s){var a;return(a=t.call(this,e,i,r,s)||this)._cimLayers=null,a._cimSymbolMaterials=new Map,a._cimSymbolTextures=new Map,a._cimMaterialParametersInfo=null,a._cimRequiredFields=null,a._cimScaleFactorOrFunction=null,a._size=null,a._symbolTextureRatio=1,a._outlineSize=0,a._texture=null,a._releaseTexture=null,a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0},a}i._inheritsLoose(m,t);var g=m.prototype;return g.getCachedSize=function(){return{size:this._getIconSize()}},g.doLoad=async function(e){this._validateOrThrow();const t=this._prepareMaterialParameters(),i=this._getPrimitive();if(s.isSome(i))this._prepareResourcesPrimitive(t,i);else{const i=y.getIconHref(this.symbol,this.symbolLayer),r=n.dataComponents(i);r&&"application/json"===r.mediaType?await this._prepareResourcesCIM(t,JSON.parse(r.data),e):await this._prepareResourcesHref(t,i,e)}},g._validateOrThrow=function(){if(this._drivenProperties.size)return;const e=R.validateSymbolLayerSize(this._getIconSize());if(e)throw new a("graphics3diconsymbollayer:invalid-size",e)},g._getIconSize=function(){const e=this.symbolLayer,t=Math.round(null!=e.size?u.pt2px(e.size):H);return this._drivenProperties.size?Math.max(t,64):t},g._generateTextureCIM=function(e){const t=this._getGraphicHash(e);let i=""===t?null:this._cimSymbolTextures.get(t);if(!i){const r={scaleFactor:this._cimScaleFactorOrFunction},s=this._context.sharedResources.cimSymbolRasterizer.rasterizeCIMSymbol(this._cimLayers,e,"esriGeometryPoint",r,null,null);this._cimMaterialParametersInfo.anchorPos=this._getAnchorPos("relative",s.anchorPosition);const a={width:s.imageData.width,height:s.imageData.height,powerOfTwoResizeMode:2};i=new V.Texture(s.imageData,a),this._cimSymbolTextures.set(t,i),this._context.stage.add(i)}return i},g._computeSize=function(e,t){const i=e.width/e.height;return i>1?[t,Math.round(t/i)]:[Math.round(t*i),t]},g._prepareMaterialParameters=function(){const e={anchorPos:this._getAnchorPos(this.symbolLayer.anchor,this.symbolLayer.anchorPosition)},t=this.symbol;if(J(t)){const{screenLength:i,minWorldLength:r,maxWorldLength:s}=t.verticalOffset;e.verticalOffset={screenLength:u.pt2px(i),minWorldLength:r||0,maxWorldLength:null!=s?s:1/0}}return this._context.screenSizePerspectiveEnabled&&(e.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),e.occlusionTest=!0,e.slicePlaneEnabled=this._context.slicePlaneEnabled,e},g._prepareResourcesPrimitive=function(e,t){const i=this._getOutlineSize();if(K(t)&&0===i)throw new Error("Nothing to render");this._outlineSize=i,e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize;const r=this._context.sharedResources.textures.fromData(t,(()=>X(t)));this._texture=r.texture,this._releaseTexture=()=>this._context.sharedResources.textures.release(r.uid),e.textureIsSignedDistanceField=!0,e.distanceFieldBoundingBox=W,e.textureId=this._texture.id;const s=this._getIconSize();this._size=[s,s],this._symbolTextureRatio=1/q,this._createMaterialAndAddToStage(e,this._context.stage)},g._prepareResourcesHref=async function(e,t,i){if(!r("esri-canvas-svg-support")&&n.isSVG(t)){throw new a("graphics3diconsymbollayer:unsupported-image-format","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)")}this._outlineSize=this._getOutlineSize(),e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize,e.textureIsSignedDistanceField=!1;const s=this._getIconSize(),l=s*this._context.layerView.view.pixelRatio,c=await _.result(this._context.sharedResources.textures.fromUrl(t,l,{signal:i}));if(!1===c.ok){o.throwIfAbortError(c.error);throw new a("graphics3diconsymbollayer:request-failed",`Failed to load (Request for icon resource failed: ${t})`)}const{uid:h,texture:u}=c.value;this._releaseTexture=()=>this._context.sharedResources.textures.release(h);const d=u.params;this._size=this._computeSize(d,s),e.textureId=u.id,this._createMaterialAndAddToStage(e,this._context.stage)},g._prepareResourcesCIM=async function(t,i,r){const s=new h({data:i});if(!this._context.sharedResources.cimSymbolRasterizer){const t=(await new Promise((function(t,i){e(["../../../../symbols/cim/CIMSymbolRasterizer"],t,i)}))).CIMSymbolRasterizer;o.throwIfAborted(r),this._context.sharedResources.cimSymbolRasterizer||(this._context.sharedResources.cimSymbolRasterizer=new t(this._context.renderCoordsHelper.spatialReference,!0))}const a=this._context.layer.fields?this._context.layer.fields.map((e=>e.toJSON())):null;let n,c;if(this._cimLayers=await this._context.sharedResources.cimSymbolRasterizer.analyzeCIMSymbol(s,a,this._context.renderer&&"dictionary"===this._context.renderer.type?this._context.renderer.fieldMap:null,"esriGeometryPoint",{signal:r}),this._context.renderer&&"dictionary"===this._context.renderer.type&&this._context.renderer.scaleExpression){const e=this._context.renderer;if(isNaN(e.scaleExpression)){const t=e.scaleExpression,i=await l.createRendererExpression(t,this._context.layer.spatialReference,a);c=(e,t,r)=>{const s=U(i,e,{$view:r},"esriGeometryPoint",t);return null!==s?s:1}}else n=Number(e.scaleExpression)}this._cimScaleFactorOrFunction=n||c||1;const u=this._context.renderer?await this._context.renderer.getRequiredFields(this._context.layer.fields):[];o.throwIfAborted(r);const d=this._context.layer.fieldsIndex;this._cimRequiredFields=u.map((e=>d.get(e).name)),this._cimMaterialParametersInfo=t,this._cimMaterialParametersInfo.color=this._getFillColor(),this._cimMaterialParametersInfo.outlineColor=[0,0,0,0],this._cimMaterialParametersInfo.outlineSize=0,this._cimMaterialParametersInfo.textureIsSignedDistanceField=!1},g._getPrimitive=function(){return this.symbolLayer.resource&&this.symbolLayer.resource.href?null:this.symbolLayer.resource&&this.symbolLayer.resource.primitive||d.defaultPrimitive},g._getOutlineSize=function(){let e=0;const t=this.symbolLayer;if(s.isSome(t.outline)&&null!=t.outline.size)return Math.max(u.pt2px(t.outline.size),0);return e=K(this._getPrimitive())?B:0,Math.max(e,0)},g._getOutlineColor=function(){const e=this._getLayerOpacity(),t=this.symbolLayer,i=s.get(t,"outline","color");if(s.isSome(i)){const t=c.toUnitRGB(i),r=i.a*e;return[t[0],t[1],t[2],r]}return[0,0,0,0]},g._getFillColor=function(){if(K(this._getPrimitive()))return D.TRANSPARENT_UNIT;const e=s.isNone(this._getPrimitive()),t=s.get(this.symbolLayer,"material","color");return this._getCombinedOpacityAndColor(t,{hasIntrinsicColor:e})},g._getAnchorPos=function(e,t){return"relative"===e?S.fromValues((t.x||0)+.5,.5-(t.y||0)):e in R.namedAnchorToHUDMaterialAnchorPos?R.namedAnchorToHUDMaterialAnchorPos[e]:R.namedAnchorToHUDMaterialAnchorPos.center},g._createMaterialAndAddToStage=function(e,t){if(this._cimLayers?this._fastUpdates={enabled:!1}:this._fastUpdates=G.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions()),this._fastUpdates.enabled&&Object.assign(e,this._fastUpdates.materialParameters),this._cimLayers){let i=this._cimSymbolMaterials.get(e.textureId);return i||(i=new z.HUDMaterial(e),this._cimSymbolMaterials.set(e.textureId,i),t.add(i)),i}return this._material=new z.HUDMaterial(e),t.add(this._material),this._material},g._setDrapingDependentMaterialParameters=function(){this.draped&&(this._forEachMaterial((e=>{e.setParameterValues({verticalOffset:null,screenSizePerspective:null,occlusionTest:!1,slicePlaneEnabled:!1,shaderPolygonOffset:0,isDraped:this.draped})})),this.layerOpacityChanged())},g.destroy=function(){t.prototype.destroy.call(this),this._forEachMaterial((e=>this._context.stage.remove(e))),this._material=null,this._cimSymbolMaterials.clear(),this._cimSymbolTextures.forEach((e=>this._context.stage.remove(e))),this._cimSymbolTextures.clear(),this._releaseTexture&&(this._releaseTexture(),this._releaseTexture=null)},g._getScaleFactor=function(e,t){if(this._drivenProperties.size&&e.size){for(let t=0;t<3;t++){const i=e.size[t];i&&"symbol-value"!==i&&"proportional"!==i&&(e.size[t]=u.pt2px(i))}if("symbol-value"===e.size[0])return 1;if(isFinite(+e.size[0]))return+e.size[0]/t;if(isFinite(+e.size[2]))return+e.size[2]/t}return 1},g.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry))return null;let i,r;if(this._cimLayers){if(!this._cimLayers.length)return null;const e=this._generateTextureCIM(t),s={textureId:e.id,...this._cimMaterialParametersInfo};r=this._createMaterialAndAddToStage(s,this._context.stage),i=[e.params.width,e.params.height]}else i=this._size,r=s.unwrap(this._material);const a=I.placePointOnGeometry(t.geometry);if(s.isNone(a))return this.logger.warn(`unsupported geometry type for icon symbol: ${t.geometry.type}`),null;const n=e.renderingInfo,o=this._getVertexOpacityAndColor(n);let l=1;if(!this._fastUpdates.enabled||!this._fastUpdates.visualVariables.size){const e=i[0]>i[1]?i[0]:i[1];l=this._getScaleFactor(n,e)}l*=this._symbolTextureRatio;const c=[i[0]*l,i[1]*l],h=this.setGraphicElevationContext(t,new w.ElevationContext);return this.ensureDrapedStatus("on-the-ground"===h.mode)&&this._setDrapingDependentMaterialParameters(),this.draped?this._createAsOverlay(t,a,r,o,c,e.layer.uid):this._createAs3DShape(t,a,r,o,c,h,t.uid)},g.layerOpacityChanged=function(){const e=this._getFillColor(),t=this._getOutlineColor();return this._forEachMaterial((i=>{i.setParameterValues({color:e}),i.setParameterValues({outlineColor:t})})),!0},g.layerElevationInfoChanged=function(e,t,i){const r=this._elevationContext.mode,s=M.elevationModeChangeUpdateType(m.elevationModeChangeTypes,i,r);if(s!==M.SymbolUpdateType.UPDATE)return s;const a=M.needsElevationUpdates2D(r)||"absolute-height"===r;return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>a))},g.slicePlaneEnabledChanged=function(){return this.draped||this._forEachMaterial((e=>{e.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled})})),!0},g.physicalBasedRenderingChanged=function(){return!0},g.pixelRatioChanged=function(){return!!this._getPrimitive()},g.applyRendererDiff=function(e,t){for(const i in e.diff)switch(i){case"visualVariables":if(!G.updateFastSymbolUpdatesState(this._fastUpdates,t,this._fastVisualVariableConvertOptions()))return!1;s.isSome(this._material)&&this._material.setParameterValues(this._fastUpdates.materialParameters);break;default:return!1}return!0},g._defaultElevationInfoNoZ=function(){return Q},g._createAs3DShape=function(e,t,i,r,s,a,n){const o=this.getFastUpdateAttrValues(e),l=o?e=>G.evaluateModelTransform(this._fastUpdates.materialParameters,o,e):null,c=[P.createPointGeometry(N,null,r,s,Y,null,o)],h=I.createStageObjectForHUD(this._context,t,c,[i],null,null,a,this._context.layer.uid,n,l);if(null===h)return null;const u=T.perObjectElevationAligner,d=new C(this,h.object,c,null,null,u,a);return d.alignedSampledElevation=h.sampledElevation,d.needsElevationUpdates=M.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode,d.getScreenSize=this._createScreenSizeGetter(s,l),d.calculateRelativeScreenBounds=e=>i.calculateRelativeScreenBounds(d.getScreenSize(),1,e),I.extendPointGraphicElevationContext(d,t,this._context.elevationProvider),d},g._createAsOverlay=function(e,t,i,r,a,n){i.renderPriority=this._renderPriority;const o=x.create();f.projectPointToVector(t,o,this._context.overlaySR),o[2]=O.DRAPED_Z;const l=this._context.clippingExtent;if(s.isSome(l)&&!v.containsPoint(l,o))return null;const c=this.getFastUpdateAttrValues(e),h=c?e=>G.evaluateModelTransform(this._fastUpdates.materialParameters,c,e):null,u=P.createPointGeometry(N,o,r,a,null,null,c),d=new F.RenderGeometry(u,i,n,e.uid);o[3]=0,b.copy(d.boundingSphere,o),d.calculateShaderTransformation=h;const m=new A(this,[d],null);return m.getScreenSize=this._createScreenSizeGetter(a,h),m.calculateRelativeScreenBounds=e=>i.calculateRelativeScreenBounds(m.getScreenSize(),1,e),m},g._createScreenSizeGetter=function(e,t){const i=this._outlineSize+2;if(this._fastUpdates.enabled){const r=e[0]/this._symbolTextureRatio,s=e[1]/this._symbolTextureRatio;return(e=S.create())=>{const a=t(k);return e[0]=a[0]*r+i,e[1]=a[5]*s+i,e}}{const t=e[0]/this._symbolTextureRatio+i,r=e[1]/this._symbolTextureRatio+i;return(e=S.create())=>(e[0]=t,e[1]=r,e)}},g._fastVisualVariableConvertOptions=function(){const e=this._size[0]>this._size[1]?this._size[0]:this._size[1],t=p.fromValues(e,e,e),i=u.px2pt(1),r=e*i;return{modelSize:t,symbolSize:p.fromValues(r,r,r),unitInMeters:i,transformation:{anchor:p.ZEROS,scale:p.ONES,rotation:p.ZEROS}}},g._getGraphicHash=function(e){let t="";for(const i of this._cimRequiredFields)t+=i+e.attributes[i];return t},g._forEachMaterial=function(e){s.isSome(this._material)&&e(this._material),this._cimSymbolMaterials.forEach(e)},m}(E.Graphics3DSymbolLayer);function J(e){return e&&"point-3d"===e.type&&e.hasVisibleVerticalOffset()}function K(e){return!!s.isSome(e)&&("cross"===e||"x"===e)}function X(e){let t;const i=j,r=i*q;switch(e){case"circle":t=L.createCircle(i,r);break;case"square":t=L.createSquare(i,r);break;case"kite":t=L.createKite(i,r);break;case"cross":t=L.createCross(i,r);break;case"x":t=L.createX(i,r);break;case"triangle":t=L.createTriangle(i,r)}return new V.Texture(t,{mipmap:!1,wrap:{s:33071,t:33071},width:j,height:j,components:4,noUnpackFlip:!0})}$.PRIMITIVE_SIZE=Z,$.elevationModeChangeTypes={definedChanged:M.SymbolUpdateType.UPDATE,staysOnTheGround:M.SymbolUpdateType.NONE,onTheGroundChanged:M.SymbolUpdateType.RECREATE};const Q={mode:"relative-to-ground",offset:0},Y=x.fromValues(0,0,0,1);t.Graphics3DIconSymbolLayer=$,t.default=$,Object.defineProperty(t,"__esModule",{value:!0})}));
