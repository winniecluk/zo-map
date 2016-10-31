require('dotenv').config();
require('./config/database');
var Country = require('./models/country');

Country.remove({})
  .then(function(){
    var AE = new Country({
      name: 'United Arab Emirates',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AF = new Country({
      name: 'Afghanistan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AL = new Country({
      name: 'Albania',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AM = new Country({
      name: 'Armenia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AO = new Country({
      name: 'Angola',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AR = new Country({
      name: 'Argentina',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AT = new Country({
      name: 'Austria',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AU = new Country({
      name: 'Australia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var AZ = new Country({
      name: 'Azerbaijan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BA = new Country({
      name: 'Bosnia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BD = new Country({
      name: 'Bangladesh',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BE = new Country({
      name: 'Belgium',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BF = new Country({
      name: 'Burkina Faso',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BG = new Country({
      name: 'Bulgaria',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BI = new Country({
      name: 'Burundi',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BJ = new Country({
      name: 'Benin',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BN = new Country({
      name: 'Brunei Darussalam',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BO = new Country({
      name: 'Bolivia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BR = new Country({
      name: 'Brazil',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BS = new Country({
      name: 'Bahamas',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BT = new Country({
      name: 'Bhutan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BW = new Country({
      name: 'Botswana',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BY = new Country({
      name: 'Belarus',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var BZ = new Country({
      name: 'Belize',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CA = new Country({
      name: 'Canada',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CD = new Country({
      name: 'Democratic Republic of Congo',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CF = new Country({
      name: 'Central African Republic',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CG = new Country({
      name: 'Republic of Congo',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CH = new Country({
      name: 'Switzerland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CI = new Country({
      name: 'Côte d\'Ivoire',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CL = new Country({
      name: 'Chile',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CM = new Country({
      name: 'Cameroon',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CN = new Country({
      name: 'China',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CO = new Country({
      name: 'Colombia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CR = new Country({
      name: 'Costa Rica',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CU = new Country({
      name: 'Cuba',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CY = new Country({
      name: 'Cyprus',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var CZ = new Country({
      name: 'Czech Republic',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var DE = new Country({
      name: 'Germany',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var DJ = new Country({
      name: 'Djibouti',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var DK = new Country({
      name: 'Denmark',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var DO = new Country({
      name: 'Dominican Republic',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var DZ = new Country({
      name: 'Algeria',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var EC = new Country({
      name: 'Ecuador',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var EE = new Country({
      name: 'Estonia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var EG = new Country({
      name: 'Egypt',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var EH = new Country({
      name: 'Western Sahara',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ER = new Country({
      name: 'Eritrea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ES = new Country({
      name: 'Spain',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ET = new Country({
      name: 'Ethiopia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var FK = new Country({
      name: 'Falkland Islands',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var FI = new Country({
      name: 'Finland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var FJ = new Country({
      name: 'Fiji',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var FR = new Country({
      name: 'France',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GA = new Country({
      name: 'Gabon',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GB = new Country({
      name: 'United Kingdom',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GE = new Country({
      name: 'Georgia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GF = new Country({
      name: 'French Guiana',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GH = new Country({
      name: 'Ghana',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GL = new Country({
      name: 'Greenland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GM = new Country({
      name: 'Gambia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GN = new Country({
      name: 'Guinea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GQ = new Country({
      name: 'Equatorial Guinea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GR = new Country({
      name: 'Greece',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GT = new Country({
      name: 'Guatemala',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GW = new Country({
      name: 'Guinea-Bissau',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var GY = new Country({
      name: 'Guyana',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var HN = new Country({
      name: 'Honduras',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var HR = new Country({
      name: 'Croatia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var HT = new Country({
      name: 'Haiti',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var HU = new Country({
      name: 'Hungary',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ID = new Country({
      name: 'Indonesia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IE = new Country({
      name: 'Ireland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IL = new Country({
      name: 'Israel',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IN = new Country({
      name: 'India',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IQ = new Country({
      name: 'Iraq',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IR = new Country({
      name: 'Iran',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IS = new Country({
      name: 'Iceland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var IT = new Country({
      name: 'Italy',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var JM = new Country({
      name: 'Jamaica',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var JO = new Country({
      name: 'Jordan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var JP = new Country({
      name: 'Japan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KE = new Country({
      name: 'Kenya',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KG = new Country({
      name: 'Kyrgyzstan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KH = new Country({
      name: 'Cambodia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KP = new Country({
      name: 'North Korea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KR = new Country({
      name: 'South Korea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KX = new Country({
      name: 'Kosovo',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KW = new Country({
      name: 'Kuwait',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var KZ = new Country({
      name: 'Kazakhstan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LA = new Country({
      name: 'Lao People\'s Democratic Republic',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LB = new Country({
      name: 'Lebanon',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LK = new Country({
      name: 'Sri Lanka',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LR = new Country({
      name: 'Liberia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LS = new Country({
      name: 'Lesotho',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LT = new Country({
      name: 'Lithuania',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LU = new Country({
      name: 'Luxembourg',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LV = new Country({
      name: 'Latvia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var LY = new Country({
      name: 'Libya',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MA = new Country({
      name: 'Morocco',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MD = new Country({
      name: 'Moldova',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ME = new Country({
      name: 'Montenegro',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MG = new Country({
      name: 'Madagascar',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MK = new Country({
      name: 'Macedonia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ML = new Country({
      name: 'Mali',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MM = new Country({
      name: 'Myanmar',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MN = new Country({
      name: 'Mongolia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MR = new Country({
      name: 'Mauritania',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MW = new Country({
      name: 'Malawi',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MX = new Country({
      name: 'Mexico',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MY = new Country({
      name: 'Malaysia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var MZ = new Country({
      name: 'Mozambique',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NA = new Country({
      name: 'Namibia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NC = new Country({
      name: 'New Caledonia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NE = new Country({
      name: 'Niger',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NG = new Country({
      name: 'Nigeria',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NI = new Country({
      name: 'Nicaragua',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NL = new Country({
      name: 'Netherlands',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NO = new Country({
      name: 'Norway',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NP = new Country({
      name: 'Nepal',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var NZ = new Country({
      name: 'New Zealand',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var OM = new Country({
      name: 'Oman',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PA = new Country({
      name: 'Panama',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PE = new Country({
      name: 'Peru',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PG = new Country({
      name: 'Papau New Guinea',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PH = new Country({
      name: 'Philippines',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PK = new Country({
      name: 'Pakistan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PL = new Country({
      name: 'Poland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PR = new Country({
      name: 'Puerto Rico',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PS = new Country({
      name: 'Palestinian Territories',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PT = new Country({
      name: 'Portugal',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var PY = new Country({
      name: 'Paraguay',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var QA = new Country({
      name: 'Qatar',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var RO = new Country({
      name: 'Romania',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var RS = new Country({
      name: 'Serbia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var RU = new Country({
      name: 'Russia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var RW = new Country({
      name: 'Rwanda',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SA = new Country({
      name: 'Saudi Arabia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SB = new Country({
      name: 'Solomon Islands',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SD = new Country({
      name: 'Sudan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SE = new Country({
      name: 'Sweden',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SI = new Country({
      name: 'Slovenia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SJ = new Country({
      name: 'Svalbard and Jan Mayen',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SK = new Country({
      name: 'Slovakia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SL = new Country({
      name: 'Sierra Leone',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SN = new Country({
      name: 'Senegal',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SO = new Country({
      name: 'Somalia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SR = new Country({
      name: 'Suriname',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SS = new Country({
      name: 'South Sudan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SV = new Country({
      name: 'El Salvador',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SY = new Country({
      name: 'Syria',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var SZ = new Country({
      name: 'Swaziland',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TD = new Country({
      name: 'Chad',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TF = new Country({
      name: 'French Southern and Antarctic Lands',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TG = new Country({
      name: 'Togo',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TH = new Country({
      name: 'Thailand',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TJ = new Country({
      name: 'Tajikistan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TL = new Country({
      name: 'Timor-Leste',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TM = new Country({
      name: 'Turkmenistan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TN = new Country({
      name: 'Tunisia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TR = new Country({
      name: 'Turkey',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TT = new Country({
      name: 'Trinidad and Tobago',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TW = new Country({
      name: 'Taiwan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var TZ = new Country({
      name: 'Tanzania',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var UA = new Country({
      name: 'Ukraine',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var UG = new Country({
      name: 'Uganda',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var US = new Country({
      name: 'United States',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var UY = new Country({
      name: 'Uruguay',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var UZ = new Country({
      name: 'Uzbekistan',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var VE = new Country({
      name: 'Venezuela',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var VN = new Country({
      name: 'Vietnam',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var VU = new Country({
      name: 'Vanuatu',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var YE = new Country({
      name: 'Yemen',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ZA = new Country({
      name: 'South Africa',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ZM = new Country({
      name: 'Zambia',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
    });
    var ZW = new Country({
      name: 'Zimbabwe',
      artists: [{name: 'SampleName', phone: 'SamplePhone'}]
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
