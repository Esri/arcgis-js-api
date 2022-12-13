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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

var profile = (function(){
  var testResourceRe = /^esri\/(.*\/)?tests\//,
    
    jsRe = /\.js$/i,
    onlineFolderRe = /^esri\/arcgisonline\//i,
    mobileFolderRe = /^esri\/mobile\//i,
    discoveryFolderRe = /^esri\/discovery\//i,

    copyOnly = function(filename, mid){
      if (mid.indexOf("/worker-init") > -1) {
        return true;
      }

      var list = {
        "esri/package.json":          1,
        "esri/esri.profile":          1,
        "esri/esri.js":               1,
        "esri/geometry/geometryenginewebworker": 1,
        "esri/workers/requestWorker": 1,
        "esri/workers/mutableWorker": 1,
        "esri/workers/indexWorker":   1,
        "esri/workers/scripts/indexInterface": 1,
        "esri/arcgisonline/config":   1,
        "esri/mobile/config":         1,
        "esri/layers/vectorTiles/core/workers/worker": 1,
        "esri/dijit/geoenrichment/PanoramicViewer/esripv_three": 1,
        "esri/dijit/geoenrichment/PanoramicViewer/esripv_lens": 1
      };
      
      return (mid in list);
    },
    
    legacyModules = {
      "esri/arcgisonline": 1,
      "esri/base": 1,
      "esri/gallery": 1,
      "esri/mobile": 1,
      "esri/arcgismanager": 1,
      "esri/themes/calcite/icons/ie7/ie7": 1,
      "esri/themes/calcite/icons/demo-files/demo": 1
    };

  return {
    resourceTags:{
      test: function(filename, mid){
        return testResourceRe.test(mid) || (mid.search(/\.17$/) !== -1);
      },

      copyOnly: function(filename, mid){
        return copyOnly(filename, mid);
      },

      amd: function(filename, mid){
        return jsRe.test(filename) && !copyOnly(filename, mid) && (
          /^esri\/arcgisonline\/sharing\/dijit\/FeatureLayerQueryResult/i.test(mid) ||
          /^esri\/arcgisonline\/coachmarks\/tours/i.test(mid) || 
          !( 
            (mid in legacyModules) || onlineFolderRe.test(mid) || 
            mobileFolderRe.test(mid) || discoveryFolderRe.test(mid)
           )
        );
      }
    }
  };
}());
