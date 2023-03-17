// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../lang","dojo/_base/array"],(function(t,i,e,s,n,a){var o=t(null,{declaredClass:"esri.layers.pixelFilters.VectorFieldPixelFilter",speedUnits:["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"],constructor:function(t){i.mixin(this,t),this.isDataUV=!(!t||!t.isDataUV)&&t.isDataUV,this.computeMagnitudeAndDirection=i.hitch(this,this.computeMagnitudeAndDirection),this.unitConversionFactor=1,this._updateUnitConvFactor()},setUnits:function(t,i){this.inputUnit=t,this.outputUnit=i,this.unitConversionFactor=1,this._updateUnitConvFactor()},_updateUnitConvFactor:function(){var t=a.indexOf(this.speedUnits,this.inputUnit),i=a.indexOf(this.speedUnits,this.outputUnit);if(this.inputUnit&&this.outputUnit&&t>=0&&i>=0){var e=[1,.277778,.514444,.3048,.44704,0];this.unitConversionFactor=e[t]/e[i]}},computeMagnitudeAndDirection:function(t){if(!n.isDefined(t))throw"Could not compute magnitude and direction. No pixel data is available.";var i=t.pixelBlock;if(!n.isDefined(i)||2!==i.getPlaneCount())throw"Could not compute magnitude and direction. Pixel data does not contain two bands.";var e=t.extent,s=(e.xmax-e.xmin)/i.width,a=(e.ymax-e.ymin)/i.height,o=e.xmin+s/2,r=e.ymax-a/2;i.statistics[0].minValue=0,i.statistics[0].maxValue=0;var u,d,l,c,h,p,x,m,U=180/Math.PI,f=[],v=0,F=0,V=0,C=!n.isDefined(i.mask);for(h=x=1/0,p=m=-1/0,v=0;v<i.height;v++)for(F=0;F<i.width;F++,V++)f.push([o+s*F,r-a*v]),(C||i.mask[V])&&(l=u=i.pixels[0][V],c=d=i.pixels[1][V],this.isDataUV&&(l=Math.sqrt(u*u+d*d),c=90-U*Math.atan2(d,u)),i.pixels[0][V]=l*this.unitConversionFactor,i.pixels[1][V]=c,l>p&&(p=l),l<h&&(h=l),c>m&&(m=c),c<x&&(x=c));return i.statistics[0].maxValue=p,i.statistics[0].minValue=h,i.statistics[1].maxValue=m,i.statistics[1].minValue=x,t.locations=f,t}});return e("extend-esri")&&i.setObject("layers.pixelFilters.VectorFieldPixelFilter",o,s),o}));