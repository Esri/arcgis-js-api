define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Tabs","../../../../form/iso/AbstractObject","../../../../form/iso/ObjectReference","../../../iso/gmd/dataQuality/ConformanceReport","../../../iso/gmd/dataQuality/Lineage","./Scope","dojo/text!./templates/Quality.html","../../../../../../kernel"],function(e,t,a,o,i,r,d,s,n,m,l,c){var b=e(o,{templateString:l});return a("extend-esri")&&t.setObject("dijit.metadata.types.gemini.gmd.dataQuality.Quality",b,c),b});