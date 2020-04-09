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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../lang","dojo/_base/array"],(function(t,i,e,n,s,a){var o=t(null,{declaredClass:"esri.layers.pixelFilters.VectorFieldPixelFilter",speedUnits:["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"],constructor:function(t){i.mixin(this,t),this.isDataUV=!(!t||!t.isDataUV)&&t.isDataUV,this.computeMagnitudeAndDirection=i.hitch(this,this.computeMagnitudeAndDirection),this.unitConversionFactor=1,this._updateUnitConvFactor()},setUnits:function(t,i){this.inputUnit=t,this.outputUnit=i,this.unitConversionFactor=1,this._updateUnitConvFactor()},_updateUnitConvFactor:function(){var t=a.indexOf(this.speedUnits,this.inputUnit),i=a.indexOf(this.speedUnits,this.outputUnit);if(this.inputUnit&&this.outputUnit&&t>=0&&i>=0){var e=[1,.277778,.514444,.3048,.44704,0];this.unitConversionFactor=e[t]/e[i]}},computeMagnitudeAndDirection:function(t){if(!s.isDefined(t))throw"Could not compute magnitude and direction. No pixel data is available.";var i=t.pixelBlock;if(!s.isDefined(i)||2!==i.getPlaneCount())throw"Could not compute magnitude and direction. Pixel data does not contain two bands.";var e=t.extent,n=(e.xmax-e.xmin)/i.width,a=(e.ymax-e.ymin)/i.height,o=e.xmin+n/2,r=e.ymax-a/2;i.statistics[0].minValue=0,i.statistics[0].maxValue=0;var u,d,c,l,h,p,x,m,U=180/Math.PI,f=[],v=0,F=0,C=0,V=!s.isDefined(i.mask);for(h=x=1/0,p=m=-1/0,v=0;v<i.height;v++)for(F=0;F<i.width;F++,C++)f.push([o+n*F,r-a*v]),(V||i.mask[C])&&(c=u=i.pixels[0][C]*this.unitConversionFactor,l=d=i.pixels[1][C],this.isDataUV&&(c=Math.sqrt(u*u+d*d),l=90-U*Math.atan2(d,u),i.pixels[0][C]=c*this.unitConversionFactor,i.pixels[1][C]=l),c>p&&(p=c),c<h&&(h=c),l>m&&(m=l),l<x&&(x=l));return i.statistics[0].maxValue=p,i.statistics[0].minValue=h,i.statistics[1].maxValue=m,i.statistics[1].minValue=x,t.locations=f,t}});return e("extend-esri")&&i.setObject("layers.pixelFilters.VectorFieldPixelFilter",o,n),o}));