// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./DynamicLayerView3D"],function(e,t,r){var a=r.createSubclass({declaredClass:"esri.views.3d.layers.WMSLayerView3D",_exportWMSImageParameters:null,_imageVersion:null,initialize:function(){this._exportWMSImageParameters=new t({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(e){this._imageVersion!==e&&(this._imageVersion=e,this.refetch())}.bind(this)))},destroy:function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)},beforeFetch:function(){this._exportWMSImageParameters.scale!==this.view.scale&&(this._exportWMSImageParameters.scale=this.view.scale),this._imageVersion=this._exportWMSImageParameters.version},getPopupData:function(t){var r=t.center,a=this.findExtentInfoAt(r);if(a){var i=a.extent,s=new e(i[0],i[1],i[2],i[3],a.spatialReference),n=a.imageSize,o=n.width,h=n.height,m=s.width/o,l=Math.round((r.x-s.xmin)/m),u=Math.round((s.ymax-r.y)/m),c=this.layer.fetchFeatureInfo(s,o,h,l,u);if(c)return c.then(function(e){return[e]})}return null}});return a});