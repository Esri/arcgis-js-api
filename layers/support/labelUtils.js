// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/string"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var t=new RegExp("__begin__","ig"),i=new RegExp("__end__","ig"),a=new RegExp("^__begin__","i"),s=new RegExp("__end__$","i");r.convertTemplatedStringToArcade=function(e){var r;return e?(r=n.replace(e,(function(e){return'__begin__$feature["'+e+'"]__end__'})),r=a.test(r)?r.replace(a,""):'"'+r,r=(r=s.test(r)?r.replace(s,""):r+'"').replace(t,'" + ').replace(i,' + "')):r='""',r};var _=/^\s*\{([^}]+)\}\s*$/i;r.getSingleFieldTemplatedString=function(e){var r=e.match(_);return r&&r[1].trim()||null};var u=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,c=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,l=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;r.getSingleFieldArcadeExpression=function(e){if(!e)return null;var r=u.exec(e)||c.exec(e);return r?r[1]||r[3]:(r=l.exec(e))?r[2]:null}}));