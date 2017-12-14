// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,r,e){return t(null,{_styles:null,_stylesArray:null,constructor:function(t){this._styles={Default:{color:"#4C4C4C",backgroundColor:"#FFFFFF"}},r.mixin(this._styles,t),this._stylesArray=[];for(var e in this._styles)this._stylesArray.push(e)},getStyle:function(t){return this._styles[t]},getStylesArray:function(){return this._stylesArray},tryApplyStyle:function(t,r,e){var s=this.getStyle(r);if(s)for(var n in s)e&&void 0!==t[n]||(t[n]=s[n])},findDefaultStyle:function(t){var r,s=this.getStylesArray(),n=this;return s.some(function(s){var i=n.getStyle(s);for(var l in i)if(!t[l]||!e.compareColors(t[l],i[l]))return!1;return r=s,!0}),r}})});