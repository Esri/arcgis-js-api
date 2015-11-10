define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang","../layerUtils"],function(e,t,i,n,l,a,s,r){var o=t(null,{declaredClass:"esri.layers.ImageParameters",constructor:function(){this.layerDefinitions=[]},bbox:null,extent:null,width:null,height:null,dpi:null,format:null,imageSpatialReference:null,layerOption:null,layerIds:null,transparent:null,timeExtent:null,layerTimeOptions:null,toJson:function(t){this.bbox&&e.deprecated(this.declaredClass+" : Property 'bbox' deprecated. Use property 'extent'.");var i=this.bbox||this.extent;i=i&&t&&i._normalize(!0);var l=this.layerOption,a=i?i.spatialReference.wkid||n.toJson(i.spatialReference.toJson()):null,o=this.imageSpatialReference,u={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:i?i.xmin+","+i.ymin+","+i.xmax+","+i.ymax:null,bboxSR:a,layers:l?l+":"+this.layerIds.join(","):null,imageSR:o?o.wkid||n.toJson(o.toJson()):a};u.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions);var d=this.timeExtent;return u.time=d?d.toJson().join(","):null,u.layerTimeOptions=r._serializeTimeOptions(this.layerTimeOptions),s.filter(u,function(e){return null!==e?!0:void 0})}});return i.mixin(o,{LAYER_OPTION_SHOW:"show",LAYER_OPTION_HIDE:"hide",LAYER_OPTION_INCLUDE:"include",LAYER_OPTION_EXCLUDE:"exclude"}),l("extend-esri")&&i.setObject("layers.ImageParameters",o,a),o});