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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,t,r,i,a,s,l,u,n){function o(e){return a(this,void 0,void 0,function(){var t,a,l,o,p,f,c,h;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&e.view))throw new s("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");if(t=r({},e),t.blurRadius=null==t.blurRadius?10:t.blurRadius,a=[0,2,1],l=n.createLayerAdapter(t.layer,a),t.layer=l,!l)throw new s("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(a).join(", "));return[4,l.load()];case 1:return i.sent(),o=t.field,p=o?l.getField(o):null,[4,n.getFieldsList({field:o})];case 2:if(f=i.sent(),c=u.verifyBasicFieldValidity(l,f,"heatmap-statistics:invalid-parameters"))throw c;if(p&&(h=u.verifyFieldType(l,p,"heatmap-statistics:invalid-parameters",d)))throw h;return[2,t]}})})}function p(e){return a(this,void 0,void 0,function(){var t,r,a;return i(this,function(i){switch(i.label){case 0:return[4,o(e)];case 1:return t=i.sent(),r=t.layer,a={field:t.field,fieldOffset:t.fieldOffset,blurRadius:t.blurRadius,features:t.features,view:t.view},[2,r.heatmapStatistics(a)]}})})}var d=l.numericTypes;return p});