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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define({CI_OnLineFunctionCode:{"001":"下载","002":"信息","003":"离线访问","004":"排序","005":"搜索","006":"上传","007":"Web 服务","008":"电子邮件服务","009":"浏览","010":"文件访问","011":"Web 地图服务"},CI_PresentationFormCode:{"001":"数字文档","002":"硬拷贝文档","003":"数字图像","004":"硬拷贝图像","005":"数字地图","006":"硬拷贝地图","007":"数字模型","008":"硬拷贝模型","009":"数字专用标准","010":"硬拷贝专用标准","011":"数字表","012":"硬拷贝表","013":"数字视频","014":"硬拷贝视频","015":"数字音频","016":"硬拷贝音频","017":"数字多媒体","018":"硬拷贝多媒体","019":"数字图表","020":"硬拷贝图表"},CI_RoleCode:{"001":"资源提供商","002":"管理人","003":"所有者","004":"用户","005":"经销商","006":"创作者","007":"联系方","008":"首席调查员","009":"处理者","010":"发布者","011":"作者","012":"协作者","013":"编辑者","014":"媒介","015":"权利持有人"},DQ_EvaluationMethodTypeCode:{"001":"直接内部","002":"直接外部","003":"间接"},DS_AssociationTypeCode:{"001":"交叉引用","002":"大作业引用","003":"无缝数据库的一部分","004":"源","005":"立体像对","006":"组成"},DS_InitiativeTypeCode:{"001":"活动","002":"集合","003":"练习","004":"实验","005":"调查","006":"任务","007":"传感器","008":"操作","009":"平台","010":"处理","011":"计划","012":"项目","013":"研究","014":"工作","015":"试用"},MD_CellGeometryCode:{"001":"点","002":"面","003":"体素"},MD_CharacterSetCode:{"001":"ucs2","002":"ucs4","003":"utf7","004":"utf8","005":"utf16","006":"8859part1","007":"8859part2","008":"8859part3","009":"8859part4","010":"8859part5","011":"8859part6","012":"8859part7","013":"8859part8","014":"8859part9","015":"8859part10","016":"8859part11","018":"8859part13","019":"8859part14","020":"8859part15","021":"8859part16","022":"jis","023":"shiftJIS","024":"eucJP","025":"usAscii","026":"ebcdic","027":"eucKR","028":"big5","029":"GB2312"},MD_ClassificationCode:{"001":"未分类","002":"受限","003":"秘密","004":"机密","005":"绝密","006":"敏感","007":"仅限办公用途"},MD_CoverageContentTypeCode:{"001":"图像","002":"专题分类","003":"实际测量值"},MD_DimensionNameTypeCode:{"001":"行(y 轴)","002":"列(x 轴)","003":"垂直(z 轴)","004":"轨迹","005":"交叉追踪","006":"折线","007":"示例","008":"时间"},MD_GeometricObjectTypeCode:{"001":"复数型","002":"复合","003":"曲线","004":"点","005":"立方体","006":"表面"},MD_ImagingConditionCode:{"001":"模糊图像","002":"云","003":"降低斜度","004":"雾","005":"浓烟或粉尘","006":"夜晚","007":"下雨","008":"半暗","009":"阴影","010":"下雪","011":"Terrain 掩膜"},MD_MaintenanceFrequenceCode:{998:"未知","001":"持续","002":"每天","003":"每周","004":"每两周","005":"每月","006":"季度","007":"一年两次","008":"每年","009":"根据需要","010":"不定期","011":"未计划","012":"未知","013":"半月"},MD_MediumFormatCode:{"001":"CPIO","002":"TAR","003":"High Sierra","004":"ISO 9660","005":"ISO 9660 Rock Ridge","006":"ISO 9660 Apple HFS","007":"UDF"},MD_MediumNameCode:{"001":"CD-ROM","002":"DVD","003":"DVD-ROM","004":"3.5 英寸软盘","005":"5.25 英寸软盘","006":"7 轨磁带","007":"9 轨磁带","008":"3480 磁带机","009":"3490 磁带机","010":"3580 磁带机","011":"4mm 盒式磁带","012":"8mm 盒式磁带","013":"1.25 英寸盒式磁带","014":"数字线性磁带","015":"在线","016":"卫星链路","017":"电话链路","018":"硬拷贝","019":"重氮聚酯 08","020":"微缩胶片","021":"微缩胶卷 240","022":"微缩胶卷 35","023":"微缩胶卷 70","024":"普通微缩胶卷","025":"微缩胶卷","026":"底片","027":"纸张","028":"晒图纸","029":"照片","030":"追踪纸张","031":"硬盘","032":"USB 闪存驱动器"},MD_PixelOrientationCode:{"001":"中心","002":"左下角","003":"右下角","004":"右上","005":"左上角"},MD_ProgressCode:{"001":"已完成","002":"历史归档","003":"废弃","004":"正在进行","005":"已计划","006":"必需","007":"研发中","008":"已提议"},MD_RestrictionCode:{"001":"版权所有","002":"专利","003":"专利申请中","004":"商标","005":"许可","006":"知识产权","007":"受限","008":"其他约束条件","009":"无限制许可","010":"最终用户许可","011":"经销商许可","012":"隐私策略","013":"法律规定","014":"机密","015":"敏感"},MD_Metadata_MD_ScopeCode:{"001":"属性","002":"属性类型","003":"采集硬件","004":"采集会话","005":"数据集","006":"系列","007":"非地理数据集","008":"尺寸组","009":"要素","010":"要素类型","011":"属性类型","012":"字段会话","013":"软件","014":"服务","015":"模型","016":"切片","017":"主动权","018":"立体像对","019":"传感器","020":"平台系列","021":"传感器系列","022":"生产系列","023":"传输系列","024":"其他系列"},MD_ScopeCode:{"001":"属性","002":"属性类型","003":"采集硬件","004":"采集会话","005":"数据集","006":"系列","007":"非地理数据集","008":"尺寸组","009":"要素","010":"要素类型","011":"属性类型","012":"字段会话","013":"软件","014":"服务","015":"模型","016":"切片","017":"主动权","018":"立体像对","019":"传感器","020":"平台系列","021":"传感器系列","022":"生产系列","023":"传输系列","024":"其他系列"},MD_SpatialRepresentationTypeCode:{"001":"矢量","002":"格网","003":"文本表","004":"Tin","005":"立体模型","006":"视频"},MD_TopicCategoryCode:{"001":"农业","002":"生物群","003":"边界","004":"大气科学","005":"经济","006":"高程","007":"环境","008":"地球科学","009":"健康","010":"影像与底图","011":"军事与情报","012":"内陆水域","013":"位置","014":"海洋图","015":"规划和地籍","016":"社会","017":"建筑物","018":"交通运输","019":"公用事业和通信"},MD_TopologyLevelCode:{"001":"仅限几何","002":"1D 拓扑","003":"平面图","004":"完整平面图","005":"表面图","006":"完整表面图","007":"3D 拓扑","008":"完整 3D 拓扑","009":"抽象"},SV_CouplingType:{"001":"松散","002":"混合","003":"紧密"},AddressType:{postal:"邮政地址",physical:"实际地址",both:"两者"},PresentationForm:{atlas:"地图集",audio:"音频",diagram:"逻辑示意图",document:"文档",globe:"Globe",map:"地图",model:"模型","multimedia presentation":"多媒体演示",profile:"配置文件","raster digital data":"栅格数字化数据","remote-sensing image":"遥感影像",section:"部分",spreadsheet:"电子表格","tabular digital data":"图表数字数据","vector digital data":"矢量数字数据",video:"视频",view:"视图"},DQ_ElementDimension:{horizontal:"水平对齐",vertical:"垂直对齐"},DQ_ElementType:{DQCompComm:"完整性调试",DQCompOm:"完整性省略",DQConcConsis:"概念一致性",DQDomConsis:"属性域一致性",DQFormConsis:"格式一致性",DQTopConsis:"拓扑一致性",DQAbsExtPosAcc:"绝对外部定位精度",DQGridDataPosAcc:"格网化数据定位精度",DQRelIntPosAcc:"相对内部定位精度",DQThemClassCor:"专题分类正确性",DQNonQuanAttAcc:"非定量属性精度",DQQuanAttAcc:"定量属性精度",DQAccTimeMeas:"时间测量精度",DQTempConsis:"时间一致性",DQTempValid:"时间有效性"},IMS_ContentType:{"001":"实时数据和地图","002":"可下载数据","003":"离线数据","004":"静态地图图像","005":"其他文档","006":"应用程序","007":"地理服务","008":"交换中心","009":"地图文件","010":"地理活动"},LI_SourceType:{used:"已使用",produced:"生成的"},RS_Dimension:{horizontal:"水平对齐",vertical:"垂直对齐",temporal:"时间"},CountryCode:{AF:"阿富汗",AX:"奥兰群岛",AL:"阿尔巴尼亚",DZ:"阿尔及利亚",AS:"美属萨摩亚",AD:"安道尔",AO:"安哥拉",AI:"安圭拉岛",AQ:"南极洲",AG:"安提瓜和巴布达",AR:"阿根廷",AM:"亚美尼亚",AW:"阿鲁巴",AU:"澳大利亚",AT:"奥地利",AZ:"阿塞拜疆",BS:"巴哈马",BH:"巴林",BD:"孟加拉国",BB:"巴巴多斯",BY:"白俄罗斯",BE:"比利时",BZ:"伯利兹",BJ:"贝宁",BM:"百慕大",BT:"不丹",BO:"玻利维亚多民族共和国",BQ:"博内尔岛、圣尤斯特歇斯岛和萨巴岛",BA:"波黑",BW:"博茨瓦那",BV:"布维岛",BR:"巴西",IO:"英属印度洋领地",BN:"文莱",BG:"保加利亚",BF:"布基纳法索",BI:"布隆迪",KH:"柬埔寨",CM:"喀麦隆",CA:"加拿大",CV:"佛得角",KY:"开曼群岛",CF:"中非共和国",TD:"乍得",CL:"智利",CN:"中国",CX:"圣诞岛",CC:"科科斯(基林)群岛",CO:"哥伦比亚",KM:"科摩罗",CG:"刚果",CD:"刚果民主共和国",CK:"库克群岛",CR:"哥斯达黎加",CI:"科特迪瓦",HR:"克罗地亚",CU:"古巴",CW:"库拉索岛",CY:"塞浦路斯",CZ:"捷克共和国",DK:"丹麦",DJ:"吉布提",DM:"多米尼克",DO:"多米尼加共和国",EC:"厄瓜多尔",EG:"埃及",SV:"萨尔瓦多",GQ:"赤道几内亚",ER:"厄立特里亚",EE:"爱沙尼亚",ET:"埃塞俄比亚",FK:"福克兰群岛(马尔维纳斯)",FO:"法罗群岛",FJ:"斐济",FI:"芬兰",FR:"法国",GF:"法属圭亚那",PF:"法属波利尼西亚",TF:"法属南部领地",GA:"加蓬",GM:"冈比亚",GE:"格鲁吉亚",DE:"德国",GH:"加纳",GI:"直布罗陀",GR:"希腊",GL:"格陵兰岛",GD:"格林纳达",GP:"法属瓜德罗普岛",GU:"关岛",GT:"危地马拉",GG:"根西",GN:"几内亚",GW:"几内亚比绍",GY:"圭亚那",HT:"海地",HM:"赫德岛和麦克唐纳群岛",VA:"罗马教廷(梵蒂冈)",HN:"洪都拉斯",HK:"中国香港特别行政区",HU:"匈牙利",IS:"冰岛",IN:"印度",ID:"印度尼西亚",IR:"伊朗伊斯兰共和国",IQ:"伊拉克",IE:"冰岛",IM:"马恩岛",IL:"以色列",IT:"意大利",JM:"牙买加",JP:"日本",JE:"泽西岛",JO:"约旦",KZ:"哈萨克斯坦",KE:"肯尼亚",KI:"基里巴斯",KP:"朝鲜民主主义人民共和国",KR:"大韩民国",KW:"科威特",KG:"吉尔吉斯斯坦",LA:"老挝人民民主共和国",LV:"拉脱维亚",LB:"黎巴嫩",LS:"莱索托",LR:"利比里亚",LY:"利比亚",LI:"列支敦士登",LT:"立陶宛",LU:"卢森堡",MO:"中国澳门特别行政区",MK:"前南斯拉夫马其顿共和国",MG:"马达加斯加",MW:"马拉维",MY:"马来西亚",MV:"马尔代夫",ML:"马里",MT:"马耳他",MH:"马歇尔群岛",MQ:"马提尼克岛",MR:"毛里塔尼亚",MU:"毛里求斯",YT:"马约特岛",MX:"墨西哥",FM:"密克罗尼西亚联邦国",MD:"摩尔多瓦共和国",MC:"摩纳哥",MN:"蒙古",ME:"黑山",MS:"蒙特塞拉特岛",MA:"摩洛哥",MZ:"莫桑比克",MM:"缅甸",NA:"纳米比亚",NR:"瑙鲁",NP:"尼泊尔",NL:"荷兰",NC:"新喀里多尼亚",NZ:"新西兰",NI:"尼加拉瓜",NE:"尼日尔",NG:"尼日利亚",NU:"纽埃",NF:"诺福克岛",MP:"北马里亚纳群岛",NO:"挪威",OM:"阿曼",PK:"巴基斯坦",PW:"帕劳",PS:"巴勒斯坦被占领土",PA:"巴拿马",PG:"巴布亚新几内亚",PY:"巴拉圭",PE:"秘鲁",PH:"菲律宾",PN:"皮特克恩",PL:"波兰",PT:"葡萄牙",PR:"波多黎各",QA:"卡塔尔",RE:"留尼汪岛",RO:"罗马尼亚",RU:"俄罗斯联邦",RW:"卢旺达",BL:"圣巴泰勒米岛",SH:"圣赫勒拿岛、阿森松岛和特里斯坦-达库尼亚群岛",KN:"圣基茨和尼维斯",LC:"圣卢西亚",MF:"圣马丁(法属)",PM:"圣皮埃尔和密克隆",VC:"圣文森特和格林纳丁斯",WS:"萨摩亚",SM:"圣马力诺",ST:"圣多美和普林西比",SA:"沙特阿拉伯",SN:"塞内加尔",RS:"塞尔维亚",SC:"塞舌尔",SL:"塞拉利昂",SG:"新加坡",SX:"圣马丁岛(荷属)",SK:"斯洛伐克",SI:"斯罗文尼亚",SB:"所罗门群岛",SO:"索马里",ZA:"南非",GS:"南乔治亚和南桑德韦奇群岛",SS:"南苏丹",ES:"西班牙",LK:"斯里兰卡",SD:"苏丹",SR:"苏里南",SJ:"斯瓦尔巴岛和扬马延岛",SZ:"斯威士兰",SE:"瑞典",CH:"瑞士",SY:"阿拉伯叙利亚共和国",TW:"中国台湾省",TJ:"塔吉克斯坦",TZ:"坦桑尼亚联合共和国",TH:"泰国",TL:"东帝汶",TG:"多哥",TK:"托克劳",TO:"汤加",TT:"特立尼达和多巴哥",TN:"突尼斯",TR:"土耳其",TM:"土库曼斯坦",TC:"特克斯和凯科斯群岛",TV:"图瓦卢",UG:"乌干达",UA:"乌克兰",AE:"阿拉伯联合酋长国",GB:"英国",US:"美国",UM:"美属边疆群岛",UY:"乌拉圭",UZ:"乌兹别克斯坦",VU:"瓦努阿图",VE:"委内瑞拉玻利瓦尔共和国",VN:"越南",VG:"英属维尔京群岛",VI:"美属维尔京群岛",WF:"瓦利斯和富图纳",EH:"西撒哈拉",YE:"也门",ZM:"赞比亚",ZW:"津巴布韦"},LanguageCode:{aar:"阿法尔语",abk:"阿布哈西亚语",ace:"亚齐语",ach:"阿乔利语",ada:"阿当梅语",ady:"阿迪格语",afa:"亚非诸语言",afh:"阿弗里希利语",afr:"阿非利堪斯语",ain:"阿伊努语",aka:"阿坎语",akk:"阿卡德语",alb:"阿尔巴尼亚语",ale:"阿留申语",alg:"阿尔冈昆诸语言",alt:"南阿尔泰语",amh:"阿姆哈拉语",ang:"英语，古(约 450-1100)",anp:"昂加语",apa:"阿帕切诸语言",ara:"阿拉伯语",arc:"阿拉米语(公元前 700-300 年)",arg:"阿拉贡语",arm:"亚美尼亚",arn:"马普切语",arp:"阿拉帕霍语",art:"人工语言",arw:"阿拉瓦克语",asm:"阿萨姆语",ast:"阿斯图里亚斯语",ath:"阿萨帕斯坎诸语言",aus:"澳大利亚诸语言",ava:"阿瓦尔语",ave:"阿维斯陀语",awa:"阿瓦德语",aym:"艾马拉族语",aze:"阿塞拜疆语",bad:"班达语",bai:"巴米累克语",bak:"巴什基尔语",bal:"俾路支语",bam:"班巴拉语",ban:"巴里语",baq:"巴斯克语",bas:"巴萨语",bat:"波罗的海语",bej:"别札语；贝贾语",bel:"白俄罗斯语",bem:"本巴语",ben:"孟加拉语",ber:"柏柏尔诸语言",bho:"比哈尔语",bih:"比哈尔语",bik:"比口语",bin:"比尼语；埃多语",bis:"比斯拉玛语",bla:"西克西卡语",bnt:"班图诸语言(其他)",bos:"波斯尼亚语",bra:"布拉吉语",bre:"布列塔尼语",btk:"巴塔克语",bua:"布利亚特语",bug:"布吉语",bul:"保加利亚语",bur:"缅甸语",byn:"比林语",cad:"喀多语",cai:"中美洲印第安诸语言",car:"加勒比语",cat:"加泰罗尼亚语；瓦伦西亚语",cau:"高加索语",ceb:"宿雾语",cel:"凯尔特诸语言",cha:"查莫罗语",chb:"奇布查语",che:"车臣语",chg:"查加台语",chi:"中文",chk:"丘克语",chm:"马里语",chn:"奇努克语",cho:"乔克托语",chp:"奇帕维安语",chr:"切罗基语",chu:"教会斯拉夫语",chv:"楚瓦什语",chy:"夏安语",cmc:"占语诸语言",cop:"科普特语",cor:"康沃尔语",cos:"科西嘉语",cpe:"克里奥尔混合语，以英语为基础的",cpf:"克里奥尔语和皮钦语，以法语为基础",cpp:"克里奥尔混合语，以葡萄牙语为基础的",cre:"克里语",crh:"克里米亚鞑靼语",crp:"克里奥尔混合语",csb:"卡舒比语",cus:"库希特语",cze:"捷克语",dak:"达科他语",dan:"丹麦语",dar:"达尔格瓦语",day:"陆达雅语",del:"德拉瓦尔语",den:"斯拉维语(阿萨巴斯卡语系)",dgr:"多格里布语",din:"丁卡语",div:"迪维希语；马尔代夫语",doi:"多格拉语",dra:"达罗毗荼诸语言",dsb:"下索布语",dua:"杜亚拉语",dum:"荷兰语，中古(约 1050-1350)",dut:"荷兰语；佛兰德语",dyu:"迪尤拉语",dzo:"不丹语",efi:"埃菲克语",egy:"埃及语(古)",eka:"艾卡朱克语",elx:"埃兰语",eng:"英语",enm:"中古英语(1100-1500)",epo:"世界语",est:"爱沙尼亚语",ewe:"埃维语",ewo:"埃翁多语",fan:"芳语",fao:"法罗语",fat:"芳蒂语",fij:"斐济语",fil:"菲律宾语",fin:"芬兰语",fiu:"芬兰乌戈尔语",fon:"丰语",fre:"法语",frm:"法语，中古(约 1400-1600)",fro:"古法语(842-约 1400)",frr:"北弗里西亚语",frs:"东弗里西亚语",fry:"西弗里西亚语",ful:"富拉语",fur:"弗留利语",gaa:"加语",gay:"加尤语",gba:"格巴亚语",gem:"日耳曼语",geo:"格鲁吉亚语",ger:"德语",gez:"吉兹语",gil:"吉尔伯特语",gla:"盖尔语；苏格兰盖尔语",gle:"爱尔兰语",glg:"加利西亚语",glv:"马恩岛语",gmh:"德语，中古高地(约 1050-1500)",goh:"古高地德语(约 750-1050)",gon:"贡德语",gor:"哥伦打洛语",got:"哥特语",grb:"格列博语",grc:"古希腊语(1453 以前)",gre:"现代希腊语(1453-)",grn:"瓜拉尼语",gsw:"瑞士德语；阿勒曼尼语；阿尔萨斯语",guj:"古吉拉特语",gwi:"库钦语",hai:"海达语",hat:"海地语；海地克里奥尔语",hau:"豪萨语",haw:"夏威夷语",heb:"希伯来语",her:"赫雷罗语",hil:"希利盖农语",him:"喜马偕尔语；西部帕哈里语",hin:"印地语",hit:"希提语",hmn:"苗语",hmo:"希里莫图语",hrv:"克罗地亚语",hsb:"上索布语",hun:"匈牙利语",hup:"胡帕语",iba:"伊班语",ibo:"伊博语",ice:"冰岛语",ido:"伊多语",iii:"四川彝语",ijo:"伊乔诸语言",iku:"伊努伊特语",ile:"国际语；西方语",ilo:"伊洛卡诺语",ina:"国际语(国际辅助语言协会)",inc:"印度语",ind:"印度尼西亚语",ine:"印欧诸语言",inh:"印古什语",ipk:"依努庇克语",ira:"伊朗语",iro:"伊洛魁语",ita:"意大利语",jav:"爪哇语",jbo:"逻辑语",jpn:"日语",jpr:"犹太-波斯语",jrb:"犹太-阿拉伯语",kaa:"卡拉卡尔帕克语",kab:"卡拜尔语",kac:"克钦语",kal:"格陵兰语",kam:"坎巴语",kan:"坎纳达语",kar:"克伦诸语言",kas:"克什米尔语",kau:"卡努里语",kaw:"卡威语",kaz:"哈萨克语",kbd:"卡巴尔德语",kha:"卡西语",khi:"科伊桑诸语言",khm:"中高棉语",kho:"和阗语",kik:"基库尤语",kin:"金亚旺达语",kir:"吉尔吉斯语",kmb:"金邦杜语",kok:"孔卡尼语",kom:"科米语",kon:"刚果语",kor:"韩语",kos:"科斯拉伊语",kpe:"克佩勒語",krc:"卡拉恰伊-巴尔卡尔语",krl:"卡累利阿语",kro:"克鲁诸语言",kru:"库卢克语",kua:"宽亚玛语",kum:"库密克语",kur:"库尔德语",kut:"库特内语",lad:"拉地诺语",lah:"拉达亨语",lam:"兰巴语",lao:"老挝语",lat:"拉丁语",lav:"拉脱维亚语",lez:"列兹金语",lim:"林堡语",lin:"林加拉语",lit:"立陶宛语",lol:"蒙戈语",loz:"洛齐语",ltz:"卢森堡语",lua:"卢巴-卢拉语",lub:"卢巴卡丹加语",lug:"干达语",lui:"卢伊塞诺语",lun:"隆达语",luo:"卢奥语(肯尼亚和坦桑尼亚)",lus:"卢萨语",mac:"马其顿语",mad:"马都拉语",mag:"马加赫语",mah:"马绍尔语",mai:"米德勒语",mak:"望加锡语",mal:"马拉雅拉姆语",man:"曼丁哥语",mao:"毛利语",map:"澳斯特罗尼西亚诸语言",mar:"马拉地语",mas:"马萨伊语",may:"马来语",mdf:"莫克沙语",mdr:"曼达语",men:"门德语",mga:"爱尔兰语，中古(900-1200)",mic:"米克马克语",min:"米南加保语",mis:"未编码的语言",mkh:"孟-高棉语族",mlg:"马达加斯加语",mlt:"马耳他语",mnc:"满语",mni:"曼尼普尔语",mno:"马诺博诸语言",moh:"莫霍克语",mon:"蒙古语",mos:"莫西语",mul:"多语言",mun:"蒙达诸语言",mus:"克里克语",mwl:"米兰德斯语",mwr:"马尔瓦利语",myn:"玛雅诸语言",myv:"厄尔兹亚语",nah:"纳瓦特尔语",nai:"北美印第安诸语言",nap:"拿坡里语",nau:"瑙鲁",nav:"纳瓦霍语",nbl:"南恩德贝勒语",nde:"北恩德贝勒语",ndo:"尼东阁语",nds:"低地德语；低地撒克逊语",nep:"尼泊尔语",new:"尼泊尔语；纽瓦丽语",nia:"尼亚斯语",nic:"尼日尔-科尔多凡语诸语言",niu:"纽埃语",nno:"挪威尼诺斯克语",nob:"挪威波克默尔语",nog:"诺盖语",non:"诺尔斯语，古",nor:"挪威语",nqo:"西非书面语言(N'Ko)",nso:"北索托语",nub:"努比亚语",nwc:"尼瓦尔语",nya:"尼扬贾语",nym:"尼扬韦齐语",nyn:"尼昂加语",nyo:"尼奥罗语",nzi:"恩济马语",oci:"奥克西坦语(1500 以后)；普罗旺斯语",oji:"奥吉布瓦语",ori:"奥利亚语",orm:"奥洛莫语",osa:"奥塞奇语",oss:"奥赛梯语",ota:"奥斯曼土耳其语(1500-1928)",oto:"奥托米诸语言",paa:"巴布亚语",pag:"邦阿西楠语",pal:"巴列维语",pam:"邦板牙语",pan:"旁遮普语",pap:"帕皮阿门托语",pau:"帛琉语",peo:"波斯语，古(约公元前 600-400)",per:"波斯语",phi:"菲律宾诸语言",phn:"腓尼基语",pli:"巴利语",pol:"波兰语",pon:"波恩培语",por:"葡萄牙语",pra:"普拉克里特语",pro:"古普罗旺斯语(1500 以前)",pus:"普什图语","qaa-qtz":"保留以供本地使用",que:"凯楚阿语",raj:"拉贾斯坦语",rap:"拉帕努伊语",rar:"拉罗汤加语(库克岛毛利语)",roa:"罗曼语",roh:"罗曼什语",rom:"吉普赛语",rum:"罗马尼亚语",run:"基隆迪语",rup:"阿罗马尼亚语；马其顿-罗马尼亚语",rus:"俄语",sad:"桑达韦语",sag:"桑戈语",sah:"雅库特语",sai:"南美印第安语(其他)",sal:"萨利什诸语言",sam:"萨马利亚阿拉米语",san:"梵语",sas:"萨萨克语",sat:"桑塔利语",scn:"西西里语",sco:"苏格兰语",sel:"塞尔库普语",sem:"闪米特诸语言",sga:"古爱尔兰语(900 以前)",sgn:"手语",shn:"掸语",sid:"锡达莫语",sin:"僧伽罗语",sio:"苏族语",sit:"汉藏语系",sla:"斯拉夫语",slo:"斯洛伐克语",slv:"斯洛文尼亚语",sma:"南萨米语",sme:"北萨莫斯语",smi:"萨米语",smj:"律勒欧萨米语",smn:"伊纳里萨米语",smo:"萨摩亚语",sms:"斯科特-萨米语",sna:"修纳语",snd:"信德语",snk:"索宁克语",sog:"粟特语",som:"索马里语",son:"桑海语",sot:"索托语，南部",spa:"西班牙语",srd:"撒丁语",srn:"苏里南汤加语",srp:"塞尔维亚语",srr:"塞雷尔语",ssa:"尼罗-撒哈拉语",ssw:"斯瓦特语",suk:"苏库马语",sun:"巽他语",sus:"苏苏语",sux:"苏美尔语",swa:"斯瓦希里语",swe:"瑞典语",syc:"古典叙利亚语",syr:"叙利亚语",tah:"塔希提语",tai:"傣语诸语言",tam:"泰米尔语",tat:"鞑靼语",tel:"泰卢固语",tem:"滕内语",ter:"特列纳语",tet:"特塔姆语",tgk:"塔吉克语",tgl:"塔加拉语",tha:"泰语",tib:"藏语",tig:"提格雷语",tir:"蒂格尼亚语",tiv:"蒂夫语",tkl:"托克劳",tlh:"克林贡语",tli:"特领吉语",tmh:"塔马舍克语",tog:"汤加语(尼亚萨)",ton:"汤加(汤加群岛)",tpi:"托克皮辛语",tsi:"钦西安语",tsn:"茨瓦纳语",tso:"宗加语",tuk:"土库曼语",tum:"通布卡语",tup:"图皮语",tur:"土耳其语",tut:"阿尔泰语",tvl:"图瓦卢",twi:"特威语",tyv:"图瓦语",udm:"乌德穆尔特语",uga:"乌加里特语",uig:"维吾尔语",ukr:"乌克兰语",umb:"姆邦杜语",und:"未知",urd:"乌尔都语",uzb:"乌兹别克语",vai:"瓦伊语",ven:"温达语",vie:"越南语",vol:"沃拉普克语",vot:"沃提克语",wak:"瓦卡希语",wal:"瓦拉莫语",war:"瓦瑞语",was:"瓦肖语",wel:"威尔士语",wen:"索布诸语言",wln:"瓦龙语",wol:"沃洛夫语",xal:"卡尔梅克语",xho:"科萨语",yao:"瑶语",yap:"雅浦语",yid:"依地语",yor:"约鲁巴语",ypk:"尤皮克语",zap:"萨巴特克语",zbl:"布列斯符号；布列斯符号的；布列斯",zen:"哲纳加语",zha:"壮语",znd:"赞德语",zul:"祖鲁语",zun:"祖尼语",zxx:"无语言内容；不适用",zza:"扎扎其语；南扎扎其语；北扎扎其语"},MonetaryUnits:{XUA:"亚洲开发银行记账单位",AFN:"阿富汗尼",DZD:"阿尔及利亚第纳尔",ARS:"阿根廷比索",AMD:"亚美尼亚德拉姆",AWG:"阿鲁巴盾",AUD:"澳大利亚元",AZN:"阿塞拜疆马纳特",BSD:"巴哈马元",BHD:"巴林第纳尔",THB:"泰铢",PAB:"巴波亚",BBD:"巴巴多斯元",BYR:"白俄罗斯卢布",BZD:"伯利兹元",BMD:"百慕大元",VEF:"委内瑞拉元",BOB:"玻利维亚元",XBA:"债券市场单位欧洲货币合成单位 EURCO",XBB:"债券市场单位欧洲货币单位 EMU 6",XBD:"债券市场单位欧洲记账单位 17 EUA 17",XBC:"债券市场单位欧洲记账单位 9 EUA 9",BRL:"巴西雷亚尔",BND:"文莱元",BGN:"保加利亚列瓦",BIF:"布隆迪法郎",CAD:"加拿大元",CVE:"佛得角埃斯库多",KYD:"开曼岛元",GHS:"塞地",XOF:"多哥非洲共同体法郎",XAF:"非洲金融共同体法郎",XPF:"太平洋金融共同体法郎",CLP:"智利比索",XTS:"专门保留供测试用代码",COP:"哥伦比亚比索",KMF:"科摩罗法郎",CDF:"刚果法郎",BAM:"可兑换马克",NIO:"科尔多瓦奥罗",CRC:"哥斯达黎加科朗",HRK:"克罗地亚库纳",CUP:"古巴比索",CZK:"捷克克朗",GMD:"达拉西",DKK:"丹麦克朗",MKD:"第纳尔",DJF:"吉布提法郎",STD:"多布拉",DOP:"多米尼加比索",VND:"越南盾",XCD:"东加勒比元",EGP:"埃及镑",SVC:"萨尔瓦多科朗",ETB:"埃塞俄比亚比尔",EUR:"欧元",FKP:"福克兰群岛英镑",FJD:"斐济元",HUF:"福林",GIP:"直布罗陀镑",XAU:"黄金",HTG:"古德",PYG:"瓜拉尼语",GNF:"几内亚法郎",GYD:"圭亚那元",HKD:"港元",UAH:"格里夫纳",ISK:"冰岛克朗",INR:"印度卢比",IRR:"伊朗里亚尔",IQD:"伊拉克第纳尔",JMD:"牙买加元",JOD:"约旦第纳尔",KES:"肯尼亚先令",PGK:"基那",LAK:"基普",KWD:"科威特第纳尔",MWK:"克瓦查",AOA:"宽扎",MMK:"缅甸元",GEL:"拉里",LVL:"拉脱维亚拉图",LBP:"黎巴嫩镑",ALL:"列克",HNL:"伦皮拉",SLL:"利昂",RON:"列伊",LRD:"利比里亚元",LYD:"利比亚第纳尔",SZL:"里兰吉尼",LTL:"立陶宛立特",LSL:"鲁梯",MGA:"马达加斯加阿里亚里",MYR:"马来西亚林吉特",MUR:"毛里求斯卢比",MZN:"梅蒂卡尔",MXN:"墨西哥比索",MXV:"墨西哥比索 UDI",MDL:"摩尔多瓦元",MAD:"摩洛哥迪拉姆",BOV:"玻利维亚诺",NGN:"奈拉",ERN:"纳克法",NAD:"纳米比亚元",NPR:"尼泊尔卢比",ANG:"荷属安地列斯群岛基尔德",ILS:"以色列谢克尔",TMT:"新马纳特",TWD:"新台币",NZD:"新西兰元",BTN:"努扎姆",KPW:"朝鲜圆",NOK:"挪威克朗",PEN:"新索尔",MRO:"乌吉亚",TOP:"潘加",PKR:"巴基斯坦卢比",XPD:"钯金",MOP:"澳元",CUC:"可兑换比索",UYU:"乌拉圭比索",PHP:"菲律宾比索",XPT:"铂金",GBP:"英镑",BWP:"普拉",QAR:"卡塔尔里亚尔",GTQ:"格查尔",OMR:"阿曼里亚尔",KHR:"瑞尔",MVR:"拉菲亚",IDR:"印度尼西亚卢比",RUB:"俄罗斯卢布",RWF:"卢旺达法郎",SHP:"圣赫伦那岛镑",SAR:"沙特阿拉伯里亚尔",XDR:"SDR 特别提款权",RSD:"塞尔维亚第纳尔",SCR:"塞舌尔卢比",XAG:"白银",SGD:"新加坡元",SBD:"所罗门群岛元",KGS:"索姆",SOS:"索马里先令",TJS:"索莫尼",ZAR:"南非兰特",LKR:"斯里兰卡卢比",XSU:"苏克雷",SDG:"苏丹镑",SRD:"苏里南元",SEK:"瑞典克朗",CHF:"瑞士法郎",SYP:"叙利亚镑",BDT:"塔卡",WST:"塔拉",TZS:"坦桑尼亚先令",KZT:"哈萨克斯坦坚戈",XXX:"为不涉及货币的交易分配的代码",TTD:"特立尼达和多巴哥元",MNT:"图格里克",TND:"突尼斯第纳尔",TRY:"土耳其里拉",AED:"阿联酋迪拉姆",UGX:"乌干达先令",XFU:"UIC 法郎",COU:"哥伦比亚基金",CLF:"智利发展单位",UYI:"与指数挂钩的乌拉圭比索 URUIURUI",USD:"美元",USN:"美元(次日)",USS:"美元(当日)",UZS:"乌兹别克斯坦元",VUV:"瓦图",CHE:"WIR 欧元",CHW:"WIR 法郎",KRW:"韩元",YER:"也门里亚尔",JPY:"日元",CNY:"人民币元",ZMK:"赞比亚克瓦查",ZWL:"津巴布韦元",PLN:"兹罗提"},UCUM_Length:{"[fth_i]":"水深: 英寻 [fth_i]","[hd_i]":"马的高度: 手 [hd_i]",Ao:"长度: 埃(Ao)",AU:"长度: 天文单位(AU)","[cicero]":"长度: 西塞罗(迪多派卡) [cicero]","[didot]":"长度: 迪多(迪多磅) [didot]","[fth_us]":"长度: 英寻 [fth_us]","[fth_br]":"长度: 英寻 [fth_br]","[ft_i]":"长度: 英尺 [ft_i]","[ft_us]":"长度: 英尺 [ft_us]","[ft_br]":"长度: 英尺 [ft_br]","[fur_us]":"长度: 弗隆 [fur_us]","[ch_br]":"长度: 冈特链 [ch_br]","[ch_us]":"长度: 冈特链(测量员链) [ch_us]","[in_i]":"长度: 英寸 [in_i]","[in_us]":"长度: 英寸 [in_us]","[in_br]":"长度: 英寸 [in_br]","[ly]":"长度: 光年 [ly]","[ligne]":"长度: ligne (法语中的线) [ligne]","[lne]":"长度: 英分 [lne]","[lk_us]":"长度: 冈特链的令 [lk_us]","[lk_br]":"长度: 冈特链的令 [lk_br]","[rlk_us]":"长度: 冉斯登链的令 [rlk_us]",um:"长度: 微米(µm) um",mm:"长度:毫米(mm)",cm:"长度:厘米(cm)",m:"长度: 米(m)",km:"长度:千米(km)","[mil_i]":"长度: 英里 [mil_i]","[mil_us]":"长度: 密耳 [mil_us]","[mi_us]":"长度: 英里 [mil_us]","[mi_br]":"长度: 英里 [mi_br]","[nmi_i]":"长度: 海里 [nmi_i]","[nmi_br]":"长度: 海里 [nmi_br]","[pc_br]":"长度: 步长 [pc_br]",pc:"长度: 秒差距(pc)","[pca]":"长度: 派卡 [pca]","[pied]":"长度: 英尺(法语中的英尺) [pied]","[pnt]":"长度: 磅 [pnt]","[pouce]":"长度: pouce (法语中的英寸) [pouce]","[pca_pr]":"长度: 打印机的派卡 [pca_pr]","[pnt_pr]":"长度: 打印机的磅 [pnt_pr]","[rch_us]":"长度: 冉斯登链(工程链) [rch_us]","[rd_us]":"长度: 杆 [rd_us]","[rd_br]":"长度: 杆 [rd_br]","[smoot]":"长度: 斯穆特 [smoot]","[mi_i]":"长度: 法定英里 [mi_i]","[yd_i]":"长度: 码 [yd_i]","[yd_us]":"长度: 码 [yd_us]","[yd_br]":"长度: 码 [yd_br]"},UCUM:{"[k]":"(未分类): 玻耳兹曼常数 [k]","[G]":"(未分类): 牛顿引力常数 [G]",Gal:"加速度: 伽(Gal)","[g]":"加速度: 标准自由落体加速度 [g]","[pH]":"酸度: pH [pH]","[h]":"作用: 普朗克常数 [h]",b:"作用面积: 靶恩(b)","[CFU]":"繁殖生物的数量: 群体形成单位 [CFU]","[FFU]":"感染原数量: 免疫学病灶形成单位 [FFU]","[PFU]":"传染原数量: 空斑形成单位 [PFU]",bit_s:"信息量: 位(bit_s)",bit:"信息量: 位(bit)",By:"信息量: 字节(By)",eq:"物质量: 当量(eq)",mol:"物质的量: 摩尔(mol)",osm:"物质量(溶解颗粒): 渗透压摩尔(osm)","[arb'U]":"任意: 任意单位 [arb'U]","[iU]":"任意: 国际单位 [iU]","[USP'U]":"任意: 美国药典单位 [USP'U]","[knk'U]":"任意生物活性: 孔克尔单位 [knk'U]","[mclg'U]":"任意生物活性: Mac Lagan 单位 [mclg'U]","[acr_us]":"面积: 英亩 [acr_us]","[acr_br]":"面积: 英亩 [acr_br]",ar:"面积: 公亩(ar)",har:"面积:公顷(har)","[cml_i]":"面积: 圆密耳 [cml_i]","[sct]":"面积: 一平方英里 [sct]","[sft_i]":"面积: 平方英尺 [sft_i]","[sin_i]":"面积: 平方英寸 [sin_i]","[smi_us]":"面积: 平方英里 [smi_us]","[srd_us]":"面积: 平方杆 [srd_us]","[syd_i]":"面积: 平方码 [syd_i]","[twp]":"区域: 镇区 [twp]","[CCID_50]":"传染原制剂的生物活性(传染性): 半数细胞培养感染剂量 [CCID_50]","[TCID_50]":"感染原制剂的生物活性(感染性): 50% 组织培养物感染剂量 [TCID_50]","[todd'U]":"抗链球菌溶血素 O 的生物活性: 托德单位 [todd'U]","[dye'U]":"淀粉酶的生物活性: 染料单位 [dye'U]","[smgy'U]":"淀粉酶的生物活性: 淀粉酶单位 [smgy'U]","[APL'U]":"抗心磷脂抗体 IgA 的生物活性: APL 单位 [APL'U]","[GPL'U]":"抗心磷脂抗体 IgG 的生物活性: GPL 单位 [GPL'U]","[MPL'U]":"抗心磷脂抗体 IgM 的生物活性: MPL 单位 [MPL'U]","[beth'U]":"因子 VIII 抑制物的生物活性: 贝塞斯达单位 [beth'U]","[bdsk'U]":"磷酸酶的生物活性: 博丹斯基单位 [bdsk'U]","[ka'U]":"磷酸酶的生物活性: 金-阿二氏单位 [ka'U]","[tb'U]":"结核菌素的生物活性: 结核菌素单位 [tb'U]",Lmb:"亮度: 朗伯(Lmb)",kat:"催化活性: 开特(kat)",U:"催化活性: 单位(U)","[fth_i]":"水深: 英寻 [fth_i]",REM:"剂量当量: 人体辐射当量(REM)",Sv:"剂量当量: 希沃特(Sv)","[bu_us]":"干量: 蒲式耳 [pk_us]","[dpt_us]":"干燥容积: 干品脱 [dpt_us]","[dqt_us]":"干燥容积: 干夸脱 [dqt_us]","[gal_wi]":"干燥容积: 温彻斯特加仑(历史) [gal_wi]","[pk_us]":"干燥容积: 配克 [pk_us]",P:"动态粘滞度: 泊(P)",F:"电容: 法拉(F)",C:"电荷: 库仑(C)","[e]":"电荷: 元电荷 [e]",mho:"电导: 姆欧(mho)",S:"电导: 西门子(S)",A:"电流: 安培(A)",Bi:"电流: 毕奥(Bi)","[eps_0]":"电容率: 真空介电常数 [eps_0]",V:"电势: 伏(V)","B[uV]":"电势级: 贝尔微伏(B) [uV]","B[mV]":"电势级: 贝尔微伏(B) [mV]","B[V]":"电势级: 贝尔伏 B[V]",Ohm:"电阻: 欧姆(Ohm)","[Btu]":"能量: 英制热量单位 [Btu]","[Btu_39]":"能量: 英制热单位(39°F) [Btu_39]","[Btu_59]":"能量: 英制热量单位(59°F) [Btu_59]","[Btu_60]":"能量: 英制热量单位(60°F) [Btu_60]",cal:"能量: 卡路里(cal)","cal_[15]":"能量: 15°C 卡路里 cal_[15]","cal_[20]":"能量: 20°C 卡路里 cal_[20]",eV:"能量: 电子伏(eV)",erg:"能量: 尔格(erg)","[Btu_IT]":"能量: 国际蒸汽表英制热量单位 [Btu_IT]",cal_IT:"能量: 国际蒸汽表卡路里(cal_IT)",J:"能量: 焦耳(J)","[Btu_m]":"能量: 平均英制热量单位 [Btu_m]",cal_m:"能量: 平均卡路里(cal_m)","[Cal]":"能量: 营养标签卡路里 [Cal]","[Btu_th]":"能量: 热化学英制热量单位 [Btu_th]",cal_th:"能量: 热化学卡路里(cal_th)",Gy:"能量剂量: 戈瑞(Gy)",RAD:"能量剂量: 辐射吸收剂量(RAD)","[PRU]":"流体阻力: 外周血管阻力单位 [PRU]","[bbl_us]":"液体容积: 桶 [bbl_us]","[crd_us]":"液体容积: 考得 [crd_us]","[fdr_us]":"液体容积: 液量打兰 [fdr_us]","[foz_us]":"液体容积: 液量盎司 [foz_us]","[gil_us]":"液体容积: 吉耳 [gil_us]","[min_us]":"液体容积: 量滴 [min_us]","[pt_us]":"液体容积: 品脱 [pt_us]","[qt_us]":"液体容积: 夸脱 [qt_us]","[gal_us]":"液体容积: 安妮皇后的酒加仑 [gal_us]",Mx:"磁感应通量: 麦克斯韦(Mx)",dyn:"力: 达因(dyn)",gf:"力: 克力(gf)",N:"力: 牛顿(N)","[lbf_av]":"力: 磅力 [lbf_av]","[ppb]":"分数: 十亿分率 [ppb]","[ppm]":"分数: 百万分率 [ppm]","[ppth]":"分数: 千分率 [ppth]","[pptr]":"分数: 万亿分率 [pptr]","%":"分数: 百分比(%)",Hz:"频率: 赫兹(Hz)","[Ch]":"导管规格: Charrire (法语) [Ch]","[hd_i]":"马的高度: 手 [hd_i]","[hp_C]":"顺势疗法效用: 百进位的顺势疗法效用 [hp_C]","[hp_X]":"顺势疗法效用: 十进位的顺势疗法效用 [hp_X]",lx:"照明度: 勒克司(lx)",ph:"照明度: 辐透(ph)",H:"电感: 亨利(H)",R:"离子剂量: 伦琴(R)",St:"运动粘度: 斯托克斯(St)",Ao:"长度: 埃(Ao)",AU:"长度: 天文单位(AU)","[cicero]":"长度: 西塞罗(迪多派卡) [cicero]","[didot]":"长度: 迪多(迪多磅) [didot]","[fth_us]":"长度: 英寻 [fth_us]","[fth_br]":"长度: 英寻 [fth_br]","[ft_i]":"长度: 英尺 [ft_i]","[ft_us]":"长度: 英尺 [ft_us]","[ft_br]":"长度: 英尺 [ft_br]","[fur_us]":"长度: 弗隆 [fur_us]","[ch_br]":"长度: 冈特链 [ch_br]","[ch_us]":"长度: 冈特链(测量员链) [ch_us]","[in_i]":"长度: 英寸 [in_i]","[in_us]":"长度: 英寸 [in_us]","[in_br]":"长度: 英寸 [in_br]","[ly]":"长度: 光年 [ly]","[ligne]":"长度: ligne (法语中的线) [ligne]","[lne]":"长度: 英分 [lne]","[lk_us]":"长度: 冈特链的令 [lk_us]","[lk_br]":"长度: 冈特链的令 [lk_br]","[rlk_us]":"长度: 冉斯登链的令 [rlk_us]",um:"长度: 微米(µm) um",mm:"长度:毫米(mm)",cm:"长度:厘米(cm)",m:"长度: 米(m)",km:"长度:千米(km)","[mil_i]":"长度: 英里 [mil_i]","[mil_us]":"长度: 密耳 [mil_us]","[mi_us]":"长度: 英里 [mil_us]","[mi_br]":"长度: 英里 [mi_br]","[nmi_i]":"长度: 海里 [nmi_i]","[nmi_br]":"长度: 海里 [nmi_br]","[pc_br]":"长度: 步长 [pc_br]",pc:"长度: 秒差距(pc)","[pca]":"长度: 派卡 [pca]","[pied]":"长度: 英尺(法语中的英尺) [pied]","[pnt]":"长度: 磅 [pnt]","[pouce]":"长度: pouce (法语中的英寸) [pouce]","[pca_pr]":"长度: 打印机的派卡 [pca_pr]","[pnt_pr]":"长度: 打印机的磅 [pnt_pr]","[rch_us]":"长度: 冉斯登链(工程链) [rch_us]","[rd_us]":"长度: 杆 [rd_us]","[rd_br]":"长度: 杆 [rd_br]","[smoot]":"长度: 斯穆特 [smoot]","[mi_i]":"长度: 法定英里 [mi_i]","[yd_i]":"长度: 码 [yd_i]","[yd_us]":"长度: 码 [yd_us]","[yd_br]":"长度: 码 [yd_br]",B:"等级: 贝尔(B)",Np:"级别: 奈培(Np)",Ky:"线数: 凯塞(Ky)","[mesh_i]":"线数: 网格 [mesh_i]",sb:"照度密度: 熙提(sb)",lm:"光通量: 流明(lm)",cd:"照度: 坎德拉(cd)",Wb:"磁通量: 韦伯(Wb)",Oe:"磁场强度: 奥斯特(Oe)",G:"磁通密度: 高斯(G)",T:"磁通密度: 特斯拉(T)","[mu_0]":"导磁率: 真空导磁率 [mu_0]",Gb:"磁张力: 吉伯(Gb)","[dr_av]":"质量: 打兰 [dr_av]","[dr_ap]":"质量: 打兰 [dr_ap]","[m_e]":"质量: 电子质量 [m_e]","[gr]":"质量: 谷 [gr]",ug:"质量: 微克(µg) ug",mg:"质量:毫克(mg)",g:"质量: 克(g)",kg:"质量:千克(kg)","[lcwt_av]":"质量: 长担(英担) [lcwt_av]","[ltom_av]":"质量: 长吨(英吨) [lton_av]","[car_m]":"质量: 米制开 [car_m]","[oz_av]":"质量: 盎司 [oz_av]","[oz_tr]":"质量: 盎司 [oz_tr]","[oz_ap]":"质量: 盎司 [oz_ap]","[pwt_tr]":"质量: 本尼威特 [pwt_tr]","[lb_av]":"质量: 磅 [lb_av]","[lb_tr]":"质量: 磅 [lb_tr]","[lb_ap]":"质量: 磅 [lb_ap]","[m_p]":"质量: 质子质量 [m_p]","[sc_ap]":"质量: 吩 [sc_ap]","[scwt_av]":"质量: 短担(美担) [scwt_av]","[ston_av]":"质量: 短吨(美吨) [ston_av]","[stone_av]":"质量: 石(英石) [stone_av]",t:"质量: 公吨(t)",u:"质量: 统一的原子质量单位(u)","g%":"质量浓度: 克%(g%)","[car_Au]":"质量分数: 开(金合金) [car_Au]","[MET]":"体力活动的代谢值: 代谢当量 [MET]","[pi]":"数值: 圆周率值 [pi]","10*":"数值: 10 的任意次幂 10*","10^":"数量: 十的任意次幂(10^)",circ:"平面角: 圆周(circ)",deg:"平面角: 度(deg)",gon:"平面角: 哥恩(百分度) gon","'":"平面角: 分 '",rad:"平面角: 弧度(rad)",'"':"平面角: 秒 ''","[HP]":"功率: 马力 [HP]",W:"功率: 瓦特(W)","B[kW]":"功率级: 贝尔千瓦(B) [kW]","B[W]":"功率级: 贝尔瓦特 B[W]",bar:"压强: 巴(bar)","[in_i'Hg]":"压强: 汞柱英寸数 [in_i'Hg]","[in_i'H2O]":"压强: 水柱英寸数 [in_i'H2O]","m[Hg]":"压强: 水银柱米数 m[Hg]","m[H2O]":"压强: 水柱米数(m) [H2O]",Pa:"压强: 帕斯卡 帕","[psi]":"压强: 磅每平方英寸 [psi]",atm:"压强: 标准大气压(atm)",att:"压力: 工业大气压(att)","B[SPL]":"声压级: 贝尔声压 B[SPL]",Bq:"放射能: 贝克勒耳(Bq)",Ci:"放射能: 居里(Ci)","[diop]":"镜片折射: 屈光度 [diop]","[p'diop]":"棱镜的折射: 棱镜屈光度 [p'diop]","[S]":"沉降系数: Svedberg 单位 [S]",Bd:"信号传输速率: 波特(Bd)","%[slope]":"坡度: 坡度百分比 %[slope]",sph:"立体角: 球(sph)",sr:"立体角: 球面度(sr)",Cel:"温度: 摄氏度(Cel)","[degF]":"温度: 华氏度 [degF]",K:"温度: 绝对温度(K)",d:"时间: 天(d)",h:"时间: 小时(h)",mo_g:"时间: 平均公历月(mo_g)",a_g:"时间: 平均公历年(a_g)",mo_j:"时间: 平均儒略月(mo_j)",a_j:"时间: 平均儒略年(a_j)",min:"时间: 分(min)",mo:"时间: 月(mo)",s:"时间: 秒(s)",mo_s:"时间: 阴历月(mo_s)",a_t:"时间: 回归年(a_t)",wk:"时间: 周(wk)",a:"时间: 年(a)","[kn_i]":"速度: 节 [kn_i]","[kn_br]":"速度: 节 [kn_br]","[c]":"速度: 光速 [c]","[HPF]":"显微镜中的视图区域: 高倍视野 [HPF]","[LPF]":"显微镜中的视图区域: 低倍视野 [LPF]","[bf_i]":"体积: 板英尺 [bf_i]","[bu_br]":"容量: 蒲式尔 [bu_br]","[cr_i]":"体积: 考得 [cr_i]","[cft_i]":"容积: 立方英尺 [cft_i]","[cin_i]":"体积: 立方英寸 [cin_i]","[cyd_i]":"体积: 立方码 [cyd_i]","[cup_us]":"容积: 杯 [cup_us]","[drp]":"体积: 滴 [drp]","[fdr_br]":"容积: 液量打兰 [fdr_br]","[foz_br]":"容积: 液量盎司 [foz_br]","[gal_br]":"容积: 加仑 [gal_br]","[gil_br]":"容积: 吉耳 [gil_br]",l:"容积: 升(l)",L:"容积: 升(l)","[min_br]":"容积: 量滴 [min_br]","[pk_br]":"容积: 配克 [pk_br]","[pt_br]":"容积: 品脱 [pt_br]","[qt_br]":"容积: 夸脱 [qt_br]",st:"体积: 立方米(st)","[tbs_us]":"容量: 汤匙 [tbs_us]","[tsp_us]":"容积: 茶匙 [tsp_us]","[hnsf'U]":"x 射线衰减: 亨氏单位 [hnsf'U]"},DCPList:{"001":"XML","002":"CORBA","003":"JAVA","004":"COM","005":"SQL","006":"Web 服务"},SV_ParameterDirection:{"001":"内","002":"外部","003":"内/外"},MD_DatatypeCode:{"001":"类别","002":"编码列表","003":"枚举","004":"编码列表元素","005":"抽象类","006":"聚合类","007":"指定的类","008":"数据类型类","009":"接口类","010":"联合类","011":"元类","012":"类型类","013":"字符串","014":"整型","015":"关联"},MD_ObligationCode:{"001":"必选","002":"可选","003":"条件>"},GeometryTypeCode:{0:"Null",1:"点",2:"多点",3:"折线",4:"面",5:"包络矩形",6:"路径",7:"任一",9:"多面体",11:"圆环",13:"折线",14:"圆弧",15:"贝塞尔 3 曲线",16:"椭圆弧",17:"袋",18:"三角条带",19:"三角扇",20:"光线",21:"球体",22:"三角形"},RS_UseLimitations:{"001":"无用于访问和使用的条件","002":"用于访问和使用的条件未知"},RS_AccessConstraints:{"001":"无用于公共访问的限制","002":"根据 INSPIRE 指令第 13(1)(a) 条限制的公共访问","003":"根据 INSPIRE 指令第 13(1)(b) 条限制的公共访问","004":"根据 INSPIRE 指令第 13(1)(c) 条限制的公共访问","005":"根据 INSPIRE 指令第 13(1)(d) 条限制的公共访问","006":"根据 INSPIRE 指令第 13(1)(e) 条限制的公共访问","007":"根据 INSPIRE 指令第 13(1)(f) 条限制的公共访问","008":"根据 INSPIRE 指令第 13(1)(g) 条限制的公共访问","009":"根据 INSPIRE 指令第 13(1)(h) 条限制的公共访问"}});