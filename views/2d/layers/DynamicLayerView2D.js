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

define(["../../../geometry/Extent","../../../core/watchUtils","../../../core/HandleRegistry","../engine/Bitmap","../viewpointUtils","./LayerView2D"],function(e,i,t,s,n,a){var o=a.createSubclass({declaredClass:"esri.views.2d.layers.DynamicLayerView2D",constructor:function(){this._hdls=new t,this._hdls.add([i.watch(this,"view.state.version,view.stationary,suspended,layer.exportImageParameters.version",this._update.bind(this))])},destroy:function(){this._hdls.destroy(),this._hdls=null},_update:function(){if(this.view.stationary&&!this.suspended){var i=this.view,t=i.state,a=this.layer,o=t.size.concat();this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),a.version<10.3&&n.getOuterSize(o,t.viewpoint,o),o[0]=Math.min(o[0],a.maxImageWidth||2048),o[1]=Math.min(o[1],a.maxImageHeight||2048),this.updating=!0,this._imagePromise=a.fetchImage({extent:n.getExtent(new e,t.viewpoint,o),width:o[0],height:o[1],rotation:t.rotation}),this._imagePromise.then(function(e){var i=e.options,t=this.container;this._imagePromise=null,this.view.stationary&&!this.suspended&&(t.removeAllChildren(),t.addChild(new s({coords:[i.extent.center.x,i.extent.center.y],resolution:i.extent.width/i.width,size:[.5*i.width,.5*i.height],source:e.img,rotation:-i.rotation})))}.bind(this),function(e){"cancel"!==e.dojoType&&(this.container.removeAllChildren(),this._imagePromise=null)}.bind(this)).always(function(){this.updating=!1}.bind(this))}}});return o});