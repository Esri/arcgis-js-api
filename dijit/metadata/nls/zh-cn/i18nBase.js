// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define({general:{cancel:"取消",close:"关闭",none:"无",ok:"确定",other:"其他",stamp:"戳",now:"当前时间",choose:"选择一项:"},editor:{noMetadata:"此项目无元数据。",xmlViewOnly:"编辑器不支持与该项目关联的元数据类型。元数据必须为 ArcGIS 格式。",editorDialog:{caption:"元数据",captionPattern:"{title} 的元数据"},primaryToolbar:{view:"查看",viewXml:"查看 XML",edit:"编辑",initializing:"正在加载...",startingEditor:"正在启动编辑器...",loadingDocument:"正在加载文档...",updatingDocument:"正在更新文档...",generatingView:"正在生成视图...",errors:{errorGeneratingView:"生成视图时出错。",errorLoadingDocument:"加载文档时出错。"}},changesNotSaved:{prompt:"文档具有尚未保存的更改。",dialogTitle:"关闭元数据编辑器",closeButton:"关闭"},download:{caption:"下载",dialogTitle:"下载",prompt:"单击此处下载文件。"},load:{caption:"打开",dialogTitle:"打开",typeTab:"新建文档",fileTab:"打开文件",templateTab:"模板",itemTab:"您的项目",filePrompt:"选择本地 ArcGIS 元数据 XML 文件。元数据必须为 ArcGIS 格式。",templatePrompt:"创建元数据",pullItem:"使用项目详细信息填充元数据。",importWarning:"所选文件未采用 ArcGIS 格式。上传的元数据必须为 ArcGIS 格式。",loading:"正在加载...",noMetadata:"可通过选择以下选项之一为该项目创建元数据。",unrecognizedMetadata:"编辑器不支持与该项目关联的元数据类型。受支持的元数据可通过选择以下选项之一创建。",errorLoading:"加载时出错。",warnings:{badFile:"无法加载所选文件。",notAnXml:"所选文件不是 XML 文件。",notSupported:"此类型文件不受支持。"},portalCaption:"覆盖"},save:{caption:"保存",dialogTitle:"保存元数据",working:"正在保存元数据...",errorSaving:"发生错误，您的元数据未保存。",saveDialog:{pushCaption:"将更改应用到您的项目"}},saveAndClose:{caption:"保存并关闭"},saveDraft:{caption:"下载",dialogTitle:"下载"},validate:{caption:"验证",dialogTitle:"验证",docIsValid:"文档有效。"},viewHtml:{caption:"查看",dialogTitle:"查看元数据",savePrompt:"您的文档更改尚未保存。 查看元数据时，必须保存所有更改，才能对其进行查看。",saveButton:"保存并查看",portalNone:"尚未创作基于标准的元数据。 必须保存元数据，才能对其进行查看。"},del:{caption:"删除",dialogTitle:"删除元数据",prompt:"是否确定要删除此元数据?",working:"正在删除元数据...",errorDeleting:"发生错误，您的元数据未删除。",portalNone:"无可删除的元数据文档。 尚未创作基于标准的元数据。",portalPrompt:"将删除元数据文档，并将此项目的元数据重置为项目信息，例如标题、描述等。",portalPrompt2:"该操作将删除基于标准的元数据。 是否确定要删除此元数据?",portalButton:"删除并关闭"},transform:{caption:"转换",dialogTitle:"转换至",prompt:"",working:"正在转换...",errorTransforming:"转换文档时出错。"},errorDialog:{dialogTitle:"存在一个错误"}},arcgis:{portal:{metadataButton:{caption:"元数据"}}},calendar:{button:"日历...",title:"日历"},geoExtent:{button:"设置地理范围...",title:"地理范围",navigate:"导航",draw:"绘制一个矩形",drawHint:"按下鼠标以开始绘制并释放以完成绘制。"},hints:{date:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd)",dateTime:"(yyyy-mm-dd Thh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd 或 yyyy-mm-dd Thh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(使用逗号或新行分隔)",fgdcDate:"(yyyy 或 yyyy-mm 或 yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(请输入一个整数)",latitude:"(十进制度)",longitude:"(十进制度)",number:"(请输入一个数字)",numberGreaterThanZero:"(请输入一个大于零的数)"},isoTopicCategoryCode:{caption:"主题类别",boundaries:"行政管理边界",farming:"农林牧渔",climatologyMeteorologyAtmosphere:"大气与气候",biota:"生物与生态",economy:"商业与经济",planningCadastre:"地籍",society:"文化、社会与人口统计",elevation:"高程与衍生产品",environment:"环境与资源保护",structure:"设施与建筑",geoscientificInformation:"地质与地球物理",health:"人类健康与疾病",imageryBaseMapsEarthCover:"影像与底图",inlandWaters:"内陆水资源",location:"位置与大地网",intelligenceMilitary:"军事",oceans:"海洋与海湾",transportation:"交通网络",utilitiesCommunication:"公用事业和通信"},multiplicity:{moveElementDown:"下移章节",moveElementUp:"上移章节",removeElement:"移除章节",repeatElement:"重复章节"},optionalNode:{switchTip:"包括或排除此章节。"},serviceTypes:{featureService:"要素服务",mapService:"地图服务",imageService:"影像服务",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"确定",empty:"需要值。",date:"值必须是日期。",integer:"值必须是整数。",number:"值必须是数字。",other:"无效值。"},validationPane:{clearMessages:"清除消息",prompt:"(单击下方的每条消息，并为指定字段提供必要信息)"}});