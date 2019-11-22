
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert(
        [{
          "date": "05/28/2019",
          "time": "15:39:03",
          "name": "Magda Eskrigge",
          "organization": "Moen and Sons",
          "description": "Lead-induced chronic gout, left elbow, without tophus",
          "volunteers-needed": 18
        }, {
          "date": "06/26/2019",
          "time": "10:32:03",
          "name": "Anabelle MacPhail",
          "organization": "Orn-Rolfson",
          "description": "Lacerat flexor musc/fasc/tend l idx fngr at wrs/hnd lv, sqla",
          "volunteers-needed": 22
        }, {
          "date": "11/12/2019",
          "time": "9:41:33",
          "name": "Delainey Blunsum",
          "organization": "Gutkowski LLC",
          "description": "Disp fx of distal phalanx of l thm, subs for fx w routn heal",
          "volunteers-needed": 30
        }, {
          "date": "08/08/2019",
          "time": "16:28:38",
          "name": "Rockwell Spink",
          "organization": "Marquardt, Howe and Cassin",
          "description": "Oth osteopor w crnt path fx, r femr, 7thG",
          "volunteers-needed": 18
        }, {
          "date": "05/01/2019",
          "time": "20:56:47",
          "name": "Darwin Grigoroni",
          "organization": "Hintz, Heidenreich and Cummings",
          "description": "Oth injury of peroneal artery, unspecified leg, sequela",
          "volunteers-needed": 24
        }, {
          "date": "09/21/2019",
          "time": "15:13:09",
          "name": "Denny Alessandrini",
          "organization": "Hermiston LLC",
          "description": "Diffuse TBI w LOC w death due to oth cause bf consc, sequela",
          "volunteers-needed": 7
        }, {
          "date": "07/04/2019",
          "time": "17:39:40",
          "name": "Siobhan Yggo",
          "organization": "Connelly Group",
          "description": "Burn w resulting rupture and dest of right eyeball, subs",
          "volunteers-needed": 13
        }, {
          "date": "10/25/2019",
          "time": "13:17:37",
          "name": "Sean Bastow",
          "organization": "Rogahn Inc",
          "description": "Intermittent hydrarthrosis, right wrist",
          "volunteers-needed": 13
        }, {
          "date": "03/16/2019",
          "time": "16:47:10",
          "name": "Carmon Sheldrick",
          "organization": "Gulgowski Inc",
          "description": "Driver of pk-up/van inj in clsn w rail trn/veh nontraf, subs",
          "volunteers-needed": 17
        }, {
          "date": "07/02/2019",
          "time": "11:51:55",
          "name": "Wald Ridulfo",
          "organization": "Klocko-Harvey",
          "description": "Poisn by crbnc-anhydr inhibtr,benzo/oth diuretc, asslt, init",
          "volunteers-needed": 19
        }, {
          "date": "06/24/2019",
          "time": "12:57:32",
          "name": "Zaccaria Puckinghorne",
          "organization": "Rohan and Sons",
          "description": "Contus/lac/hem crblm w LOC >24 hr w/o ret consc w surv",
          "volunteers-needed": 25
        }, {
          "date": "01/21/2019",
          "time": "12:29:45",
          "name": "Piper Carlos",
          "organization": "Prosacco, Skiles and Paucek",
          "description": "Disp fx of med malleolus of unsp tibia, 7thD",
          "volunteers-needed": 11
        }, {
          "date": "08/26/2019",
          "time": "20:36:10",
          "name": "Elbertine Mohring",
          "organization": "Emard-Bauch",
          "description": "Poisoning by anticholin agents, accidental, init",
          "volunteers-needed": 11
        }, {
          "date": "12/04/2018",
          "time": "18:34:35",
          "name": "Mendie Quick",
          "organization": "Kirlin Inc",
          "description": "Unsp fx shaft of unsp tibia, subs for clos fx w delay heal",
          "volunteers-needed": 29
        }, {
          "date": "02/28/2019",
          "time": "13:25:15",
          "name": "Annemarie McFfaden",
          "organization": "Schmeler-DuBuque",
          "description": "Poisoning by oth bacterial vaccines, accidental, init",
          "volunteers-needed": 6
        }, {
          "date": "07/23/2019",
          "time": "14:55:19",
          "name": "Whitby Cockayne",
          "organization": "Gutmann, Stamm and Wisozk",
          "description": "Pulmonary hemorrhage originating in the perinatal period",
          "volunteers-needed": 29
        }, {
          "date": "03/14/2019",
          "time": "21:30:24",
          "name": "Kelly Node",
          "organization": "Schimmel-Herman",
          "description": "Other articular cartilage disorders, left foot",
          "volunteers-needed": 1
        }, {
          "date": "01/09/2019",
          "time": "17:16:51",
          "name": "Derby Mullen",
          "organization": "Morar Inc",
          "description": "Localized swelling, mass and lump, unspecified",
          "volunteers-needed": 11
        }, {
          "date": "07/12/2019",
          "time": "19:23:22",
          "name": "Holt Slee",
          "organization": "Mayert-Bahringer",
          "description": "Displ seg fx shaft of r fibula, 7thE",
          "volunteers-needed": 30
        }, {
          "date": "09/10/2019",
          "time": "17:38:30",
          "name": "Claudius Dencs",
          "organization": "Leffler-Kunde",
          "description": "Nondisp fx of neck of third metacarpal bone, left hand",
          "volunteers-needed": 12
        }, {
          "date": "01/16/2019",
          "time": "9:32:15",
          "name": "Jayne Luckcuck",
          "organization": "McDermott-Bednar",
          "description": "Lacerat flxr musc/fasc/tend l little fngr at forarm lv, init",
          "volunteers-needed": 27
        }, {
          "date": "11/02/2019",
          "time": "11:56:53",
          "name": "Dolf Quinn",
          "organization": "Bernhard-Bartell",
          "description": "Low-tension glaucoma, right eye, moderate stage",
          "volunteers-needed": 21
        }, {
          "date": "03/31/2019",
          "time": "14:56:22",
          "name": "Vlad Benning",
          "organization": "Gleason and Sons",
          "description": "Other myositis, right forearm",
          "volunteers-needed": 5
        }, {
          "date": "06/29/2019",
          "time": "9:49:47",
          "name": "Rowe Brandel",
          "organization": "Ortiz, Runte and Rempel",
          "description": "Inj unsp blood vessel at shldr/up arm, unsp arm, subs",
          "volunteers-needed": 4
        }, {
          "date": "10/28/2019",
          "time": "8:50:17",
          "name": "Almeta Ockenden",
          "organization": "Barrows-Rogahn",
          "description": "Oth fx lower end of left ulna, init for opn fx type I/2",
          "volunteers-needed": 26
        }, {
          "date": "12/22/2018",
          "time": "13:09:32",
          "name": "Nona Lidierth",
          "organization": "Kautzer, Grady and Kuhlman",
          "description": "Ped on skateboard injured in collision w hv veh nontraf",
          "volunteers-needed": 5
        }, {
          "date": "04/18/2019",
          "time": "19:24:07",
          "name": "Elmo Noriega",
          "organization": "Okuneva-Renner",
          "description": "Animl-ridr inj pk-up truck, pick-up truck, van, hv veh, subs",
          "volunteers-needed": 16
        }, {
          "date": "05/18/2019",
          "time": "8:10:33",
          "name": "Jody Pablo",
          "organization": "Blick-Hackett",
          "description": "Complete traumatic amputation of right breast, sequela",
          "volunteers-needed": 25
        }, {
          "date": "02/02/2019",
          "time": "16:12:37",
          "name": "Rae Mattacks",
          "organization": "McDermott-Paucek",
          "description": "Other spirochetal infections",
          "volunteers-needed": 30
        }, {
          "date": "10/08/2019",
          "time": "13:56:35",
          "name": "Chester Ysson",
          "organization": "Wolf LLC",
          "description": "Unstable burst fracture of first lumbar vertebra",
          "volunteers-needed": 11
        }, {
          "date": "02/03/2019",
          "time": "19:36:50",
          "name": "Kristo Bartolomieu",
          "organization": "Reichel, Cremin and Skiles",
          "description": "Disp fx of head of unsp rad, 7thJ",
          "volunteers-needed": 9
        }, {
          "date": "10/22/2019",
          "time": "8:57:49",
          "name": "Tabatha Inde",
          "organization": "Hansen, Lang and Jaskolski",
          "description": "Pnctr w foreign body of right great toe w damage to nail",
          "volunteers-needed": 8
        }, {
          "date": "07/31/2019",
          "time": "16:51:44",
          "name": "Demeter Flatt",
          "organization": "Dibbert, Jacobs and Ullrich",
          "description": "Fracture of unsp part of scapula, right shoulder, sequela",
          "volunteers-needed": 3
        }, {
          "date": "11/01/2019",
          "time": "17:49:19",
          "name": "Elizabeth Yitzowitz",
          "organization": "Dietrich, Turner and Davis",
          "description": "Underdosing of 4-Aminophenol derivatives, sequela",
          "volunteers-needed": 27
        }, {
          "date": "01/30/2019",
          "time": "9:56:00",
          "name": "Charlton Nashe",
          "organization": "Bins-Zulauf",
          "description": "Exposure to bed fire due to unsp burning material, subs",
          "volunteers-needed": 3
        }, {
          "date": "04/07/2019",
          "time": "13:09:22",
          "name": "Mindy Shoebotham",
          "organization": "Littel, Gutmann and Block",
          "description": "Lesion of femoral nerve, right lower limb",
          "volunteers-needed": 26
        }, {
          "date": "02/28/2019",
          "time": "17:13:26",
          "name": "Tod Coverlyn",
          "organization": "Reilly, Streich and Ryan",
          "description": "Inj oth muscles and tendons at ank/ft level, l foot, sequela",
          "volunteers-needed": 10
        }, {
          "date": "09/23/2019",
          "time": "11:03:38",
          "name": "Guglielma Camel",
          "organization": "Crooks LLC",
          "description": "Other fracture of shaft of unspecified ulna, sequela",
          "volunteers-needed": 4
        }, {
          "date": "06/30/2019",
          "time": "19:23:02",
          "name": "Andres Ovill",
          "organization": "Kemmer-Shields",
          "description": "Diseases of the digestive system complicating childbirth",
          "volunteers-needed": 27
        }, {
          "date": "02/16/2019",
          "time": "12:40:21",
          "name": "Robby Braferton",
          "organization": "Crooks Inc",
          "description": "Terrorism involving nuclear weapons, terrorist injured, subs",
          "volunteers-needed": 27
        }, {
          "date": "02/12/2019",
          "time": "8:12:29",
          "name": "Leela Braycotton",
          "organization": "Howell-Hudson",
          "description": "Disp fx of medial phalanx of right ring finger, sequela",
          "volunteers-needed": 8
        }, {
          "date": "04/07/2019",
          "time": "8:54:31",
          "name": "Isabel Christy",
          "organization": "Schimmel, Emmerich and Hintz",
          "description": "Target of (perceived) adverse discrimination and persecution",
          "volunteers-needed": 27
        }, {
          "date": "09/20/2019",
          "time": "19:43:00",
          "name": "Eudora Uebel",
          "organization": "Wolf LLC",
          "description": "Disp fx of unsp radial styloid pro, 7thP",
          "volunteers-needed": 29
        }, {
          "date": "06/02/2019",
          "time": "11:48:02",
          "name": "Janice Sybbe",
          "organization": "Hintz-Dickinson",
          "description": "Unspecified kyphosis, cervicothoracic region",
          "volunteers-needed": 3
        }, {
          "date": "09/24/2019",
          "time": "10:35:01",
          "name": "Wilton Owttrim",
          "organization": "Wiza LLC",
          "description": "Poisn by antiparkns drug/centr musc-tone depr, acc, sequela",
          "volunteers-needed": 26
        }, {
          "date": "02/14/2019",
          "time": "18:54:52",
          "name": "Aurelia Hubbard",
          "organization": "Gerhold-Hayes",
          "description": "Drown due to being washed overboard from water-skis",
          "volunteers-needed": 25
        }, {
          "date": "09/28/2019",
          "time": "8:06:42",
          "name": "Milli Hagston",
          "organization": "Gusikowski, Cremin and Hettinger",
          "description": "Malignant neoplasm of ovrlp sites of left eye and adnexa",
          "volunteers-needed": 9
        }, {
          "date": "06/24/2019",
          "time": "10:56:01",
          "name": "Amil Taree",
          "organization": "Ritchie-Boehm",
          "description": "Displacement of int fix of bone of left forearm, init",
          "volunteers-needed": 26
        }, {
          "date": "08/13/2019",
          "time": "14:51:50",
          "name": "Viola Rusk",
          "organization": "Wisozk, Hauck and Langworth",
          "description": "Retained (old) magnetic foreign body in anterior chamber",
          "volunteers-needed": 13
        }, {
          "date": "09/09/2019",
          "time": "11:35:03",
          "name": "Sande Vedyashkin",
          "organization": "Schoen-Koch",
          "description": "Chondromalacia, right wrist",
          "volunteers-needed": 12
        }, {
          "date": "01/17/2019",
          "time": "10:56:11",
          "name": "Angela Gorcke",
          "organization": "Bogan-Hoppe",
          "description": "Other secondary osteonecrosis, right finger(s)",
          "volunteers-needed": 24
        }, {
          "date": "11/29/2018",
          "time": "9:15:17",
          "name": "Giacomo Poore",
          "organization": "Dickens, McClure and Bahringer",
          "description": "Toxic effect of carbon disulfide, accidental, subs",
          "volunteers-needed": 17
        }, {
          "date": "05/26/2019",
          "time": "21:36:39",
          "name": "Jock State",
          "organization": "Bode, Gerlach and Borer",
          "description": "Polycystic ovarian syndrome",
          "volunteers-needed": 3
        }, {
          "date": "04/01/2019",
          "time": "15:36:05",
          "name": "Brig Scanlan",
          "organization": "Rippin LLC",
          "description": "Primary blast injury of fallopian tube, unspecified",
          "volunteers-needed": 9
        }, {
          "date": "09/14/2019",
          "time": "16:35:56",
          "name": "Maribel Nabbs",
          "organization": "Jacobs-Kshlerin",
          "description": "Other specified procedure converted to open procedure",
          "volunteers-needed": 13
        }, {
          "date": "08/25/2019",
          "time": "20:48:51",
          "name": "Fara Steljes",
          "organization": "Mante-Flatley",
          "description": "Maternal care for oth isoimmunization, third trimester, oth",
          "volunteers-needed": 12
        }, {
          "date": "04/09/2019",
          "time": "18:01:06",
          "name": "Callie Hugin",
          "organization": "Stark LLC",
          "description": "Exposure to infrared radiation",
          "volunteers-needed": 29
        }, {
          "date": "12/23/2018",
          "time": "10:29:06",
          "name": "Ellswerth Cammack",
          "organization": "Wilkinson, Ledner and Kohler",
          "description": "Partial traum amp at level betw l shoulder and elbow, subs",
          "volunteers-needed": 8
        }, {
          "date": "07/26/2019",
          "time": "20:30:39",
          "name": "Stearne Flook",
          "organization": "Miller-Mertz",
          "description": "Inj radial artery at wrist and hand level of unsp arm, subs",
          "volunteers-needed": 29
        }, {
          "date": "08/02/2019",
          "time": "12:56:11",
          "name": "Ardella Gullam",
          "organization": "Hagenes LLC",
          "description": "Prsn brd/alit mtrcy injured in collision w ped/anml, init",
          "volunteers-needed": 8
        }, {
          "date": "08/22/2019",
          "time": "8:07:08",
          "name": "Doralia Quinet",
          "organization": "Kautzer LLC",
          "description": "Chronic embolism and thombos unsp veins of upper extremity",
          "volunteers-needed": 17
        }, {
          "date": "12/29/2018",
          "time": "10:25:49",
          "name": "Duncan Brigstock",
          "organization": "Legros Inc",
          "description": "Dislocation of distal interphaln joint of l idx fngr, subs",
          "volunteers-needed": 30
        }, {
          "date": "10/02/2019",
          "time": "20:08:27",
          "name": "Glennie Almeida",
          "organization": "Blanda, Beier and Schowalter",
          "description": "Effusion, right wrist",
          "volunteers-needed": 20
        }, {
          "date": "12/04/2018",
          "time": "21:39:43",
          "name": "Christiana Spraggs",
          "organization": "Keebler and Sons",
          "description": "Path fx in neopltc disease, r ulna, subs for fx w malunion",
          "volunteers-needed": 8
        }, {
          "date": "12/28/2018",
          "time": "20:06:34",
          "name": "Daniela Juschke",
          "organization": "Kreiger Group",
          "description": "Intvrt disc stenosis of neural canal of thoracic region",
          "volunteers-needed": 4
        }, {
          "date": "04/16/2019",
          "time": "9:56:58",
          "name": "Christiano Bailes",
          "organization": "Conn, Schaden and Windler",
          "description": "Injury to barefoot water-skier",
          "volunteers-needed": 18
        }, {
          "date": "10/12/2019",
          "time": "8:14:39",
          "name": "Maurine Veck",
          "organization": "Nitzsche-Thompson",
          "description": "Partial traumatic amputation of unspecified ear",
          "volunteers-needed": 20
        }, {
          "date": "04/22/2019",
          "time": "18:37:18",
          "name": "Leeann Perel",
          "organization": "McDermott Group",
          "description": "Unsp injury to L2 level of lumbar spinal cord, subs encntr",
          "volunteers-needed": 25
        }, {
          "date": "07/02/2019",
          "time": "15:35:59",
          "name": "Ari Cahillane",
          "organization": "Kuhic-Williamson",
          "description": "Displ oblique fx shaft of humer, l arm, 7thP",
          "volunteers-needed": 9
        }, {
          "date": "05/30/2019",
          "time": "10:12:28",
          "name": "Jobie Gillie",
          "organization": "Morar Inc",
          "description": "Complete loss of teeth",
          "volunteers-needed": 14
        }, {
          "date": "07/19/2019",
          "time": "8:05:13",
          "name": "Winslow Schrader",
          "organization": "Green, Gusikowski and Kertzmann",
          "description": "Strain of unsp musc/tend at lower leg level, right leg, subs",
          "volunteers-needed": 25
        }, {
          "date": "06/03/2019",
          "time": "19:05:43",
          "name": "Ermin Mundell",
          "organization": "Grant-Gottlieb",
          "description": "Traumatic rupture of right ulnar collateral ligament",
          "volunteers-needed": 14
        }, {
          "date": "06/20/2019",
          "time": "22:44:24",
          "name": "Danica Scarbarrow",
          "organization": "Mosciski, MacGyver and Vandervort",
          "description": "Disp fx of prox phalanx of l great toe, 7thG",
          "volunteers-needed": 7
        }, {
          "date": "01/05/2019",
          "time": "13:21:24",
          "name": "Fawnia Smouten",
          "organization": "Maggio, Waters and Wuckert",
          "description": "Benign lipomatous neoplasm of skin, subcu of unsp sites",
          "volunteers-needed": 15
        }, {
          "date": "07/08/2019",
          "time": "8:33:35",
          "name": "Catie Coghlan",
          "organization": "Pacocha LLC",
          "description": "Pathological fracture in other disease, left ulna",
          "volunteers-needed": 23
        }, {
          "date": "02/11/2019",
          "time": "20:39:24",
          "name": "Angelita Gallahar",
          "organization": "Hartmann, Turner and Romaguera",
          "description": "Adverse effect of antirheumatics, NEC, init",
          "volunteers-needed": 22
        }, {
          "date": "02/02/2019",
          "time": "9:57:15",
          "name": "Rosamond Storres",
          "organization": "Stanton LLC",
          "description": "Explosion on board passenger ship, initial encounter",
          "volunteers-needed": 26
        }, {
          "date": "04/16/2019",
          "time": "22:16:10",
          "name": "Harlie Rupert",
          "organization": "Marks-Jaskolski",
          "description": "Corrosion of first degree of other site of trunk",
          "volunteers-needed": 23
        }, {
          "date": "11/21/2018",
          "time": "17:59:12",
          "name": "Thomasa Fennelow",
          "organization": "Ebert, Wehner and Kutch",
          "description": "Other specified injury of brachial artery, left side",
          "volunteers-needed": 29
        }, {
          "date": "03/27/2019",
          "time": "11:34:10",
          "name": "Noel Rosenbarg",
          "organization": "Kuhlman-Herman",
          "description": "Mech compl of implnt elec nstim of peripheral nerve lead",
          "volunteers-needed": 6
        }, {
          "date": "03/13/2019",
          "time": "13:47:15",
          "name": "Allie Garms",
          "organization": "Anderson-Ferry",
          "description": "Nondisp fx of base of 4th MC bone, r hand, 7thK",
          "volunteers-needed": 25
        }, {
          "date": "03/27/2019",
          "time": "13:58:42",
          "name": "Jdavie Sokill",
          "organization": "Steuber LLC",
          "description": "Congenital stenosis and stricture of bile ducts",
          "volunteers-needed": 3
        }, {
          "date": "04/05/2019",
          "time": "15:33:37",
          "name": "Thorndike Mountstephen",
          "organization": "Hagenes, Bernier and White",
          "description": "Corrosion of 2nd deg mul sites of right wrist and hand, init",
          "volunteers-needed": 4
        }, {
          "date": "03/10/2019",
          "time": "8:08:16",
          "name": "Alvy Godehard.sf",
          "organization": "Grimes, Deckow and Walter",
          "description": "Nondisp fx of shaft of 5th MC bone, r hand, 7thD",
          "volunteers-needed": 30
        }, {
          "date": "06/26/2019",
          "time": "11:39:42",
          "name": "Kesley Pizzie",
          "organization": "Jaskolski Group",
          "description": "Burn unsp degree of single r finger except thumb, init",
          "volunteers-needed": 11
        }, {
          "date": "11/18/2019",
          "time": "12:23:25",
          "name": "Sarajane Wallen",
          "organization": "Langworth Group",
          "description": "Exposure to oth furniture fire due to other burning material",
          "volunteers-needed": 7
        }, {
          "date": "11/02/2019",
          "time": "20:05:58",
          "name": "Gothart Stoppard",
          "organization": "Block and Sons",
          "description": "Burn of third degree of right thumb (nail), init encntr",
          "volunteers-needed": 6
        }, {
          "date": "06/12/2019",
          "time": "8:49:47",
          "name": "Damian Bunford",
          "organization": "Lynch-Brakus",
          "description": "Disp fx of lateral cuneiform of unsp ft, 7thP",
          "volunteers-needed": 19
        }, {
          "date": "04/27/2019",
          "time": "20:02:36",
          "name": "Jeannette Shaul",
          "organization": "Tremblay, Murray and Thiel",
          "description": "Toxic effect of contact w venomous marine plant, undet, init",
          "volunteers-needed": 22
        }, {
          "date": "06/03/2019",
          "time": "21:55:44",
          "name": "Irwin Dudleston",
          "organization": "Lynch Group",
          "description": "Unspecified physeal fracture of unspecified calcaneus, 7thP",
          "volunteers-needed": 20
        }, {
          "date": "09/03/2019",
          "time": "11:11:43",
          "name": "Karee Boldock",
          "organization": "Schultz Group",
          "description": "Nontraumatic ischemic infarction of muscle, left lower leg",
          "volunteers-needed": 24
        }, {
          "date": "07/08/2019",
          "time": "13:43:32",
          "name": "Sigfrid Woodburn",
          "organization": "Carter, Rosenbaum and Armstrong",
          "description": "Nondisplaced transcondylar fracture of left humerus, sequela",
          "volunteers-needed": 29
        }, {
          "date": "06/28/2019",
          "time": "11:09:49",
          "name": "Kippy McDermot",
          "organization": "Bauch-Torp",
          "description": "Adverse effect of antifungal antibiotics, sys used, sequela",
          "volunteers-needed": 4
        }, {
          "date": "02/26/2019",
          "time": "19:43:26",
          "name": "Mel Fairest",
          "organization": "Bode, Nikolaus and Fay",
          "description": "Unsp inj great saphenous at low leg level, left leg, sequela",
          "volunteers-needed": 29
        }, {
          "date": "04/29/2019",
          "time": "11:56:24",
          "name": "Morris Marshalleck",
          "organization": "Ortiz-Lockman",
          "description": "Prepatellar bursitis, left knee",
          "volunteers-needed": 30
        }, {
          "date": "01/22/2019",
          "time": "12:31:45",
          "name": "Iona Conen",
          "organization": "Turcotte, Pfannerstill and Fisher",
          "description": "Retained foreign body in right eye, unspecified eyelid",
          "volunteers-needed": 7
        }, {
          "date": "07/20/2019",
          "time": "10:26:10",
          "name": "Rand Claige",
          "organization": "Kris LLC",
          "description": "Oth disrd of amniotic fluid and membrns, first tri, unsp",
          "volunteers-needed": 14
        }, {
          "date": "01/12/2019",
          "time": "17:07:09",
          "name": "Abel Reinard",
          "organization": "Lynch-Carter",
          "description": "Oth comp of fb acc left in body fol remov cath/pack, subs",
          "volunteers-needed": 28
        }, {
          "date": "08/29/2019",
          "time": "17:20:23",
          "name": "Anabella Kingsman",
          "organization": "Swaniawski-Adams",
          "description": "Car pasngr injured in clsn with statnry object in traf, init",
          "volunteers-needed": 7
        }, {
          "date": "08/07/2019",
          "time": "8:54:20",
          "name": "Constantine Cardis",
          "organization": "Brekke, McGlynn and Paucek",
          "description": "Inj unsp muscle, fascia and tendon at shldr/up arm, unsp arm",
          "volunteers-needed": 9
        }]
      );
    });
};
