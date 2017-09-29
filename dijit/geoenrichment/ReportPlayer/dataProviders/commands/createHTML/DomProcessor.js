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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

/*
    var ImageLoader = {
        // loads images for the Tapestry NEW widget and substitutes with data URLs
        loadImages: function (nodeCopy) {
            var tapestryImages = dojoQuery(".TapestryNEW_Details_Image", nodeCopy);

            return all(tapestryImages.map(function (tapImage) {
                var codeClass = tapImage["className"].split(" ").filter(function (c) { return c.indexOf("code") == 0; })[0];
                if (!codeClass || !tapImage.children[0])
                    return;

                var url = "esri/dijit/geoenrichment/themes/common/images/tapestry/" + codeClass.replace("code_", "") + ".png";

                return when(ImageInfoUtil.getImageInfo(url), function (imageInfo) {
                    tapImage.children[0].style.backgroundImage = "url(" + imageInfo.dataUrl + ")";
                });
            }));
        }
    };
    */

define(["dojo/promise/all","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/query","dojo/when","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","../supportClasses/HeaderFooterRenderer"],function(e,o,t,n,r,i,a,d,s,c,u){var l={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},processMainNode:function(e,o,t){function a(e){var o=[],t=i(".reportContainerGrid_gridContainerWrapper",e);return t.length>1?(t.forEach(function(e){e.parentNode.removeChild(e)}),t.forEach(function(t){var r=n.toDom(e.outerHTML),a=i(".reportContainerGrid_gridStackContainer",r)[0];a.appendChild(t),o.push(r)})):o.push(e),o}function d(e){e.forEach(function(n,r){u.addHeaderAndFooterToPage({pageNode:n.children[0],headerFooterParams:o,documentOptions:t,pageIndex:r,numPages:e.length})})}function s(e){return c(e.map(function(e){return e.outerHTML}).join(""))}function c(e){return e&&e.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}function h(e){e.forEach(function(e){n.destroy(e)})}function p(){var o=n.toDom(e.outerHTML);l.processNode(o,g);var t=i(".reportContainerGrid_sourceContainer",o)[0];r.set(t,{width:"auto",height:"auto"});var a=i(".reportContainerGrid_mainContainer",o)[0];return r.set(a,{width:"auto",height:"auto"}),f.processTooltips(o),o}var g=[],m=p(),v=a(m);d(v);var j=s(v);return h(v),{domString:j,additionalStyleNodes:g}},processNode:function(e,i){function a(e){return!(d.isHidden(e)||"none"==r.get(e,"display")||t.contains(e,"esriTriStateCheckBoxIcon"))}function c(e,t){t=void 0===t?!0:t;for(var n in l.PROPS_TO_REMOVE)(t||"id"!=n)&&o.remove(e,n)}function u(e){if("svg"!=e.localName){var o=s.getStyle(e.id);if(o&&o.forEach(function(e){i.push(e)}),c(e,!o),!a(e))return void n.destroy(e);if(e.children){for(var t=[],r=0;r<e.children.length;r++)t.push(e.children[r]);for(;t.length;)u(t.shift())}}}var l=this;u(e)}},f={processTooltips:function(e){var o=i(".selectableLegendRootLabel",e);o.forEach(function(e){e.title=e.innerHTML})}},h={getDomString:function(e,o,t){return l.processMainNode(e,o,t)}};return h});