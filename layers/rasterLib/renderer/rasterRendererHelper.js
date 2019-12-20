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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../PixelBlock","./RasterColormapRenderer","./RasterUniqueValueRenderer","./RasterRGBRenderer","./RasterStretchColorRampRenderer"],function(e,r,t,a,n,o,i){var s=function(){function e(e){r[e.prototype.rendererName]=e}var r={};return e(a),e(o),e(i),e(n),r}();return{wellKnownRenderers:s,isSupported:function(e){if(!e)return!1;var r=!0,t=e.rendererName;return s[t]||(r=!1),r},create:function(e){if(!e)return null;var r,t,a,n;return e.rendererName?(r=e.rendererName,t=e.rendererArguments):(n=["uniqueValue","rasterStretch","rgb","colormap"].indexOf(e.type),r=["UniqueValue","Stretch","RGB","Colormap"][n],"rasterStretch"===e.type&&e.bandIndex&&e.bandIndex.length>1&&(r="RGB"),t=e),a=s[r],new a(t)},createDefaultRenderer:function(e){if(e&&e.raster){var r=e.raster.rasterInfo,t=e.raster.dataType;if(r){var s=e.raster.rasterFunction,d=["Stretch","Colormap","ContrastAndBrightness"];if(s&&"U8"===r.pixelType&&d.indexOf(s.functionName)>-1)return void(s.renderTexture=!0);if("Processed"!==t||!(e.useWebGL&&s&&s.renderTexture||!e.useWebGL&&"U8"===r.pixelType)){var l,m=r.bandCount,u=r.colormap,c=r.vat,p=r.histograms;p&&0===p.length&&(p=null);var f,v=r.statistics&&r.statistics.map(function(e){return[e.min,e.max,e.mean,e.stddev]}),R=r.keyProperties&&(r.keyProperties.bandProperties||r.keyProperties.BandProperties);if(1===m&&u&&u.length>0)f=new a({colormap:u||c});else if(1===m&&c&&c.features&&c.features.length>0)f=new n({});else{var g=0,C=!1;t||!e.raster||!e.raster.tileInfo||void 0!==e.raster.tileInfo.tileType&&"Map"!==e.raster.tileInfo.tileType?"U8"===r.pixelType&&"Processed"===t?(g=5,v=v||[[0,255,0,0],[0,255,0,0],[0,255,0,0]],C=!1):"U8"===r.pixelType||"Elevation"===t?(g=5,C=!v):"Scientific"===t?(g=5,C=!v,l=this._getDefaultScientificColorRamp()):p&&p.length>0?(g=6,C=!1):v?(g=5,C=!1):(g=6,C=!0):(v=[[0,255,0,0],[0,255,0,0],[0,255,0,0]],g=5,C=!1),v||(g=5,C=!0);var h,x,y,b,B;if(m>=3&&R&&!(e.bandIds||e.raster&&e.raster.imageServiceParams&&e.raster.imageServiceParams.bandIds)){for(x=0;x<R.length;x++)R[x].BandName&&"red"===R[x].BandName.toLowerCase()&&(y=x),R[x].BandName&&"green"===R[x].BandName.toLowerCase()&&(b=x),R[x].BandName&&"blue"===R[x].BandName.toLowerCase()&&(B=x);void 0!==y&&void 0!==b&&void 0!==B&&(h=[y,b,B])}var P={stretchType:g,min:0,max:255,dra:C,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:v,histograms:p,numberOfStandardDeviations:2.5,bandIndex:h};1===m?(l&&(P.colorRamp=l,P.invert=!0),f=new i(P)):f=new o(P)}return f}}}},_getDefaultScientificColorRamp:function(){return{type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]}}}});