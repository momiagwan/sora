import { BotMessageSquare, LucideSkull } from "lucide-react";
import { PhoneOutgoing  } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { MapPin } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {Home} from "lucide-react";
import {Mails } from "lucide-react";
import {CircleDollarSign} from "lucide-react";
import {GraduationCap } from "lucide-react"
import {Handshake} from "lucide-react"
import {Disc2 } from "lucide-react"
import{Link} from "react-router-dom"

import umaragwan from "../assets/profile-pictures/umaragwan.jpg";
import sulaimanagwan from "../assets/profile-pictures/sulaimanagwan.jpg";
import sulaimanaligogda from "../assets/profile-pictures/sulaimanaligogda.jpg";
import umarhasan from "../assets/profile-pictures/umarhasan.jpg";
import sattarderaiya from "../assets/profile-pictures/sattarderaiya.jpg";
import abdullahsulaiman from "../assets/profile-pictures/abdullahsulaiman.jpg";

export const navItems = [
   {label:"Home",href:"/Home"},
  //{ label: "Services", href: "/services" },
  { label: "Blogs", href: "/BlogList" },
  { label: "Contact", href: "/contact" },
  { label: "Founders", href: "/founders" },
 
];
export const DummyPosts = [
  {id:1,
    authorId:2,
    title: "Umar Muhammad",
    company: "Agwan",
    image: umaragwan,
    category:'marriges',
   description:"Umar Muhammad son of Muhammad Waraim Agwan belong to Ghadhakda village in Gujarat India"
  },
  {id:2,
    authorId:3,
    category:'deaths',
    title: "Sulaiman Wali",
    company: "Agwan",
    image: sulaimanagwan,
    desription: "Sulaiman Wali  son of Wali Muhammad Agwan belong to Babra village in Gujarat India.He served the  community as a president for many years ",
  },
  {id:3,
    authorId:4,
    category:'notifications',
    title: "Umar Hasan",
    company: "Malaviya",
    image: umarhasan,
    description: "Umar Hasan son of Hasan Malaviya belong to Bilkha village in Junagadh taluka in Gujarat India.He worked as an Editor in Dawn newspaper",
  },
  {id:4,
    authorId:1,
    category:'warnings',
    title: "Abdul-Sattar Ismail",
    company: "Deraiya",
    image: sattarderaiya,
    description: " Abdul-Sattar son of Ismail Deraiya belong to Damnagar village in Gujarat India.",
  },
  {id:5,
    authorId:2,
    category:'education',
    title: "Abdullah Sulaiman",
    company: "Radhanpura",
    image: abdullahsulaiman,
    description: "Abdullah sulaiman son of Sulaiman Radhanpura belong to Ahmedabad city in Gujarat India",
  },
  {id:6,
    authorId:3,
    category:'generalbodyijlas',
    title: "Sulaiman Ali",
    company: "Gogda",
    image: sulaimanaligogda,
    description: "Sulaiman ali son of Muhammad Ali Gogda belong to Tansa village in Gujarat India ",
  },
];
export const testimonials = [
  {
    user: "Umar Muhammad",
    company: "Agwan",
    image: umaragwan,
    text:"Umar Muhammad son of Muhammad Waraim Agwan belong to Ghadhakda village in Gujarat India"
  },
  {
    user: "Sulaiman Wali",
    company: "Agwan",
    image: sulaimanagwan,
    text: "Sulaiman Wali  son of Wali Muhammad Agwan belong to Babra village in Gujarat India.He served the  community as a president for many years ",
  },
  {
    user: "Umar Hasan",
    company: "Malaviya",
    image: umarhasan,
    text: "Umar Hasan son of Hasan Malaviya belong to Bilkha village in Junagadh taluka in Gujarat India.He worked as an Editor in Dawn newspaper",
  },
  {
    user: "Abdul-Sattar Ismail",
    company: "Deraiya",
    image: sattarderaiya,
    text: " Abdul-Sattar son of Ismail Deraiya belong to Damnagar village in Gujarat India.",
  },
  {
    user: "Abdullah Sulaiman",
    company: "Radhanpura",
    image: abdullahsulaiman,
    text: "Abdullah sulaiman son of Sulaiman Radhanpura belong to Ahmedabad city in Gujarat India",
  },
  {
    user: "Sulaiman Ali",
    company: "Gogda",
    image: sulaimanaligogda,
    text: "Sulaiman ali son of Muhammad Ali Gogda belong to Tansa village in Gujarat India ",
  },
];


export const features = [
  {
    icon: <GraduationCap /> ,
    text: "Education free",
    description:
      "Community will pay your children's school and tuition fee",
  },
  {
    icon: <Fingerprint />,
    text: "Loans for Business",
    description:
      "Coummunity will provide you capital to start a business",
  },
  {
    icon: <ShieldHalf />,
    text: "Medical services",
    description:
      "Community will help you in medical treatments after verifying your work and medical history",
  },
  {
    icon: <Home/>,
    text: "Monthly Groceries budget",
    description:
      "Community will give you monthly grossery budget after verifying your salary",
  },
  {
    icon: <Handshake />,
    text: "Amount for Marriges",
    description:
      "Community will arrange furniture,household accessories and will bear all expenses of marrige after verifying documents",
  },
  {
    icon: <GlobeLock />,
    text: "Death Rituals",
    description:
      "Community will not forget you in difficult times on death of any member they will manage all things related with death rituals such as transport,lunch for guests and graveyard expenses ",
  },
  {
    icon: <LucideSkull />,
    text: "GraveYard maintenance",
    description:
      "Taking care of graveyard's needs such as Graveyard's lights,water and cutting down of bushes will be our responsibility",
  },
  {
    icon:  <CircleDollarSign />,
    text: "Zakat services",
    description:
      "your zakat will be handed to rightful person in the community",
  },
  {
    icon: <Disc2 />,
    text: "Eid ul Adha services",
    description:
      "Meat after Qurbani will be given to families who dont sacrifice",
  },
];
export const contacts=[  {
  title: "Email",
  description:
    "Sorathiamuslimghanchi@gmail.com",
    href:"mailto:sorathiamuslimghanchi@gmail.com",
    icon:<Mails/>
},
{
  title: "Phone-number",
  description:
    "0317-2578710",
    icon:<PhoneOutgoing />
},
{
  title: "Address",
  description:
   "V3V2+5RH, jamatkhana Road, PIB Colony, Karachi, Karachi City, Sindh",
   href:"https://maps.app.goo.gl/JUHCpELp6YLAJC6dA",
   icon:<MapPin />
},];

export const checklistItems = [
  {
    title: "Election after 3 years",
    description:
      "Democracy after every three years for the position of community president",
  },
  {
    title: "Computerized cards",
    description:
      "Every 18 year person can vote through this card",
  },
  {
    title: "unbiased Result",
    description:
      "only after 1 hour unbiased result on the basis of majority votes",
  },
  {
    title: "Oath Ceremony",
    description:
      "oath of heads of each section of community infront of all council members",
  },
];

export const pricingOptions = [
  {
    title: "Zakat",
    
    features: [
      "through bank transfer",
      
      "available 24/7",
      "given to needy persons",
     
    ],
  },
  {
    title: "Fitrah",
    
    features: [
      "through bank transfer",
      "Service availaible till eid's morning",
      "Privacy Guaranteed",
    ],
  },
  {
    title: "Charity",
    features: [
      "through bank transfer",
      "available 24/7",
      "Privacy guaranteed",
    ],
  },
];

export const resourcesLinks = [
  {href: "/posts/category/marriages", text: "Recent marriages"  },
  { href: "/posts/category/death", text: "Recent deaths" },
  { href: "/posts/category/warnings", text: "Warning to members" },
  { href: "/posts/category/notifications", text: "Notifications" },
  { href: "/posts/category/forms", text: "Community Forms" },
];

export const platformLinks = [
  { href: "/posts/category/education", text: "Educational Committee event" },
  { href: "/posts/category/webinars", text: "Webinars" },
  { href: "/posts/category/elections", text: "Elections" },
  { href: "/posts/category/general body ijlas", text: "General Body Ijlaas" },
  { href: "/posts/category/pilgrims", text: "welcoming pilgrims" },
];

export const communityLinks = [
  { href: "https://archive.org/details/in.ernet.dli.2015.547151", text: "Law Book" },
  { href: "https://archive.org/details/in.ernet.dli.2015.547151", text: "Members book" },
  { href: "/clans", text: "Clans history" },
  { href: "https://archive.org/details/in.ernet.dli.2015.547151", text: "Presidential history" },
  { href: "https://archive.org/details/in.ernet.dli.2015.547151", text: "Sectional head of each committee" },
];
export const clans=[
  {user:"Agwan",
  text:"Agwan is the largest clan in sorathia muslim ghanchi jamat,karachi.This clan is also in junagadh ghanchi jamat as well as in gujarati turks,silawat castes.The sorathia and junagadia Agwan belongs to Bilkha,Junagadh,Gadhakra,Babra,Bagdu,Talala geer, Bhavnagar and  Sawar Kundla with 12 different  races in Ghanchis in karachi.according to sources,The word Agwan orignated from the word 'Aage-vaan' which is used in many languages in subcontinent meaning the guide or the leader.Agwans have migrated to indian Gujarat and Rajasthan from the afghanistan or nearby turkey.at the time of war of alauddin khilji ,mahmud ghaznavi or the war when Akbar was defeated by Afghnistan people and Birbal was killed in the war and these people then migrated to indian states.They were muslim immigrants as Sayyed ,khilji,Behlim and Tajik who mixed with  silawat caste, Ghanchi caste and gujarati-turks.there is also a village named Agwan in maharashtra india.may the agwans have firstly migrated to that place then they dispersed in india or agwan village maybe the center of the agwan tribes in the past and also a deity worshipped by Hindu named agwan-deo.This surname is also found in some hindus either they mixed with muslim Agwans or their surname was aagevaan which was changed to agwan.or may be agwans were basically from indian castes which then converted to Islam but first opinion is more reliable"
},
{user:"Bilaikhiya",
  text:"Bilaikhiya is the 2nd largest clan in sorathia Muslim Ghanchi jamat,karachi.Bilaikhiya are from junagadh,amreli,sanudar,bhavnagar,mumbai, jasdan and wasawar.Sources relate that bilkhaiya is derived from the word 'Bilkhawadia' which means people from the Bilkha which then changes to Bilaikhiya by the passage of time.Bilkha is a village in Junagadh Taluka."
},
{user:"Parmar",
  text:"It is the 3rd Largest Clan in Sorathia Muslim Ghanchi jamat,Karachi as well as in Zalawadiya ,kutchi and jhalavad ghanchi jamats as well as in non gujarati castes .Parmars clan of sorathia belongs to mahuava,Gadhra,Jasdan,Wasawar,jhalia and junagadh The Paramara dynasty was the ruling dynasty of Kingdom of Malwa in west-central India between 9th and 14th centuries. They belonged to the Parmara clan of the Rajputs.The dynasty was established in either the 9th or 10th century. By the time of his King Munja, the Malwa region in present-day Madhya Pradesh had become the core Paramara territory, with Dhara (now Dhar) as their capital."
},
{user:"Deraiya",
  text:"Deraiya is the 4th largest clan in sorathia Muslim Ghanchi jamat , Karachi.Deraiya are from Sardhar,Amreli,jasdan, talalageer, palitana , borwai and damnagar."
},
{user:"Shaikhda",
  text:"Shaikhda is a clan in sorathia ghanchi jamat as well as in other non-gujarati castes.shaikhdas belong to amreli, sardhar and borwai.shaikhdas are within shaikhs of gujarat It is said that they are the devotees of the Sufi preacher Bala Mohammad Shah "
},
{user:"Malaviya",
  text:"Malaviya clan in Sorathia ghanchi jamat has large number of families belonging to indian villages of Bilkha,Badhair,Talalageer and Sardhar.They are also found in other ghanchi jamats and non gujarati castes.sometimes the surname is pronouned as marawiya.The word Malviya literally means those from Malwa in Central India."
},
{user:"Gogda",
  text:"Gogda is a clan in sorathia Muslim Ghanchi jamat as well as in Junagadh Muslim Ghanchi jamat.Gogdas belong to villages of khambha and tansa.Gogda is a small village in Jharkhand district of Uttar Pradesh.may it be the centre of gogdas in the past"
},
{user:"Rathore",
  text:"Rathore is clan in sorathia muslim Ghanchi jamat as well as in other gujarati and non gujarati castes.Rathores are of rajputic origin.According to some modern historians, Rathores originated from the Rashtrakuta's ancestors.Some Branches of Rashtrakutas had migrated to Western Rajasthan as early as the late tenth century. Some inscriptions of 'Rathauras' have been founded in and around Marwar region of Rajasthan dating from the tenth to early thirteenth century. It's believed the Rathores might have emerged from one of the Rashtrakuta divisions.Rathore in sorathia muslim ghanchi jamat are from Gondal and sardhar"
},
{user:"Sodha",
  text:"Sodha is a clan in sorathia muslim ghanchi jamat,karachi as well as in junagadh ghanchi and other than ghanchi castes and other gujarati and non-gujarati castes.Sodhas of sorathia Ghanchi basically belong to Bilkha village in Junagadh Taluka.They are off-shoot of Parmara Rajputs, who once controlled regions of Malwa and later North-West parts of Rajasthan. The area around Suratgarh was called 'Sodhawati' and south-east of Bhatner was once occupied by the Sodha Rajputs before being evicted from these regions by Bhati Rajputs, after which they moved their base to Thar desert."
},
{user:"Sayyed",
  text:" Sayyed is a small clan in soratia muslim Ghanchi jamat,karachi.  Sayyed belongs to junagadh, bhavnagar and Gadhra village of Gujarat.They are basically from arab lineage from the Banu Hashim tribe from the descendent of Rasullullah Muhammad (S.A.W) from maternal and Sher e khuda Ali al-Murtaza from paternal they have migrated to sub-continent .In South Asia, Sayyids are mostly credited for preaching and consolidating the religion of Islam. They are predominantly descendants of leading saints of Sunni faith that migrated from Persia and other places to preach Islam of which the Persian Sayyid Moinuddin Chishti has set the cornerstone ."
  
},
{user:"Sarawiya",
  text:"Sarwaiya is clan in sorathia Ghanchi jamat as well as in zalawadiya and other Gujarati and non Gujarati castes.They are also subclan of rajput.sarwaiya in sorathia Ghanchi jamat, Karachi belongs to bhumbhli and bagasra.Sarwaiya village is in Basoda Vidisha tahsil of Vidisha district in Madhya Pradesh.may be it was centre of sarwaiya clan in ancient times"
},
{user:"Borater",
  text:"Borater is clan found in sorathia Muslim Ghanchi jamat as well as in other Ghanchi and non-ghanchi castes. It can be pronounced as bolatar.Borater are from amreli and wasawar"
},
{user:"Dayater",
  text:"Dayater is a clan in sorathia Muslim Ghanchi jamats Karachi.dayater are from wasawar .firstly some families of this clan migrated to larkana,sindh then they shifted to Karachi and some families are still in Larkana"
},
{user:"Kalwater",
  text:"Kalwaatar is a clan in sorathia Muslim Ghanchi jamat,Karachi as well as in Junagadh and other Ghanchi jamats.kalwatar belong to bilkha,bagasra,junagadh and prabhas patan.they are also pronounced as Karwaatar and karwaat."
},
{user:"Mahida",
  text:"Mahida is clan in sorathia Ghanchi jamat as well as in junagadia and zalawadiya and also in other Gujarati castes.They are a subclan of Rajputs.Mahida in sorathia Muslim jamat,Karachi belong to bilkha,junagadh and lathi."
},
{user:"Bawariya",
text:"Bawariya is a small clan in soratia muslim Ghanchi jamat,karachi.Bawariya belongs to rajula.The Bawariya are traditionally a nomadic tribe found in Haryana ,Rajasthan,UP, Gujarat .some sources relate Bawariya from rajputic lineage "
},
{user:"Warya",
  text:"Warya is a small clan in Sorathia Muslim Ghanchi jamat, Karachi.as well as in other Ghanchi jamats,gujarati and non-gujarati castes.Warya belong to bhavnagar and amreli.The Warya (also known as Varya and ) is a Rajput clan found predominantly in the Punjab and Sindh provinces of Pakistan and in the state of Gujarat in India.In the 9th century C.E, warya and Parmar Rajputs of Bathinda attacked Tanot, the then capital of Bhati dynasty in western Rajasthan. This resulted in the fall of Tanot and the death of its ruler."
},
{user:"Lukha",
  text:"Lukha is a small clan found in sorathia Muslim Ghanchi jamat .some historians relate that lukha are a clan of Jats .They are mostly found in rajasthan. Lukhas are from bhavnagar"
},
{user:"Bhukiya",
  text:"Bhukiya is a small clan in sorathia Muslim Ghanchi jamat Karachi as well as in zalawadiya and jhalavad jamats and other Gujarati castes.Bhukiya clan also belongs to rajput clan ancestry.They are from dedaan."
},
{user:"Maiter",
  text:"Maiter is  small clan found in sorathia Muslim Ghanchi jamat as well as in zalawadiya Ghanchi jamat.Maiter are from bhavnagar."
},
{user:"Padaya",
  text:"Padaya is a small clan found in sorathia muslim gahnchi jamat as well as in junagadh and mangrol and zalawadiya jamats.In sorathia jamat padayas are from junagadh and traces lineage back to Rajputic ancestry "
},
{user:"Sudaisra",
  text:"Sudaisra is clan in sorathia Ghanchi jamat, karachi as well as in Rajkot ghanchi jamat and other gujarati and non-gujarati castes.sudaisras are from loonidhaar."
},
{user:"Dholakiya",
  text:"Dholakhiya is small clan found in sorathia Muslim Ghanchi jamat , karachi.Mostly Dholakiyas have two clans they are also Ghoghari .which means 'people from the Ghogha.'not all Ghogharis are Dholakiyas also not all dholakiyas are ghoghari but mostly are .Dholakiyas in sorathia jamat belong to Mumbai and ghogha."
},
{user:"Ghoghari",
  text:"Ghoghari is small clan found in Sorathia Muslim Ghanchi jamat as well as in Junagadh Muslim Ghanchi jamat.Ghoghari means 'people from the Ghogha' a town in Gujarat India where Islam reached firstly in subcontinent before the time of qibla change .In sorathia Ghogharis have another surname which is Dholakiya as they one surname they have from the race and other from the area but all Ghogharis are not Dholakiya Ghogharis in sorathia jamat Belong to Mumbai and ghogha."
},
{user:"Jethwa",
  text:"jethwa is a small clan in soratia muslim Ghanchi jamat,karachi as well as in junagadh,mangrol and zalawadiya and other gujarati and non-gujarati castes. In sorathia jamat Jethwas belongs to bhavnagar.Jethwa dynasty ruled over present day Gujarat region of India from 7th century AD till middle of 20th century, when India became independent.they are from rajput lineage."
},
{user:"Solanki",
text:"Solanki Clan in sorathia muslim Ghanchi Jamat, karachi is small clan belonging to jetpur and junagadh .This clan is also in other Ghanchi jamats as well as in non gujarati castes.Solanki also known as Chaulukya are originally associated with the Rajputs.Solanki dynasty  ruled parts of what are now Gujarat and Rajasthan in north-western India, between c. 940 CE and c. 1244 CE. Their capital was located at Anahilavada (modern Patan). At times, their rule extended to the Malwa region in present-day Madhya Pradesh.Further, it is said that Muslim governors of Sindh in 7th century repeatedly sent naval armed ships to conquer the western and southern coast of Gujarat, which were again and again repulsed by the 'Saindhavas' who called themselves 'masters of the Western sea' Apara Samudradhipati (apara-samudr-ddhipati) ."
},{user:"Kabra",
text:"Kabra is a small clan in Sorathia Muslim Ghanchi jamat,karachi.Kabras belong to Junagadh,sawar kundla and raanpur  ."
},{user:"Modan",
text:"Modan is a small clan in soratia muslim Ghanchi jamat,karachi.Modan belongs to bhavnagar and jetpur ."
},{user:"Modi",
text:"Modi is a small clan in soratia muslim Ghanchi jamat,karachi.Modi is a surname in India, most commonly found among people from states of Rajasthan, Gujarat, Bihar, Chhattisgarh, Haryana, Madhya Pradesh, Jharkhand, and Uttar Pradesh.modis in sorathia are from varodara"
},{user:"Panseriya",
text:"Panseriya is  clan found in sorathia Muslim Ghanchi jamat, Karachi.panseriya are from  ahmedabad,varamgaam ."
},{user:"Payak",
text:"Payak is small  clan found in Sorathia Muslim Ghanchi jamat as well as in Junagadh , rajkot , zalawadiya ghanchi jamats and also in Gujarati and non gujarati castes.payak is Rajput clan.in sorathia jamat payak belongs to bilkha and babra."
},{user:"Chotaliya",
text:" Chotaliya is a small clan in soratia muslim Ghanchi jamat,karachi.Chotaliya belongs to sardhar ,bilkha,bulori and monia in junagadh."


},{user:"Chohan",
text:"Chohan is a small clan in soratia muslim Ghanchi jamat,karachi as well as in zalawadiya and other gujarati and non gujarati castes. Chohan belongs to mon pari,sardhar and junagadh..Chohan is a clan of rajputs and other castes.The Chohans were historically a powerful group in the region now known as Rajasthan. For around 400 years from the 7th century CE their strength in Sambhar was a threat to the power-base of the Guhilots in the south-west of the area, as also was the strength of their fellow other clans. They suffered a set-back in 1192 when their leader, Prithviraj Chauhan, was defeated at the Second Battle of Tarain but this did not signify their demise. The kingdom broke into the Satyapura and Devda branches after the invasion of Qutbu l-Din Aibak in 1197."

},{user:"Sarmari",
text:"Sarmari is a clan in sorathia Muslim Ghanchi jamat.they belong to bhavnagar ."
},{user:"Chopra",
text:" Chopra a small clan in soratia muslim Ghanchi jamat,karachi. Chopra belongs to mumbai and bilkha.Sources relate that they originate from one man called 'Chaupat Rai' who was killed in a battle with Sultan Mahmud of Ghazni. His descendants who were born before his death took the name of their forefather and hence came to be known as Chopra.Also it is related that Chopra is subclan of Chohan which belongs to  rajputic ancestry"

},{user:"Mithani",
text:"Mithani is small clan found in Sorathia Muslim Ghanchi jamat Karachi. Mithani belongs to Kaanpur and jasdan.Sources relate that Mithani is a subclan of Agwan"
},{user:"Kachra",
text:"Kachra is a small clan in sorathia Muslim Ghanchi jamat as well as in Junagadh Muslim Ghanchi jamat. in sorathia jamat kachras belong to amreli,bhavnagar and wasawar."
},{user:"Radhanpura",
text:"Radha pura is a clan in sorathia Muslim Ghanchi jamat as well it is a smallest jamat in Ghanchi caste.Radhanpura belong  to .Radhanpur is a city in Gujarat they have derived the clan name from the city of Radhanpur.in sorathia jamat they belong to ahmedabad"
},{user:"Sorathiya",
text:"Sorathiya is also a clan in sorathia Muslim Ghanchi jamat Karachi as well as a jamat name .sorathiya means people from the land of sorath. Some legends mentions that they have migrated from Mathura.sorathiya clan of sorathia jamat are from shaphur,mangrol"
},{user:"Kalwaniya",
text:" Kalwaniya is a small clan in soratia muslim Ghanchi jamat,karachi belonging to mahuava"

},{user:"Bhatti",
text:"Bhati is a small clan in sorathia Ghanchi jamat as well as in zalawadiya jamat and also in Gujarati and non-gujarati castes they are orignally Rajputs. The Bhati dynasty historically ruled over Jaisalmer, India.the bhattis in sorathia Muslim Ghanchi jamat belong to zalawad , Gujarat and belong to zalawadiya Muslim jamat then after many years they became member of sorathia Muslim Ghanchi jamat ."
},{user:"Gondigara",
text:" Gondigara is a small clan in soratia muslim Ghanchi jamat,karachi. Gondigara belongs to bhavnagar."

},
]