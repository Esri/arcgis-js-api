// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Hiçbiri",notComplete:"Tamamlanmadı",other:"Diğer",present:"Mevcut",unknown:"Bilinmiyor",unpublishedMaterial:"Yayınlanmayan malzeme"},hints:{integerGreaterThanOne:"(> 1 koşulunu sağlayan bir tamsayı girin)",integer0To100:"(0 - 100 arasında bir tamsayı girin)"},citeinfo:{caption:"Alıntı Bilgileri",origin:"Düzenleyen",pubdate:"Yayımlanma Tarihi",pubtime:"Yayımlanma Saati",title:"Başlık",edition:"Sürüm",geoform:{caption:"Coğrafi Mekansal Veri Sunma Formu",atlas:"Atlas",audio:"Ses",diagram:"Diyagram",sDocument:"Belge",globe:"Küre",map:"Harita",model:"Model",multiMediaPresentation:"Multimedya sunumu",profile:"Profil",rasterDigitalData:"Raster dijital verileri",remoteSensingImage:"Uzaktan algılama görüntüsü",section:"Bölüm",spreadsheet:"Hesap Tablosu",tabularDigitalData:"Sekmeli dijital veriler",vectorDigitalData:"Vektör dijital verileri",video:"Video",view:"Görüntüle"},serinfo:{caption:"Dizi Bilgileri",sername:"Dizi Adı",issue:"Sorun Kimliği"},pubinfo:{caption:"Yayımlanma Bilgileri",pubplace:"Yayımlanma Yeri",publish:"Yayımcı"},othercit:"Diğer alıntı ayrıntıları",onlink:"Çevrimiçi Bağlantı (URL)"},cntinfo:{caption:"Kişi Bilgileri",section:{primary:"Birincil",phoneAndEmail:"Telefon ve E-posta",hoursAndInstructions:"Saat ve Yönergeler"},cntorgp:{caption:"Kuruluşa göre",cntorg:"Organizasyon",cntper:"İnsan"},cntperp:{caption:"Kişiye göre",cntper:"İnsan",cntorg:"Organizasyon"},cntpos:"Konum",cntaddr:{caption:"Adres",addrtype:{caption:"Adres Tipi",mailing:"Posta Gönderme",physical:"Fiziksel",mailingAndPhysical:"Elektronik ve Fiziksel Posta"},address:"Adres",city:"Şehir",state:"Eyalet",postal:"Posta kodu",country:"Ülke"},cntvoice:"Ses",cnttdd:"TDD/TTY Telefonu (işitme engelli)",cntfax:"Faks",cntemail:"E-posta Adresi",hours:"Saat",cntinst:"Talimatlar"},dataqual:{caption:"Veri Kalitesi Bilgileri",section:{attributeAccuracy:"Öznitelik Doğruluğu",logicalConsistency:"Mantıksal Tutarlılık",completeness:"Eksiksizlik Durumu",positionalAccuracy:"Konumsal Doğruluk",lineage:"Geçmiş",cloudCover:"Bulut Kabı"},attracc:{caption:"Öznitelik Doğruluğu",attraccr:"Öznitelik Doğruluğu Raporu",qattracc:{caption:"Niceliksel Öznitelik Doğruluk Değerlendirmesi",attraccv:"Öznitelik Doğruluk Değeri",attracce:"Öznitelik Doğruluğu Açıklaması"}},logic:"Mantıksal Tutarlılık Raporu",complete:"Tamamlanma Raporu",posacc:"Konumsal Doğruluk",horizpa:{caption:"Yatay Konum Doğruluğu",horizpar:"Yatay Konum Doğruluğu Raporu",qhorizpa:{caption:"Niceliksel Yatay Konumsal Doğruluk Değerlendirmesi",horizpav:"Yatay Konum Doğruluğu Değeri",horizpae:"Yatay Konum Doğruluğu Açıklaması"}},vertacc:{caption:"Dikey Konumsal Doğruluk",vertaccr:"Dikey Konumsal Doğruluk Raporu",qvertpa:{caption:"Niceliksel Dikey Konumsal Doğruluk Değerlendirmesi",vertaccv:"Dikey Konumsal Doğruluk Değeri",vertacce:"Dikey Konumsal Doğruluk Açıklaması"}},lineage:{caption:"Geçmiş"},srcinfo:{caption:"Kaynak Bilgileri",srccite:"Kaynak Alıntısı",srcscale:"Kaynak Ölçek Paydası",typesrc:{caption:"Kaynak Medyanın Türü",paper:"Kağıt",stableBaseMaterial:"Sabit tabanlı malzeme",microfiche:"Mikrofiş",microfilm:"Mikrofilm",audiocassette:"Ses kaseti",chart:"Grafik",filmstrip:"Film şeridi",transparency:"Saydamlık",videocassette:"Video kaset",videodisc:"Video diski",videotape:"Video bandı",physicalModel:"Fiziksel model",computerProgram:"Bilgisayar programı",disc:"Disk",cartridgeTape:"Kartuş bandı",magneticTape:"Manyetik bant",online:"Çevrimiçi",cdrom:"CD-ROM",electronicBulletinBoard:"Elektronik bülten panosu",electronicMailSystem:"Elektronik posta sistemi"},srctime:"İçeriğin Kaynak Zaman Dönemi",srccurr:"Kaynak Geçerlilik Başvurusu",srccitea:"Kaynak Alıntısı Kısaltması",srccontr:"Kaynak Katkısı"},procstep:{caption:"İşlem adımı",procdesc:"İşlem Açıklaması",srcused:"Kaynağın Kullandığı Alıntı Kısaltması",procdate:"İşlem Tarihi",proctime:"İşlem Saati",srcprod:"Kaynağın Ürettiği Alıntı Kısaltması",proccont:"İşlem iletişimi"},cloud:"Bulut Kabı"},distinfo:{caption:"Dağıtım Bilgileri",section:{distributor:"Distribütör",description:"Tanım",orderProcess:"Sipariş İşlemi",prerequisites:"Ön Koşullar",availability:"Yararlanırlık"},distrib:"Distribütör",resdesc:{caption:"Kaynak Betimlemesi",liveData:"Canlı Veriler ve Haritalar",downloadableData:"İndirilebilir Veriler",offlineData:"Çevrimdışı Veriler",staticMapImages:"Statik Harita Görüntüleri",sDocument:"Diğer Belgeler",application:"Uygulamalar",geographicService:"Coğrafi Servisler",clearingHouse:"Takas odaları",mapFiles:"Harita Dosyaları",geographicActivies:"Coğrafi Etkinlikler"},distliab:"Dağıtım Yükümlülüğü İfadesi",custom:"Özel Sipariş İşlemi",techpreq:"Teknik Önkoşullar",availabl:"Yararlanırlık"},eainfo:{caption:"Varlık ve Öznitelik Bilgileri",overview:"Genel Bakış Betimlemesi",eaover:"Varlık ve Özniteliğe Genel Bakış",eadetcit:"Varlık ve Öznitelik Ayrıntı Alıntısı"},idinfo:{caption:"Kimlik Bilgileri",section:{timeAndStatus:"Saat ve Durum",constraints:"Kısıtlamalar",contact:"Kişi",additional:"Ek"},citeinfo:"Alıntı",descript:{caption:"Tanım",sAbstract:"Özet",purpose:"Amaç",supplinf:"Ek bilgiler"},timeperd:{caption:"İçeriğin Zaman Periyodu",current:{caption:"Güncellik Kaynağı",groundCondition:"Temel Koşul",publicationDate:"Yayımlanma Tarihi"}},status:{caption:"Durum",progress:{caption:"İşlem",complete:"Tamam",inWork:"Çalışmada",planned:"Planlı"},update:{caption:"Bakım ve Güncelleme Sıklığı",continual:"Sürekli",daily:"Günlük",weekly:"Haftalık",monthly:"Aylık",annually:"Yıllık",unknown:"Bilinmiyor",asNeeded:"Gerektiğinde",irregular:"Düzensiz",nonePlanned:"Planlı değil"}},spdom:{caption:"Yayılım",bounding:{caption:"Sınırlayıcı Koordinatlar",westbc:"Meridyen Batı Sınırı",eastbc:"Meridyen Doğu Sınırı",northbc:"Paralel Kuzey Sınırı",southbc:"Paralel Güney Sınırı"}},keywords:{caption:"Anahtar Kelimeler",theme:"Tema",place:"Yer",stratum:"Katman",temporal:"Zamansal",thesaursus:"İlişkili Eşanlamlı Sözlüğü",delimited:"Anahtar Kelimeler",themektIsoTopicCategory:"ISO Konu Başlığı...",themektIsoTopicDialog:"ISO Konu Başlığı",placektGnis:"Coğrafi Ad Bilgi Sistemi"},accconst:"Erişim Kısıtlamaları",useconst:"Kısıtlama Kullan",ptcontac:"Kaynak Temas Noktası",browse:{caption:"Grafiğe göz at",browsen:"Grafik URL'sine Gözat",browsed:"Grafik Dosyası Açıklamasına Göz at",browset:"Gözatma Grafiği Dosya Türü"},datacred:"Veri Kümesi Kredisi",secinfo:{caption:"Güvenlik Bilgileri",secsys:"Güvenlik Sınıflandırması Sistemi",secclass:{caption:"Güvenlik Sınıflandırması",topSecret:"Çok gizli",secret:"Gizli",confidential:"gizli",restricted:"Yönlendirilmiş",unclassified:"Sınıflandırılmamış",sensitive:"Hassas"},sechandl:"Güvenlik İşleme Açıklaması"},sNative:"Yerel Veri Kümesi Ortamı",crossref:"Çapraz Kaynak"},metadata:{idinfo:"Kimlik",dataqual:"Kalite",spdoinfo:"Uzamsal Veri Kuruluşu",spref:"Mekansal Kaynak",eainfo:"Varlık ve Öznitelik",distinfo:"Dağılım",metainfo:"Meta veriler"},metainfo:{caption:"Metaveri Bilgileri",section:{dates:"Meta Veri Tarihleri",contact:"Meta veri iletişimi",standard:"Meta Veri Standardı",additional:"Ek"},metd:"Meta veri Tarihi",metrd:"Meta veri İnceleme Tarihi",metfrd:"Metaveri Gelecek İnceleme Tarihi",metstdn:"Meta veri Standart Adı",metstdv:"Meta veri Standart Sürümü",metac:"Meta veri Erişim Kısıtlamaları",metuc:"Meta veri Kullanım Kısıtlamaları",metsi:{caption:"Meta veri Güvenlik Bilgileri",metscs:"Meta veri Güvenlik Sınıflandırma Sistemi",metsc:"Meta veri Güvenlik Sınıflandırması",metshd:"Meta veri Güvenlik Yürütme Açıklaması"}},spref:{caption:"Mekansal Başvuru Bilgileri",horizsys:{caption:"Yatay Koordinat Sistemi",geograph:{caption:"Coğrafi",latres:"Enlem Çözünürlüğü",longres:"Boylam Çözünürlüğü",geogunit:{caption:"Coğrafi Koordinat Birimleri",decimalDegrees:"Ondalık derece",decimalMinutes:"Ondalık dakika",decimalSeconds:"Ondalık saniye",degreesAndDecimalMinutes:"Derece ve ondalık dakika",degreesMinutesAndDecimalSeconds:"Derece, dakika ve ondalık saniye",radians:"Radyan",grads:"Gradyan"}},planar:{caption:"Düzlemsel"},local:{caption:"Yerel Hükümet",localdes:"Yerel Açıklama",localgeo:"Yerel Coğrafi Kaynak Bilgileri"},geodetic:{caption:"Jeodezik Model",horizdn:{caption:"Yatay Veri Adı",nad83:"1983 Kuzey Amerika Verileri",nad27:"1927 Kuzey Amerika Verileri"},ellips:{caption:"Elipsoid Adı",grs80:"Jeodezik Başvuru Sistemi 80",clarke1866:"Clarke 1866"},semiaxis:"Yarı büyük eksen",denflat:"Yassıltma oranı paydası"}},vertdef:{caption:"Dikey Koordinat Sistemi",altsys:{caption:"Rakım Sistemi",altdatum:{caption:"Rakım Verisi Adı",navd88:"1988 Kuzey Amerika Dikey Verileri",ngvd29:"1929 Ulusal Jeodezik Dikey Verileri"},altres:"Rakım Çözünürlüğü",altunits:{caption:"Rakım Mesafesi Birimleri",meters:"Metre",feet:"Fit"},altenc:{caption:"Rakım Kodlama Yöntemi",explicit:"Yatay koordinatlarla birlikte verilen açık yükselti koordinatı",implicit:"Örtük koordinat",attribute:"Öznitelik değerleri"}},depthsys:{caption:"Derinlik Sistemi",depthdn:{caption:"Derinlik Verisi Adı",option1:"Yerel yüzey",option2:"Grafik veriler; sondaj küçük resim verileri",option3:"En düşük astronomik dalga",option4:"En yüksek astronomik dalga",option5:"Düşük su düzeyi orta değeri",option6:"Yüksek su düzeyi orta değeri",option7:"Deniz düzeyi orta değeri",option8:"Arazi anket verileri",option9:"Düşük su kaynağı orta değeri",option10:"Yüksek su kaynağı orta değeri",option11:"Düşük gelgit orta değeri",option12:"Yüksek gelgit orta değeri",option13:"Daha düşük su düzeyi orta değeri",option14:"Daha düşük su kaynağı orta değeri",option15:"Daha yüksek su düzeyi orta değeri",option16:"Daha yüksek düşük su düzeyi orta değeri",option17:"Daha düşük yüksek su düzeyi orta değeri",option18:"Su Kaynağı gelgiti",option19:"Tropik daha düşük su düzeyi",option20:"Küçük gelgit",option21:"Yüksek su düzeyi",option22:"Daha yüksek yüksek su düzeyi",option23:"Düşük su düzeyi",option24:"Düşük su düzeyi verileri",option25:"En düşük düşük su düzeyi",option26:"Daha düşük düşük su düzeyi",option27:"En düşük normal düşük su düzeyi",option28:"Gelgit düzeyi orta değeri",option29:"Yerli su kaynağı düşük su düzeyi",option30:"Yüksek su düzeyi dolu ve etkin",option31:"Düşük su düzeyi dolu ve etkin",option32:"Columbia River verileri",option33:"Körfez Kıyısı düşük su düzeyi verileri",option34:"Ekvatoral su kaynağı düşük su düzeyi",option35:"Yaklaşık en düşük astronomik dalga",option36:"Düzeltme yok"},depthres:"Derinlik Çözünürlüğü",depthdu:{caption:"Derinlik Uzaklık Birimleri",meters:"Metre",feet:"Fit"},depthem:{caption:"Derinlik Kodlama Yöntemi",explicit:"Yatay koordinatlarla birlikte verilen açık derinlik koordinatı",implicit:"Örtük koordinat",attribute:"Öznitelik değerleri"}}}},timeinfo:{caption:"Zaman Dönemi Bilgileri",sngdate:"Tek Tarih",mdattim:"Birden Çok Tarih",rngdates:"Tarih Aralığı",caldate:"Tarih",time:"Zaman",begdate:"Başlangıç Tarihi",begtime:"Başlangıç Zamanı",enddate:"Bitiş Tarihi",endtime:"Bitiş Saati"}});