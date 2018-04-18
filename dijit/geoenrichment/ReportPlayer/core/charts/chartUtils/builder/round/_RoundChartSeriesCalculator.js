// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../utils/ChartDataLabelBuilder","dojo/i18n!../../../../../../../../nls/jsapi"],function(a,t,e,i,n,l,o,r,g){return g=g.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(s){var d,u=(s.chart,s.seriesItems),h=s.chartType,c=s.themeSettings,f=s.viewModel,p=s.visualProperties,y=s.previewFeatureIndex,C=s.sorting,S=[],v=u[0],m={name:"data",data:[]},M=[],b=0,x=0,E=1e6,I=-1e6,G=v.points;if(h===t.GAUGE&&1===G.length&&(G=G.slice(),G.push({label:g.gaugeOthers})),t.isConditionalStylingEnabled(h)&&p.conditionalStyling){var U=i.getStatistics(p.conditionalStyling);U&&v&&(d=l.getChartData(U,G.length))}var R=G[0],D=n.isFieldInfoInPercentState(R.fieldInfo),P=[];G.forEach(function(a,e){var i;if(h===t.GAUGE&&1===e){var n=M[0];i=D?Math.max(0,100-n):p.gaugeRangeMax?Math.max(0,p.gaugeRangeMax-(p.gaugeRangeMin||0)-n):0}else i=l.getPreviewValue(a,e,0,!1,h,p,f,y,d),h===t.GAUGE&&0===e&&(P[e]=i,D||(p.gaugeRangeMax&&(i=Math.min(i,p.gaugeRangeMax)),i-=p.gaugeRangeMin||0));M[e]=i,i=i||0,i=void 0!==P[e]?P[e]:i,b+=i,x+=Math.abs(i),E=Math.min(E,i),I=Math.max(I,i)}),h===t.GAUGE&&0===M[1]&&(G.length=1);var A=b/G.length;return G.forEach(function(e,n){var l,g=M[n],s=g||0;if(t.isConditionalStylingEnabled(h)&&p.conditionalStyling){var d=i.getConditionalStyle(s,p.conditionalStyling);l=d&&d.backgroundColor}l=l||a.calcColorForPoint(e,v,n,0,u.length,h,c);var f=g;h===t.GAUGE&&0===n&&(f=P[n]),m.data.push({originalValue:g,x:1,y:Math.max(1e-4,s),isUnavailableData:isNaN(g),valueProp:"y",unsortedIndex:n,name:e.label,point:e,fill:l,text:r.formatDataLabel(s,e.label,x,p,h),tooltip:o.getTooltipInfo(f,e.label,null,E,I,b,x,A,p,h,l,p.conditionalStyling,e.fieldInfo),stroke:{width:0}})}),t.isSortingEnabled(h)&&C&&C!==e.NONE&&m.data.sort(function(a,t){return(a.y-t.y)*(C===e.DESC?-1:1)}),S.push(m),S}}});