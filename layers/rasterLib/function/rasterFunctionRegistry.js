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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../rasterLib/function/AspectFunction","../../rasterLib/function/BandArithmeticFunction","../../rasterLib/function/ColormapFunction","../../rasterLib/function/CompositeBandFunction","../../rasterLib/function/ContrastBrightnessFunction","../../rasterLib/function/ConvolutionFunction","../../rasterLib/function/ExtractBandFunction","../../rasterLib/function/HillshadeFunction","../../rasterLib/function/LocalFunction","../../rasterLib/function/MaskFunction","../../rasterLib/function/NDVIFunction","../../rasterLib/function/SlopeFunction","../../rasterLib/function/StretchFunction","../../rasterLib/function/RemapFunction","../../rasterLib/function/IdentityFunction","../../rasterLib/function/ResampleFunction"],(function(n,t,o,i,r,u,c,e,a,s,f,p,b,L,F,d,l,m){return function(){var n={},t={},g={};function y(o){o.prototype.supportWebGL&&(t[o.prototype.functionName]=o),o.prototype.support2D&&(n[o.prototype.functionName]=o),g[o.prototype.functionName]=o}return y(o),y(i),y(r),y(u),y(c),y(e),y(a),y(s),y(f),y(p),y(b),y(L),y(F),y(d),y(l),y(m),{cpu:n,gpu:t,functions:g,register:y,getFunction:function(n){return g[n]},support:function(o,i){return!!("gpu"===i?t:"cpu"===i?n:g)[o]}}}()}));