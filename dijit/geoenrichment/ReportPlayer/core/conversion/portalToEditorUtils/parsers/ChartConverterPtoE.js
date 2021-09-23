// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendPlacements","esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendSymbols","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartDataLabelsTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartBarThickness","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineStyles","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineMarkers","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/GaugeLabelPlacements","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleLabelPlacements","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleDirections","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleFlowStyles","./_FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,l,r,o,n,s,u,c,p,g,d,y,f,b,h,S,m,L){L=L.geoenrichment.dijit.ReportPlayer.ReportPlayer;var v={};function C(e,t){var i=Number(e);return isNaN(i)?void 0:t?t(i):i}function w(e,t){return C(e,t.revisionVersion>=1.7?l.ptToPx:null)}function P(e){return l.ptToPxObj(l.parseStyleString(e))}function k(t,i,a){var l={gridLines:t.gridlines,gridLinesCentered:t.gridlinesCentered,gridLinesOpacity:C(t.gridlinesOpacity),gridLinesColor:A(t.gridlinesColor),gridLinesThickness:w(t.gridlinesThickness,a),gridLinesStyle:d.isSupported(t.gridlinesStyle)?t.gridlinesStyle:void 0,gridStripes:t.gridStripes,gridStripesColor:A(t.gridStripesColor),gridStripesColorAlt:A(t.gridStripesColorAlt)};return i&&e.mixin(l,{hideBaseLine:void 0!==t.baseLine?!t.baseLine:t.hideBaseLine,baseLineColor:A(t.baseLineColor),baseLineOpacity:C(t.baseLineOpacity),baseLineThickness:w(t.baseLineThickness,a),baseLineStyle:d.isSupported(t.baseLineStyle)?t.baseLineStyle:void 0,baseLineValue:C(t.baseLineValue)}),l}function T(e,t){var i=a.queryTopJson(e,"templateValueFields")[0];if(!i)return null;var l=a.queryTopJson(i,"d");if(!l||!l.length)return null;var r={};return l.forEach((function(e){var i=m.getCalculatorOrScriptFieldInfo(e.attributes.f,t);(r[e.attributes.templateField]=r[e.attributes.templateField]||{})[e.attributes.pointField]=i})),r}function O(e){return"string"!=typeof e?0:"0"===(e=e.replace("%",""))?0:e.replace("0.","").length}function A(e){return e&&"string"==typeof e&&(e=6===e.length&&-1===e.indexOf("#")?"#"+e:t.toCSSColor(e)),e}return v.portalToEditor=function(t,v,x){if(!o.isSupported(t.attributes.type))throw new Error("Chart type is not supported.");var M=function(e,t){return a.queryTopJson(e,"series")[0].tags.map((function(i){if(!i.tags)return null;i.attributes=i.attributes||{};var n={_originalAttrs:i.attributes,label:i.attributes.Text||"",color:A(i.attributes.color),points:i.tags.map((function(l,n){l.attributes=l.attributes||{};var s=(e.attributes.type===o.GAUGE||e.attributes.type===o.WAFFLE)&&n===i.tags.length-1,u=l.tags&&l.tags[0],c=u&&u.attributes&&u.attributes.f,p=c&&m.getCalculatorOrScriptFieldInfo(c,t);if(p||s){if(s&&(p=null),p&&p.isMissing){var g=l.attributes.Text;if(!g&&t.variableProvider.isPlayerOnly){var d=t.variableProvider.toCalculator(p.templateName);g=d&&d.variable.alias}p.alias=g?g+" ("+L.missingVariable+")":L.missingVariable}var y=l.attributes.CaptionField,f=y&&m.getCalculatorOrScriptFieldInfo(y,t),b=a.queryJson(l,"pointIcon")[0],h=b&&t.parsers.getParser("field").parseField(b.tags[0],b,t);return r.createChartPoint(p,l.attributes.Text||"",A(l.attributes.color),h,f)}})).filter((function(e){return!!e}))};if(o.isLineLike(e.attributes.type)){n.lineStyle=d.isSupported(i.attributes.lineStyle)?i.attributes.lineStyle:void 0,n.lineMarker=y.isSupported(i.attributes.lineMarker)?i.attributes.lineMarker:void 0,n.lineMarkerColor=A(i.attributes.lineMarkerColor),n.lineMarkerSize=C(i.attributes.lineMarkerSize,l.ptToPx),n.lineMarkerFillColor=A(i.attributes.lineMarkerFillColor),n.fillColor=A(i.attributes.fillColor);var s=a.queryJson(i,"multiFeatureLineStyles")[0];s&&(n.multiFeatureLineStyles=[],s.tags.forEach((function(e){var t={};e.attributes&&(t.color=A(e.attributes.color),t.lineStyle=d.isSupported(e.attributes.lineStyle)?e.attributes.lineStyle:void 0,t.lineMarker=y.isSupported(e.attributes.lineMarker)?e.attributes.lineMarker:void 0,t.lineMarkerColor=A(e.attributes.lineMarkerColor),t.lineMarkerSize=C(e.attributes.lineMarkerSize,l.ptToPx),t.lineMarkerFillColor=A(e.attributes.lineMarkerFillColor),t.lineThickness=C(e.attributes.lineThickness,l.ptToPx),t.fillColor=A(e.attributes.fillColor)),n.multiFeatureLineStyles.push(t)})))}return n})).filter((function(e){return e&&e.points&&!!e.points.length}))}(t,x);if(!M.length)return null;var F=t.attributes,I=a.queryTopJson(t,"chartTitle")[0],B=a.queryTopJson(t,"legend")[0],V=a.queryTopJson(t,"xAxis")[0],R=a.queryTopJson(t,"yAxis")[0],J=a.queryTopJson(t,"chartIcons")[0],j=a.queryTopJson(t,"floatingIcons")[0],q=a.queryTopJson(t,"floatingTexts")[0],D=a.queryTopJson(t,"trigger")[0]||a.queryTopJson(t,"trigger2")[0],W=a.queryTopJson(t,"filter")[0],G=a.queryTopJson(t,"tooltip")[0],N=a.queryTopJson(t,"comparisonInfo")[0],E=a.queryTopJson(t,"dataDrillingPanels")[0];I.attributes=I.attributes||{};var H=V&&V.attributes,U=R&&R.attributes,_=H,z=U;x.report.isGraphicReport&&x.revisionVersion<1.3&&(_=U,z=H);var X,Z=V&&V.tags&&V.tags[0].attributes&&V.tags[0].attributes,K=R&&R.tags&&R.tags[0].attributes&&R.tags[0].attributes,Q=function(e){var t=a.queryTopJson(e,"BackImage")[0];return t&&t.tags&&t.tags[0].text?i.base64DataToDataURL(t.tags[0].text):null}(t),Y=function(e,t){if(t.revisionVersion<2.1)return{lineOpacity:C(void 0!==e.lineOpacity?e.lineOpacity:e.lineAreaOpacity),lineMarkersFillOpacity:C(void 0!==e.lineMarkersFillOpacity?e.lineMarkersFillOpacity:e.lineAreaOpacity),lineAreaOpacity:C(e.lineAreaOpacity)};return{lineOpacity:C(e.lineOpacity),lineMarkersFillOpacity:C(e.lineMarkersFillOpacity),lineAreaOpacity:C(e.lineAreaOpacity)}}(F,x),$={isChart:!0,type:F._type||F.type,isMultiFeatureChart:!!F.isMultiFeatureChart,seriesItems:M,visualProperties:e.mixin({width:l.ptToPx(F.width),height:l.ptToPx(F.height),marginTop:C(F.marginTop,l.ptToPx),marginRight:C(F.marginRight,l.ptToPx),marginBottom:C(F.marginBottom,l.ptToPx),marginLeft:C(F.marginLeft,l.ptToPx),backgroundColor:A(F.backColor),backgroundColorOpacity:C(F.backgroundColorOpacity),plotAreaOutlineColor:A(F.plotAreaOutlineColor),plotAreaOutlineOpacity:C(F.plotAreaOutlineOpacity),plotAreaOutlineThickness:C(F.plotAreaOutlineThickness,l.ptToPx),plotAreaOutlineStyle:d.isSupported(F.plotAreaOutlineStyle)?F.plotAreaOutlineStyle:void 0,panelBackgroundColor:A(F.panelBackgroundColor),backgroundImageData:Q,noTableView:!!F.noTableView,title:{text:I.attributes.text,align:I.attributes.align&&I.attributes.align.toLowerCase(),style:P(I.attributes.style),verticalShift:C(I.attributes.verticalShift,l.ptToPx)},xAxis:H&&e.mixin({show:"None"!==H.placement,hideLine:void 0!==H.line?!H.line:H.hideLine,showTicks:H.ticks,ticksInside:H.ticksInside||void 0,hideLabels:H.hideLabels||void 0,placement:"OtherSide"===H.placement?"OtherSide":void 0,title:Z&&Z.text,titleStyle:Z&&P(Z.style),style:P(H.style),labelsAngle:C(H.labelsAngle),lineColor:A(H.lineColor)},k(_,!1,x)),yAxis:U&&e.mixin({show:"None"!==U.placement,hideLine:void 0!==U.line?!U.line:U.hideLine,showTicks:U.ticks,ticksInside:U.ticksInside,hideLabels:U.hideLabels||void 0,placement:"OtherSide"===U.placement?"OtherSide":void 0,title:K&&K.text,titleStyle:K&&P(K.style),style:P(U.style),labelsAngle:C(U.labelsAngle),lineColor:A(U.lineColor),showPercentSymbol:U.showPercentSymbol,showCurrencySymbol:U.showCurrencySymbol,showSymbolForAllLabels:U.showSymbolForAllLabels,showValuesAsWeightsInSeries:U.showValuesAsWeightsInSeries,nonZeroInclusive:U.nonZeroInclusive},k(z,!0,x)),isStacked:F.isStacked,showValuesAsWeightInStack:F.showValuesAsWeightInStack,columnBarGap:C(F.columnBarGap,l.ptToPx),columnBarOpacity:C(F.columnBarOpacity),renderColumnBarsInOppositeDirections:F.renderColumnBarsInOppositeDirections,showColumnBarBackground:F.showColumnBarBackground,columnBarBackgroundColor:A(F.columnBarBackgroundColor),columnBarBackgroundOpacity:C(F.columnBarBackgroundOpacity),fillOpacity:C(F.fillOpacity),outlineOpacity:C(void 0!==F.columnBarLineOpacity?F.columnBarLineOpacity:F.outlineOpacity),outlineColor:A(void 0!==F.columnBarLineColor?F.columnBarLineColor:F.outlineColor),outlineThickness:C(void 0!==F.columnBarLineThickness?F.columnBarLineThickness:F.outlineThickness,l.ptToPx),outlineStyle:void 0!==F.columnBarLineStyle?d.isSupported(F.columnBarLineStyle)?F.columnBarLineStyle:void 0:d.isSupported(F.outlineStyle)?F.outlineStyle:void 0,lineOpacity:Y.lineOpacity,fillLineMarkers:void 0!==F.fillLineMarkers?F.fillLineMarkers:F.fillLineArea,lineMarkersFillOpacity:Y.lineMarkersFillOpacity,fillLineArea:F.fillLineArea,lineAreaOpacity:Y.lineAreaOpacity,donutHolePercent:C(F.donutHolePercent),donutGap:C(F.donutGap),donutArcPercent:C(F.donutArcPercent),gaugeHolePercent:C(F.gaugeHolePercent),gaugeRangeMin:C(F.gaugeRangeMin),gaugeRangeMax:C(F.gaugeRangeMax),gaugeGap:C(F.gaugeGap),gaugeStartAngle:C(F.gaugeStartAngle),gaugeArcPercent:C(F.gaugeArcPercent),gaugeLabelStyle:P(F.gaugeLabelStyle),gaugeLabelPlacement:F.gaugeLabelPlacement?f.toSupportedValue(F.gaugeLabelPlacement):void 0,gaugeShowArrow:F.gaugeShowArrow||void 0,gaugeArrowLineColor:A(F.gaugeArrowLineColor),gaugeArrowFillColor:A(F.gaugeArrowFillColor),gaugeConditionalStylingOthers:void 0!==F.gaugeConditionalStylingIgnoreOthers?F.gaugeConditionalStylingIgnoreOthers:F.gaugeConditionalStylingOthers||void 0,gaugeConditionalStylingLabel:F.gaugeConditionalStylingLabel||void 0,gaugeShowFromToLabels:F.gaugeShowFromToLabels||void 0,gaugeFromLabelStyle:P(F.gaugeFromLabelStyle),gaugeToLabelStyle:P(F.gaugeToLabelStyle),waffleDirection:F.waffleDirection?h.toSupportedValue(F.waffleDirection):void 0,waffleFlowStyle:S.isSupported(F.waffleFlowStyle)?F.waffleFlowStyle:void 0,waffleShowWholePictures:F.waffleShowWholePictures||void 0,waffleStretchIconsToFill:F.waffleStretchIconsToFill||void 0,waffleRangeMin:C(F.waffleRangeMin),waffleRangeMax:C(F.waffleRangeMax),waffleLabelPlacement:F.waffleLabelPlacement?b.toSupportedValue(F.waffleLabelPlacement):void 0,waffleLabelOffset:C(F.waffleLabelOffset,l.ptToPx),waffleHideValue:F.waffleHideValue||void 0,waffleHideLabel:F.waffleHideLabel||void 0,waffleShowLabelAbove:F.waffleShowLabelAbove||void 0,waffleValueStyle:P(F.waffleValueStyle),waffleLabelStyle:P(F.waffleLabelStyle),waffleColumnSpace:C(F.waffleColumnSpace,l.ptToPx),waffleRowSpace:C(F.waffleRowSpace,l.ptToPx),waffleConditionalStylingOthers:void 0!==F.waffleConditionalStylingIgnoreOthers?F.waffleConditionalStylingIgnoreOthers:F.waffleConditionalStylingOthers||void 0,waffleConditionalStylingValue:F.waffleConditionalStylingValue||void 0,waffleConditionalStylingLabel:F.waffleConditionalStylingLabel||void 0,waffleNumIcons:C(F.waffleNumIcons),waffleNumRows:C(F.waffleNumRows),waffleNumColumns:C(F.waffleNumColumns),ringBackgroundColor:A(F.ringBackgroundColor),ringBackgroundOpacity:C(F.ringBackgroundOpacity),columnBarShowWholePictures:void 0!==F.showWholePictures?F.showWholePictures:F.columnBarShowWholePictures,showAxisIcons:F.showAxisIcons,showChartIcons:F.showChartIcons,sorting:!F.noSorting&&g.isSupported(F.sorting)?F.sorting:void 0,noSorting:!!F.noSorting},(X=F,{dataLabels:c.toSupportedValue(X.dataLabels),dataLabelsShowLabelUnder:X.dataLabelsShowLabelUnder,dataLabelsDecimals:O(X.CustomPercentFormat||X.CustomValueFormat),dataLabelsStyle:P(X.dataLabelsStyle),dataLabelsLabelStyle:X.dataLabelsLabelStyle?P(X.dataLabelsLabelStyle):P(X.dataLabelsStyle),dataLabelsAltColor:A(X.dataLabelsAltColor),dataLabelsEnableAltColor:X.dataLabelsEnableAltColor,dataLabelsInside:X.dataLabelsInside,dataLabelsStackedInColumns:X.dataLabelsStackedInColumns,dataLabelsHorizontalAlign:X.dataLabelsHorizontalAlign,dataLabelsVerticalAlign:X.dataLabelsVerticalAlign,dataLabelsShowValuePercentSymbol:X.dataLabelsShowValuePercentSymbol,dataLabelsShowValueCurrencySymbol:X.dataLabelsShowValueCurrencySymbol,dataLabelsAngle:C(X.dataLabelsAngle),dataLabelsMaxWidth:C(X.dataLabelsMaxWidth,l.ptToPx)}))},ee=C(M[0]._originalAttrs.thickness);if(o.isColumnBarLike(F.type)?$.visualProperties.columnThickness=ee>1?p.LARGE:ee<1?p.SMALL:p.MEDIUM:o.isLineLike(F.type)&&($.visualProperties.lineThickness=w(ee,x),M.forEach((function(e){e._originalAttrs.thickness!==ee&&(e.lineThickness=C(e._originalAttrs.thickness,l.ptToPx))}))),M.forEach((function(e){delete e._originalAttrs})),B){var te=B&&B.attributes||{};$.visualProperties.legend={type:n.toSupportedValue(te.type)},$.visualProperties.legend.type===n.MIN_MAX?e.mixin($.visualProperties.legend,{minMax:{placement:s.toSupportedValue(te.placement),placementOffset:C(te.placementOffset),titleStyle:P(te.titleStyle),minVariableLabelStyle:P(te.minVariableLabelStyle),maxVariableLabelStyle:P(te.maxVariableLabelStyle)}}):e.mixin($.visualProperties.legend,{series:{placement:s.toSupportedValue(te.placement),placementOffset:C(te.placementOffset),hasBorder:te.hasBorder,labelParts:te.labelParts,style:P(te.style),symbol:u.isSupported(te.symbol)?te.symbol:void 0,hideOthers:te.hideOthers||void 0,showComparison:te.showComparison||void 0}})}x.revisionVersion<1.2&&(void 0!==$.visualProperties.donutGap&&($.visualProperties.donutGap/=2*Math.PI),void 0!==$.visualProperties.gaugeGap&&($.visualProperties.gaugeGap/=2*Math.PI));var ie=J&&J.tags;ie&&ie.length&&($.visualProperties.chartIcons=ie.map((function(e){return e.tags&&e.tags[0]?x.parsers.getParser("field").parseField(e.tags[0],e,x):null})));var ae=j&&j.tags;ae&&ae.length&&($.visualProperties.floatingIcons=ae.map((function(e){return x.parsers.getParser("section").parseTable(e.tags[0],x)})));var le=q&&q.tags;if(le&&le.length&&($.visualProperties.floatingTexts=le.map((function(e){return x.parsers.getParser("section").parseTable(e.tags[0],x)}))),D&&($.visualProperties.conditionalStyling=x.parsers.getParser("field").parseFieldTrigger(D)),$.visualProperties.noFilter=!!F.noFilter,W&&!$.visualProperties.noFilter&&($.visualProperties.filter=x.parsers.getParser("filter").getFilter(W)),G){var re=G.attributes||{};$.visualProperties.tooltip={title:!!re.title,value:!!re.value,weight:!!re.weight,min:!!re.min,max:!!re.max,avg:!!re.avg,conditional:!!re.conditional,fieldInfo:null,style:P(re.style),linkStyle:P(re.linkStyle)};var oe=a.queryTopJson(G,"template")[0];$.visualProperties.tooltip.fieldInfo=oe&&x.parsers.getParser("field").parseRichTextTag(oe,x),$.visualProperties.tooltip.templateValues=T(G,x)}if(E){var ne=a.queryTopJson(E,"dataDrillingPanel")[0],se=ne&&a.queryTopJson(ne,"section")[0];se&&($.dataDrillingPanelInfo={sectionJson:x.parsers.getParser("section").parseSection(se,x),templateValues:T(ne,x),showOnClick:ne.attributes&&ne.attributes.showOnClick})}if(N){var ue=N.attributes,ce=ue.name,pe=x.templateJson.metadata.comparisonCalculatorsHash[ce];pe&&($.comparisonInfo={calculatorName:ce,chartType:ue.chartType,color:A(ue.color),lineThickness:w(ue.lineThickness,x),lineStyle:d.isSupported(ue.lineStyle)?ue.lineStyle:void 0,lineMarker:y.isSupported(ue.lineMarker)?ue.lineMarker:void 0,lineMarkerColor:A(ue.lineMarkerColor),lineMarkerSize:C(ue.lineMarkerSize,l.ptToPx),lineMarkerFillColor:A(ue.lineMarkerFillColor),levels:pe.levels,defaultLevel:ue.defaultLevel})}var ge={};return v.attributes&&v.attributes.style&&e.mixin(ge,l.parseStyleString(v.attributes.style)),l.ptToPxObj(ge),r.provideDefaultValueForMissing($,{font:ge}),x.postProcessChartJson(t,$),$},v}));