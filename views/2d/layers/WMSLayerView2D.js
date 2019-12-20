// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./BitmapLayerView2D","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/WMSLayerView"],function(e,t,r,i,a,o,s,n,p,u,h,c,d,y,l,m,g,f){var w=n.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch(function(e){p.isAbortError(e)||w.error(e)})},t.prototype.attach=function(){var e=this,t=this,r=t.layer,i=t.view,a=r.imageMaxHeight,o=r.imageMaxWidth;this.strategy=new l({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:a,imageMaxWidth:o,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new c({layer:r,view:i}),this.handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.container.removeAllChildren(),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?this.layer.supportsSpatialReference(this.view.spatialReference):e},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this,r=t.container,i=t.view,a=e.x,o=e.y,s=i.spatialReference,n=null,p=0,u=0;r.children.some(function(e){var t=e.width,r=e.height,i=e.resolution,c=e.x,d=e.y,y=c+i*t,l=d-i*r;return a>=c&&a<=y&&o<=d&&o>=l&&(n=new h({xmin:c,ymin:l,xmax:y,ymax:d,spatialReference:s}),p=t,u=r,!0)});var c=n.width/p,d=Math.round((a-n.xmin)/c),y=Math.round((n.ymax-o)/c);return{extent:n,width:p,height:u,x:d,y:y}},t.prototype.doRefresh=function(){return s(this,void 0,void 0,function(){return o(this,function(e){return this.requestUpdate(),[2]})})},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,i,a){return this.layer.fetchImage(e,t,i,r({timestamp:this.refreshTimestamp},a))},a([u.property()],t.prototype,"strategy",void 0),a([u.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),a([u.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=a([u.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(u.declared(f.WMSLayerView(g.RefreshableLayerView(d.BitmapLayerView2D(y.LayerView2D(m))))))});