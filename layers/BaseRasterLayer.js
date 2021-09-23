// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/sniff","dojo/dom-construct","dojo/dom-style","dojox/gfx/matrix","../kernel","../config","../lang","../domUtils","../geometry/Point","./layer"],(function(t,i,s,e,n,a,h,o,_,r,c,l,d,p){var m=r.defaults.map.zoomDuration;return t([p],{declaredClass:"esri.layers.BaseRasterLayer",managedSuspension:!0,opacity:1,constructor:function(t,i){this.drawMode=!i||void 0===i.drawMode||i.drawMode,this.drawType=i&&i.drawType?i.drawType:"2d",this.pixelData=null,this._initialize(t,i)},setDrawMode:function(t){this.drawMode=t},setOpacity:function(t){this.opacity!==t&&(this.opacity=t,this.onOpacityChange(t))},onOpacityChange:function(){},refresh:function(){!this._canDraw()||n("ie")<10?this.onError(new Error("Unable to refresh. This layer is not supported in the current browser.")):this._map&&this._extentChangeHandler(this._map.extent)},clear:function(){this._canDraw()&&"2d"===this.drawType&&this._context.clearRect(0,0,this._mapWidth,this._mapHeight)},getContext:function(){return this._context},onResume:function(){if(this.inherited(arguments),this._toggleTime(),"css-transforms"===this._map.navigationMode){var t=this._map.__visibleDelta;this._left=this._tdx=t.x,this._top=this._tdy=t.y,h.set(this._div,_._css.names.transform,_._css.translate(this._left,this._top))}this._displayTimer=this._displayTimer||setTimeout(i.hitch(this,(function(){this._extentChangeHandler(this._map.extent,null,!0)})),0)},onSuspend:function(){this.inherited(arguments),this._toggleTime(),clearTimeout(this._displayTimer),this._displayTimer=null},redraw:function(){this.hasDataChanged=!1,this._setPixelData(this.originalPixelData)},getCurrentResolution:function(){var t=this._map.extent;return new d((t.xmax-t.xmin)/this._map.width,(t.ymax-t.ymin)/this._map.height,t.spatialReference)},setPixelFilter:function(t,i){this.pixelFilter=t,i||this.redraw()},_toggleTime:function(){},_setMap:function(t,i){this.inherited(arguments),this._dragOrigin={x:0,y:0};var e=this._div=a.create("div",null,i),n={width:t.width+"px",height:t.height+"px",position:"absolute"};if("css-transforms"===t.navigationMode?(n[_._css.names.transform]=_._css.translate(t.__visibleDelta.x,t.__visibleDelta.y),this._left=t.__visibleDelta.x,this._top=t.__visibleDelta.y):this._left=this._top=0,h.set(e,n),this._canvas=a.create("canvas",{id:"canvas",width:t.width+"px",height:t.height+"px",style:"position: absolute;"},e),c.isDefined(this.opacity)&&h.set(e,"opacity",this.opacity),this._context=this._canvas.getContext(this.drawType),this._context||console.error("Unable to create the context. This browser might not support <canvas> elements."),this._mapWidth=t.width,this._mapHeight=t.height,this._connects=[],this._connects.push(s.connect(t,"onPan",this,this._panHandler)),this._connects.push(s.connect(t,"onPanEnd",this,this._panEndHandler)),"css-transforms"===t.navigationMode?this._connects.push(s.connect(t,"onScale",this,this._onScaleHandler)):(this._connects.push(s.connect(t,"onZoom",this,this._onZoomHandler)),this._connects.push(s.connect(t,"onZoomEnd",this,this._onZoomEndHandler))),this._connects.push(s.connect(t,"onResize",this,this._onResizeHandler)),this._connects.push(s.connect(t,"onExtentChange",this,this._extentChangeHandler)),this._connects.push(s.connect(this,"onVisibilityChange",this,this._visibilityChangeHandler)),this._connects.push(s.connect(this,"onOpacityChange",this,this._opacityChangeHandler)),this._startRect={left:0,top:0,width:t.width,height:t.height},this.evaluateSuspension(),this.suspended&&!t.loaded)var o=s.connect(t,"onLoad",this,(function(){s.disconnect(o),o=null,this.evaluateSuspension()}));return e},_unsetMap:function(t,i){e.forEach(this._connects,s.disconnect,this);var n=this._div;n&&(i.removeChild(n),a.destroy(n)),this.updating&&t._jobs&&t._jobs--,this._rasterReadPromise&&this._rasterReadPromise.cancel(),this._map=this._canvas=this._context=this.data=this._connects=null,clearTimeout(this._displayTimer),this._displayTimer=null,this.inherited(arguments)},_canDraw:function(){return!!(this._map&&this._canvas&&this._context)},_requestDataErrorHandler:function(t){"CancelError"!==t.name&&(this.clear(),this.onError(t))},_drawPixelData:function(){if(this._map){this._startRect={left:0,top:0,width:this._map.width,height:this._map.height};var t=this._useBrowserDecoding();if(!t&&this.drawMode||"css-transforms"===this._map.navigationMode&&(this._tdx=this._left,this._tdy=this._top,this._multiply=null,h.set(this._div,_._css.names.transform,_._css.translate(this._left,this._top)),h.set(this._canvas,_._css.names.transform,_._css.translate(-this._left,-this._top)),this._dragOrigin={x:0,y:0}),this._canDraw&&this.drawMode)if(t)this._fireUpdateEnd();else if(this.drawMode)if(this.pixelData&&this.pixelData.pixelBlock){var i=this.pixelData.pixelBlock,s=this._context,e=s.createImageData(i.width,i.height);e.data.set(i.getAsRGBA());var n=this.pixelData.extent,a=this._map.extent,o=this.getCurrentResolution(),r={x:0,y:0};Math.abs(n.xmin-a.xmin)>o.x&&(r.x=Math.round((n.xmin-a.xmin)/o.x)),Math.abs(a.ymax-n.ymax)>o.y&&(r.y=Math.round((a.ymax-n.ymax)/o.y)),this.clear(),"css-transforms"===this._map.navigationMode?(this._tdx=this._left,this._tdy=this._top,this._multiply=null,h.set(this._div,_._css.names.transform,_._css.translate(this._left,this._top)),h.set(this._canvas,_._css.names.transform,_._css.translate(-this._left,-this._top))):(h.set(this._div,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}),h.set(this._canvas,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"})),this._dragOrigin={x:0,y:0},s.putImageData(e,r.x,r.y,0,0,i.width,i.height),this._fireUpdateEnd()}else this.clear()}},_panHandler:function(t,i){"css-transforms"===this._map.navigationMode?(this._left=this._map.__visibleDelta.x+i.x,this._top=this._map.__visibleDelta.y+i.y,h.set(this._div,_._css.names.transform,_._css.translate(this._left,this._top))):h.set(this._div,{left:this._startRect.left+i.x+"px",top:this._startRect.top+i.y+"px"})},_panEndHandler:function(t,i){i&&(this._startRect.left+=i.x,this._startRect.top+=i.y)},_onScaleHandler:function(t,i){var s={},e=_._css.names;h.set(this._canvas,e.transition,i?"none":e.transformName+" "+m+"ms ease"),this._matrix=t,t=this._multiply?o.multiply(t,this._multiply):t,(this._tdx||this._tdy)&&(t=o.multiply(t,{xx:1,xy:0,yx:0,yy:1,dx:-this._tdx,dy:-this._tdy})),s[e.transform]=_._css.matrix(t),h.set(this._canvas,s)},_onZoomHandler:function(t,i,s){var e=this._startRect,n=e.width*i,a=e.height*i,o=e.left-(n-e.width)*(s.x-e.left)/e.width,_=e.top-(a-e.height)*(s.y-e.top)/e.height;h.set(this._canvas,{left:o+"px",top:_+"px",width:n+"px",height:a+"px"}),this._endRect={left:o,top:_,width:n,height:a}},_onZoomEndHandler:function(){this._endRect&&(this._startRect=this._endRect)},_onResizeHandler:function(t,i,s){h.set(this._div,{width:i+"px",height:s+"px"}),h.set(this._canvas,{width:i+"px",height:s+"px"}),this._startRect.width=this._canvas.width=i,this._startRect.height=this._canvas.height=s},_extentChangeHandler:function(t,i,s,e){if(!this.suspended&&(!i||0!==i.x||0!==i.y||s)){"css-transforms"===this._map.navigationMode&&(i&&(this._dragOrigin.x+=i.x,this._dragOrigin.y+=i.y),s||(this._left=this._map.__visibleDelta.x,this._top=this._map.__visibleDelta.y,h.set(this._div,_._css.names.transform,_._css.translate(this._left,this._top))),s&&(h.set(this._canvas,_._css.names.transition,"none"),this._multiply=this._multiply?o.multiply(this._matrix,this._multiply):this._matrix)),this._fireUpdateStart();var n=this._map;this._requestData(n.extent,n.width,n.height)}},_visibilityChangeHandler:function(t){t?l.show(this._div):l.hide(this._div)},_opacityChangeHandler:function(t){h.set(this._div,"opacity",t)}})}));