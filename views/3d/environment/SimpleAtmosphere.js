/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/Logger","../../../core/promiseUtils","../../../geometry/support/spatialReferenceUtils","../../../core/mathUtils","../../../chunks/vec3f64","../../../chunks/vec3","../support/mathUtils","../../../core/watchUtils","../../../geometry/projectionEllipsoid","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec2f64","../../../chunks/vec2","../../../support/requestImageUtils","../webgl-engine/lib/DefaultVertexAttributeLocations","./SimpleAtmosphereTechnique","./resources/SimpleAtmosphereTexture","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/Util","../../webgl/BufferObject","../../webgl/Texture","../../webgl/Util","../../webgl/VertexArrayObject","./atmosphereUtils","./resources/MarsAtmosphereTexture","../webgl-engine/lib/glUtil3D"],(function(e,t,i,r,s,n,a,o,h,l,c,u,d,p,m,f,_,g,C,x,R,V,v,y,b,A,q,U){"use strict";const D=t.getLogger("esri.views.3d.environment.SimpleAtmosphere"),w=128,T=-A.INNER_ATMOSPHERE_DEPTH,F=0,S=50,M=()=>1-511/512,j=o.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5e3,1-250/512],[5e4,.4140625]]);let k=function(){function t(e){this.slot=14,this._renderData={texV:d.create(),silCircleCenter:n.create(),silCircleV1:n.create(),silCircleV2:n.create(),altitudeFade:0,innerScale:0,undergroundFadeAlpha:0},this._fadeVaoCount=0,this._readyResolver=i.createResolver(),this._readyController=i.createAbortController(),this.texV1=1,this.isOnMars=r.isMars(e.spatialReference);const t=l.getReferenceEllipsoid(e.spatialReference);this.planetRadius=t.radius,this.outerRimWidth=t.outerAtmosphereRimWidth,this.innerRimFactor=(this.planetRadius+T)/this.planetRadius,this.middleRimFactor=(this.planetRadius+F)/this.planetRadius,this.outerRimFactor=(this.planetRadius+this.outerRimWidth)/this.planetRadius,this.texV0=F/this.outerRimWidth,this.texVScale=this.texV1-this.texV0,this._atmosphereTechniqueConfig=new _.SimpleAtmosphereTechniqueConfiguration,this.view=e}var o=t.prototype;return o.when=function(){return this._readyResolver.promise},o.initializeRenderContext=function(e){const t=e.renderContext.rctx;this._cameraChangeHandle=h.init(this.view,"state.camera",(()=>e.requestRender()),!0),this._atmosphereTechniqueConfig.geometry=0,this._atmosphereConeTechnique=e.shaderTechniqueRep.acquireAndReleaseExisting(_.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereConeTechnique),this._atmosphereTechniqueConfig.geometry=2,this._atmosphereUndergroundTechnique=e.shaderTechniqueRep.acquireAndReleaseExisting(_.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereUndergroundTechnique),this._vao=this._createRibbon(t),this._vaoCount=y.vertexCount(this._vao,"geometry"),this._fadeVao=U.createQuadVAO(t),this._fadeVaoCount=y.vertexCount(this._fadeVao,"geometry"),m.requestImage(this.isOnMars?q:g,{signal:this._readyController.signal}).then((i=>{this._texture=new v(t,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},i),e.requestRender(),this._readyController=null,this._readyResolver.resolve()})).catch((e=>{i.isAbortError(e)||D.error("Unable to initialize simple atmosphere: image request failed",e),this._readyResolver.reject()}))},o.uninitializeRenderContext=function(){this.destroy()},o.destroy=function(){this._readyResolver.reject(),this._cameraChangeHandle&&(this._cameraChangeHandle.remove(),this._cameraChangeHandle=null),this._texture&&(this._texture.dispose(),this._texture=null),this._fadeVao&&(this._fadeVao.dispose(),this._fadeVao=null),this._vao&&(this._vao.dispose(),this._vao=null),this._readyController&&(this._readyController.abort(),this._readyController=null)},o.render=function(e){if(e.slot!==this.slot||0!==e.pass)return!1;this._update(e.camera);const t=e.rctx;if(this._atmosphereConeTechnique.bindPipelineState(t),this._renderData.undergroundFadeAlpha<1){const i=this._atmosphereConeTechnique.program;t.bindProgram(i),i.setUniformMatrix4fv("proj",e.camera.projectionMatrix),i.setUniformMatrix4fv("view",e.camera.viewMatrix),i.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter),i.setUniform3fv("silCircleV1",this._renderData.silCircleV1),i.setUniform3fv("silCircleV2",this._renderData.silCircleV2),i.setUniform2fv("texV",this._renderData.texV),t.bindTexture(this._texture,0),i.setUniform1i("tex",0),e.scenelightingData.setLightDirectionUniform(i),i.setUniform1f("altitudeFade",this._renderData.altitudeFade),i.setUniform1f("innerScale",this._renderData.innerScale),t.bindVAO(this._vao),t.drawArrays(4,0,this._vaoCount)}if(this._renderData.undergroundFadeAlpha>0){const i=this._atmosphereUndergroundTechnique.program;t.bindProgram(i),i.setUniform1f("undergroundFadeAlpha",this._renderData.undergroundFadeAlpha),e.scenelightingData.setLightDirectionUniform(i),i.setUniform3fv("cameraPosition",e.camera.eye),t.bindVAO(this._fadeVao),t.drawArrays(5,0,this._fadeVaoCount)}return!0},o._update=function(e){const t=n.create(),i=this.planetRadius,r=a.length(e.eye),o=r-i;if(o<0){const e=Math.min(-o/5e3,1);this._renderData.undergroundFadeAlpha=e}else this._renderData.undergroundFadeAlpha=0;const h=Math.max(S,o),l=i+T;this._renderData.innerScale=H(i+h,i,l)-1,this._renderData.altitudeFade=A.computeInnerAltitudeFade(o),a.scale(t,e.eye,(i+S)/r),L(t,e.center,e.up,i,this._renderData);const c=this._computeScreenRimWidth(e,t,e.up,this._renderData),u=M(),d=j(o);let m=this.texV0+u*this.texVScale,f=this.texV0+c*d*this.texVScale;if(o>S){L(e.eye,e.center,e.up,i,this._renderData);const t=this._computeScreenRimWidth(e,e.eye,e.up,this._renderData),r=s.clamp((t-1.5)/(c-1.5),0,1);m=this.texV0+r*u*this.texVScale,f=this.texV0+s.lerp(this.texV1,c*d,r)*this.texVScale}p.set(this._renderData.texV,m,f)},o._createRibbon=function(e){const t=new Float32Array(3+3*w*3),i=new Uint32Array(3*w*5);t[0]=0,t[1]=0,t[2]=-1;for(let n=0;n<w;n++){const e=9*n+3;t[e+0]=n,t[e+1]=this.innerRimFactor,t[e+2]=-1,t[e+3]=n,t[e+4]=this.middleRimFactor,t[e+5]=0,t[e+6]=n,t[e+7]=this.outerRimFactor,t[e+8]=1;const r=3*n+1,s=n===w-1?1:r+3,a=15*n;i[a+0]=r,i[a+1]=r+1,i[a+2]=s+1,i[a+3]=s+1,i[a+4]=s,i[a+5]=r,i[a+6]=r+1,i[a+7]=r+2,i[a+8]=s+2,i[a+9]=s+2,i[a+10]=s+1,i[a+11]=r+1,i[a+12]=r,i[a+13]=s,i[a+14]=0}const r=W.createBuffer(i.length),s=r.position;for(let n=0;n<i.length;++n){const e=3*i[n];s.set(n,0,t[e]),s.set(n,1,t[e+1]),s.set(n,2,t[e+2])}return new b(e,f.Default3D,{geometry:C.glLayout(W)},{geometry:V.createVertex(e,35044,r.buffer)})},o._computeScreenRimWidth=function(e,t,i,r){return a.add(O,r.silCircleCenter,r.silCircleV2),a.scale(P,O,this.outerRimFactor),c.lookAt(E,t,O,i),R.project(O,E,e.projectionMatrix,e.viewport),R.project(P,E,e.projectionMatrix,e.viewport),a.distance(O,P)/e.height},e._createClass(t,[{key:"canRender",get:function(){return null!=this._texture}}]),t}();function L(e,t,i,r,s){const n=a.length(e),o=r*Math.sqrt(n*n-r*r)/n,h=Math.sqrt(r*r-o*o),l=s.silCircleV1,c=s.silCircleV2;return a.scale(s.silCircleCenter,e,h/n),a.cross(l,e,t),a.squaredLength(l)<1&&a.cross(l,e,i),a.scale(l,l,o/a.length(l)),a.cross(c,l,e),a.scale(c,c,o/a.length(c)),o}const E=u.create(),O=n.create(),P=n.create();function H(e,t,i){return e*e/(Math.sqrt(e*e-t*t)*Math.sqrt(e*e-i*i)+t*i)}const W=x.newLayout().vec3f("position");return k}));
