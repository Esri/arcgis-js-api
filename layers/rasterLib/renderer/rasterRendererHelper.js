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

define(["dojo/_base/declare","dojo/_base/lang","../../PixelBlock","./RasterColormapRenderer","./RasterUniqueValueRenderer","./RasterRGBRenderer","./RasterStretchColorRampRenderer"],(function(e,r,t,a,n,o,i){var s=function(){var e={};function r(r){e[r.prototype.rendererName]=r}return r(a),r(o),r(i),r(n),e}();return{wellKnownRenderers:s,isSupported:function(e){if(!e)return!1;var r=!0,t=e.rendererName;return s[t]||(r=!1),r},create:function(e){return e?(e.rendererName?(r=e.rendererName,t=e.rendererArguments):(r=["UniqueValue","Stretch","RGB","Colormap"][["uniqueValue","rasterStretch","rgb","colormap"].indexOf(e.type)],"rasterStretch"===e.type&&e.bandIndex&&e.bandIndex.length>1&&(r="RGB"),t=e),new(0,s[r])(t)):null;var r,t},createDefaultRenderer:function(e){if(e&&e.raster){var r=e.raster.rasterInfo,t=e.raster.dataType;if(r){var s=e.raster.rasterFunction;if(s&&"U8"===r.pixelType&&["Stretch","Colormap","ContrastAndBrightness"].indexOf(s.functionName)>-1)s.renderTexture=!0;else if("Processed"!==t||!(e.useWebGL&&s&&s.renderTexture||!e.useWebGL&&"U8"===r.pixelType)){var l,d=r.bandCount,m=r.colormap,u=r.vat,c=r.histograms;c&&0===c.length&&(c=null);var p,f=r.statistics&&r.statistics.map((function(e){return[e.min,e.max,e.mean,e.stddev]})),v=r.keyProperties&&(r.keyProperties.bandProperties||r.keyProperties.BandProperties);if(1===d&&m&&m.length>0)p=new a({colormap:m||u});else if(1===d&&u&&u.features&&u.features.length>0)p=new n({});else{var R,g,C,h,x,y=0,b=!1;if(t||!e.raster||!e.raster.tileInfo||void 0!==e.raster.tileInfo.tileType&&"Map"!==e.raster.tileInfo.tileType?"U8"===r.pixelType&&"Processed"===t?(y=5,f=f||[[0,255,0,0],[0,255,0,0],[0,255,0,0]],b=!1):"U8"===r.pixelType||"Elevation"===t?(y=5,b=!f):"Scientific"===t?(y=5,b=!f,l=this._getDefaultScientificColorRamp()):c&&c.length>0?(y=6,b=!1):f?(y=5,b=!1):(y=6,b=!0):(f=[[0,255,0,0],[0,255,0,0],[0,255,0,0]],y=5,b=!1),f||(y=5,b=!0),d>=3&&v&&!(e.bandIds||e.raster&&e.raster.imageServiceParams&&e.raster.imageServiceParams.bandIds)){for(g=0;g<v.length;g++)v[g].BandName&&"red"===v[g].BandName.toLowerCase()&&(C=g),v[g].BandName&&"green"===v[g].BandName.toLowerCase()&&(h=g),v[g].BandName&&"blue"===v[g].BandName.toLowerCase()&&(x=g);void 0!==C&&void 0!==h&&void 0!==x&&(R=[C,h,x])}var B={stretchType:y,min:0,max:255,dra:b,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:f,histograms:c,numberOfStandardDeviations:2.5,bandIndex:R};1===d?(l&&(B.colorRamp=l,B.invert=!0),p=new i(B)):p=new o(B)}return p}}}},_getDefaultScientificColorRamp:function(){return{type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]}}}}));