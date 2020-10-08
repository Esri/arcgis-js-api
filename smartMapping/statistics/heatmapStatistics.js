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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,t,r,a,i,s,n,l,u){"use strict";var o=s.numericTypes;function p(e){return r.__awaiter(this,void 0,void 0,(function(){var t,s,p,d,c,y,f,h,m,v,_;return r.__generator(this,(function(w){switch(w.label){case 0:if(!(e&&e.layer&&e.view))throw new a("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");if(t=[0,2,1],s=e.layer,p=r.__rest(e,["layer"]),d=u.createLayerAdapter(s,t),(c=r.__assign({layerAdapter:d},p)).blurRadius=null==c.blurRadius?10:c.blurRadius,!d)throw new a("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(t).join(", "));return y=i.isSome(c.signal)?{signal:c.signal}:null,[4,d.load(y)];case 1:return w.sent(),f=c.field,h=f?d.getField(f):null,[4,l.getFieldsList({field:f})];case 2:if(m=w.sent(),v=n.verifyBasicFieldValidity(d,m,"heatmap-statistics:invalid-parameters"))throw v;if(h&&(_=n.verifyFieldType(d,h,"heatmap-statistics:invalid-parameters",o)))throw _;return[2,c]}}))}))}return function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,i;return r.__generator(this,(function(s){switch(s.label){case 0:return[4,p(e)];case 1:return t=s.sent(),a=t.layerAdapter,i=r.__rest(t,["layerAdapter"]),[2,a.heatmapStatistics(i)]}}))}))}}));