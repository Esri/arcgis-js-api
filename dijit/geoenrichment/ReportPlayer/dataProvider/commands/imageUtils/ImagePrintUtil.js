// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],(function(e,n,t,i,r,o){var u={},c=e(null,{_printNode:null,setUpDocument:function(){return this._printNode=t.create("div",{class:"esriGEBehindScreen"},document.body)},unsetDocument:function(){t.destroy(this._printNode)}});return u.printImages=function(e){var t=[],u=new c,s=u.setUpDocument();return o.executeFunctions(e.svgStrings.map((function(o){return o=o.replace(/&nbsp;|&#160;/g," "),function(){s.innerHTML=o;var u=s.children[0],c=e.scale||1;i.set(u,"width",i.get(u,"width")*c+"px"),i.set(u,"height",i.get(u,"height")*c+"px");var d=i.get(u,"width"),a=i.get(u,"height");return r.delay().then((function(){return n(e.nodeToCanvasFunc(s,d,a),(function(n){var i=n.toDataURL("image/png");t.push(i),e.onRenderImage&&e.onRenderImage(t.length-1)}))}))}})),0).then((function(){return u.unsetDocument(),t}))},u}));