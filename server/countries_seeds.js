require('dotenv').config();
require('./config/database');
var Country = require('./models/country');

Country.remove({})
  .then(function(){
    var AE = new Country({
      name: 'United Arab Emirates'
    });
    var AF = new Country({
      name: 'Afghanistan'
    });
    var AL = new Country({
      name: 'Albania'
    });
    var AM = new Country({
      name: 'Armenia'
    });
    var AO = new Country({
      name: 'Angola'
    });
    var AR = new Country({
      name: 'Argentina'
    });
    var AT = new Country({
      name: 'Austria'
    });
    var AU = new Country({
      name: 'Australia'
    });
    var AZ = new Country({
      name: 'Azerbaijan'
    });
    var BA = new Country({
      name: 'Bosnia'
    });
    var BD = new Country({
      name: 'Bangladesh'
    });
    var BE = new Country({
      name: 'Belgium'
    });
    var BF = new Country({
      name: 'Burkina Faso'
    });
    var BG = new Country({
      name: 'Bulgaria'
    });
    var BI = new Country({
      name: 'Burundi'
    });
    var BJ = new Country({
      name: 'Benin'
    });
    var BN = new Country({
      name: 'Brunei Darussalam'
    });
    var BO = new Country({
      name: 'Bolivia'
    });
    var BR = new Country({
      name: 'Brazil'
    });
    var BS = new Country({
      name: 'Bahamas'
    });
    var BT = new Country({
      name: 'Bhutan'
    });
    var BW = new Country({
      name: 'Botswana'
    });
    var BY = new Country({
      name: 'Belarus'
    });
    var BZ = new Country({
      name: 'Belize'
    });
    var CA = new Country({
      name: 'Canada'
    });
    var CD = new Country({
      name: 'Democratic Republic of Congo'
    });
    var CF = new Country({
      name: 'Central African Republic'
    });
    var CG = new Country({
      name: 'Republic of Congo'
    });
    var CH = new Country({
      name: 'Switzerland'
    });
    var CI = new Country({
      name: 'Côte d\'Ivoire'
    });
    var CL = new Country({
      name: 'Chile'
    });
    var CM = new Country({
      name: 'Cameroon'
    });
    var CN = new Country({
      name: 'China'
    });
    var CO = new Country({
      name: 'Colombia'
    });
    var CR = new Country({
      name: 'Costa Rica'
    });
    var CU = new Country({
      name: 'Cuba'
    });
    var CY = new Country({
      name: 'Cyprus'
    });
    var CZ = new Country({
      name: 'Czech Republic'
    });
    var DE = new Country({
      name: 'Germany'
    });
    var DJ = new Country({
      name: 'Djibouti'
    });
    var DK = new Country({
      name: 'Denmark'
    });
    var DO = new Country({
      name: 'Dominican Republic'
    });
    var DZ = new Country({
      name: 'Algeria'
    });
    var EC = new Country({
      name: 'Ecuador'
    });
    var EE = new Country({
      name: 'Estonia'
    });
    var EG = new Country({
      name: 'Egypt'
    });
    var EH = new Country({
      name: 'Western Sahara'
    });
    var ER = new Country({
      name: 'Eritrea'
    });
    var ES = new Country({
      name: 'Spain'
    });
    var ET = new Country({
      name: 'Ethiopia'
    });
    var FK = new Country({
      name: 'Falkland Islands'
    });
    var FI = new Country({
      name: 'Finland'
    });
    var FJ = new Country({
      name: 'Fiji'
    });
    var FR = new Country({
      name: 'France'
    });
    var GA = new Country({
      name: 'Gabon'
    });
    var GB = new Country({
      name: 'United Kingdom'
    });
    var GE = new Country({
      name: 'Georgia'
    });
    var GF = new Country({
      name: 'French Guiana'
    });
    var GH = new Country({
      name: 'Ghana'
    });
    var GL = new Country({
      name: 'Greenland'
    });
    var GM = new Country({
      name: 'Gambia'
    });
    var GN = new Country({
      name: 'Guinea'
    });
    var GQ = new Country({
      name: 'Equatorial Guinea'
    });
    var GR = new Country({
      name: 'Greece'
    });
    var GT = new Country({
      name: 'Guatemala'
    });
    var GW = new Country({
      name: 'Guinea-Bissau'
    });
    var GY = new Country({
      name: 'Guyana'
    });
    var HN = new Country({
      name: 'Honduras'
    });
    var HR = new Country({
      name: 'Croatia'
    });
    var HT = new Country({
      name: 'Haiti'
    });
    var HU = new Country({
      name: 'Hungary'
    });
    var ID = new Country({
      name: 'Indonesia'
    });
    var IE = new Country({
      name: 'Ireland'
    });
    var IL = new Country({
      name: 'Israel'
    });
    var IN = new Country({
      name: 'India'
    });
    var IQ = new Country({
      name: 'Iraq'
    });
    var IR = new Country({
      name: 'Iran'
    });
    var IS = new Country({
      name: 'Iceland'
    });
    var IT = new Country({
      name: 'Italy'
    });
    var JM = new Country({
      name: 'Jamaica'
    });
    var JO = new Country({
      name: 'Jordan'
    });
    var JP = new Country({
      name: 'Japan'
    });
    var KE = new Country({
      name: 'Kenya'
    });
    var KG = new Country({
      name: 'Kyrgyzstan'
    });
    var KH = new Country({
      name: 'Cambodia'
    });
    var KP = new Country({
      name: 'North Korea'
    });
    var KR = new Country({
      name: 'South Korea'
    });
    var KX = new Country({
      name: 'Kosovo'
    });
    var KW = new Country({
      name: 'Kuwait'
    });
    var KZ = new Country({
      name: 'Kazakhstan'
    });
    var LA = new Country({
      name: 'Lao People\'s Democratic Republic'
    });
    var LB = new Country({
      name: 'Lebanon'
    });
    var LK = new Country({
      name: 'Sri Lanka'
    });
    var LR = new Country({
      name: 'Liberia'
    });
    var LS = new Country({
      name: 'Lesotho'
    });
    var LT = new Country({
      name: 'Lithuania'
    });
    var LU = new Country({
      name: 'Luxembourg'
    });
    var LV = new Country({
      name: 'Latvia'
    });
    var LY = new Country({
      name: 'Libya'
    });
    var MA = new Country({
      name: 'Morocco'
    });
    var MD = new Country({
      name: 'Moldova'
    });
    var ME = new Country({
      name: 'Montenegro'
    });
    var MG = new Country({
      name: 'Madagascar'
    });
    var MK = new Country({
      name: 'Macedonia'
    });
    var ML = new Country({
      name: 'Mali'
    });
    var MM = new Country({
      name: 'Myanmar'
    });
    var MN = new Country({
      name: 'Mongolia'
    });
    var MR = new Country({
      name: 'Mauritania'
    });
    var MW = new Country({
      name: 'Malawi'
    });
    var MX = new Country({
      name: 'Mexico'
    });
    var MY = new Country({
      name: 'Malaysia'
    });
    var MZ = new Country({
      name: 'Mozambique'
    });
    var NA = new Country({
      name: 'Namibia'
    });
    var NC = new Country({
      name: 'New Caledonia'
    });
    var NE = new Country({
      name: 'Niger'
    });
    var NG = new Country({
      name: 'Nigeria'
    });
    var NI = new Country({
      name: 'Nicaragua'
    });
    var NL = new Country({
      name: 'Netherlands'
    });
    var NO = new Country({
      name: 'Norway'
    });
    var NP = new Country({
      name: 'Nepal'
    });
    var NZ = new Country({
      name: 'New Zealand'
    });
    var OM = new Country({
      name: 'Oman'
    });
    var PA = new Country({
      name: 'Panama'
    });
    var PE = new Country({
      name: 'Peru'
    });
    var PG = new Country({
      name: 'Papau New Guinea'
    });
    var PH = new Country({
      name: 'Philippines'
    });
    var PK = new Country({
      name: 'Pakistan'
    });
    var PL = new Country({
      name: 'Poland'
    });
    var PR = new Country({
      name: 'Puerto Rico'
    });
    var PS = new Country({
      name: 'Palestinian Territories'
    });
    var PT = new Country({
      name: 'Portugal'
    });
    var PY = new Country({
      name: 'Paraguay'
    });
    var QA = new Country({
      name: 'Qatar'
    });
    var RO = new Country({
      name: 'Romania'
    });
    var RS = new Country({
      name: 'Serbia'
    });
    var RU = new Country({
      name: 'Russia'
    });
    var RW = new Country({
      name: 'Rwanda'
    });
    var SA = new Country({
      name: 'Saudi Arabia'
    });
    var SB = new Country({
      name: 'Solomon Islands'
    });
    var SD = new Country({
      name: 'Sudan'
    });
    var SE = new Country({
      name: 'Sweden'
    });
    var SI = new Country({
      name: 'Slovenia'
    });
    var SJ = new Country({
      name: 'Svalbard and Jan Mayen'
    });
    var SK = new Country({
      name: 'Slovakia'
    });
    var SL = new Country({
      name: 'Sierra Leone'
    });
    var SN = new Country({
      name: 'Senegal'
    });
    var SO = new Country({
      name: 'Somalia'
    });
    var SR = new Country({
      name: 'Suriname'
    });
    var SS = new Country({
      name: 'South Sudan'
    });
    var SV = new Country({
      name: 'El Salvador'
    });
    var SY = new Country({
      name: 'Syria'
    });
    var SZ = new Country({
      name: 'Swaziland'
    });
    var TD = new Country({
      name: 'Chad'
    });
    var TF = new Country({
      name: 'French Southern and Antarctic Lands'
    });
    var TG = new Country({
      name: 'Togo'
    });
    var TH = new Country({
      name: 'Thailand'
    });
    var TJ = new Country({
      name: 'Tajikistan'
    });
    var TL = new Country({
      name: 'Timor-Leste'
    });
    var TM = new Country({
      name: 'Turkmenistan'
    });
    var TN = new Country({
      name: 'Tunisia'
    });
    var TR = new Country({
      name: 'Turkey'
    });
    var TT = new Country({
      name: 'Trinidad and Tobago'
    });
    var TW = new Country({
      name: 'Taiwan'
    });
    var TZ = new Country({
      name: 'Tanzania'
    });
    var UA = new Country({
      name: 'Ukraine'
    });
    var UG = new Country({
      name: 'Uganda'
    });
    var US = new Country({
      name: 'United States'
    });
    var UY = new Country({
      name: 'Uruguay'
    });
    var UZ = new Country({
      name: 'Uzbekistan'
    });
    var VE = new Country({
      name: 'Venezuela'
    });
    var VN = new Country({
      name: 'Vietnam'
    });
    var VU = new Country({
      name: 'Vanuatu'
    });
    var YE = new Country({
      name: 'Yemen'
    });
    var ZA = new Country({
      name: 'South Africa'
    });
    var ZM = new Country({
      name: 'Zambia'
    });
    var ZW = new Country({
      name: 'Zimbabwe'
    });
    return Promise.all([
      AE.save(),
      AF.save(),
      AL.save(),
      AM.save(),
      AO.save(),
      AR.save(),
      AT.save(),
      AU.save(),
      AZ.save(),
      BA.save(),
      BD.save(),
      BE.save(),
      BF.save(),
      BG.save(),
      BI.save(),
      BJ.save(),
      BN.save(),
      BO.save(),
      BR.save(),
      BS.save(),
      BT.save(),
      BW.save(),
      BY.save(),
      BZ.save(),
      CA.save(),
      CD.save(),
      CF.save(),
      CG.save(),
      CH.save(),
      CI.save(),
      CL.save(),
      CM.save(),
      CN.save(),
      CO.save(),
      CR.save(),
      CU.save(),
      CY.save(),
      CZ.save(),
      DE.save(),
      DJ.save(),
      DK.save(),
      DO.save(),
      DZ.save(),
      EC.save(),
      EE.save(),
      EG.save(),
      EH.save(),
      ER.save(),
      ES.save(),
      ET.save(),
      FK.save(),
      FI.save(),
      FJ.save(),
      FR.save(),
      GA.save(),
      GB.save(),
      GE.save(),
      GF.save(),
      GH.save(),
      GL.save(),
      GM.save(),
      GN.save(),
      GQ.save(),
      GR.save(),
      GT.save(),
      GW.save(),
      GY.save(),
      HN.save(),
      HR.save(),
      HT.save(),
      HU.save(),
      ID.save(),
      IE.save(),
      IL.save(),
      IN.save(),
      IQ.save(),
      IR.save(),
      IS.save(),
      IT.save(),
      JM.save(),
      JO.save(),
      JP.save(),
      KE.save(),
      KG.save(),
      KH.save(),
      KP.save(),
      KR.save(),
      KX.save(),
      KW.save(),
      KZ.save(),
      LA.save(),
      LB.save(),
      LK.save(),
      LR.save(),
      LS.save(),
      LT.save(),
      LU.save(),
      LV.save(),
      LY.save(),
      MA.save(),
      MD.save(),
      ME.save(),
      MG.save(),
      MK.save(),
      ML.save(),
      MM.save(),
      MN.save(),
      MR.save(),
      MW.save(),
      MX.save(),
      MY.save(),
      MZ.save(),
      NA.save(),
      NC.save(),
      NE.save(),
      NG.save(),
      NI.save(),
      NL.save(),
      NO.save(),
      NP.save(),
      NZ.save(),
      OM.save(),
      PA.save(),
      PE.save(),
      PG.save(),
      PH.save(),
      PK.save(),
      PL.save(),
      PR.save(),
      PS.save(),
      PT.save(),
      PY.save(),
      QA.save(),
      RO.save(),
      RS.save(),
      RU.save(),
      RW.save(),
      SA.save(),
      SB.save(),
      SD.save(),
      SE.save(),
      SI.save(),
      SJ.save(),
      SK.save(),
      SL.save(),
      SN.save(),
      SO.save(),
      SR.save(),
      SS.save(),
      SV.save(),
      SY.save(),
      SZ.save(),
      TD.save(),
      TF.save(),
      TG.save(),
      TH.save(),
      TJ.save(),
      TL.save(),
      TM.save(),
      TN.save(),
      TR.save(),
      TT.save(),
      TW.save(),
      TZ.save(),
      UA.save(),
      UG.save(),
      US.save(),
      UY.save(),
      UZ.save(),
      VE.save(),
      VN.save(),
      VU.save(),
      YE.save(),
      ZA.save(),
      ZM.save(),
      ZW.save()
      ])
  }) // closes .then
    .catch(function(err){
      console.log(err);
    }).then(function(){
      process.exit();
    })
