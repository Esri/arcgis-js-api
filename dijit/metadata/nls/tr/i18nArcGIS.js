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

define({documentTypes:{arcgis:{caption:"ArcGIS Meta verisi",editorCaption:"Meta veriler",description:""}},emptyOption:"Boş",conditionals:{ISO19139A1_ROW4:"Meta Veri Hiyerarşi Düzeyi Veri Kümesi ise, Coğrafi Sınırlayıcı Kutu veya Coğrafi Açıklama gereklidir.",ISO19139A1_ROW6:"Bir Veri Kümesi Tanımlayıcısı veya Veri Kümesi Adı gereklidir.",ISO19139A1_ROW7:"Başka Sınırlamalar seçildiği takdirde, Başka Kısıtlamalar gereklidir.",ISO19139A1_ROW9:"Kapsam, Veri Kümesi veya Seri değilse, bir Düzey Kalitesi gereklidir.",ISO19139A1_ROW10_11_12:"Kapsam, Veri Kümesi veya Seri ise; Deyim, İşlem Adımı veya Veri Kaynağı öğelerinden biri gereklidir.",ISO19139A1_ROW15:"Denetim Noktası Kullanılabilirliği seçiliyse, Denetim Noktası Açıklaması gereklidir.",ISO19139A1_ROW18:"Dağıtım belgelenirse, bir Biçim veya Dağıtıcı/Biçim gereklidir.",INSPIRE_AccessLimitation:" En az bir yasal erişim kısıtlaması kodu veya güvenlik sınıflandırması kodu gerekli. (INSPIRE)",INSPIRE_UseLimitation:" En az bir kullanım sınırlaması gerekli. (INSPIRE)",INSPIRE_ConformanceResult:"Etki Alanı Tutarlılık raporu için Uyumluluk Sonucu gereklidir. (INSPIRE)",INSPIRE_DomainConsistency:"Bir Etki Alanı Tutarlılık raporu gereklidir. (INSPIRE)",INSPIRE_LineageStatement:"Kapsam, Veri Kümesi veya Seri ise, bir Geçmiş Bildirimi gereklidir. (INSPIRE).",FGDC_DescIfTemporal:"Geçici Yayılım için bir Açıklama gereklidir. (FGDC)",FGDC_Keywords:"Konu Başlığı, Etiket veya Tema Anahtar Kelimesi gereklidir. (FGDC)",FGDC_Reports:"Tamamlama Eksiklikleri ve Kavramsal Tutarlılık raporları gereklidir. (FGDC)",FGDC_Temporal:"En az bir Geçici Yayılım gereklidir. (FGDC)",NAP_Contact:"Adres/Teslim Noktası, Telefon numarası veya Çevrimiçi Kaynak/URL gereklidir. (NAP)",GEN_BoundingBox:"En az bir Coğrafi Sınırlama Kutusu gereklidir.",GEN_ReportResult:"Bir Uyumluluk sonucu veya Niceliksel sonuç gereklidir.",minLessThanMax:"Minimum Değer, Maksimum Değerden daha küçük olmalıdır."},hints:{integerGreaterThanZero:"(> 0 koşulunu sağlayan bir tamsayı girin)",integerGreaterThanOne:"(> 1 koşulunu sağlayan bir tamsayı girin)",integer0To100:"(0 - 100 arasında bir tamsayı girin)",maxScale:"(50.000 gibi > 0 koşulunu sağlayan bir tamsayı girin)",minScale:"(150.000.000 gibi > 0 koşulunu sağlayan bir tamsayı girin)",number0To100:"(0 - 100 arasında bir sayı girin)",number0To360:"(0 - 360 arasında bir sayı girin)",number90To90:"(-90 - 90 arasında bir sayı girin)",listOfDoubles:"(aralarına boşluk koyarak bir sayı listesi girin)"},htmlEditor:{button:"Düzenle..."},sections:{overview:"Genel Bakış",esri:"Esri",resource:"Kaynak",reference:"Referans",content:"İçerik",distribution:"Dağılım",quality:"Kalite",eainfo:"Alanlar",representation:"Gösterim",metadata:"Meta veriler"},metadataStyle:{caption:"ArcGIS Meta Veri Stili",changeButton:"Değiştir...",dialogTitle:"Meta Veri Stili Seç",updating:"Belge güncelleniyor...","Item Description":"Öğeyi Tanımla","FGDC CSDGM Metadata":"FGDC CSDGM Meta Verileri","ISO 19139 Metadata Implementation Specification":"ISO 19139 Meta Veri Uygulama Spesifikasyonu","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Meta Veri Uygulama Spesifikasyonu GML3.2","INSPIRE Metadata Directive":"INSPIRE Meta Veri Yönergesi","North American Profile of ISO19115 2003":"ISO19115 2003 Kuzey Amerika Profili"},aggrInfo:{caption:"Toplu Bilgi",datasetHint:"Bir Veri Kümesi Tanımlayıcısı veya Veri Kümesi Adı gereklidir.",aggrDSIdent:"Veri Kümesi Tanımlayıcıs",aggrDSName:"Veri Kümesi Adı"},appSchInfo:{caption:"Uygulama Şeması",asName:"Şema Adı",asSchLang:"Şema Dili",asCstLang:"Kısıtlama Dili",asAscii:"ASCII",asGraFile:"Grafik Dosyası",asGraFile_src:"Grafik Dosyası Kaynağı",asSwDevFile:"Yazılım Geliştirme Dosyası",asSwDevFile_src:"Yazılım Geliştirme Dosyası Kaynağı",asSwDevFiFt:"Yazılım geliştirme dosyası formatı"},citation:{caption:"Alıntı",section:{titlesAndDates:"Başlıklar ve Tarihler",links:"URL'ler",identifiers:"Tanımlayıcılar",presentation:"Biçim",other:"Diğer",edition:"Sürüm",series:"Seriler"},conditionalDate:{caption:"Alıntı Tarihi",msg:"Oluşturma Tarihi, Yayınlama Tarihi veya Revizyon Tarihinden biri gereklidir.",msg_nap:"Alıntı tarihi gereklidir."},resTitle:"Başlık",resAltTitle:"Alternatif Başlık",resTitleForInspire:{bg:"Bulgarca",cs:"Çekçe",da:"Danca",de:"Almanca",el:"Yunanca",en:"Türkçe",es:"İspanyolca",et:"Estonya Dili",fi:"Fince",fr:"Fransızca",hr:"Hırvatça",hu:"Macarca",it:"İtalyanca",lt:"Litvanyaca",lv:"Letonca",mt:"Maltaca",nl:"Felemenkçe",pl:"Lehçe",pt:"Portekizce",ro:"Romence",sk:"Slovakça",sl:"Slovence",sv:"İsveççe"},collTitle:"Toplu Başlık",date:{createDate:"Oluşturma Tarihi",pubDate:"Yayımlanma Tarihi",reviseDate:"Revizyon Tarihi",notavailDate:"Kullanılamama Tarihi",inforceDate:"Yürürlüğe Girme Tarihi",adoptDate:"Benimsenme Tarihi",deprecDate:"İptal Edilme Tarihi",supersDate:"Geçersiz Kılınma Tarihi"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Belirteç",identCode:"Kod",identAuth:"Uzman Alıntısı"},resEd:"Sürüm",resEdDate:"Basım Tarihi",datasetSeries:{seriesName:"Adı",issId:"Sayı",artPage:"Sayfa"},otherCitDet:"Diğer Ayrıntılar",contactCaption:"Alıntı Kişisi"},cntAddress:{caption:"Adres",delPoint:"TeslimNoktası",city:"Şehir",adminArea:"İdari Alan",postCode:"Posta kodu",country:"Ülke",eMailAdd:"E-posta",addressType:{caption:"Adres Tipi",postal:"Posta Kodu",physical:"Fiziksel",both:"İkisi Birden"}},cntOnlineRes:{caption:"Çevrimiçi kaynak",linkage:"URL",protocol:"İletişim Kuralları",appProfile:"Başvuru Profili",orName:"Adı",orDesc:"Tanım"},cntPhone:{caption:"Telefon",voiceNum:"Ses",faxNum:"Faks",tddtty:"TDD/TTY?"},codeRef:{caption:"Belirteç",identCode:"Kod",idCodeSpace:"Kod Alanı",idVersion:"Versiyon",identAuth:"Uzman Alıntısı"},constraints:{caption:"Kısıtlamalar",useLimit:"Kullanım Sınırlaması",general:{caption:"Genel"},legal:{caption:"Yasal Bildirim",accessConsts:"Erişim Kısıtlamaları",useConsts:"Kısıtlama Kullan",othConsts:"Diğer kısıtlamalar"},security:{caption:"Güvenlik",classSys:"Sınıflandırma sistemi",userNote:"Kullanıcı notu",handDesc:"Yürütme Açıklaması"}},contInfo:{caption:"İçerik Bilgileri",section:{CovDesc:"Kapsam Betimlemesi",ImgDesc:"Görüntü Betimlemesi",FetCatDesc:"Özellik Kataloğu"},attDesc:"Öznitelik Tanımlaması",covDim:{caption:"Aralık veya Bant",seqID:"Sıra Tanımlayıcısı",seqIDType:"Sıra Tanımlayıcısı Türü",dimDescrp:"Tanımlayıcı"},RangeDim:{caption:"Aralık boyutu"},Band:{caption:"Bant",minVal:"Minimum Değer",maxVal:"Maksimum Değer",valUnit:"Değer Birimleri",pkResp:"Tepe noktası tepki",bitsPerVal:"Değer Başına Bit",toneGrad:"Tonlama",sclFac:"Ölçek Faktörü",offset:"Öteleme"},CovDesc:{caption:"Kapsam Betimlemesi",section:{description:"Tanım",rangesAndBands:"Aralıklar ve Bantlar"}},ImgDesc:{caption:"Görüntü Betimlemesi",section:{description:"Tanım",rangesAndBands:"Aralıklar ve Bantlar"},illElevAng:"Aydınlatma yükseltme açısı",illAziAng:"Aydınlatma azimut açısı",cloudCovPer:"Bulut Kapsam Yüzdesi",cmpGenQuan:"Sıkıştırma Kalitesi",trianInd:"Üçgenleme Göstergesi?",radCalDatAv:"Radyometrik Kalibrasyon Verileri Kullanılabilirliği?",camCalInAv:"Kamera Kalibrasyon Bilgileri Kullanılabilirliği?",filmDistInAv:"Film Bozulma Bilgileri Kullanılabilirliği?",lensDistInAv:"Mercek Bozulma Bilgileri Kullanılabilirliği?",imagQuCode:"Kalite Kodu",prcTypCde:"İşleme düzey kodu"},FetCatDesc:{caption:"Özellik Kataloğu",section:{description:"Tanım",featureTypes:"Detay Türleri",citation:"Alıntı"},compCode:"ISO 19110 ile Uyumlu mudur?",incWithDS:"Included With Dataset?",catCitation:"Detay Kataloğu Alıntısı",catFetTyps:{caption:"Detay Türü",genericName:"Adı",codeSpace:"Kod Alanı"}}},contact:{caption:"Kişi",section:{name:"İlgili Kişi Adı",info:"Kişi Bilgileri",hoursAndInstructions:"Saat ve Yönergeler"},conditionalName:{caption:"İlgili Kişi Adı",msg:"Birey Adı, Kuruluş Adı veya Pozisyon Adı öğelerinden biri gereklidir.",msg_fgdc:"Birey Adı veya Kuruluş Adı öğelerinden biri gereklidir."},rpIndName:"Birey Adı",rpOrgName:"Kuruluş Adı",rpPosName:"Pozisyon Adı",rpCntInfo:"Kişi Bilgileri",cntHours:"Hizmet saati",cntInstr:"İletişim Talimatları"},distInfo:{caption:"Dağıtım Bilgileri",section:{format:"Biçim",distributor:"Distribütör",transfer:"Aktarım Seçenekleri"},distFormat:{caption:"Dağıtım formatı",formatName:"Format Adı",formatVer:"Format Sürümü",formatAmdNum:"Değişiklik numarası",formatSpec:"Belirtim",fileDecmTech:"Açma Tekniği",formatInfo:"Bilgi İçeriği"},distributor:{caption:"Distribütör"},distTranOps:{caption:"Dijital Aktarım Seçenekleri",section:{unitsAndSize:"Birimler"},unitsODist:"Dağılım birimleri",transSize:"Aktarım Boyutu",offLineMed:{caption:"Çevrimdışı Ortam",medDensity:"Yoğunluk",medDenUnits:"Yoğunluk Birimleri",medVol:"Hacimler",medNote:"Ortam Notu"}},distorOrdPrc:{caption:"Sipariş İşlemi",resFees:"Ücretler",planAvDtTm:"Kullanılabilen Tarih",planAvTmPd:{caption:"Kullanılabilen Tarih Dönemi",tmBegin:"Başlangıç Tarihi/Saati",tmEnd:"Bitiş Tarihi/Saati"},ordInstr:"Sipariş Verme Talimatları",ordTurn:"Devir"}},dqInfo:{caption:"Veri Kalitesi",section:{scope:"Kapsam",report:"Rapor",lineage:"Geçmiş"},dqScope:{section:{level:"Seviye",extent:"Yayılım"},scpLvl:"Kapsam Düzeyi",scpLvlDesc:"Düzey Betimlemesi",scpExt:"Kapsam Yayılımı"},report:{section:{measure:"Ölçüm",evaluation:"Değerlendirme",result:"Sonuç",conformance:"Uyumluluk"},measDesc:"Ölçü Açıklaması",measName:"Ölçü Adı",measDateTm:"Ölçüm Tarihi",measId:"Ölçü Tanımlayıcısı",evalMethDesc:"Değerlendirme yöntemi",evalProc:"Prosedür Alıntısı",ConResult:{caption:"Uyumluluk Sonucu",conExpl:"Açıklama",conSpec:"Belirtim",conPass:{caption:"Derece",_1:"Uyumlu",_0:"Uyumlu Değil"}},QuanResult:{caption:"Niceliksel Sonuç",quanVal:"Değer",quanValType:"Değer Türü",quanValUnit:"Değer Birimleri",errStat:"Hata istatistiği"}},dataLineage:{section:{statement:"İfade",dataSource:"Veri Kaynağı",prcStep:"İşlem adımı"},statement:"Geçmiş Bildirimi",dataSource:{caption:"Veri Kaynağı",section:{description:"Tanım",srcRefSys:"Referans Sistemi",srcExt:"Yayılım",srcCitatn:"Alıntı"},srcDesc:"Kaynak Tanımı",srcScale:{rfDenom:"Ölçek paydası"},srcRefSys:"Kaynak Başvuru Sistemi",srcExt:"Kaynak Alanı",srcCitatn:"Kaynak Alıntısı"},prcStep:{caption:"İşlem adımı",section:{description:"Tanım",stepProc:"İşlemci",stepSrc:"Veri Kaynağı"},stepDesc:"İşlem Açıklaması",stepRat:"Gerekçe",stepDateTm:"Süreç Adımı Tarihi",stepProc:"İşlemci",stepSrc:"Veri Kaynağı"}}},eainfo:{caption:"Varlık ve Öznitelik Bilgileri",section:{detailed:"Ayrıntılar",overview:"Genel Bakış"},detailed:{caption:"Varlık ve Öznitelik Ayrıntıları",section:{enttyp:"Varlık",attr:"Öznitelikler"},enttyp:{caption:"Varlık Tipi",enttypl:"Etiket",enttypt:"Nesne",enttypc:"Sayım",enttypd:"Tanım",enttypds:"Tanım kaynağı"},attr:{caption:"Öznitelik",section:{description:"Tanım",value:"Değer",domain:"Etki Alanı"},attrlabl:"Etiket",attalias:"Takma Ad",attrdef:"Tanım",attrdefs:"Tanım kaynağı",attrtype:"Tür",attwidth:"Genişlik",atprecis:"Hassasiyet",attscale:"Ölçek",atindex:"Dizinlendi",attrvai:{attrva:"Değer Açıklaması",attrvae:"Değer Doğruluğu"},attrmfrq:"Değer Ölçüm Frekansı",begdatea:"Değerlerin başlangıç tarihi",enddatea:"Değerlerin bitiş tarihi",attrdomv:{caption:"Etki Alanı",edom:{caption:"Numaralandırılmış",edomv:"Değer",edomvd:"Tanım",edomvds:"Tanım kaynağı"},rdom:{caption:"Aralık",rdommin:"Minimum Değer",rdommax:"Maksimum Değer",rdommean:"Ortalama",rdomstdv:"Standart Sapma",attrunit:"Birimler",attrmres:"Ölçüm çözünürlüğü"},codesetd:{caption:"Kod Kümesi",codesetn:"Adı",codesets:"Kaynak"},udom:{caption:"Temsil Edilemeyen"}}}},overview:{caption:"Genel Bakış",eaover:"Özet",eadetcit:"Alıntı"}},extent:{caption:"Yayılım",section:{description:"Tanım",geographic:"Coğrafi",temporal:"Zamansal",vertical:"Dikey"},exDesc:"Yayılım Açıklaması",geoEle:{caption:"Coğrafi Yayılım",GeoBndBox:{caption:"Kapsayan Kutu",esriExtentType:"Yayılım arama için kullanılsın mı?",exTypeCode:"Alan kaynağı içeriyor mu?",westBL:"Meridyen Batı Sınırı",eastBL:"Meridyen Doğu Sınırı",southBL:"Paralel Güney Sınırı",northBL:"Paralel Kuzey Sınırı"},GeoDesc:{caption:"Coğrafi Açıklama",exTypeCode:"Açıklama, kaynağı içeriyor mu?",identCode:"Kod"}},tempEle:{caption:"Geçici Yayılım",TM_Period:"Zaman Aralığı",TM_Instant:"Zaman Anı",tmPosition:"Tarih",tmBegin:"Başlangıç Tarihi",tmEnd:"Bitiş Tarihi"},vertEle:{caption:"Dikey yayılım",vertMinVal:"Minimum Değer",vertMaxVal:"Maksimum Değer"}},graphOver:{caption:"Grafiğe göz at",bgFileName:"Grafik URL'sine Gözat",bgFileDesc:"Grafik Açıklamasına Gözat",bgFileType:"Gözatma Grafiği Dosya Türü"},keywords:{caption:"Anahtar Kelimeler",section:{topicCategory:"Konu Başlığı",searchKeys:"Etiketler",themeKeys:"Tema",placeKeys:"Yer",tempKeys:"Zamansal",discKeys:"Disiplin",stratKeys:"Katman",productKeys:"Ürün",subTopicCatKeys:"Alt Konu Başlığı",otherKeys:"Diğer"},delimited:"Anahtar Kelimeler",searchKeys:"Etiketler",themeKeys:"Tema anahtar sözcükleri",placeKeys:"Anahtar sözcükleri yerleştir",tempKeys:"Zamansal anahtar sözcükler",discKeys:"Disiplin anahtar sözcükleri",stratKeys:"Katman anahtar sözcükleri",productKeys:"Ürün anahtar sözcükleri",subTopicCatKeys:"Alt Başlık Anahtar Sözcükleri",otherKeys:"Diğer anahtar sözcükler",thesaName:"Eşanlamlı Sözlük Alıntısı",thesaLang:"Eşanlamlı Sözlük Dili",gemet:"Arama"},locales:{caption:"Bölgeler",locale:"Yerel",resTitle:"Başlık",idAbs:"Özet"},maintenance:{caption:"Bakım",section:{frequency:"Frekans",scope:"Kapsam",note:"Not"},usrDefFreq:"Özel Frekans",dateNext:"Sonraki Güncelleme",maintScp:"Güncelleme Kapsamı",upScpDesc:{caption:"Kapsam açıklaması",attribSet:"Öznitelikler",attribIntSet:"Öznitelik örnekleri",featSet:"Özellikler",featIntSet:"Detay örnekleri",datasetSet:"Veri Kümesi",other:"Diğer Örnekler"},maintNote:"Bakım Notu",maintCont:"Bakım İlgili Kişisi"},metadata:{section:{profile:"Profil",details:"Kapsam"},mdFileID:"Dosya Tanıtıcısı",mdParentID:"Üst belirteç",datasetURI:"Veriseti URI'si",dataSetFn:"Veri Kümesi İşlevi",mdDateSt:"Meta veri Tarihi",mdTimeSt:"Meta Veri Zamanı",mdLang:"Meta Veri Dili",mdChar:"Karakter kümesi",mdHrLv:"Hiyerarşi Düzeyi",mdHrLvName:"Hiyerarşi Düzeyi Adı",mdContact:"Meta veri iletişimi",mdMaint:"Meta veri Bakımı",mdConst:"Meta veri kısıtlamaları"},porCatInfo:{caption:"Betimleme Alıntısı"},refSysInfo:{caption:"Mekansal Kaynak"},resource:{section:{citation:"Alıntı",details:"Ayrıntılar",description:"Tanım",keywords:"Anahtar Kelimeler",status:"Durum",resolution:"Çözünürlük",representation:"Gösterim",browse:"Grafiğe göz at",format:"Biçim",usage:"Kullanım",aggregateInfo:"Toplama",additional:"Ek"},idAbs:"Açıklama (Özetçe)",idPurp:"Özet (Amaç)",suppInfo:"Ek bilgiler",idCredit:"Katkı Yapanlar",envirDesc:"İşleme Ortamı",dataLang:"Kaynak Dil",dataExt:"Kaynak Yayılımı",idPoC:"İletişim noktası",resMaint:"Kaynak bakımı",resConst:"Kaynak kısıtlamaları",dsFormat:"Kaynak Biçimi",dataScale:{caption:"Veri Ölçeği",equScale:"Ölçek Çözünürlüğü",scaleDist:"Mesafe Çözünürlüğü",scaleDist_value:"Mesafe"},idSpecUse:{caption:"Kaynak Kullanımı",specUsage:"Özel Kullanım",usageDate:"Kullanım Tarihi",usrDetLim:"Sınırlamalar",usrCntInfo:"Kullanım Kişisi"}},service:{caption:"Servis",svType:"Hizmet Türü",svType_Name:"Adı",svAccProps:"Erişim özellikleri",svCouplRes:{caption:"Bağlaştırılmış Kaynak",svOpName:"İşlem adı",svResCitId:"Kaynak belirteci"},svCoupleType:"Bağlaşım türü"},scaleRange:{caption:"Ölçek Aralığı",maxScale:"Maksimum Ölçek",minScale:"Minimum Ölçek"},spatRepInfo:{caption:"Mekansal Gösterim",section:{dimension:"Boyut",parameters:"Parametreler"},numDims:"Boyut sayısı",tranParaAv:"Dönüşüm Parametresi Kullanılabilirliği?",axisDimension:{caption:"Boyut",dimSize:"Boyut",dimResol:{caption:"Çözünürlük",_value:"Çözünürlük Değeri",uom:"Çözünürlük Birimleri"}},VectSpatRep:{caption:"Vektör",geometObjs:"Geometrik nesneler",geoObjCnt:"Nesne Sayısı"},GridSpatRep:{caption:"Kılavuz"},Georect:{caption:"Coğrafi Olarak Düzeltilmiş",section:{centerPoint:"Merkez Nokta",cornerPts:"Köşe Noktaları"},chkPtAv:"Denetim Noktası Kullanılabilirliği?",chkPtDesc:"Denetim noktası betimlemesi",ptInPixel:"Piksel olarak nokta",transDimDesc:"Dönüşüm boyutu betimlemesi",transDimMap:"Dönüşüm Boyut Eşlemesi",cornerPts:{caption:"Köşe Noktası",pos:"Konum",gmlDesc:"Tanım",gmlDescRef:"Referans",gmlIdent:"Belirteç",codeSpace:"Tanıtıcı Kod Alanı"}},Georef:{caption:"Coğrafi Başvuru Yapılabilen",ctrlPtAv:"Kontrol Noktası Kullanılabilirliği?",orieParaAv:"Yön Parametresi Kullanılabilirliği?",orieParaDs:"Yönelim parametresi betimlemesi",georefPars:"Coğrafi Referanslanan Parametreler",paraCit:"Parametre Alıntısı"},Indref:{caption:"Dolaylı"}},booleanOptions:{_false:"Hayır",_true:"Evet"},codelist:{CountryCode:"Ülke",LanguageCode:"Dil",MonetaryUnits:"Finansal Birimler",MonetaryUnits_empty:"Evrensel bir para birimi yok",PresentationForm:"FGDC Coğrafi Mekansal Veri Sunum Biçimi",CI_PresentationFormCode:"Sunum Biçimi",CI_RoleCode:"Rol",CI_OnLineFunctionCode:"Fonksiyon",IMS_ContentType:"İçerik Tipi",DQ_ElementDimension:"Boyut",DQ_ElementType:"Rapor Tipi",DQ_EvaluationMethodTypeCode:"Değerlendirme Türü",DS_AssociationTypeCode:"İlişkilendirme türü",DS_InitiativeTypeCode:"Girişim türü",LI_SourceType:"Kaynak Tipi",MD_CellGeometryCode:"Hücre geometrisi",MD_CharacterSetCode:"Karakter kümesi",MD_ClassificationCode:"Sınıflandırma",MD_CoverageContentTypeCode:"İçerik Tipi",MD_DimensionNameTypeCode:"Boyut Türü",MD_GeometricObjectTypeCode:"Geometrik Nesne Türü",MD_ImagingConditionCode:"Görüntüleme Durumu",MD_MaintenanceFrequenceCode:"Güncelleme Sıklığı",MD_MediumFormatCode:"Format Kodu",MD_MediumNameCode:"Ortam adı",MD_PixelOrientationCode:"Piksel Yönü",MD_ProgressCode:"Durum",MD_RestrictionCode:"Kısıtlama Kodu",MD_ScopeCode:"Kapsam",MD_SpatialRepresentationTypeCode:"Mekansal gösterim tipi",MD_TopicCategoryCode:"Başlık Kategorisi",MD_TopologyLevelCode:"Topoloji Düzeyi",RS_Dimension:"Boyut",SV_CouplingType:"Bağlaşım türü",UCUM:"Birimler",UCUM_Length:"Mesafe Birimleri",RS_UseLimitations:"Sınırlamaları Kullan",RS_AccessConstraints:"Erişim Kısıtlamaları"}});