// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/sniff","./LayerView2D","../engine/Bitmap","../../../core/declare","../../../core/watchUtils","../../../core/HandleRegistry","../../../Graphic"],function(t,e,i,a,s,r,h){var n=t("ie"),o=a(e,{declaredClass:"esri.views.2d.layers.ImageLayerView2D",classMetadata:{properties:{context:{},pixelData:{}}},constructor:function(){this._hdls=new r,this._hdls.add([s.watch(this,"view.state.version, view.stationary, suspended, layer.exportImageServiceParameters.version",this.refresh.bind(this))])},initialize:function(){this._createCanvas(),this.layer&&this._hdls.add(this.layer.on("redraw",this.redraw.bind(this)))},destroy:function(){this.clear(),this.container.removeAllChildren(),this._canvas&&(this._canvas=this.context=null),this._hdls.remove(),this._hdls.destroy()},context:null,_canvas:null,_rawPixelData:null,refresh:function(){if(this.view.stationary&&!this.suspended){var t=this.view.state;this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),this.updating=!0,this._imagePromise=this.layer.fetchImage({extent:t.extent,width:t.width,height:t.height}).then(function(e){this._imagePromise=null,this._rawPixelData=e.pixelData,this.pixelData=this.layer.applyFilter(this._rawPixelData),this._drawImage(this.pixelData,t)}.bind(this)).otherwise(function(t){"cancel"!==t.dojoType&&(this.container.removeAllChildren(),this._imagePromise=null,this.emit("error",t),console.error(t))}.bind(this)).always(function(){this.updating=!1}.bind(this))}},redraw:function(){this.view.stationary&&!this.suspended&&this._rawPixelData&&(this.pixelData=this.layer.applyFilter(this._rawPixelData),this._drawImage(this.pixelData,this.view.state))},clear:function(){var t=this.get("view.state");this.context&&"2d"===this.layer.drawType&&this.context.clearRect(0,0,t.width,t.height)},hitTest:function(t,e){var i=this.view.toMap({x:t,y:e});return new h({attributes:{},geometry:i})},_drawImage:function(t,e){if(this.view.stationary&&!this.suspended){this._drawPixelData(t);var a=new i({coords:[e.extent.center.x,e.extent.center.y],resolution:e.extent.width/e.width,size:[.5*e.width,.5*e.height],source:this._canvas,rotation:0});this.container.removeAllChildren(),this.container.addChild(a)}},_drawPixelData:function(t){var e=this.get("view.state"),i=this.context;if(!i||!t||!t.pixelBlock||11>n)return void this.clear();if("2d"===this.layer.drawType){this._canvas.width=e.width,this._canvas.height=e.height;var a=t.pixelBlock,s=i.createImageData(a.width,a.height),r=a.getAsRGBA();s.data.set(r),i.putImageData(s,0,0)}},_createCanvas:function(){var t=this.get("view.state"),e=this._canvas=document.createElement("canvas");if(e.style["transform-origin"]="left top",e.width=t.width,e.height=t.height,this.context=e.getContext(this.layer.drawType),!this.context)throw new Error("Unable to create the context. This browser might not support <canvas> elements.")}});return o});