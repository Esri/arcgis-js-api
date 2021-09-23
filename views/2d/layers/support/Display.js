/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../engine/Bitmap","../../engine/BitmapContainer"],(function(e,t,i,n){"use strict";let a=function(e){function n(n){var a;return(a=e.call(this)||this).requestRender=a.requestRender.bind(t._assertThisInitialized(a)),a._layerView=n,a._canvas=document.createElement("canvas"),a._context=a._canvas.getContext("2d"),a._bitmap=new i.Bitmap(null,"standard",!1),a.addChild(a._bitmap),a}t._inheritsLoose(n,e);var a=n.prototype;return a.doRender=function(t){const i=t.state,n=this._createCustomRenderParams(t),a=n.pixelRatio,o=this._canvas,r=this._bitmap;o.width=i.size[0]*a,o.height=i.size[1]*a,r.resolution=i.resolution,r.pixelRatio=a,r.x=i.viewpoint.targetGeometry.x-Math.abs(i.extent.xmax-i.extent.xmin)/2,r.y=i.viewpoint.targetGeometry.y+Math.abs(i.extent.ymax-i.extent.ymin)/2,this._layerView.render(n),r.source=o,r.rotation=i.rotation,e.prototype.doRender.call(this,t)},a._createCustomRenderParams=function(e){const t=window.devicePixelRatio,i={...e.state,pixelRatio:t};return{...e,pixelRatio:t,context:this._context,state:i}},n}(n.BitmapContainer);e.Display=a,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
