define(["../process/SpatialIndex","dojo/Deferred"],function(a,e){return{add:function(n,t){if(t=t||{},n.spatialIndex)return n.spatialIndex;if(!("spatialIndex"in t)){var d=new e;t.autostart=!1,n.spatialIndex=new a(t);var i=n.spatialIndex;return n.declaredClass.indexOf("Map")>-1?i.setMap(n):i.addLayer(n),i.on("start",function(){d.resolve(i)}),i.start(),d}return t.spatialIndex!==!1?(n.spatialIndex=t.spatialIndex,n.spatialIndex):void 0},remove:function(a){var e=a.spatialIndex;e&&(a.declaredClass.indexOf("Map")>-1?e.unsetMap():e.removeLayer(a),a.spatialIndex=void 0)}}});