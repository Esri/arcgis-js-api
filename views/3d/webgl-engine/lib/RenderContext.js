/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./Camera"],(function(e,s){"use strict";let t=function(){function t(e,t,n,r,h,l){this.camera=null,this.lastFrameCamera=new s,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.renderOccludedMask=i,this.hasOccludees=!1,this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=n,this.shadowMap=r,this.ssaoHelper=h,this.sliceHelper=l}return t.prototype.resetRenderOccludedMask=function(){this.renderOccludedMask=i},e._createClass(t,[{key:"isHighlightPass",get:function(){return 5===this.pass}}]),t}();const i=13;return t}));
