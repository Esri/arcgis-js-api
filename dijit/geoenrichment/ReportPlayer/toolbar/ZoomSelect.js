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

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/OnDemandSelect","./Select","./ZoomUtil","esri/dijit/geoenrichment/utils/NodeLabelEditor","dojo/i18n!esri/nls/jsapi"],function(e,n,i,t,o,s,r){r=r.geoenrichment.dijit.ReportPlayer.PlayerToolbar;var l=e(i.itemRenderers.DefaultItemRenderer,{createPresentation:function(e,i,t,o){var l=this,a=this.inherited(arguments);if(e.isCustomZoom){a.innerHTML="";var c=n.create("div",{class:"esriGELink",innerHTML:r.customZoom},a),d=new s({numericOnly:!0,onApply:function(e){l.onCustomZoomApplied(e),c.innerHTML=r.customZoom},onCancel:function(){c.innerHTML=r.customZoom}});c.addEventListener("click",function(){d.range={min:10,max:1e3},d.editNodeLabel(c,"")})}else this.selectPresentation(a,i);return a},onCustomZoomApplied:function(e){}});return e(t,{listClass:"esriGEOnDemandSelectUnlimitedTallList esriGEOnDemandSelectSpacedOut",buildRendering:function(){var e=this;this.inherited(arguments),this.itemRenderer=new l({onCustomZoomApplied:function(n){e.set("value",n),e.onChange({value:n}),e.closePopup()}})},postCreate:function(){this.inherited(arguments);var e=o.getOptions().slice();e.push({isCustomZoom:!0,enabled:!1}),this.set("options",e),this.set("value",100)}})});