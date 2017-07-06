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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/fx","dojo/dom-class","dojo/dom-style","dojo/has","./geoExtentUtil","../../base/Templated","dojo/text!./templates/GeoExtentView.html","dojo/i18n!../../nls/i18nBase","../../../../map","../../../../geometry/Extent","../../../../geometry/webMercatorUtils","../../../../kernel"],function(t,i,e,n,a,o,s,r,h,l,d,m,x,u){var c=t([r],{_fitExtent:!1,_initialExtent:null,_interval:null,_map:null,_wasInitialized:!1,gxeDocument:null,i18nBase:l,templateString:h,xmin:null,ymin:null,xmax:null,ymax:null,postCreate:function(){if(this.inherited(arguments),a.set(this.mapNode,"opacity",0),this._initialExtent=s.makeGeographicExtent(this.xmin,this.ymin,this.xmax,this.ymax),!this._initialExtent)return void a.set(this.domNode,"display","none");var t=null,e=this.domNode;t=this._interval=setInterval(i.hitch(this,function(){this._wasInitialized||0!==e.offsetHeight&&(clearInterval(t),this._wasInitialized=!0,this.initialize())}),500)},destroyRecursive:function(){null!==this._interval&&clearInterval(this._interval),this._map&&this._map.destroy(),this._map=null,this.inherited(arguments)},initialize:function(){if(this.gxeDocument&&this.gxeDocument.gxeContext){var t=this.gxeDocument.gxeContext,e=this.id+"_map",n={autoResize:!1,wrapAround180:!1,slider:!1,logo:!0,showAttribution:!0};t.wrapAround180&&(n.wrapAround180=!0),t.showMapLogo||(n.logo=!1),t.showMapAttribution||(n.showAttribution=!1),t.basemap?n.basemap=t.basemap:n.basemap="streets";var a=this._map=new d(e,n);this.own(a.on("load",i.hitch(this,function(){var t=null;this._initialExtent&&(t=this._asWebMercatorExtent(this._initialExtent,!0),a.setExtent(t,this._fitExtent).then(i.hitch(this,function(){this._addGraphic(this._asWebMercatorExtent(this._initialExtent,!1)),this._fadeIn()})))})))}},_addGraphic:function(t){this._map&&t&&s.addGraphic(this._map,t,!0)},_asGeographicExtent:function(t){return x.webMercatorToGeographic(t)},_asWebMercatorExtent:function(t,i){var e=t;return i&&e.xmin>=-170&&e.xmax<=170&&e.ymin>=-80&&e.ymax<=80&&(e=e.expand(1.05),this._fitExtent=!0),x.geographicToWebMercator(e)},_fadeIn:function(){e.fadeIn({node:this.mapNode,onEnd:function(){}}).play()}});return o("extend-esri")&&i.setObject("dijit.metadata.form.tools.GeoExtentView",c,u),c});