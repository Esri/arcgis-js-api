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

define(["esri/dijit/geoenrichment/config","esri/dijit/geoenrichment/utils/ArrayUtil"],function(e,t){var l={};return l.getDefaultLevels=function(){var t=e.levels.slice();return t.push(e.highestLevel),t},l.getLevels=function(e){var n=e.levels&&e.levels.length?e.levels:l.getDefaultLevels();return t.removeDuplicates(n)},l.getSubLevels=function(e){var t=l.getLevels(e);return t.pop(),t},l.getHighestLevel=function(e){var t=l.getLevels(e);return t[t.length-1]},l.setLevels=function(e,n){n=t.removeDuplicates(n||[]),e.levels=n.length?n:l.getDefaultLevels()},l});