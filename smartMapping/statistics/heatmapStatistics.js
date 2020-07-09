// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,t,r,a,i,s,n,l){var u=s.numericTypes;function o(e){return r.__awaiter(this,void 0,void 0,(function(){var t,s,o,d,p,c,y,f,h,m,v;return r.__generator(this,(function(_){switch(_.label){case 0:if(!(e&&e.layer&&e.view))throw new a("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");if(t=[0,2,1],s=e.layer,o=r.__rest(e,["layer"]),d=l.createLayerAdapter(s,t),(p=r.__assign({layerAdapter:d},o)).blurRadius=null==p.blurRadius?10:p.blurRadius,!d)throw new a("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(t).join(", "));return c=i.isSome(p.signal)?{signal:p.signal}:null,[4,d.load(c)];case 1:return _.sent(),y=p.field,f=y?d.getField(y):null,[4,l.getFieldsList({field:y})];case 2:if(h=_.sent(),m=n.verifyBasicFieldValidity(d,h,"heatmap-statistics:invalid-parameters"))throw m;if(f&&(v=n.verifyFieldType(d,f,"heatmap-statistics:invalid-parameters",u)))throw v;return[2,p]}}))}))}return function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,i;return r.__generator(this,(function(s){switch(s.label){case 0:return[4,o(e)];case 1:return t=s.sent(),a=t.layerAdapter,i=r.__rest(t,["layerAdapter"]),[2,a.heatmapStatistics(i)]}}))}))}}));