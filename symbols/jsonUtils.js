define(["dojo/_base/lang","dojo/has","../kernel","./SimpleMarkerSymbol","./PictureMarkerSymbol","./SimpleLineSymbol","./CartographicLineSymbol","./SimpleFillSymbol","./PictureFillSymbol","./TextSymbol"],function(e,r,i,n,a,l,s,S,o,t){var c={fromJson:function(e){var r=null;switch(e.type){case"esriSMS":r=new n(e);break;case"esriPMS":r=new a(e);break;case"esriTS":r=new t(e);break;case"esriSLS":r=void 0!==e.cap?new s(e):new l(e);break;case"esriCLS":r=new s(e);break;case"esriSFS":r=new S(e);break;case"esriPFS":r=new o(e)}return r},getShapeDescriptors:function(e){return e&&e.getShapeDescriptors?e.getShapeDescriptors():{defaultShape:null,fill:null,stroke:null}}};return r("extend-esri")&&e.mixin(e.getObject("symbol",!0,i),c),c});