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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../../WKIDUnitConversion","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./surfaceUtils"],(function(t,e,i,s,r,n,a,u){return t([i,a],{declaredClass:"esri.layers.rasterLib.function.HillshadeFunction",functionName:"Hillshade",supportWebGL:!0,support2D:!0,renderTexture:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({hillshadeType:0,altitude:45,azimuth:315,zFactor:1,slopeType:1,psPower:.664,psFactor:.024,raster:null},t),this._azimuths=[315,270,225,360,180,0],this._altitudes=[60,60,60,60,60,90],this._weights=[3,5,3,2,1,4];var e=this._weights.reduce((function(t,e){return t+e}));this._weights=this._weights.map((function(t){return t/e}))},bind:function(t){var i=this.getSourceRasterInfo(t);return i.raster?(this.rasterInfo=e.mixin(i.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:[{min:0,max:255}],histogram:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to hillshade function is invalid.")},read2D:function(t){this._performance.start();var e=t.raster,i=e.extent.spatialReference.wkid&&null==s[e.extent.spatialReference.wkid],r=u.hillshade(e,{altitude:this.functionArguments.altitude,azimuth:this.functionArguments.azimuth,zFactor:this.functionArguments.zFactor,psPower:this.functionArguments.psPower,psFactor:this.functionArguments.psFactor,hillshadeType:this.functionArguments.hillshadeType,slopeType:this.functionArguments.slopeType,isGCS:i});return this._addPerformanceMetric(this._performance.elapsed()),r},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:n.hillshade,fragmentName:"Hillshade"});var e=this._setupTextureData(t.raster),i=this.bindFrameBuffer(),r=this.gl,a=r.drawingBufferWidth,u=r.drawingBufferHeight,h=e.extent,o=(h.xmax-h.xmin)/a,l=(h.ymax-h.ymin)/u,c=this.functionArguments.altitude,p=this.functionArguments.azimuth,f=this.functionArguments.zFactor;1===this.functionArguments.hillshadeType&&(f*=2);var d=f/(8*o),m=f/(8*l);f>.001&&h.spatialReference.wkid&&null==s[h.spatialReference.wkid]&&(d/=111e3,m/=111e3);var _=this.functionArguments.psPower,g=this.functionArguments.psFactor;if(3===this.functionArguments.slopeType)if(h.spatialReference.wkid&&null==s[h.spatialReference.wkid]){var x=111e3*o,w=111e3*l;d=(f+Math.pow(x,_)*g)/(8*x),m=(f+Math.pow(w,_)*g)/(8*w)}else d=(f+Math.pow(o,_)*g)/(8*o),m=(f+Math.pow(l,_)*g)/(8*l);var y,A,M=(90-c)*Math.PI/180,T=Math.cos(M),F=(360-p+90)*Math.PI/180,P=Math.sin(M)*Math.cos(F),z=Math.sin(M)*Math.sin(F),k=new Array(6),v=Array(6),I=Array(6),b=this._weights;if(1===this.functionArguments.hillshadeType)for(y=this._azimuths.length,A=0;A<y;A++)c=this._altitudes[A],p=this._azimuths[A],M=(90-c)*Math.PI/180,T=Math.cos(M),F=(360-p+90)*Math.PI/180,P=Math.sin(M)*Math.cos(F),z=Math.sin(M)*Math.sin(F),k[A]=T,v[A]=P,I[A]=z;else k[0]=T,v[0]=P,I[0]=z;k=k.map((function(t){return parseFloat(t)})),v=v.map((function(t){return parseFloat(t)})),I=I.map((function(t){return parseFloat(t)}));var R=t&&t.raster&&t.raster.pixelBlock?[1/t.raster.pixelBlock.width,1/t.raster.pixelBlock.height]:[1/a,1/u];return this._setUniforms({u_cellSize:[o,l],u_zfactor:f,u_xFactor:d,u_yFactor:m,u_sinZcosA:P,u_sinZsinA:z,u_cosZ:T,u_sinZcosAs:v,u_sinZsinAs:I,u_cosZs:k,u_weights:b,u_hillshadeType:this.functionArguments.hillshadeType,u_resolution:R,u_scaled:!this.renderTexture}),this._bindTexture(e.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,texture:i.texture}}})}));