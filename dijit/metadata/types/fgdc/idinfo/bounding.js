define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/InputNumber","../../../form/fgdc/GeoExtentTool","dojo/text!./templates/bounding.html","../../../../../kernel"],function(e,t,o,n,d,r,a,i,m){var s=e(n,{templateString:i});return o("extend-esri")&&t.setObject("dijit.metadata.types.fgdc.idinfo.bounding",s,m),s});