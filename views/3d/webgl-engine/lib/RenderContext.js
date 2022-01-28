/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./Camera"],(function(e,t,s){"use strict";let n=function(){function e(e){this.rctx=e,this.camera=null,this.lastFrameCamera=new s,this.pass=0,this.slot=2,this.highlightDepthTexture=null,this.renderOccludedMask=i,this.hasOccludees=!1}return e.prototype.resetRenderOccludedMask=function(){this.renderOccludedMask=i},t._createClass(e,[{key:"isHighlightPass",get:function(){return 5===this.pass}}]),e}(),r=function(e){function s(t,s,n,r,i,l){var a;return(a=e.call(this,t)||this).offscreenRenderingHelper=s,a.scenelightingData=n,a.shadowMap=r,a.ssaoHelper=i,a.sliceHelper=l,a}return t._inheritsLoose(s,e),s}(n);const i=13;e.OverlayRenderContext=n,e.RenderContext=r,Object.defineProperty(e,"__esModule",{value:!0})}));
