// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){"use strict";function e(t){return t.toLowerCase().trim()}return(function(){function t(t){if(this.uid="",this._fieldsMap={},t){for(var i=[],r=0,n=t;r<n.length;r++){var s=n[r],o=s&&s.name&&s.name;if(o){var f=e(o);this._fieldsMap[o]=s,this._fieldsMap[f]=s,i.push(f)}}i.sort(),this.uid=i.join(",")}}return t.prototype.destroy=function(){this._fieldsMap={}},t.prototype.has=function(t){return null!=this[t]},t.prototype.get=function(t){return t&&(this._fieldsMap[t]||this._fieldsMap[e(t)])},t.prototype.set=function(t){if(t)for(var i=0,e=t;i<e.length;i++){var r=e[i],n=r&&r.name&&r.name.trim();n&&(this._fieldsMap[n]=r,this._fieldsMap[n.toLowerCase()]=r)}},t}())}));