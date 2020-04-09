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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../layers/support/fieldUtils","./support/utils","../support/utils"],(function(e,r,t,a,i,s,n,l,u,p,o){var c=u.numericTypes;function d(e){return i(this,void 0,void 0,(function(){var r,i,u,d,y,f,h,m,v,w,g;return a(this,(function(a){switch(a.label){case 0:if(!(e&&e.layer&&e.view))throw new n("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");if(r=[0,2,1],i=e.layer,u=s(e,["layer"]),d=o.createLayerAdapter(i,r),(y=t({layerAdapter:d},u)).blurRadius=null==y.blurRadius?10:y.blurRadius,!d)throw new n("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(r).join(", "));return f=l.isSome(y.signal)?{signal:y.signal}:null,[4,d.load(f)];case 1:return a.sent(),h=y.field,m=h?d.getField(h):null,[4,o.getFieldsList({field:h})];case 2:if(v=a.sent(),w=p.verifyBasicFieldValidity(d,v,"heatmap-statistics:invalid-parameters"))throw w;if(m&&(g=p.verifyFieldType(d,m,"heatmap-statistics:invalid-parameters",c)))throw g;return[2,y]}}))}))}return function(e){return i(this,void 0,void 0,(function(){var r,t,i;return a(this,(function(a){switch(a.label){case 0:return[4,d(e)];case 1:return r=a.sent(),t=r.layerAdapter,i=s(r,["layerAdapter"]),[2,t.heatmapStatistics(i)]}}))}))}}));