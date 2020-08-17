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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../PixelBlock","./RasterColormapRenderer","./RasterUniqueValueRenderer","./RasterRGBRenderer","./RasterStretchColorRampRenderer","./RasterClassBreaksRenderer","./RasterShadedReliefRenderer"],(function(e,r,a,t,n,o,s,i,l){var u=function(){var e={};function r(r){e[r.prototype.rendererName]=r}return r(t),r(o),r(s),r(n),r(i),r(l),e}();return{wellKnownRenderers:u,isSupported:function(e){if(!e)return!1;var r=!0,a=e.rendererName;return u[a]||(r=!1),r},create:function(e){return e?(e.rendererName?(r=e.rendererName,a=e.rendererArguments):(r=["UniqueValue","Stretch","ShadedRelief","RGB","Colormap","ClassBreaks"][["uniqueValue","rasterStretch","rasterShadedRelief","rgb","rasterColormap","classBreaks"].indexOf(e.type)],"rasterStretch"===e.type&&e.bandIndex&&e.bandIndex.length>1&&(r="RGB"),a=e),(t=u[r])?new t(a):null):null;var r,a,t},createDefaultRenderer:function(e){if(e&&e.raster){var r=e.raster.rasterInfo,a=e.raster.dataType;if(r){var t=e.raster.rasterFunction;if(t&&"U8"===r.pixelType&&["Stretch","Colormap","ContrastAndBrightness"].indexOf(t.functionName)>-1)t.renderTexture=!0;else if("Processed"!==a||!(e.useWebGL&&t&&t.renderTexture||!e.useWebGL&&"U8"===r.pixelType)){t&&(r=t.rasterInfo);var i,l=r.bandCount,u=r.colormap,d=r.vat,f=r.histograms;f&&0===f.length&&(f=null);var m,c=r.statistics&&r.statistics.map((function(e){return[e.min,e.max,e.mean,e.stddev]})),p=r.keyProperties&&(r.keyProperties.bandProperties||r.keyProperties.BandProperties);if(1===l&&u&&u.length>0)m=this._getDefaultColormapRenderer(d,u);else if(1===l&&d&&d.features&&d.features.length>0)m=new n({});else{var C,v,R,h,g,b=0,x=!1;if(a||!e.raster||!e.raster.tileInfo||void 0!==e.raster.tileInfo.tileType&&"Map"!==e.raster.tileInfo.tileType?"U8"===r.pixelType&&"Processed"===a?(b=5,c=c||[[0,255,0,0],[0,255,0,0],[0,255,0,0]],x=!1):"U8"===r.pixelType||"Elevation"===a?(b=5,x=!c):"Scientific"===a?(b=5,x=!c,i=this._getDefaultScientificColorRamp()):f&&f.length>0?(b=6,x=!1):c?(b=5,x=!1):(b=6,x=!0):(c=[[0,255,0,0],[0,255,0,0],[0,255,0,0]],b=5,x=!1),c||(b=5,x=!0),l>=3&&p&&!(e.bandIds||e.raster&&e.raster.imageServiceParams&&e.raster.imageServiceParams.bandIds)){for(v=0;v<p.length;v++)p[v].BandName&&"red"===p[v].BandName.toLowerCase()&&(R=v),p[v].BandName&&"green"===p[v].BandName.toLowerCase()&&(h=v),p[v].BandName&&"blue"===p[v].BandName.toLowerCase()&&(g=v);void 0!==R&&void 0!==h&&void 0!==g&&(C=[R,h,g])}2===l&&(C=[0,0,0]),C&&(c=C.map((function(e){return c[e]})));var y={stretchType:b,min:0,max:255,dra:x,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:c,histograms:f,numberOfStandardDeviations:2.5,bandIndex:C};1===l?(i&&(y.colorRamp=i,y.invert=!0),m=new s(y)):m=new o(y)}return m}}}},_getDefaultColormapRenderer:function(e,r){if(r||r.length){var a=[],n=this._ratContainsColormap(e);if(n)var o=this._getRATValueClassNameMap(e);return r.forEach((function(e){var r=o?o[e[0]]:e[0];a.push({color:[e[1],e[2],e[3]],value:e[0],label:n?null!=r?r:"":e[0]})})),new t({colormapInfos:a})}},_ratContainsColormap:function(e){return!(!e||!e.fields)&&e.fields.some((function(e){if(e&&e.name){var n=e.name.toLowerCase();"red"===n&&(r=!0),"green"===n&&(a=!0),"blue"===n&&(t=!0)}return r&&a&&t}));var r,a,t},_getRATValueClassNameMap:function(e){if(!e||!e.fields)return null;var r,a,t={};return e.fields.forEach((function(e){"classname"!==e.name.toLowerCase()&&"class_name"!==e.name.toLowerCase()||(r=e.name),"value"===e.name.toLowerCase()&&(a=e.name)})),e.features.forEach((function(e){var n=e.attributes;t[n[a]]=r?n[r]:n[a]})),t},_getDefaultScientificColorRamp:function(){return{type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]}}}}));
