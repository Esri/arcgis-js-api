define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Tabs","./DataRepresentation","./ResourceClassification","./ResourceExtent","./ResourceLanguage","dojo/text!./templates/DataResourceTab.html","../../../../../../kernel"],function(e,t,a,o,s,i,r,n,c,d,u){var b=e(o,{templateString:d});return a("extend-esri")&&t.setObject("dijit.metadata.types.iso.gmd.identification.DataResourceTab",b,u),b});