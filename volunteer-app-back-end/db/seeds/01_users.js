
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(
        [{
          "name": "Vi Ronchetti",
          "email": "vronchetti0@aol.com",
          "phone": "378-126-9138"
        }, {
          "name": "Siobhan Rantoull",
          "email": "srantoull1@parallels.com",
          "phone": "195-609-8293"
        }, {
          "name": "Sidonnie Jacklin",
          "email": "sjacklin2@ehow.com",
          "phone": "627-400-4339"
        }, {
          "name": "Michail Note",
          "email": "mnote3@vimeo.com",
          "phone": "808-414-6694"
        }, {
          "name": "Jesus Doutch",
          "email": "jdoutch4@amazon.co.uk",
          "phone": "157-589-4863"
        }, {
          "name": "Ailee Danks",
          "email": "adanks5@dell.com",
          "phone": "646-463-8015"
        }, {
          "name": "Wain Wood",
          "email": "wwood6@berkeley.edu",
          "phone": "512-171-7286"
        }, {
          "name": "Catherine Ronaldson",
          "email": "cronaldson7@state.tx.us",
          "phone": "735-409-1222"
        }, {
          "name": "Laughton Spry",
          "email": "lspry8@nature.com",
          "phone": "571-106-4528"
        }, {
          "name": "Matthaeus Hiscoke",
          "email": "mhiscoke9@wikipedia.org",
          "phone": "405-318-1198"
        }, {
          "name": "Lynn Gauntlett",
          "email": "lgauntletta@cocolog-nifty.com",
          "phone": "356-498-7314"
        }, {
          "name": "Janot Jaszczak",
          "email": "jjaszczakb@opensource.org",
          "phone": "502-460-7680"
        }, {
          "name": "Eldin Snassell",
          "email": "esnassellc@jiathis.com",
          "phone": "904-172-8625"
        }, {
          "name": "Rozalin Wardall",
          "email": "rwardalld@xinhuanet.com",
          "phone": "815-853-2863"
        }, {
          "name": "Tiffy Sibille",
          "email": "tsibillee@time.com",
          "phone": "868-639-9943"
        }, {
          "name": "Stephie Braid",
          "email": "sbraidf@newyorker.com",
          "phone": "795-966-5210"
        }, {
          "name": "Westbrooke Logue",
          "email": "wlogueg@admin.ch",
          "phone": "134-608-6617"
        }, {
          "name": "Clyde Hellen",
          "email": "chellenh@creativecommons.org",
          "phone": "272-878-1695"
        }, {
          "name": "Audrye McConnachie",
          "email": "amcconnachiei@ycombinator.com",
          "phone": "665-145-2786"
        }, {
          "name": "Thain Mithan",
          "email": "tmithanj@google.ca",
          "phone": "626-516-8649"
        }, {
          "name": "Shepard Attlee",
          "email": "sattleek@ifeng.com",
          "phone": "310-502-6804"
        }, {
          "name": "Jedd Boundley",
          "email": "jboundleyl@nifty.com",
          "phone": "539-482-5493"
        }, {
          "name": "Dita Wilfing",
          "email": "dwilfingm@sun.com",
          "phone": "770-429-5925"
        }, {
          "name": "Brandie Darling",
          "email": "bdarlingn@bloomberg.com",
          "phone": "838-287-8968"
        }, {
          "name": "Kippy Obey",
          "email": "kobeyo@twitpic.com",
          "phone": "452-908-6749"
        }, {
          "name": "Timothea McCome",
          "email": "tmccomep@drupal.org",
          "phone": "347-373-5361"
        }, {
          "name": "Carlin Denning",
          "email": "cdenningq@mit.edu",
          "phone": "693-171-0758"
        }, {
          "name": "Kippy Aloigi",
          "email": "kaloigir@goodreads.com",
          "phone": "701-690-6534"
        }, {
          "name": "William Binny",
          "email": "wbinnys@google.pl",
          "phone": "684-847-8769"
        }, {
          "name": "Dominique Pettman",
          "email": "dpettmant@reuters.com",
          "phone": "315-781-8634"
        }, {
          "name": "Noe Heinreich",
          "email": "nheinreichu@tinypic.com",
          "phone": "172-172-3872"
        }, {
          "name": "Filip MacGarvey",
          "email": "fmacgarveyv@marketwatch.com",
          "phone": "462-785-1990"
        }, {
          "name": "Elisabeth Jeckell",
          "email": "ejeckellw@princeton.edu",
          "phone": "404-184-0316"
        }, {
          "name": "Brandise Saladine",
          "email": "bsaladinex@paypal.com",
          "phone": "190-480-9280"
        }, {
          "name": "Amby Caitlin",
          "email": "acaitliny@51.la",
          "phone": "962-965-6237"
        }, {
          "name": "Sayres Dorracott",
          "email": "sdorracottz@tinyurl.com",
          "phone": "410-721-6807"
        }, {
          "name": "Saxe Brumhead",
          "email": "sbrumhead10@ezinearticles.com",
          "phone": "292-835-5022"
        }, {
          "name": "Vivi Tremblot",
          "email": "vtremblot11@unblog.fr",
          "phone": "287-649-1874"
        }, {
          "name": "Uta Piper",
          "email": "upiper12@cyberchimps.com",
          "phone": "794-123-5369"
        }, {
          "name": "Ruthe Pallant",
          "email": "rpallant13@hhs.gov",
          "phone": "562-466-7040"
        }, {
          "name": "Brion Whitby",
          "email": "bwhitby14@prnewswire.com",
          "phone": "612-505-2824"
        }, {
          "name": "Katherina Lynd",
          "email": "klynd15@sourceforge.net",
          "phone": "363-860-6960"
        }, {
          "name": "Letta Renihan",
          "email": "lrenihan16@army.mil",
          "phone": "504-339-0687"
        }, {
          "name": "Homere Braganca",
          "email": "hbraganca17@chron.com",
          "phone": "794-446-8616"
        }, {
          "name": "Dasya Mc Comb",
          "email": "dmc18@canalblog.com",
          "phone": "840-949-7314"
        }, {
          "name": "Brander Aveson",
          "email": "baveson19@so-net.ne.jp",
          "phone": "644-123-2167"
        }, {
          "name": "Grethel Peasby",
          "email": "gpeasby1a@sbwire.com",
          "phone": "685-736-0899"
        }, {
          "name": "Fowler Osbidston",
          "email": "fosbidston1b@mit.edu",
          "phone": "423-952-0302"
        }, {
          "name": "Hinze Balchen",
          "email": "hbalchen1c@salon.com",
          "phone": "344-824-0251"
        }, {
          "name": "Alis Killelea",
          "email": "akillelea1d@thetimes.co.uk",
          "phone": "335-880-6704"
        }]
      );
    });
};
