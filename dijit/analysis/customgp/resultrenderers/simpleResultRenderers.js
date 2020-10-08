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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/html","../BaseResultRenderer","./FeatureSetRenderer","./RecordSetRenderer","./ResultImageLayerRenderer"],(function(e,r,t,s,n,i){var d={};return d.UnsupportRenderer=e(t,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-unsupport",postCreate:function(){this.inherited(arguments),r.setAttr(this.domNode,"innerHTML",this.message)}}),d.SimpleResultRenderer=e(t,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-simple",postCreate:function(){this.inherited(arguments),r.setAttr(this.domNode,"innerHTML",this.message)}}),d.ErrorResultRenderer=e(t,{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-error",postCreate:function(){this.inherited(arguments),r.setAttr(this.domNode,"innerHTML",this.message)}}),d.RecordSetTable=n,d.DrawResultFeatureSet=s,d.AddResultImageLayer=i,d}));