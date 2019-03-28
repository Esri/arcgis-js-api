// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Handles","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","../../layers/WMSLayerView"],function(e,t,r,a,i,n,o,s,p,h,u,c,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t.container=new h.BitmapContainer,t}return a(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e._exportWMSImageParameters.layers?e.requestUpdate():e.container.removeAllChildren())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?this.layer.supportsSpatialReference(this.view.spatialReference):e},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this,r=t.container,a=t.view,i=e.x,n=e.y,o=a.spatialReference,p=null,h=0,u=0;r.children.some(function(e){var t=e.width,r=e.height,a=e.resolution,c=e.x,d=e.y,l=c+a*t,m=d-a*r;return i>=c&&i<=l&&n<=d&&n>=m&&(p=new s({xmin:c,ymin:m,xmax:l,ymax:d,spatialReference:o}),h=t,u=r,!0)});var c=p.width/h,d=Math.round((i-p.xmin)/c),l=Math.round((p.ymax-n)/c);return{extent:p,width:h,height:u,x:d,y:l}},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,a,i){var n=this;return i=r({timestamp:this.refreshTimestamp},i),this.layer.fetchImage(e,t,a,i).then(function(e){return n.notifyChange("updating"),e})},i([o.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),t=i([o.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(o.declared(u,d))});