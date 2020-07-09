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

define(["require","exports","tslib","../../symbols","../../core/arrayUtils","../../core/Error","../../core/promiseUtils","../../intl/messages","../../layers/support/LabelClass","../../layers/support/LabelExpressionInfo","../heuristics/clusterMinSize","../support/clusterUtils","../../views/2d/layers/support/clusterUtils"],(function(e,t,r,n,a,s,i,l,u,o,c,v,f){function d(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,a,l;return r.__generator(this,(function(r){switch(r.label){case 0:return t=e.layer,n=e.renderer,a=e.view,[4,i.all([t.load(),a.when()])];case 1:return r.sent(),l=n||t.renderer,f.isClusterCompatibleRenderer(l)?[2,{layer:t,renderer:l,view:a}]:[2,i.reject(new s("clusters-label-schemes:invalid-parameters","'renderer' is not valid"))]}}))}))}function p(e){return r.__awaiter(this,void 0,void 0,(function(){var t,a,s,i,l,f,d,p,m;return r.__generator(this,(function(r){switch(r.label){case 0:return t=e.renderer,a=e.view,s=e.statInfo,i=null==s?void 0:s.statisticType,l=s?v.getClusterField(s.attributeInfo,i):v.clusterCountField,f="type"===i?function(e,t,r){var n="unique-value"===e.type?e.uniqueValueInfos:[];return v.getPredominantTypeExpression(n,t,r)}(t,l,e.noneValueLabel):function(e){return'\n  $feature["'+e+'"];\n  var value = $feature["'+e+'"];\n  var num = Count(Text(Round(value)));\n  var label = When(\n    num < 4, Text(value, "#.#"),\n    num == 4, Text(value / Pow(10, 3), "#.0k"),\n    num <= 6, Text(value / Pow(10, 3), "#k"),\n    num == 7, Text(value / Pow(10, 6), "#.0m"),\n    num > 7, Text(value / Pow(10, 6), "#m"),\n    Text(value, "#,###")\n  );\n  return label;\n  '}(l),d=function(e){var t=new n.TextSymbol({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new u({symbol:t,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new o({expression:e})})}(f),p=s?"clusters-"+i+"-"+v.getClusterFieldHash(l,i):"clusters-count",m={name:p,labelingInfo:[d]},[4,c(d.symbol,a)];case 1:return[2,(m.clusterMinSize=r.sent(),m.fieldName=l,m)]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getLabelSchemes=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,s,u,o,c,f,m,h,b,w,y,g,x;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,i.all([d(e),l.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:if(t=r.sent(),n=t[0],s=n.renderer,u=n.layer,o=n.view,c=t[1],!s)return[2,null];f=null,m=[],h=function(e){for(var t=new Map,r=0,n=e;r<n.length;r++){var s=n[r];"size"===s.attributeInfo.vvType?t.set(s.statisticHash,s):t.has(s.statisticHash)||t.set(s.statisticHash,s)}return a.fromMapValues(t)}(v.getStatisticInfos(u,s,!1)),b=0,w=h,r.label=2;case 2:return b<w.length?(y=w[b],[4,p({renderer:s,view:o,statInfo:y,noneValueLabel:c.clusters.predominantNoneValue})]):[3,5];case 3:g=r.sent(),"size"===y.attributeInfo.vvType?f=g:m.push(g),r.label=4;case 4:return b++,[3,2];case 5:return[4,p({renderer:s,view:o})];case 6:return x=r.sent(),f?m.unshift(x):f=x,[2,{primaryScheme:f,secondarySchemes:m}]}}))}))}}));