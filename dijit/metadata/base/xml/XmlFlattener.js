// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./xmlUtil","../../../../kernel"],function(t,e,n,o,a,i){var r=t(null,{constructor:function(t){e.mixin(this,t)},flatten:function(t,e){var n={domIndex:{},domList:[],nNsPfx:0,nsPfxByUri:{},gxePfxByUri:{}};e&&(n.gxePfxByUri=this._makeGxePfxByUri(e));var o={domData:n},a=t.documentElement;this._flattenDom(o,a,"");var i={valuesByPath:n.domIndex,paths:n.domList,prefixesByUri:n.nsPfxByUri};return i},flattenNode:function(t,e){var n={domIndex:{},domList:[],nNsPfx:0,nsPfxByUri:{},gxePfxByUri:e},o={domData:n};return this._flattenDom(o,t,null),n.domIndex},_flattenDom:function(t,e,o){var i=t.domData,r=a.nodeTypes.ELEMENT_NODE,f=this._flattenDomQN(i,e),s=f;null!=o&&(f=o+"/"+s),this._flattenDomValue(i,e,f),n.forEach(e.attributes,function(t){var e=this._flattenDomQN(i,t),n=f+"/@"+e;this._flattenDomValue(i,t,n)},this),n.forEach(e.childNodes,function(e){e.nodeType===r&&this._flattenDom(t,e,f)},this)},_flattenDomQN:function(t,e){var n=e.localName,o=n,a=null,i=e.namespaceURI;return i&&(i in t.gxePfxByUri?a=t.gxePfxByUri[i]:i in t.nsPfxByUri?a=t.nsPfxByUri[i]:(t.nNsPfx++,a="_"+t.nNsPfx,t.nsPfxByUri[i]=a),o=a+":"+n),o},_flattenDomValue:function(t,e,n){var o=this._getDomNodeText(e);n in t.domIndex?t.domIndex[n].push(o):(t.domIndex[n]=[o],t.domList.push(n))},_getDomNodeText:function(t){return a.getNodeText(t)},_makeGxePfxByUri:function(t){var e={};return t&&n.forEach(t.getNamespaces(),function(t){t.prefix&&t.uri&&(e[t.uri]=t.prefix)}),e}});return o("extend-esri")&&e.setObject("dijit.metadata.base.xml.XmlFlattener",r,i),r});