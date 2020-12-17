/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}var i=t.prototype;return i.render=function(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(l),e.putImageData(n,0,0)},i.getRenderedRasterPixels=function(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}},e._createClass(t,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}}]),t}()}));
