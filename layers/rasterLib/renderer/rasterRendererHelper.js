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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../PixelBlock","./RasterColormapRenderer","./RasterUniqueValueRenderer","./RasterRGBRenderer","./RasterStretchColorRampRenderer"],function(e,r,t,a,n,o,i){var s=function(){function e(e){r[e.prototype.rendererName]=e}var r={};return e(a),e(o),e(i),e(n),r}();return{wellKnownRenderers:s,isSupported:function(e){if(!e)return!1;var r=!0,t=e.rendererName;return s[t]||(r=!1),r},create:function(e){if(!e)return null;var r,t,a,n;return e.rendererName?(r=e.rendererName,t=e.rendererArguments):(n=["uniqueValue","rasterStretch","rgb","colormap"].indexOf(e.type),r=["UniqueValue","Stretch","RGB","Colormap"][n],t=e),a=s[r],new a(t)},createDefaultRenderer:function(e){if(e&&e.raster){var r=e.raster.rasterInfo,t=e.raster.dataType;if(r){var s=e.raster.rasterFunction,l=["Stretch","Colormap","ContrastAndBrightness"];if(s&&"U8"===r.pixelType&&l.indexOf(s.functionName)>-1)return void(s.renderTexture=!0);if("Processed"!==t||!(e.useWebGL&&s&&s.renderTexture||!e.useWebGL&&"U8"===r.pixelType)){var d,m=r.bandCount,u=r.colormap,c=r.vat,f=r.histograms;f&&0===f.length&&(f=null);var p,v=r.statistics&&r.statistics.map(function(e){return[e.min,e.max,e.mean,e.stddev]}),C=r.keyProperties&&(r.keyProperties.bandProperties||r.keyProperties.BandProperties);if(1===m&&u&&u.length>0)p=new a({colormap:u||c});else if(1===m&&c&&c.features&&c.features.length>0)p=new n({});else{var R=0,g=!1;t||!e.raster||!e.raster.tileInfo||void 0!==e.raster.tileInfo.tileType&&"Map"!==e.raster.tileInfo.tileType?"U8"===r.pixelType&&"Processed"===t?(R=5,v=v||[[0,255,0,0],[0,255,0,0],[0,255,0,0]],g=!1):"U8"===r.pixelType||"Elevation"===t?(R=5,g=!v):"Scientific"===t?(R=5,g=!v,d=this._getDefaultScientificColorRamp()):f&&f.length>0?(R=6,g=!1):v?(R=5,g=!1):(R=6,g=!0):(v=[[0,255,0,0],[0,255,0,0],[0,255,0,0]],R=5,g=!1),v||(R=5,g=!0);var h,y,x,b,P;if(m>=3&&C&&!(e.bandIds||e.raster&&e.raster.imageServiceParams&&e.raster.imageServiceParams.bandIds)){for(y=0;y<C.length;y++)C[y].BandName&&"red"===C[y].BandName.toLowerCase()&&(x=y),C[y].BandName&&"green"===C[y].BandName.toLowerCase()&&(b=y),C[y].BandName&&"blue"===C[y].BandName.toLowerCase()&&(P=y);void 0!==x&&void 0!==b&&void 0!==P&&(h=[x,b,P])}var B={stretchType:R,min:0,max:255,dra:g,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:v,histograms:f,numberOfStandardDeviations:2.5,bandIndex:h};1===m?(d&&(B.colorRamp=d,B.invert=!0),p=new i(B)):p=new o(B)}return p}}}},_getDefaultScientificColorRamp:function(){return{type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]}}}});