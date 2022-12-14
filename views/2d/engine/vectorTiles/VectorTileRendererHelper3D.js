/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../geometry.js";import e from"../../../../Viewpoint.js";import t from"../../ViewState.js";import i from"../../../../geometry/Point.js";const r=.125;class s{constructor(){this._renderParams={context:null,drawPhase:1,state:new t({viewpoint:new e({targetGeometry:new i(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerUID:-1,painter:null,glyphMosaic:null,spriteMosaic:null,profiler:null,renderingOptions:null,requestRender:null,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1,requireFBO:!1}}dispose(){this._renderParams=null}render(e,t,i,s,a,l,n,o,p,d){const u=l.adjustLevel(t[0]),c=this._renderParams;c.context=e,c.painter=s,c.glyphMosaic=s.glyphMosaic,c.spriteMosaic=s.spriteMosaic,c.pixelRatio=d,c.displayLevel=u,c.requiredLevel=u;const m=l.getScale(t[0]),[g,y]=l.getShift(t,n*m),h=r*n*m/p,f=i.transforms.dvs;f[0]=h,f[4]=-h,f[6]=-1-g-o[0]*n*2,f[7]=1+y+(1-o[1])*n*2-2,c.state.size[0]=p,c.state.size[1]=p,i.stage||i.attachWithContext(e),i.triangleCount=0,s.drawTile(c,i,a)}}export{s as VectorTileRendererHelper3D};