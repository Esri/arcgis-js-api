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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","../kernel","../lang","../Color","./Renderer","./ClassBreaksRenderer","../symbols/SimpleMarkerSymbol","../symbols/PictureMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/jsonUtils","require"],(function(e,t,r,i,n,L,a,s,o,l,d,M,u,f){var h=e(s,{declaredClass:"esri.renderer.VectorFieldRenderer",iconFolderPath:"../images/symbol/sfs/",constructor:function(t){L.isDefined(t)||(t={}),t.attributeField=t.attributeField||"Magnitude",t.rotationInfo=t.rotationInfo||this._getRotationInfo(t),e.safeMixin(this,t),this.setRotationInfo(this.rotationInfo),this.style=this.style||h.STYLE_SINGLE_ARROW,this.singleArrowSymbol&&(this.singleArrowSymbol=this.singleArrowSymbol.declaredClass?this.singleArrowSymbol:u.fromJson(this.singleArrowSymbol)),this.renderer=new o(this._getDefaultSymbol(),t.attributeField),this._updateRenderer(this.style),this.flowRepresentation=this.flowRepresentation||this.FLOW_FROM},getSymbol:function(e){return this.renderer&&this.renderer.getSymbol(e)},setVisualVariables:function(e){return e=i.filter(e,(function(e){if("sizeInfo"===e.type)return L.isDefined(this._updateSizeInfo(e))}),this),this.inherited(arguments),this},setSizeInfo:function(e){return this._updateSizeInfo(e),this.inherited(arguments),this},setProportionalSymbolInfo:function(e){return this.setSizeInfo(e),this},setColorInfo:function(e){return this},_updateRenderer:function(e){return L.isDefined(this.renderer)?e===h.STYLE_SINGLE_ARROW?this._createSingleArrowRenderer():e===h.STYLE_BEAUFORT_KN?this._createBeaufortKnotsRenderer():e===h.STYLE_BEAUFORT_METER?this._createBeaufortMeterRenderer():e===h.STYLE_BEAUFORT_FEET?this._createBeaufortFeetRenderer():e===h.STYLE_BEAUFORT_MILE?this._createBeaufortMilesRenderer():e===h.STYLE_BEAUFORT_KM?this._createBeaufortKilometersRenderer():e===h.STYLE_OCEAN_CURRENT_M?this._createCurrentMeterRenderer():e===h.STYLE_OCEAN_CURRENT_KN?this._createCurrentKnotsRenderer():e===h.STYLE_SCALAR?this._createSimpleScalarRenderer():e===h.STYLE_WIND_BARBS?this._createWindBarbsRenderer():this._createClassifiedArrowRenderer():new Error("Invalid Renderer!")},_updateSizeInfo:function(e){return e&&L.isDefined(e.minSize)&&L.isDefined(e.maxSize)&&L.isDefined(e.minDataValue)&&L.isDefined(e.maxDataValue)?(this.style===h.STYLE_WIND_BARBS&&(e.minSize=e.maxSize),e.field=e.field||"Magnitude",e.type="sizeInfo",this.minDataValue=e.minDataValue,this.maxDataValue=e.maxDataValue,e):null},_createClassifiedArrowRenderer:function(){this.renderer.defaultSymbol=this._getDefaultSymbol(new a([56,168,0]));var e=[0,1e-6,3.5,7,10.5,14];if(L.isDefined(this.minDataValue)&&L.isDefined(this.maxDataValue)){var t,r,i=(this.maxDataValue-this.minDataValue)/5;for(e=[],r=this.minDataValue,t=0;t<6;t++)e[t]=r,r+=i}this._addBreaks(e,[[56,168,0],[139,309,0],[255,255,0],[255,128,0],[255,0,0]])},_createSingleArrowRenderer:function(){this.renderer.defaultSymbol=this.singleArrowSymbol||this._getDefaultSymbol()},_createBeaufortMeterRenderer:function(){this.renderer.defaultSymbol=this._getDefaultSymbol(new a([214,47,39]));this._addBreaks([0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7],[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]])},_createBeaufortKnotsRenderer:function(){this.renderer.defaultSymbol=this._getDefaultSymbol(new a([214,47,39]));this._addBreaks([0,1,3,6,10,16,21,27,33,40,47,55,63],[[40,146,199],[89,162,186],[129,179,171],[160,194,155],[191,212,138],[218,230,119],[250,250,100],[252,213,83],[252,179,102],[250,141,52],[247,110,42],[240,71,29]])},_createBeaufortFeetRenderer:function(){var e=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];i.forEach(e,(function(t,r){e[r]*=3.28084})),this.renderer.defaultSymbol=this._getDefaultSymbol(new a([214,47,39]));this._addBreaks(e,[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]])},_createBeaufortMilesRenderer:function(){var e=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];i.forEach(e,(function(t,r){e[r]*=2.23694})),this.renderer.defaultSymbol=this._getDefaultSymbol(new a([214,47,39]));this._addBreaks(e,[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]])},_createBeaufortKilometersRenderer:function(){var e=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];i.forEach(e,(function(t,r){e[r]*=3.6})),this.renderer.defaultSymbol=this._getDefaultSymbol(new a([214,47,39]));this._addBreaks(e,[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]])},_createCurrentMeterRenderer:function(){this.renderer.defaultSymbol=this._getDefaultSymbol(new a([177,177,177]));this._addBreaks([0,.5,1,1.5,2],[[78,26,153],[179,27,26],[202,128,26],[177,177,177]])},_createCurrentKnotsRenderer:function(){this.renderer.defaultSymbol=this._getDefaultSymbol(new a([177,177,177]));this._addBreaks([0,.25,.5,1,1.5,2,2.5,3,3.5,4],[[0,0,0],[0,37,100],[78,26,153],[151,0,100],[179,27,26],[177,78,26],[202,128,26],[177,179,52],[177,177,177]])},_createSimpleScalarRenderer:function(){this.renderer.defaultSymbol=new d({url:f.toUrl(this.iconFolderPath+"scalar.png"),height:20,width:20,type:"esriPMS",angle:0})},_createWindBarbsRenderer:function(){var e,t,r=[];for(e=0;e<=150;e+=5)r.push(e);t=["M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20","M25 0 L25 40 M25 35 L17.5 37.5","M25 0 L25 40 L10 45 L25 40","M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30","M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5","M25 0 L25 40 L10 40 L25 35","M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20","M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L10 15","M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L10 15 M25 10 M25 5 L17.5 7.5"];var i=new d({url:f.toUrl(this.iconFolderPath+"windbarb.png"),height:20,width:20,type:"esriPMS",angle:0});for(this.renderer.defaultSymbol=i,e=0;e<r.length-1;e++)0===e?this.renderer.addBreak({minValue:r[e],maxValue:r[e+1],symbol:i}):this.renderer.addBreak({minValue:r[e],maxValue:r[e+1],symbol:(new l).setPath(t[e]).setOutline((new M).setWidth(1.5)).setSize(20).setColor(new a([0,0,0,255]))})},_getDefaultSymbol:function(e){return(new l).setPath("M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z").setOutline((new M).setWidth(0)).setSize(20).setColor(e||new a([0,92,230]))},_getRotationInfo:function(e){var t=e&&e.flowRepresentation||h.FLOW_FROM,r=e&&e.rotationField||"Direction",i=h.FLOW_FROM;return{field:function(e){var n=e.attributes[r];return t===i?n:n+180},type:"geographic"}},_addBreaks:function(e,t){if(!L.isDefined(this.renderer))return new Error("Invalid Renderer!");if(!(e&&t&&e.length&&t.length&&e.length>=t.length))return new Error("AddBreaks: Input arguments break values and colors not valid");var r;for(r=0;r<t.length;r++)this.renderer.addBreak({minValue:e[r],maxValue:e[r+1],symbol:this._getDefaultSymbol(new a(t[r]))})},toJson:function(){var e=t.mixin(this.inherited(arguments),{type:"vectorField",style:this.style,attributeField:this.attributeField,flowRepresentation:this.flowRepresentation,symbolTileSize:this.symbolTileSize,inputUnit:this.inputUnit,outputUnit:this.outputUnit});return this.renderer&&this.renderer.defaultSymbol&&this.style===h.STYLE_SINGLE_ARROW&&(e.singleArrowSymbol=this.renderer.defaultSymbol.toJson()),L.fixJson(e)}});return t.mixin(h,{STYLE_WIND_BARBS:"wind_speed",STYLE_SINGLE_ARROW:"single_arrow",STYLE_CLASSIFIED_ARROW:"classified_arrow",STYLE_BEAUFORT_KN:"beaufort_kn",STYLE_BEAUFORT_METER:"beaufort_m",STYLE_BEAUFORT_MILE:"beaufort_mi",STYLE_BEAUFORT_FEET:"beaufort_ft",STYLE_BEAUFORT_KM:"beaufort_km",STYLE_OCEAN_CURRENT_M:"ocean_current_m",STYLE_OCEAN_CURRENT_KN:"ocean_current_kn",STYLE_SCALAR:"simple_scalar"},{FLOW_FROM:"flow_from",FLOW_TO:"flow_to"}),r("extend-esri")&&t.setObject("renderer.VectorFieldRenderer",h,n),h}));