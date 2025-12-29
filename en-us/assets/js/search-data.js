// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "personal blog",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-collections",
          title: "collections",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "dropdown-my-layout",
              title: "my layout",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-my-roster",
              title: "my roster",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-dcc",
              title: "DCC",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-prototype",
              title: "prototype",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-tips",
              title: "tips",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-garden",
              title: "garden",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-renovation",
              title: "renovation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-history",
              title: "history",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-smart-home",
              title: "smart home",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-first-house",
              title: "first house",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-github-repositories",
              title: "GitHub repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-my-macs",
              title: "my Macs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-mac-tips",
              title: "Mac tips",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lubuntu-tips",
              title: "Lubuntu tips",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-playground",
              title: "playground",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-ramses",
      
        title: "Ramses",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ramses/";
        
      },
    },{id: "post-display-a-slip-an-a-cpe-panel",
      
        title: "Display a slip an a CPE panel",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/jmri-cpe-slip/";
        
      },
    },{id: "post-build-a-smart-fan",
      
        title: "Build a smart-fan",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/whisper-smart-fan/";
        
      },
    },{id: "post-build-an-aga-cooker-display",
      
        title: "Build an AGA Cooker Display",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/smartovendisplay/";
        
      },
    },{id: "post-tidbits",
      
        title: "Tidbits",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tidbits/";
        
      },
    },{id: "post-website-has-moved",
      
        title: "Website has moved",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/migrating-site/";
        
      },
    },{id: "post-reading-exif-tags-in-jekyll-with-exiftools",
      
        title: "Reading EXIF tags in Jekyll with exiftools",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/reading-exif-in-jekyll/";
        
      },
    },{id: "post-open-source",
      
        title: "Open Source",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/opensourcelinks/";
        
      },
    },{id: "post-favorite-titles",
      
        title: "Favorite titles",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/bookfavorites/";
        
      },
    },{id: "post-goodbye-hypersite",
      
        title: "Goodbye Hypersite",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/goodbye-hypersite/";
        
      },
    },{id: "post-tag-cloud-of-all-posts",
      
        title: "Tag cloud of all posts",
      
      description: "Live list of tags used in my posts",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tag-cloud/";
        
      },
    },{id: "post-home-automation",
      
        title: "Home Automation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/home-automation/";
        
      },
    },{id: "post-ipcc-last-warning",
      
        title: "IPCC Last Warning",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/ipcc/";
        
      },
    },{id: "post-chalk-paint",
      
        title: "Chalk Paint",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/chalkpaint/";
        
      },
    },{id: "post-busytown-under-corona",
      
        title: "Busytown under Corona",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/busytown-under-corona/";
        
      },
    },{id: "post-kitbash-a-rio-grande-signal-mast",
      
        title: "Kitbash a Rio Grande signal mast",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/rio_grande_signal/";
        
      },
    },{id: "post-hdl-locobooster-installation-issue-fixed",
      
        title: "HDL LocoBooster installation issue fixed",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/hdl-locobuffer-installation-issue-fixed/";
        
      },
    },{id: "post-leibniz-01",
      
        title: "Leibniz 01",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/leibniz-01/";
        
      },
    },{id: "post-locoio-update",
      
        title: "LocoIO update",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/locoio-update/";
        
      },
    },{id: "post-translation-dilemmas",
      
        title: "Translation Dilemmas",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/translation-dilemmas/";
        
      },
    },{id: "post-rlw-nn3-k-27",
      
        title: "RLW Nn3 K-27",
      
      description: "Assembling the RLW Nn3 K-27 kit",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/assembling-kit-rlw-k27/";
        
      },
    },{id: "post-jmri-is-more-fluid",
      
        title: "JMRI is more fluid",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/jmri-is-more-fluid/";
        
      },
    },{id: "post-git-it",
      
        title: "Git it?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/git-it/";
        
      },
    },{id: "post-durango-details",
      
        title: "Durango details",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/durango-details/";
        
      },
    },{id: "post-build-a-locoio-inverter",
      
        title: "Build a LocoIO Inverter",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/locoio-inverter/";
        
      },
    },{id: "post-2015-kicks-off",
      
        title: "2015 Kicks Off",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/2015/";
        
      },
    },{id: "post-wyman-39-s-sawmill",
      
        title: "Wyman&#39;s sawmill",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/wymans-sawmill-in-rockport-co/";
        
      },
    },{id: "post-transfer-dock-in-newport",
      
        title: "Transfer dock in Newport",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/transfer-dock-in-newport/";
        
      },
    },{id: "post-stemmen-2014",
      
        title: "Stemmen 2014",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/stemmen-2014/";
        
      },
    },{id: "post-rockwood-without-wood",
      
        title: "Rockwood without wood",
      
      description: "Rockwood w/o wood",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/rockwood-without-wood/";
        
      },
    },{id: "post-action-on-the-railroad",
      
        title: "Action on the railroad",
      
      description: "Snowshed near Silverton",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/action-on-the-railroad/";
        
      },
    },{id: "post-protection-from-the-elements",
      
        title: "Protection from the elements",
      
      description: "Snowshed near Silverton",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/silverton-snowshed/";
        
      },
    },{id: "post-urban-planning-theory-my-style",
      
        title: "Urban planning theory, my style",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/urban-planning-my-style/";
        
      },
    },{id: "post-lodore-mill-and-tram",
      
        title: "Lodore Mill and tram",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2014/shenandoah-mill/";
        
      },
    },{id: "post-desk-clean-up",
      
        title: "Desk clean-up",
      
      description: "Make room for your ideas",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2013/desk-cleanup/";
        
      },
    },{id: "post-the-meaning-of-drawing",
      
        title: "The meaning of drawing",
      
      description: "Nobel Prize scientist says drawing is essential",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2013/elisabeth-blackburn/";
        
      },
    },{id: "post-write-in-english-or-dutch",
      
        title: "Write in English or Dutch?",
      
      description: "Initial thoughts",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2013/language/";
        
      },
    },{id: "post-puimis-amp-egrave-re",
      
        title: "Puimis&amp;egrave;re",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2002/windowdrama/";
        
      },
    },{id: "books-70-minuten-een-introductie-op-2-onderzoeken-naar-constante-reistijd-en-virtuele-mobiliteit",
          title: '70 Minuten? Een introductie op 2 onderzoeken naar constante reistijd en virtuele mobiliteit...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1/";
            },},{id: "books-de-slinger-van-foucault",
          title: 'De slinger van Foucault',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/118/";
            },},{id: "books-als-op-een-winternacht-een-reiziger",
          title: 'Als op een winternacht een reiziger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/10/";
            },},{id: "books-de-kapellekensbaan",
          title: 'De kapellekensbaan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/100/";
            },},{id: "books-de-kleur-paars",
          title: 'De kleur paars',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/101/";
            },},{id: "books-de-koorts-van-la-fièvre-d-39-urbicande",
          title: 'De koorts van/La fièvre d&amp;#39;Urbicande',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/102/";
            },},{id: "books-de-levende-stad",
          title: 'De levende stad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/103/";
            },},{id: "books-de-menselijke-maat-een-studie-over-de-relatie-tussen-gebruiksmaten-en-menselijke-afmetingen-bewegingen-en-handelingen",
          title: 'De menselijke maat: Een studie over de relatie tussen gebruiksmaten en menselijke afmetingen,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/104/";
            },},{id: "books-de-mensen-thuis",
          title: 'De mensen thuis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/105/";
            },},{id: "books-de-mooiste-treinreizen-van-de-wereld",
          title: 'De mooiste treinreizen van de wereld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/106/";
            },},{id: "books-de-mooiste-verhalen-uit-de-bijbel",
          title: 'De mooiste verhalen uit de bijbel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/107/";
            },},{id: "books-de-naam-van-de-roos",
          title: 'De naam van de roos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/108/";
            },},{id: "books-de-negende",
          title: 'De Negende',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/109/";
            },},{id: "books-an-american-classic-the-durango-amp-silverton-narrow-gauge-railroad",
          title: 'An American Classic, the Durango &amp;amp; Silverton Narrow Gauge Railroad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/11/";
            },},{id: "books-de-ortolaan",
          title: 'De ortolaan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/110/";
            },},{id: "books-de-pisaanse-canto-39-s",
          title: 'De Pisaanse canto&amp;#39;s',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/111/";
            },},{id: "books-de-rationele-stad-van-bouwblok-tot-wooneenheid",
          title: 'De rationele stad / van bouwblok tot wooneenheid',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/112/";
            },},{id: "books-de-reis-om-de-wereld-in-80-dagen",
          title: 'De reis om de wereld in 80 dagen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/113/";
            },},{id: "books-de-rivier-die-tegen-de-berg-opstroomt-een-reis-naar-de-oorsprong-van-de-aarde-en-de-mens",
          title: 'De rivier die tegen de berg opstroomt, een reis naar de oorsprong van...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/114/";
            },},{id: "books-de-rivier-sumida",
          title: 'De rivier Sumida',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/115/";
            },},{id: "books-de-ruimtelijke-metamorfose-van-nederland-1988-2015-het-tijdperk-van-de-vierde-nota",
          title: 'De ruimtelijke metamorfose van Nederland 1988-2015. Het tijdperk van de vierde nota',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/116/";
            },},{id: "books-de-slang",
          title: 'De Slang',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/117/";
            },},{id: "books-de-slopende-slaap-van-cú-chulainn",
          title: 'De slopende slaap van Cú Chulainn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/119/";
            },},{id: "books-american-landscape-architecture-designers-and-places",
          title: 'American Landscape Architecture: Designers and Places',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/12/";
            },},{id: "books-de-stad-als-bewuste-schepping",
          title: 'De stad als bewuste schepping',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/120/";
            },},{id: "books-de-stad-als-casco-manifest-podium-werken-aan-het-ij",
          title: 'De stad als casco, manifest Podium Werken aan het IJ',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/121/";
            },},{id: "books-de-stad-als-publiek-domein",
          title: 'De stad als publiek domein',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/122/";
            },},{id: "books-de-sublieme-eenvoud-van-relativiteit-een-visuele-inleiding",
          title: 'De sublieme eenvoud van relativiteit, een visuele inleiding',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/125/";
            },},{id: "books-de-stedebouw-volgens-zijn-artistieke-grondbeginselen",
          title: 'De stedebouw volgens zijn artistieke grondbeginselen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/123/";
            },},{id: "books-de-strukturele-samenhang-van-architektuurbegrippen-de-mogelijkheid-tot-een-generatieve-systematiek-in-de-architektonische-vormleer",
          title: 'De strukturele samenhang van architektuurbegrippen: de mogelijkheid tot een generatieve systematiek in de...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/124/";
            },},{id: "books-de-taal-van-de-klassicistiese-architektuur",
          title: 'De taal van de klassicistiese architektuur',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/126/";
            },},{id: "books-de-verborgen-mens-de-thuiskomst",
          title: 'De verborgen mens / De thuiskomst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/127/";
            },},{id: "books-de-verhalen",
          title: 'De verhalen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/128/";
            },},{id: "books-de-volksrant-stijlboek",
          title: 'De Volksrant Stijlboek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/129/";
            },},{id: "books-among-the-believers-an-islamic-journey",
          title: 'Among the Believers: An Islamic Journey',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/13/";
            },},{id: "books-de-waarnemer",
          title: 'De waarnemer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/130/";
            },},{id: "books-de-wereld-van-sterren-en-planeten",
          title: 'De wereld van sterren en planeten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/131/";
            },},{id: "books-de-wonderlijke-avonturen-van-zebedeus",
          title: 'De wonderlijke avonturen van Zebedeus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/132/";
            },},{id: "books-de-zee-der-jeugd-roman",
          title: 'De zee der jeugd, roman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/133/";
            },},{id: "books-de-ziekte-van-middleton",
          title: 'De ziekte van Middleton',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/134/";
            },},{id: "books-de-zwaardvis",
          title: 'De zwaardvis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/135/";
            },},{id: "books-the-death-and-life-of-great-american-cities",
          title: 'The Death and Life of Great American Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/136/";
            },},{id: "books-delirious-new-york",
          title: 'Delirious New York',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/137/";
            },},{id: "books-denemarken",
          title: 'Denemarken',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/138/";
            },},{id: "books-denkende-machines-op-zoek-naar-kunstmatige-intelligentie",
          title: 'Denkende machines / op zoek naar kunstmatige intelligentie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/139/";
            },},{id: "books-anatomy",
          title: 'ANATOMY',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/14/";
            },},{id: "books-denkers-over-dilemma-39-s",
          title: 'Denkers over dilemma&amp;#39;s',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/140/";
            },},{id: "books-design-of-cities-revised-edition",
          title: 'Design of Cities : Revised Edition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/141/";
            },},{id: "books-designed-maps-a-sourcebook-for-gis-users",
          title: 'Designed Maps: A Sourcebook for GIS Users',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/142/";
            },},{id: "books-designing-better-maps-a-guide-for-gis-users",
          title: 'Designing Better Maps: A Guide for GIS Users',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/143/";
            },},{id: "books-designing-geodatabases-case-studies-in-gis-data-modeling",
          title: 'Designing Geodatabases: Case Studies in GIS Data Modeling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/144/";
            },},{id: "books-detailing-tips-and-techniques-from-model-railroader-magazine",
          title: 'Detailing Tips and Techniques from Model Railroader Magazine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/145/";
            },},{id: "books-the-details-of-modern-architecture-vol-1",
          title: 'The Details of Modern Architecture, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/146/";
            },},{id: "books-dhtml-for-the-world-wide-web",
          title: 'DHTML for the World Wide Web',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/147/";
            },},{id: "books-the-digitrax-big-book-of-dcc",
          title: 'The Digitrax Big Book of DCC',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/148/";
            },},{id: "books-dit-kan-niet-waar-zijn-onder-bankiers",
          title: 'Dit kan niet waar zijn: onder bankiers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/149/";
            },},{id: "books-the-ancestor-39-s-tale-a-pilgrimage-to-the-dawn-of-evolution",
          title: 'The Ancestor&amp;#39;s Tale: A Pilgrimage to the Dawn of Evolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/15/";
            },},{id: "books-domeliners-yesterday-39-s-trains-of-tomorrow",
          title: 'Domeliners: Yesterday&amp;#39;s Trains of Tomorrow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/150/";
            },},{id: "books-donald",
          title: 'Donald',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/151/";
            },},{id: "books-drawings-and-plans-of-frank-lloyd-wright-the-early-period",
          title: 'Drawings and Plans of Frank Lloyd Wright: The Early Period',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/152/";
            },},{id: "books-duits-voor-op-reis",
          title: 'Duits voor op reis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/153/";
            },},{id: "books-duyvels-end",
          title: 'Duyvels End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/154/";
            },},{id: "books-the-earliest-english-poems",
          title: 'The Earliest English Poems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/155/";
            },},{id: "books-the-economy-of-cities",
          title: 'The Economy of Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/156/";
            },},{id: "books-een-bijzonder-prettig-vergezicht",
          title: 'Een bijzonder prettig vergezicht',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/157/";
            },},{id: "books-een-droom-om-voor-te-sterven",
          title: 'Een droom om voor te sterven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/158/";
            },},{id: "books-een-gebreid-echtpaartje",
          title: 'Een gebreid echtpaartje',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/159/";
            },},{id: "books-los-angeles-a-guide-to-recent-architecture",
          title: 'Los Angeles: A Guide to Recent Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/16/";
            },},{id: "books-een-kader-voor-managementvaardigheden",
          title: 'Een kader voor managementvaardigheden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/160/";
            },},{id: "books-een-maand-in-het-boevenpak-een-novelle",
          title: 'Een maand in het boevenpak: Een novelle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/161/";
            },},{id: "books-een-overtollig-mens-en-andere-verhalen",
          title: 'Een overtollig mens: En andere verhalen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/162/";
            },},{id: "books-een-sentimentele-reis-door-frankrijk-en-italië",
          title: 'Een sentimentele reis door Frankrijk en Italië',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/163/";
            },},{id: "books-een-tent-van-goud-50-jaar-de-waard-tenten",
          title: 'Een tent van goud / 50 jaar De Waard tenten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/164/";
            },},{id: "books-een-zeeman-door-de-zee-verstoten",
          title: 'Een zeeman door de zee verstoten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/165/";
            },},{id: "books-elektrische-treinen-in-de-hema-catalogus",
          title: 'Elektrische treinen in de Hema, catalogus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/166/";
            },},{id: "books-elektronica-data-handboek",
          title: 'Elektronica Data Handboek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/167/";
            },},{id: "books-elfje-twaalfje",
          title: 'elfje Twaalfje',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/168/";
            },},{id: "books-elke-dag-vaderdag",
          title: 'Elke dag vaderdag',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/169/";
            },},{id: "books-los-angeles-the-architecture-of-4-ecologies",
          title: 'Los Angeles: The Architecture of 4 Ecologies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/17/";
            },},{id: "books-endless-forms-most-beautiful-the-new-science-of-evo-devo-and-the-making-of-the-animal-kingdom",
          title: 'Endless Forms Most Beautiful: The New Science of Evo Devo and the Making...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/170/";
            },},{id: "books-english-dictionary",
          title: 'English Dictionary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/171/";
            },},{id: "books-english-furniture-styles-from-1500-to-1830",
          title: 'English Furniture Styles from 1500 to 1830',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/172/";
            },},{id: "books-the-enigma-of-reason",
          title: 'The enigma of reason',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/173/";
            },},{id: "books-erzählungen-und-personen-des-alten-testaments",
          title: 'Erzählungen und Personen des Alten Testaments',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/174/";
            },},{id: "books-essays-über-kunst-und-künstler",
          title: 'Essays über Kunst und Künstler',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/175/";
            },},{id: "books-esthetisch-vertoog-en-ontwerp-theorie-en-methode-van-betekenisverlening-in-architectuur-en-kunst",
          title: 'Esthetisch vertoog en ontwerp: Theorie en methode van betekenisverlening in architectuur en kunst...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/176/";
            },},{id: "books-europese-steden-voor-kinderen",
          title: 'Europese steden voor kinderen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/177/";
            },},{id: "books-experiencing-architecture-2nd-edition",
          title: 'Experiencing Architecture - 2nd Edition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/178/";
            },},{id: "books-expressionist-architecture-in-drawings",
          title: 'Expressionist Architecture In Drawings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/179/";
            },},{id: "books-anwb-extra-stockholm",
          title: 'Anwb extra Stockholm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/18/";
            },},{id: "books-facetten-van-planologie",
          title: 'Facetten van planologie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/180/";
            },},{id: "books-faust-der-tragödie-zweiter-teil",
          title: 'Faust - Der Tragödie Zweiter Teil',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/181/";
            },},{id: "books-feest-festiviteiten-carnaval-en-festdagen-uit-de-hele-wereld",
          title: 'Feest! / Festiviteiten, carnaval en festdagen uit de hele wereld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/182/";
            },},{id: "books-focus-the-railroad-in-transition",
          title: 'Focus: the railroad in transition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/183/";
            },},{id: "books-il-foro-romano-e-il-palatino",
          title: 'Il Foro Romano e il Palatino',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/184/";
            },},{id: "books-the-forth-bridge",
          title: 'The Forth Bridge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/185/";
            },},{id: "books-frank-lloyd-wright",
          title: 'Frank Lloyd Wright',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/186/";
            },},{id: "books-frank-lloyd-wright-in-the-realm-of-ideas",
          title: 'Frank Lloyd Wright in the Realm of Ideas',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/187/";
            },},{id: "books-fries-bakboek",
          title: 'Fries bakboek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/188/";
            },},{id: "books-frits-palmboom-inspiration-and-process-in-architecture",
          title: 'Frits Palmboom, Inspiration and Process in Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/189/";
            },},{id: "books-apple-laserwriter-couleur-12-600ps-installation-connexion-et-utilisation-de-l-39-imprimante",
          title: 'Apple LaserWriter Couleur 12/600PS, Installation, connexion et utilisation de l&amp;#39;imprimante',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/19/";
            },},{id: "books-from-petticoat-tails-to-arbroath-smokies-traditional-foods-of-scotland",
          title: 'From Petticoat Tails to Arbroath Smokies: Traditional Foods of Scotland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/190/";
            },},{id: "books-gala",
          title: 'Gala',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/191/";
            },},{id: "books-galileo-galilei",
          title: 'Galileo Galilei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/192/";
            },},{id: "books-gedichte",
          title: 'Gedichte',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/193/";
            },},{id: "books-geheim-dagboek-1942-1944",
          title: 'Geheim dagboek 1942 - 1944',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/194/";
            },},{id: "books-geloven-in-een-god-die-niet-bestaat",
          title: 'Geloven in een God die niet bestaat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/195/";
            },},{id: "books-geluksfabriek",
          title: 'Geluksfabriek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/196/";
            },},{id: "books-gemengde-gevoelens",
          title: 'Gemengde gevoelens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/197/";
            },},{id: "books-generation-x",
          title: 'Generation X',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/198/";
            },},{id: "books-genuine-falun-red",
          title: 'Genuine Falun Red',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/199/";
            },},{id: "books-90-mensen-bekende-en-minder-bekende",
          title: '90 Mensen / Bekende en minder bekende',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2/";
            },},{id: "books-applied-mac-scripting",
          title: 'Applied Mac Scripting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/20/";
            },},{id: "books-god-als-misvatting",
          title: 'God als misvatting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/200/";
            },},{id: "books-god-39-s-architect-pugin-and-the-building-of-romantic-britain",
          title: 'God&amp;#39;s Architect: Pugin and the Building of Romantic Britain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/201/";
            },},{id: "books-goden-en-heldensagen",
          title: 'Goden- en Heldensagen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/202/";
            },},{id: "books-government-of-space-town-planning-in-modern-society",
          title: 'Government of Space, Town Planning in modern society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/203/";
            },},{id: "books-if-on-a-winter-39-s-night-a-traveler",
          title: 'If on a Winter&amp;#39;s Night a Traveler',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/if-on-a-winter-s-night-a-traveler/";
            },},{id: "books-strange-case-of-dr-jekyll-and-mr-hyde",
          title: 'Strange Case of Dr Jekyll and Mr Hyde',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/strange-case-of-dr-jekyll-and-mr-hyde/";
            },},{id: "books-griekenland-vaste-land",
          title: 'Griekenland vaste land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/204/";
            },},{id: "books-griekse-eilanden-in-de-egeische-zee",
          title: 'Griekse eilanden in de Egeische Zee',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/205/";
            },},{id: "books-grote-tuin-encyclopedie",
          title: 'Grote Tuin-Encyclopedie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/206/";
            },},{id: "books-handbook-of-celtic-ornament",
          title: 'Handbook of Celtic Ornament',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/207/";
            },},{id: "books-hanegeschrei",
          title: 'Hanegeschrei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/208/";
            },},{id: "books-hazepeper-gevolgd-door-napoleon-sunt-pueri-pueri-en-varia",
          title: 'Hazepeper ; gevolgd door Napoleon ; Sunt pueri pueri-- ; en, Varia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/209/";
            },},{id: "books-architectural-space-in-ancient-greece",
          title: 'Architectural Space in Ancient Greece',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/21/";
            },},{id: "books-hebbes-filosofie",
          title: 'Hebbes Filosofie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/210/";
            },},{id: "books-herfst-in-het-bos",
          title: 'Herfst in het bos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/211/";
            },},{id: "books-die-herrschaft-der-mechanisierung-ein-beitrag-zur-anonymen-geschichte",
          title: 'Die Herrschaft der Mechanisierung. Ein Beitrag zur anonymen Geschichte.',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/212/";
            },},{id: "books-het-architektonies-denken",
          title: 'Het architektonies denken',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/213/";
            },},{id: "books-het-behouden-huis",
          title: 'Het behouden huis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/214/";
            },},{id: "books-het-boek-en-de-broederschap",
          title: 'Het boek en de broederschap',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/215/";
            },},{id: "books-het-boze-oog",
          title: 'Het boze oog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/216/";
            },},{id: "books-het-eiland-van-de-vorige-dag-goedkope-editie",
          title: 'Het eiland van de vorige dag / Goedkope editie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/217/";
            },},{id: "books-het-epos-van-barcelona-koningin-der-steden",
          title: 'Het Epos van Barcelona, koningin der steden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/218/";
            },},{id: "books-het-groene-boekje-woordenlijst-nederlandse-taal",
          title: 'Het Groene Boekje (Woordenlijst Nederlandse taal)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/219/";
            },},{id: "books-the-architecture-of-ireland-from-earliest-times-to-1880",
          title: 'The Architecture of Ireland from Earliest Times to 1880',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/22/";
            },},{id: "books-het-groot-homeopathisch-gezondheidsboek",
          title: 'Het groot homeopathisch gezondheidsboek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/220/";
            },},{id: "books-het-jonge-vadersboek-spelletjes-enzo-voor-kinderen",
          title: 'Het jonge vadersboek / spelletjes enzo voor kinderen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/221/";
            },},{id: "books-het-land-van-aankomst",
          title: 'Het land van aankomst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/222/";
            },},{id: "books-het-leven-en-de-opvattingen-van-de-heer-tristram-shandy",
          title: 'Het leven en de opvattingen van de heer Tristram Shandy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/223/";
            },},{id: "books-het-nieuwe-bouwen-internationaal-ciam-volkshuisvesting-stedebouw-het-nieuwe-bouwen-international-ciam-housing-town-planning",
          title: 'Het nieuwe bouwen, internationaal: CIAM, volkshuisvesting, stedebouw Het nieuwe bouwen, international : CIAM,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/224/";
            },},{id: "books-het-nieuwe-bouwen-de-nieuwe-beelding-in-de-architectuur-neo-plasticism-in-architecture-de-stijl",
          title: 'Het Nieuwe bouwen: de nieuwe beelding in de architectuur, neo-plasticism in architecture, De...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/225/";
            },},{id: "books-het-nieuwe-stijlboek-de-volkskrant",
          title: 'Het nieuwe stijlboek / de Volkskrant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/226/";
            },},{id: "books-het-nulnummer",
          title: 'Het Nulnummer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/227/";
            },},{id: "books-het-ontsnapte-land",
          title: 'Het ontsnapte land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/228/";
            },},{id: "books-het-proces-socrates",
          title: 'Het proces Socrates',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/229/";
            },},{id: "books-het-rechts-van-de-sterkste-darwin-en-het-ontstaan-van-de-moderne-evolutietheorie",
          title: 'Het rechts van de sterkste, Darwin en het ontstaan van de moderne evolutietheorie...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/230/";
            },},{id: "books-the-architecture-of-the-well-tempered-environment",
          title: 'The Architecture of the Well-tempered Environment',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/23/";
            },},{id: "books-het-rook-offer",
          title: 'Het Rook-Offer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/231/";
            },},{id: "books-het-schip-van-blaauw",
          title: 'Het Schip van Blaauw',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/232/";
            },},{id: "books-het-snelweghuis-the-motorway-house-living-in-the-fast-lane-ideeënprijsvraag",
          title: 'Het snelweghuis/The Motorway House, living in the fast lane, Ideeënprijsvraag',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/233/";
            },},{id: "books-het-theater-de-brief-en-de-waarheid",
          title: 'Het Theater De Brief En De Waarheid',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/234/";
            },},{id: "books-het-verdriet-van-belgië-roman",
          title: 'Het verdriet van België : roman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/235/";
            },},{id: "books-het-vreugdevuur-der-ijdelheden",
          title: 'Het vreugdevuur der ijdelheden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/236/";
            },},{id: "books-het-wonder-van-san-baudolino",
          title: 'Het wonder van San Baudolino',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/237/";
            },},{id: "books-het-zijn-net-mensen-beelden-uit-het-midden-oosten",
          title: 'Het zijn net mensen, beelden uit het Midden-Oosten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/238/";
            },},{id: "books-het-zingen-van-de-krekels-japanse-haiku",
          title: 'Het zingen van de krekels / Japanse Haiku',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/239/";
            },},{id: "books-l-39-architettura-della-casa",
          title: 'L&amp;#39;architettura della casa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/24/";
            },},{id: "books-het-zingen-van-de-krekels-japanse-haiku",
          title: 'Het zingen van de krekels, Japanse Haiku',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/240/";
            },},{id: "books-hoe-modern-is-de-nederlandse-architectuur",
          title: 'Hoe modern is de Nederlandse architectuur?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/241/";
            },},{id: "books-honderd-jaar-fin-de-siecle-1894-1994",
          title: 'Honderd jaar fin de siecle 1894-1994',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/242/";
            },},{id: "books-honderd-jaar-nederlandse-architectuur-1901-2000",
          title: 'Honderd jaar Nederlandse architectuur, 1901-2000',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/243/";
            },},{id: "books-hongarije",
          title: 'Hongarije',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/244/";
            },},{id: "books-hoogste-woord",
          title: 'Hoogste woord',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/245/";
            },},{id: "books-houses-in-the-landscape-a-regional-study-of-vernacular-building-styles-in-england-and-wales",
          title: 'Houses in the landscape: A regional study of vernacular building styles in England...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/246/";
            },},{id: "books-how-to-build-realistic-model-railroad-scenery",
          title: 'How to Build Realistic Model Railroad Scenery',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/247/";
            },},{id: "books-how-to-make-bookshelves-and-cabinets",
          title: 'How to Make Bookshelves and Cabinets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/248/";
            },},{id: "books-html-for-the-world-wide-web-with-xhtml-a",
          title: 'HTML for the World Wide Web with XHTML a',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/249/";
            },},{id: "books-asterix-en-de-wijde-wereld",
          title: 'Asterix en de wijde wereld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/25/";
            },},{id: "books-the-hudson-valley-and-catskill-mountains-an-explorer-39-s-guide",
          title: 'The Hudson Valley and Catskill Mountains: An Explorer&amp;#39;s Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/250/";
            },},{id: "books-ideal-city-hard-cover",
          title: 'Ideal City (hard cover)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/251/";
            },},{id: "books-ierse-sprookjes",
          title: 'Ierse sprookjes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/252/";
            },},{id: "books-ierse-stemmen-bleomlezing-van-moderne-schrijvers-uit-heet-west-eiland",
          title: 'Ierse stemmen / bleomlezing van moderne schrijvers uit heet West-Eiland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/253/";
            },},{id: "books-ik-droom-dus-verhalen",
          title: 'Ik droom dus: Verhalen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/254/";
            },},{id: "books-ik-droom-over-vrede",
          title: 'Ik droom over vrede',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/255/";
            },},{id: "books-the-impecunious-house-restorer-personal-vision-amp-historic-accuracy",
          title: 'The Impecunious House Restorer: Personal Vision &amp;amp; Historic Accuracy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/256/";
            },},{id: "books-inside-the-bauhaus",
          title: 'Inside The Bauhaus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/259/";
            },},{id: "books-in-europa-reizen-door-de-twintigste-eeuw",
          title: 'In Europa: Reizen door de twintigste eeuw',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/257/";
            },},{id: "books-infrastructural-urbanism-addressing-the-in-between",
          title: 'Infrastructural Urbanism: Addressing the In-Between',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/258/";
            },},{id: "books-asterix-werkedition-bd-1-asterix-der-gallier",
          title: 'Asterix Werkedition, Bd.1, Asterix der Gallier',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/26/";
            },},{id: "books-insider-39-s-guide-to-cape-cod-and-the-islands",
          title: 'Insider&amp;#39;s Guide to Cape Cod and the Islands',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/260/";
            },},{id: "books-italiaans",
          title: 'Italiaans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/261/";
            },},{id: "books-ivan-leonidov",
          title: 'Ivan Leonidov',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/262/";
            },},{id: "books-the-jaguar-smile",
          title: 'The Jaguar Smile',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/263/";
            },},{id: "books-japanese-miscellany-strane-stories-folklore-gleanings-studies-here-and-there",
          title: 'Japanese Miscellany, Strane stories, folklore gleanings, studies here and there',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/264/";
            },},{id: "books-jezus-van-nazaret-druk-5",
          title: 'Jezus van Nazaret / druk 5',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/265/";
            },},{id: "books-jij-die-mij-ik-maakt",
          title: 'Jij die mij ik maakt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/266/";
            },},{id: "books-john-heartfield-exil-in-der-csr-fotomontagen-1933-1938",
          title: 'John Heartfield, Exil in der CSR, Fotomontagen 1933-1938',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/267/";
            },},{id: "books-jurassic-park-het-sauriër-park",
          title: 'Jurassic Park / Het Sauriër Park',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/268/";
            },},{id: "books-k-f-schinkel-collected-architectural-designs",
          title: 'K.F. Schinkel: Collected Architectural Designs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/269/";
            },},{id: "books-attila-op-de-bulldozer-rijkswaterstaat-en-het-rivierengebied",
          title: 'Attila op de bulldozer, rijkswaterstaat en het rivierengebied',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/27/";
            },},{id: "books-kerewin",
          title: 'Kerewin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/270/";
            },},{id: "books-kersebloed",
          title: 'Kersebloed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/271/";
            },},{id: "books-kerstfeest-in-de-middeleeuwen-geschilderd-en-geschreven",
          title: 'Kerstfeest in de middeleeuwen: Geschilderd en geschreven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/272/";
            },},{id: "books-kind-onder-kannibalen",
          title: 'Kind onder kannibalen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/273/";
            },},{id: "books-kinderen-wereldwijd",
          title: 'Kinderen wereldwijd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/274/";
            },},{id: "books-die-kirchen-von-skjern-propstei",
          title: 'Die Kirchen von Skjern Propstei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/275/";
            },},{id: "books-kleine-modelbaanserie-deel-15-modelbaanautomatisering-en-elektronica",
          title: 'Kleine modelbaanserie deel 15: Modelbaanautomatisering en elektronica',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/276/";
            },},{id: "books-krassende-kraaien-bespiegelingen-van-een-dierenarts",
          title: 'Krassende kraaien / Bespiegelingen van een dierenarts',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/277/";
            },},{id: "books-lacock-tea-time-recipes",
          title: 'LACOCK TEA TIME RECIPES',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/278/";
            },},{id: "books-landschaftsschutz-2003-protection-du-paysage-2003",
          title: 'Landschaftsschutz 2003 / Protection du paysage 2003',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/279/";
            },},{id: "books-barcelona-mini-cd-rom",
          title: 'Barcelona + mini CD-ROM',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/28/";
            },},{id: "books-lang-geleden",
          title: 'Lang geleden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/280/";
            },},{id: "books-langs-de-groene-grens-van-amsterdam",
          title: 'Langs de groene grens van Amsterdam',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/281/";
            },},{id: "books-leidraad-voor-het-vaarbewijs",
          title: 'Leidraad voor het vaarbewijs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/282/";
            },},{id: "books-leidschrift-de-vierde-dimensie-stedebouw-in-historisch-perspectief",
          title: 'Leidschrift: De vierde dimensie, stedebouw in historisch perspectief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/283/";
            },},{id: "books-lekker-lente",
          title: 'Lekker lente',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/284/";
            },},{id: "books-less-than-zero",
          title: 'Less Than Zero',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/285/";
            },},{id: "books-lessen-in-regie",
          title: 'Lessen in regie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/286/";
            },},{id: "books-leven-na-god",
          title: 'Leven na God',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/288/";
            },},{id: "books-leven-is-een-kunst-over-morele-ervaring-deugdethiek-en-levenskunst",
          title: 'Leven is een kunst: over morele ervaring, deugdethiek en levenskunst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/287/";
            },},{id: "books-life-abundant-rethinking-theology-and-economy-for-a-planet-in-peril",
          title: 'Life Abundant: Rethinking Theology and Economy for a Planet in Peril',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/289/";
            },},{id: "books-barefoot-gen-a-cartoon-story-of-hiroshima",
          title: 'Barefoot Gen: A Cartoon Story of Hiroshima',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/29/";
            },},{id: "books-lijmen",
          title: 'Lijmen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/290/";
            },},{id: "books-the-linz-cafe",
          title: 'The Linz Cafe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/291/";
            },},{id: "books-lissabon-portugal",
          title: 'Lissabon Portugal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/292/";
            },},{id: "books-louise-michel-engel-in-het-harnas-twee-spelen-over-de-commune-van-parijs-quot-de-barricade-quot-en-quot-engel-in-het-harnas-quot-met-een-essay-over-de-commune-en-over-louise-michel",
          title: 'Louise Michel, engel in het harnas: Twee spelen over de Commune van Parijs,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/293/";
            },},{id: "books-lucifer",
          title: 'Lucifer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/294/";
            },},{id: "books-m-c-escher-caleidocyli",
          title: 'M.C. Escher Caleidocyli',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/295/";
            },},{id: "books-macbeth",
          title: 'Macbeth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/296/";
            },},{id: "books-macintosh-plus-gebruikershandleiding",
          title: 'Macintosh Plus gebruikershandleiding',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/297/";
            },},{id: "books-mackintosh-furniture",
          title: 'Mackintosh Furniture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/298/";
            },},{id: "books-magical-storybook",
          title: 'Magical storybook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/299/";
            },},{id: "books-100-barcelona",
          title: '100% Barcelona',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/3/";
            },},{id: "books-basiswoordenlijst-nederlandse-taal",
          title: 'Basiswoordenlijst Nederlandse taal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/30/";
            },},{id: "books-magische-momenten-in-de-ruimtelijke-planvorming",
          title: 'Magische Momenten / in de ruimtelijke planvorming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/300/";
            },},{id: "books-the-magnificent-book-of-kites",
          title: 'The Magnificent Book of Kites',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/301/";
            },},{id: "books-the-making-of-the-representative-for-planet-8-canopus-in-argos-archives",
          title: 'The Making of the Representative for Planet 8, Canopus in Argos: Archives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/302/";
            },},{id: "books-mannen-geld-en-meer-van-die-ellende",
          title: 'Mannen, Geld en meer van die ellende',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/303/";
            },},{id: "books-maus-vertelling-van-een-overlevende",
          title: 'Maus, vertelling van een overlevende',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/304/";
            },},{id: "books-max-havelaar-of-de-koffieveilingen-der-nederlandsche-handel-maatschappij",
          title: 'Max Havelaar, of de koffieveilingen der Nederlandsche Handel-Maatschappij',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/305/";
            },},{id: "books-medisch-gezondheidsboek-voor-het-hele-gezin",
          title: 'Medisch gezondheidsboek voor het hele gezin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/306/";
            },},{id: "books-meer-om-cieraet-als-gebruijck-tuingeschiedenis-van-gelderse-buitenplaatsen",
          title: 'Meer om Cieraet als Gebruijck / Tuingeschiedenis van Gelderse buitenplaatsen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/307/";
            },},{id: "books-melnikov-solo-architect-in-a-mass-society",
          title: 'Melnikov: Solo Architect in a Mass Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/308/";
            },},{id: "books-memoires-van-boontje",
          title: 'Memoires van Boontje',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/309/";
            },},{id: "books-bekentenissen-van-een-ierse-rebel",
          title: 'Bekentenissen van een Ierse rebel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/31/";
            },},{id: "books-men-behaving-badly",
          title: 'Men Behaving Badly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/310/";
            },},{id: "books-meneer-ibrahim-en-de-bloemen-van-de-koran",
          title: 'Meneer Ibrahim en de bloemen van de koran',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/311/";
            },},{id: "books-michael-jackson-39-s-malt-whisky-companion",
          title: 'Michael Jackson&amp;#39;s Malt Whisky Companion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/312/";
            },},{id: "books-microserfs",
          title: 'Microserfs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/313/";
            },},{id: "books-mijn-avonturen-door-v-swchwrm",
          title: 'Mijn Avonturen Door V. Swchwrm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/314/";
            },},{id: "books-the-model-railroader-39-s-guide-to-industries-along-the-tracks",
          title: 'The Model Railroader&amp;#39;s Guide to Industries Along the Tracks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/315/";
            },},{id: "books-modern-architecture",
          title: 'Modern Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/316/";
            },},{id: "books-modern-boeren",
          title: 'Modern boeren',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/317/";
            },},{id: "books-monumentenatlas-van-nederland-1100-historische-nederzettingen-in-kaart",
          title: 'Monumentenatlas van Nederland. 1100 historische nederzettingen in kaart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/318/";
            },},{id: "books-moonfleet",
          title: 'Moonfleet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/319/";
            },},{id: "books-berlitz-taalgids-grieks",
          title: 'Berlitz Taalgids Grieks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/32/";
            },},{id: "books-the-mountains-of-california",
          title: 'The Mountains of California',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/320/";
            },},{id: "books-music-by-philip-glass",
          title: 'Music by Philip Glass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/321/";
            },},{id: "books-music-hall-een-programma-vol-charlestons-grotesken-polonaises-en-dressuurnummers",
          title: 'Music-hall: Een programma vol charlestons, grotesken, polonaises en dressuurnummers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/322/";
            },},{id: "books-mythen-een-beknopte-geschiedenis",
          title: 'Mythen, een beknopte geschiedenis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/323/";
            },},{id: "books-naaien-is-niet-moeilijk",
          title: 'Naaien is niet moeilijk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/324/";
            },},{id: "books-narrow-gauge-steam-locomotives",
          title: 'Narrow Gauge Steam Locomotives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/325/";
            },},{id: "books-navigator-duitsland",
          title: 'Navigator Duitsland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/326/";
            },},{id: "books-nee-heb-je-notities-over-ziek-zijn",
          title: 'Nee heb je: Notities over ziek zijn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/327/";
            },},{id: "books-the-new-acropolis-museum-competition-catalog",
          title: 'The New Acropolis Museum / Competition catalog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/328/";
            },},{id: "books-the-new-science-of-cities",
          title: 'The New Science of Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/329/";
            },},{id: "books-berner-oberland-vierwaldstättersee-mittelland",
          title: 'Berner Oberland / Vierwaldstättersee, Mittelland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/33/";
            },},{id: "books-niet-zo-maar-zo-2",
          title: 'Niet zo maar zo! 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/330/";
            },},{id: "books-nieuw-licht-o-poude-wegen",
          title: 'Nieuw licht o poude wegen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/331/";
            },},{id: "books-night-trains-the-pullman-systems-in-the-golden-years-of-american-rail-travel",
          title: 'Night Trains : The Pullman Systems in the Golden Years of American Rail...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/332/";
            },},{id: "books-nine-plays-of-the-modern-theater",
          title: 'Nine Plays of the Modern Theater',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/333/";
            },},{id: "books-nooit-meer-uitslapen",
          title: 'Nooit meer uitslapen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/334/";
            },},{id: "books-norman-rockwell",
          title: 'Norman Rockwell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/335/";
            },},{id: "books-normandië-bretagne",
          title: 'Normandië, Bretagne',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/336/";
            },},{id: "books-obsessie",
          title: 'Obsessie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/337/";
            },},{id: "books-odysseia-de-reizen-van-odysseus",
          title: 'Odysseia, de reizen van Odysseus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/338/";
            },},{id: "books-offshore",
          title: 'Offshore',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/339/";
            },},{id: "books-beschrijving-van-het-eisinga-planetarium-te-franeker",
          title: 'Beschrijving van het Eisinga-Planetarium te Franeker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/34/";
            },},{id: "books-oh-zit-dat-zo",
          title: 'Oh, zit dat zo!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/340/";
            },},{id: "books-the-old-jest",
          title: 'The old jest',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/341/";
            },},{id: "books-om-te-beginnen",
          title: 'Om te beginnen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/342/";
            },},{id: "books-omstreken-foto-39-s-1980-2006",
          title: 'Omstreken / Foto&amp;#39;s 1980 - 2006',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/343/";
            },},{id: "books-onderweg",
          title: 'Onderweg',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/344/";
            },},{id: "books-onze-mooiste-verhalen",
          title: 'Onze mooiste verhalen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/345/";
            },},{id: "books-onze-voorouders",
          title: 'Onze voorouders',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/346/";
            },},{id: "books-ooievaar-de-toekomst-van-het-rievierengebied",
          title: 'Ooievaar, De toekomst van het rievierengebied',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/347/";
            },},{id: "books-op-zoek",
          title: 'Op zoek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/348/";
            },},{id: "books-op-zoek-naar-de-hemel-op-aarde-stadsidealen-door-de-eeuwen-heen",
          title: 'Op zoek naar de hemel op aarde, stadsidealen door de eeuwen heen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/349/";
            },},{id: "books-bestijg-de-trein-nooit-zonder-uw-valies-met-dromen-gedichten-verhalen-columns-vanaf-1829",
          title: 'Bestijg de trein nooit zonder uw valies met dromen: Gedichten, verhalen, columns vanaf...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/35/";
            },},{id: "books-open-here-the-art-of-instructional-design",
          title: 'Open Here: The Art of Instructional Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/350/";
            },},{id: "books-oranje-kruis-boekje-handleiding-tot-het-verlenen-van-eerste-hulp-bij-ongelukken",
          title: 'Oranje Kruis Boekje - Handleiding Tot Het Verlenen Van Eerste Hulp Bij Ongelukken...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/351/";
            },},{id: "books-the-origin-of-species",
          title: 'The Origin of Species',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/352/";
            },},{id: "books-oscar-and-lucinda",
          title: 'Oscar and Lucinda',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/353/";
            },},{id: "books-oudergericht-pedagogisch-adviseren-opad-gereedschap-voor-het-werken-met-ouders",
          title: 'Oudergericht pedagogisch adviseren (OPAD), Gereedschap voor het werken met ouders',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/354/";
            },},{id: "books-an-outline-of-european-architecture",
          title: 'An Outline of European Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/355/";
            },},{id: "books-the-prince-of-wales-right-or-wrong-an-architect-replies",
          title: 'The Prince of Wales: Right or Wrong? an Architect Replies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/368/";
            },},{id: "books-the-oxford-book-of-modern-science-writing",
          title: 'The Oxford Book of Modern Science Writing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/356/";
            },},{id: "books-panorama-nederland",
          title: 'Panorama Nederland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/357/";
            },},{id: "books-a-pattern-image-a-typological-tool-for-quality-in-urban-planning",
          title: 'A Pattern Image, a typological tool for quality in urban planning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/358/";
            },},{id: "books-a-pattern-language-towns-buildings-construction",
          title: 'A Pattern Language : Towns, Buildings, Construction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/359/";
            },},{id: "books-beter-nederlands",
          title: 'Beter Nederlands',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/36/";
            },},{id: "books-the-penguin-dictionary-of-architecture",
          title: 'The Penguin Dictionary of Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/360/";
            },},{id: "books-the-perennial-philosophy",
          title: 'The Perennial Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/361/";
            },},{id: "books-perl-5-pocket-reference",
          title: 'Perl 5 Pocket Reference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/362/";
            },},{id: "books-perl-and-cgi-for-the-world-wide-web",
          title: 'Perl and CGI for the World Wide Web',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/363/";
            },},{id: "books-php-kort-en-krachtig",
          title: 'PHP Kort en Krachtig',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/364/";
            },},{id: "books-plano",
          title: 'Plano',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/365/";
            },},{id: "books-plays-poems-and-prose",
          title: 'Plays, Poems and Prose',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/366/";
            },},{id: "books-polaroids-from-the-dead",
          title: 'Polaroids from the Dead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/367/";
            },},{id: "books-prisma-mini-zweeds",
          title: 'Prisma mini Zweeds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/369/";
            },},{id: "books-bevroren-vuurwerk",
          title: 'Bevroren vuurwerk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/37/";
            },},{id: "books-prisma-voornamen",
          title: 'Prisma voornamen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/370/";
            },},{id: "books-professionele-bedrijfscommunicatie-het-handboek-voor-tekstschrijvers",
          title: 'Professionele bedrijfscommunicatie, het handboek voor tekstschrijvers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/371/";
            },},{id: "books-profijtelijk-vermaak-moraliteit-en-satire-uit-de-16e-en-17e-eeuw",
          title: 'Profijtelijk vermaak / Moraliteit en satire uit de 16e en 17e eeuw',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/372/";
            },},{id: "books-progetti-e-disegni-1949-1979-projects-and-drawings-1949-1979",
          title: 'Progetti e disegni, 1949-1979: Projects and drawings, 1949-1979',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/373/";
            },},{id: "books-programs-and-manifestoes-on-20th-century-architecture",
          title: 'Programs and Manifestoes on 20th-Century Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/374/";
            },},{id: "books-psalmen-voor-een-onbegrijpelijk-bestaan",
          title: 'Psalmen voor een onbegrijpelijk bestaan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/375/";
            },},{id: "books-publieke-werken",
          title: 'Publieke werken',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/376/";
            },},{id: "books-punkt-und-linie-zu-fläche-beitrag-zur-analyse-der-malerischen-elemente-7-auflage-mit-einer-einführung-von-max-bill",
          title: 'Punkt und linie zu fläche. beitrag zur analyse der malerischen elemente. 7. auflage,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/377/";
            },},{id: "books-python-phrasebook",
          title: 'Python Phrasebook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/378/";
            },},{id: "books-python-visual-quickstart-guide",
          title: 'Python: Visual QuickStart Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/379/";
            },},{id: "books-bezig-zijn-met-bloemsierkunst",
          title: 'Bezig zijn met bloemsierkunst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/38/";
            },},{id: "books-quick-and-easy-portuguese",
          title: 'Quick and Easy Portuguese',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/380/";
            },},{id: "books-r-m-schindler-house-1921-22",
          title: 'R.M. Schindler House 1921-22',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/381/";
            },},{id: "books-radical-chic-amp-mau-mauing-the-flak-catchers",
          title: 'RADICAL CHIC &amp;amp; MAU-MAUING THE FLAK CATCHERS',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/382/";
            },},{id: "books-ralph-erskine-architect",
          title: 'Ralph Erskine, Architect',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/383/";
            },},{id: "books-randstad-holland-variaties-op-het-thema-stad",
          title: 'Randstad Holland, variaties op het thema stad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/384/";
            },},{id: "books-raymond-m-hood",
          title: 'Raymond M. Hood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/385/";
            },},{id: "books-read-yourself-raw",
          title: 'Read Yourself Raw',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/386/";
            },},{id: "books-resource-wars-the-new-landscape-of-global-conflict-with-a-new-introduction-by-the-author",
          title: 'Resource Wars: The New Landscape of Global Conflict With a New Introduction by...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/387/";
            },},{id: "books-richard-rodgers",
          title: 'Richard Rodgers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/388/";
            },},{id: "books-rijmpjes-en-versjes-uit-grootmoeders-tijd",
          title: 'Rijmpjes en versjes uit grootmoeders tijd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/389/";
            },},{id: "books-bijbel-voor-kinderen",
          title: 'Bijbel voor kinderen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/39/";
            },},{id: "books-robert-w-richardson-39-s-rio-grande-chasing-the-narrow-gauge-vol-ii",
          title: 'Robert W Richardson&amp;#39;s Rio Grande: Chasing the Narrow Gauge: vol. II',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/390/";
            },},{id: "books-robert-w-richardson-39-s-rio-grande-chasing-the-narrow-gauge",
          title: 'Robert W. Richardson&amp;#39;s Rio Grande: Chasing the Narrow Gauge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/391/";
            },},{id: "books-roget-39-s-thesaurus-of-english-words-and-phrases",
          title: 'Roget&amp;#39;s Thesaurus of English Words and Phrases',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/392/";
            },},{id: "books-roofvogels-in-beeld",
          title: 'Roofvogels in beeld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/393/";
            },},{id: "books-roy-lichtenstein-mural-with-blue-brushstoke",
          title: 'Roy Lichtenstein: Mural With Blue Brushstoke',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/394/";
            },},{id: "books-running-hypercard-with-hypertalk",
          title: 'Running Hypercard With Hypertalk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/395/";
            },},{id: "books-russland-architektur-für-eine-weltrevolution",
          title: 'Russland: Architektur für eine Weltrevolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/396/";
            },},{id: "books-samen-doorgaan-prijsvraag-duurzaam-veilig-leven-2000",
          title: 'Samen doorgaan, prijsvraag Duurzaam Veilig Leven 2000',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/397/";
            },},{id: "books-the-satanic-verses",
          title: 'The Satanic Verses',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/398/";
            },},{id: "books-scenery-tips-and-techniques-projects-and-ideas-that-will-bring-your-layout-to-life",
          title: 'Scenery Tips and Techniques: Projects and Ideas That Will Bring Your Layout to...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/399/";
            },},{id: "books-501-must-read-books",
          title: '501 Must Read Books',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/4/";
            },},{id: "books-the-blind-watchmaker-why-the-evidence-of-evolution-reveals-a-universe-without-design",
          title: 'The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe Without Design...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/40/";
            },},{id: "books-schotland",
          title: 'Schotland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/400/";
            },},{id: "books-schrijfwijzer",
          title: 'Schrijfwijzer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/401/";
            },},{id: "books-schrijfwijzer-handboek-voor-duidelijk-taalgebruik",
          title: 'Schrijfwijzer: Handboek voor duidelijk taalgebruik',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/402/";
            },},{id: "books-schrijven-voor-het-beeldscherm-internet-intranet-helpsystemen",
          title: 'Schrijven voor het beeldscherm, internet - intranet - helpsystemen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/403/";
            },},{id: "books-second-diesel-spotters-guide",
          title: 'Second Diesel Spotters Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/404/";
            },},{id: "books-the-selected-letters-1907-41",
          title: 'The Selected Letters, 1907-41',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/405/";
            },},{id: "books-the-selected-works-of-t-s-spivet",
          title: 'The Selected Works of T. S. Spivet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/406/";
            },},{id: "books-shoah-an-oral-history-of-the-holocaust",
          title: 'Shoah, an oral history of the Holocaust',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/407/";
            },},{id: "books-shopping-for-a-better-world-1990-a-quick-amp-easy-guide-to-socially-responsible-supermarket-shopping",
          title: 'Shopping for a Better World, 1990: A Quick &amp;amp; Easy Guide to Socially...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/408/";
            },},{id: "books-the-sierra-club-yosemite-postcard-collection",
          title: 'The Sierra Club Yosemite Postcard Collection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/409/";
            },},{id: "books-the-book-of-genesis-illustrated-by-r-crumb",
          title: 'The Book of Genesis Illustrated by R. Crumb',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/41/";
            },},{id: "books-significant-others",
          title: 'Significant Others',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/410/";
            },},{id: "books-simpele-feiten",
          title: 'Simpele feiten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/411/";
            },},{id: "books-sinead-life-of-sinead-o-39-connor",
          title: 'Sinead: Life of Sinead O&amp;#39;Connor',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/412/";
            },},{id: "books-stedebouw-de-geschiedenis-van-de-stad-in-de-nederlanden-van-1500-tot-heden",
          title: 'Stedebouw, de geschiedenis van de stad in de Nederlanden van 1500 tot heden...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/425/";
            },},{id: "books-smart-cities-big-data-civic-hackers-and-the-quest-for-a-new-utopia",
          title: 'Smart cities : big data, civic hackers, and the quest for a new...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/414/";
            },},{id: "books-slimme-steden-de-opgave-voor-de-21e-eeuwse-stedenbouw-in-beeld",
          title: 'Slimme steden: de opgave voor de 21e eeuwse stedenbouw in beeld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/413/";
            },},{id: "books-somberman-39-s-actie",
          title: 'Somberman&amp;#39;s actie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/415/";
            },},{id: "books-sopwith-the-man-and-his-aircraft",
          title: 'Sopwith: the man and his aircraft',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/416/";
            },},{id: "books-spel-spelen-spelletjes",
          title: 'Spel Spelen Spelletjes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/417/";
            },},{id: "books-spiegel-van-de-surrealistische-poezie-in-het-nederlands",
          title: 'Spiegel van de surrealistische poezie in het Nederlands',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/418/";
            },},{id: "books-spiegelbeelden",
          title: 'Spiegelbeelden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/419/";
            },},{id: "books-boston-a-photographic-tour",
          title: 'Boston : A Photographic Tour',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/42/";
            },},{id: "books-spooner-39-s-moving-animals-or-the-zoo-of-tranquillity",
          title: 'Spooner&amp;#39;s Moving Animals or the Zoo of Tranquillity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/420/";
            },},{id: "books-spoorlandschap",
          title: 'Spoorlandschap',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/421/";
            },},{id: "books-sprookjes",
          title: 'Sprookjes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/422/";
            },},{id: "books-st-clements-39-s-rome",
          title: 'St. Clements&amp;#39;s rome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/423/";
            },},{id: "books-the-stars-and-the-stones-ancient-art-and-astronomy-in-ireland",
          title: 'The Stars and the Stones: Ancient Art and Astronomy in Ireland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/424/";
            },},{id: "books-the-story-of-our-country",
          title: 'The story of our country',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/426/";
            },},{id: "books-straten-maken",
          title: 'Straten maken',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/427/";
            },},{id: "books-the-strip-an-american-place",
          title: 'The Strip : An American Place',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/428/";
            },},{id: "books-stroom-de-geschiedenis-van-een-blijvend-wonder",
          title: 'Stroom, de geschiedenis van een blijvend wonder',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/429/";
            },},{id: "books-bourgondie-en-champagne",
          title: 'Bourgondie en Champagne',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/43/";
            },},{id: "books-stuart-models-1968-catalog",
          title: 'Stuart Models 1968 Catalog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/430/";
            },},{id: "books-super-natural-christians-how-we-should-love-nature",
          title: 'Super, Natural Christians: How We Should Love Nature',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/431/";
            },},{id: "books-tales-of-the-city",
          title: 'Tales of the City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/432/";
            },},{id: "books-the-taming-of-the-shrew",
          title: 'The Taming of the Shrew',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/433/";
            },},{id: "books-teach-yourself-irish",
          title: 'Teach Yourself Irish',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/434/";
            },},{id: "books-tekeningen",
          title: 'Tekeningen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/435/";
            },},{id: "books-the-english-sunrise",
          title: 'THE ENGLISH SUNRISE',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/436/";
            },},{id: "books-theorieen-van-het-architektonies-ontwerpen",
          title: 'Theorieen van het architektonies ontwerpen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/437/";
            },},{id: "books-theory-and-design-in-the-first-machine-age",
          title: 'Theory and Design in the First Machine Age',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/438/";
            },},{id: "books-thoreau-en-walden-achtergronden",
          title: 'Thoreau en Walden: Achtergronden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/439/";
            },},{id: "books-bouwen-wonen-denken",
          title: 'Bouwen Wonen Denken',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/44/";
            },},{id: "books-tientallen-elftallen",
          title: 'Tientallen elftallen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/440/";
            },},{id: "books-toffe-toetjes",
          title: 'Toffe Toetjes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/441/";
            },},{id: "books-toneel",
          title: 'Toneel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/442/";
            },},{id: "books-toscane-umbrie-uitneembare-kaart",
          title: 'Toscane Umbrie + Uitneembare kaart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/443/";
            },},{id: "books-track-planning-for-realistic-operation-prototype-railroad-concepts-for-your-model-railroad",
          title: 'Track Planning for Realistic Operation: Prototype Railroad Concepts for Your Model Railroad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/444/";
            },},{id: "books-trackwork-and-lineside-detail-for-your-model-railroad",
          title: 'Trackwork and Lineside Detail for Your Model Railroad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/445/";
            },},{id: "books-trains-an-illustrated-history-of-locomotive-development",
          title: 'Trains - an Illustrated History of Locomotive development',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/446/";
            },},{id: "books-transit",
          title: 'Transit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/447/";
            },},{id: "books-travels-in-hyperreality-essays",
          title: 'Travels in Hyperreality: Essays',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/448/";
            },},{id: "books-true-confessions-of-an-albino-terrorist",
          title: 'True Confessions of an Albino Terrorist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/449/";
            },},{id: "books-bouwstenen-van-de-schepping-druk-heruitgave",
          title: 'Bouwstenen van de schepping / druk Heruitgave',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/45/";
            },},{id: "books-tsjevengoer-roman-van-een-stad",
          title: 'Tsjevengoer, roman van een stad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/450/";
            },},{id: "books-tuinieren-het-hele-jaar",
          title: 'Tuinieren het hele jaar',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/451/";
            },},{id: "books-die-tyrannie-verdrijven",
          title: 'Die tyrannie verdrijven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/452/";
            },},{id: "books-ü-ber-das-geistige-in-der-kunst",
          title: 'Über das Geistige in der Kunst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/453/";
            },},{id: "books-uncle-nat-39-s-school-to-office-handbook",
          title: 'Uncle Nat&amp;#39;s school to office handbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/454/";
            },},{id: "books-under-milk-wood-a-play-for-voices",
          title: 'Under Milk Wood: A Play for Voices',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/455/";
            },},{id: "books-under-the-sign-of-saturn",
          title: 'Under the Sign of Saturn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/457/";
            },},{id: "books-urban-design-collegedktaat-bk214",
          title: 'Urban Design, collegedktaat bk214',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/460/";
            },},{id: "books-under-the-elevated-reclaiming-space-connecting-communities",
          title: 'Under the Elevated: Reclaiming Space, Connecting Communities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/456/";
            },},{id: "books-die-unsichtbaren-städte",
          title: 'Die unsichtbaren Städte',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/458/";
            },},{id: "books-breton-pour-les-nuls",
          title: 'breton pour les nuls',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/46/";
            },},{id: "books-urban-code-100-lessons-for-understanding-the-city",
          title: 'Urban Code: 100 Lessons for Understanding the City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/459/";
            },},{id: "books-vanuit-de-afgrond-namelijk-12-brieven",
          title: 'Vanuit de afgrond namelijk / 12 Brieven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/461/";
            },},{id: "books-vegetarisch-kookboek-voor-maatijden-die-zoowel-het-oog-als-de-maag-voldoen",
          title: 'Vegetarisch kookboek / voor maatijden die zoowel het oog als de maag voldoen...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/462/";
            },},{id: "books-venturi-rauch-and-scott-brown",
          title: 'Venturi, Rauch and Scott Brown',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/463/";
            },},{id: "books-verboden-voor-sinterklaas",
          title: 'Verboden voor Sinterklaas',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/464/";
            },},{id: "books-vertellingen-uit-het-oosten",
          title: 'Vertellingen uit het Oosten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/465/";
            },},{id: "books-vertrouwd-en-o-zo-vreemd-over-geheugen-en-bewustzijn",
          title: 'Vertrouwd en o zo vreemd, Over geheugen en bewustzijn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/466/";
            },},{id: "books-verwoest-arcadie",
          title: 'Verwoest Arcadie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/467/";
            },},{id: "books-verzameld-proza",
          title: 'Verzameld proza',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/468/";
            },},{id: "books-verzameld-werk",
          title: 'Verzameld Werk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/469/";
            },},{id: "books-bridges-and-buildings-for-model-railroads",
          title: 'Bridges and Buildings for Model Railroads',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/47/";
            },},{id: "books-verzamelde-gedichten",
          title: 'Verzamelde gedichten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/470/";
            },},{id: "books-a-view-from-the-campidoglio-selected-essays-1953-1984",
          title: 'A View from the Campidoglio: Selected Essays, 1953-1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/471/";
            },},{id: "books-visual-function-an-introduction-to-information-design",
          title: 'Visual Function: An Introduction to Information Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/472/";
            },},{id: "books-vita-brevis-verzameld-werk",
          title: 'Vita brevis: Verzameld werk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/473/";
            },},{id: "books-vlaamse-dorpsverhalen-uit-vroeger-tijd",
          title: 'Vlaamse dorpsverhalen uit vroeger tijd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/474/";
            },},{id: "books-voettocht-naar-extase",
          title: 'Voettocht naar extase',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/475/";
            },},{id: "books-vogelzang-in-beeld",
          title: 'Vogelzang in beeld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/476/";
            },},{id: "books-volksverhalen-uit-utrecht-en-het-gooi",
          title: 'Volksverhalen uit Utrecht en het Gooi',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/477/";
            },},{id: "books-vom-neuen-bauen-über-das-geheimnis-der-gestalt",
          title: 'Vom neuen Bauen über das Geheimnis der Gestalt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/478/";
            },},{id: "books-vormleer-de-paradox-van-de-vorm",
          title: 'Vormleer: De paradox van de vorm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/479/";
            },},{id: "books-brieven-schrijven-in-het-engels-privé-en-handelscorrespondentie",
          title: 'Brieven schrijven in het Engels, privé en handelscorrespondentie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/48/";
            },},{id: "books-waarom-het-leven-sneller-gaat-als-je-ouder-wordt",
          title: 'Waarom het leven sneller gaat als je ouder wordt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/480/";
            },},{id: "books-walden-and-civil-disobedience",
          title: 'Walden and Civil Disobedience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/481/";
            },},{id: "books-walks-for-children-in-san-francisco",
          title: 'Walks for children in San Francisco',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/482/";
            },},{id: "books-was-ik-in-vredesnaam-maar-thuisgebleven",
          title: 'Was ik in vredesnaam maar thuisgebleven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/483/";
            },},{id: "books-washington-itself",
          title: 'Washington Itself',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/484/";
            },},{id: "books-wat-amp-hoe-frans",
          title: 'Wat &amp;amp; Hoe Frans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/485/";
            },},{id: "books-wat-amp-hoe-zweeds",
          title: 'Wat &amp;amp; Hoe Zweeds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/486/";
            },},{id: "books-wat-doen-we-vandaag-patronenblad",
          title: 'Wat doen we vandaag? + patronenblad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/487/";
            },},{id: "books-wat-zingt-daar-cd",
          title: 'Wat zingt daar ? + CD',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/488/";
            },},{id: "books-weerborstels-een-novelle",
          title: 'Weerborstels: Een novelle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/489/";
            },},{id: "books-bright-lights-big-city",
          title: 'Bright Lights, Big City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/49/";
            },},{id: "books-weet-of-rust-proza-van-coornhert",
          title: 'Weet of rust: Proza van Coornhert',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/490/";
            },},{id: "books-werkboek-toekomstvisie-parkstad-vernieuwing-westelijke-tuinsteden-amsterdam",
          title: 'Werkboek toekomstvisie parkstad / vernieuwing westelijke tuinsteden Amsterdam',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/491/";
            },},{id: "books-werken-met-ikebana",
          title: 'Werken met ikebana',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/492/";
            },},{id: "books-windows",
          title: 'Windows',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/493/";
            },},{id: "books-winnie-the-pooh-39-s-cookie-book",
          title: 'Winnie-the-Pooh&amp;#39;s Cookie Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/494/";
            },},{id: "books-wolters-39-woordenboek-nederlands-koenen",
          title: 'Wolters&amp;#39; Woordenboek Nederlands Koenen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/495/";
            },},{id: "books-wonen-in-nederland",
          title: 'Wonen in Nederland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/496/";
            },},{id: "books-the-wooden-horse-of-troy",
          title: 'The Wooden Horse of Troy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/497/";
            },},{id: "books-writings-on-wright-selected-comment-on-frank-lloyd-wright",
          title: 'Writings on Wright: Selected comment on Frank Lloyd Wright',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/498/";
            },},{id: "books-zaterdag",
          title: 'Zaterdag',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/499/";
            },},{id: "books-aantekeningen-over-de-vijand",
          title: 'Aantekeningen over de vijand',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/5/";
            },},{id: "books-bronnen-van-het-zelf-druk-1-de-onstaansgeschiedenis-van-de-moderne-identiteit",
          title: 'Bronnen van het zelf / druk 1: de onstaansgeschiedenis van de moderne identiteit...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/50/";
            },},{id: "books-zeggen-wat-nooit-iemand-zei",
          title: 'Zeggen wat nooit iemand zei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/500/";
            },},{id: "books-zijn-leven",
          title: 'Zijn leven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/501/";
            },},{id: "books-zoeken-naar-eileen-w",
          title: 'Zoeken naar Eileen W',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/502/";
            },},{id: "books-zomer-te-ter-muren",
          title: 'Zomer te Ter-Muren',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/503/";
            },},{id: "books-zur-eröffnung-der-neuen-philharmonie",
          title: 'Zur Eröffnung der neuen Philharmonie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/504/";
            },},{id: "books-zweden",
          title: 'Zweden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/505/";
            },},{id: "books-zwischen-himmel-und-erde-geschichte-und-technik-wissenschaft-und-forschung-auf-dem-jungraujoch-top-of-europe",
          title: 'Zwischen Himmel und Erde, Geschichte und Technik - Wissenschaft und Forschung auf dem...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/506/";
            },},{id: "books-building-city-scenery-for-your-model-railroad",
          title: 'Building City Scenery for Your Model Railroad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/51/";
            },},{id: "books-building-details",
          title: 'Building Details',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/52/";
            },},{id: "books-the-business-benefits-of-gis-an-roi-approach",
          title: 'The Business Benefits of GIS: An ROI Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/53/";
            },},{id: "books-bzzlletin-141-de-naam-van-de-roos",
          title: 'Bzzlletin 141 De naam van de roos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/54/";
            },},{id: "books-bzzlletin-154-griekse-dichters",
          title: 'Bzzlletin 154: Griekse dichters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/55/";
            },},{id: "books-canto-general",
          title: 'Canto general',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/56/";
            },},{id: "books-carlo-scarpa",
          title: 'Carlo Scarpa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/57/";
            },},{id: "books-carlo-scarpa-the-complete-works",
          title: 'Carlo Scarpa : The Complete Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/58/";
            },},{id: "books-carlo-scarpa-and-the-castelvecchio",
          title: 'Carlo Scarpa and the Castelvecchio',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/59/";
            },},{id: "books-aap-en-sushimeester-over-cultuur-bij-dieren",
          title: 'Aap en sushimeester, over cultuur bij dieren',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/6/";
            },},{id: "books-cartographic-relief-presentation",
          title: 'Cartographic Relief Presentation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/60/";
            },},{id: "books-cement-garden",
          title: 'Cement Garden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/61/";
            },},{id: "books-césar-manrique-in-his-own-words",
          title: 'César Manrique: in his own words',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/62/";
            },},{id: "books-charles-darwin-over-het-ontstaan-van-soorten",
          title: 'Charles Darwin, Over het ontstaan van soorten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/63/";
            },},{id: "books-the-chicago-school-of-architecture-a-history-of-commercial-and-public-building-in-the-chicago-area-1875-1925",
          title: 'The Chicago School of Architecture: A History of Commercial and Public Building in...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/64/";
            },},{id: "books-a-child-39-s-christmas-in-wales-cd-and-five-poems",
          title: 'A Child&amp;#39;s Christmas In Wales CD : And Five Poems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/65/";
            },},{id: "books-chimney-book",
          title: 'CHIMNEY BOOK',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/66/";
            },},{id: "books-the-chinese-word-for-horse-and-other-stories",
          title: 'The Chinese Word for Horse and Other Stories',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/67/";
            },},{id: "books-chinese-word-for-thief",
          title: 'Chinese Word for Thief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/68/";
            },},{id: "books-cinders-amp-smoke-a-mile-by-mile-guide-for-the-durango-to-silverton-narrow-gauge-trip",
          title: 'Cinders &amp;amp; Smoke : A Mile by Mile Guide for the Durango to...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/69/";
            },},{id: "books-the-age-of-wonder-how-the-romantic-generation-discovered-the-beauty-and-terror-of-science",
          title: 'The Age of Wonder: How the Romantic Generation Discovered the Beauty and Terror...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/7/";
            },},{id: "books-citroen-in-nederland",
          title: 'Citroen in Nederland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/70/";
            },},{id: "books-the-city",
          title: 'The City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/71/";
            },},{id: "books-the-city-in-history",
          title: 'The City in History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/72/";
            },},{id: "books-the-civil-wars-a-tree-is-best-measured-when-it-is-down-act-v-rome-section",
          title: 'The Civil Wars, a tree is best measured when it is down, act...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/73/";
            },},{id: "books-civil-wars-a-tree-is-best-measured-when-it-39-s-down",
          title: 'Civil Wars, a tree is best measured when it&amp;#39;s down',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/74/";
            },},{id: "books-the-classical-language-of-architecture",
          title: 'The Classical Language of Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/75/";
            },},{id: "books-the-collected-poems-of-theodore-roethke",
          title: 'The Collected Poems of Theodore Roethke',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/76/";
            },},{id: "books-the-complete-book-of-model-railroading",
          title: 'The complete book of model railroading',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/77/";
            },},{id: "books-the-conscience-of-the-eye-the-design-and-social-life-of-cities",
          title: 'The Conscience of the Eye: The Design and Social Life of Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/78/";
            },},{id: "books-conversatiegids-nederlands-spaans",
          title: 'conversatiegids nederlands spaans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/79/";
            },},{id: "books-aids-and-its-metaphors",
          title: 'AIDS and Its Metaphors',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/8/";
            },},{id: "books-creative-business-presentations-inventive-ideas-for-making-an-instant-impact",
          title: 'Creative Business Presentations: Inventive Ideas for Making an Instant Impact',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/80/";
            },},{id: "books-creative-layout-design-the-wit-whim-and",
          title: 'Creative Layout Design: The Wit, Whim, and',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/81/";
            },},{id: "books-css-kort-en-krachtig",
          title: 'CSS Kort en Krachtig',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/82/";
            },},{id: "books-dampf-amp-reise-bahnerlebnisse-rund-um-die-welt-überseeische-bahnen-quot-golderner-westen-quot-oder-quot-wilder-westen-quot-schienenverkehr-in-kalifornien",
          title: 'Dampf &amp;amp; Reise: Bahnerlebnisse rund um die Welt - überseeische Bahnen, &amp;quot;Golderner Westen&amp;quot;...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/83/";
            },},{id: "books-dampf-über-nordamerika",
          title: 'Dampf über Nordamerika',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/84/";
            },},{id: "books-dark-age-ahead",
          title: 'Dark Age Ahead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/85/";
            },},{id: "books-dat-kan-ik-ook-deel-28-metaalbewerking-deel-1",
          title: 'Dat kan ik ook deel 28 - Metaalbewerking deel 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/86/";
            },},{id: "books-dat-kan-ik-ook-deel-29-metaalbewerking-deel-2",
          title: 'Dat kan ik ook deel 29 - Metaalbewerking deel 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/87/";
            },},{id: "books-dazzle-painting-kunst-als-camouflage-camouflage-als-kunst",
          title: 'Dazzle painting: Kunst als camouflage, camouflage als kunst',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/88/";
            },},{id: "books-de-aarde-in-beeld",
          title: 'De aarde in beeld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/89/";
            },},{id: "books-allegorien-kultureller-erfahrung-ausgewählte-schriften-120-1940",
          title: 'Allegorien kultureller Erfahrung, ausgewählte Schriften 120-1940',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/9/";
            },},{id: "books-de-archictuur-van-renaissance-barok-en-classicisme-een-overzicht-1420-1720",
          title: 'De archictuur van Renaissance, Barok en Classicisme / Een overzicht 1420-1720',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/90/";
            },},{id: "books-de-belastinginspectrice",
          title: 'De belastinginspectrice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/91/";
            },},{id: "books-de-bijbel",
          title: 'De Bijbel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/92/";
            },},{id: "books-de-bijbel-toen-amp-nu",
          title: 'De Bijbel toen &amp;amp; nu',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/93/";
            },},{id: "books-de-boom-van-het-leven-afbeeldingen-uit-het-leven-van-charles-darwin",
          title: 'De boom van het leven, afbeeldingen uit het leven van Charles Darwin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/94/";
            },},{id: "books-de-digitale-modelbaan-in-de-praktijk",
          title: 'De digitale modelbaan in de praktijk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/95/";
            },},{id: "books-de-droomfabriek",
          title: 'De droomfabriek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/96/";
            },},{id: "books-de-eeuw-van-de-familie-platter-1499-1628",
          title: 'De eeuw van de familie Platter (1499-1628)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/97/";
            },},{id: "books-de-erfenis",
          title: 'De erfenis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/98/";
            },},{id: "books-de-fenomenale-weg-een-visie-vanuit-de-kunst-op-de-snelweg-in-het-landschap",
          title: 'De fenomenale weg / een visie vanuit de kunst op de snelweg in...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/99/";
            },},{id: "news-vertaling-beschikbaar",
          title: 'Vertaling beschikbaar',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/translation/";
            },},{id: "news-layout-parts-for-sale",
          title: 'Layout parts for sale',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/layout-for-sale/";
            },},{id: "projects-timmerdorp",
          title: 'Timmerdorp',
          description: "Holiday children&#39;s activity camp",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fun-timmerdorp/";
            },},{id: "projects-a2-maastricht",
          title: 'A2 Maastricht',
          description: "Large civil construction + housing project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-avenue2/";
            },},{id: "projects-a-pier",
          title: 'A-Pier',
          description: "Realisatie in modules",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-apier/";
            },},{id: "projects-br11",
          title: 'BR11',
          description: "Restauratie circulair",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-br11/";
            },},{id: "projects-food-center-amsterdam",
          title: 'Food Center Amsterdam',
          description: "Ondersteuning transformatie veilingterrein",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-fca/";
            },},{id: "projects-woonhuis-1",
          title: 'Woonhuis #1',
          description: "Inbreidingsplan nieuwbouw woonhuis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-huis1/";
            },},{id: "projects-n31-harlingen",
          title: 'N31 Harlingen',
          description: "Kunstwerken (bruggen en zo)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-n31/";
            },},{id: "projects-randweg-zundert",
          title: 'Randweg Zundert',
          description: "Inpassing nieuwe rondweg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-zundert/";
            },},{id: "protected-pages-example-protected-page",
          title: 'Example protected page',
          description: "",
          section: "Protected-pages",handler: () => {
              window.location.href = "/protected-pages/example-protected-page/";
            },},{id: "rollingstock-atcx-1949",
          title: 'Atcx_1949',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/ATCX_1949/";
            },},{id: "rollingstock-drgw-2-6-0-479",
          title: 'Drgw_2_6_0_479',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/DRGW_2_6_0_479/";
            },},{id: "rollingstock-drgw-2-8-0-516",
          title: 'Drgw_2_8_0_516',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/DRGW_2_8_0_516/";
            },},{id: "rollingstock-drgw-pa-1a-6003",
          title: 'Drgw_pa_1a_6003',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/DRGW_PA_1A_6003/";
            },},{id: "rollingstock-drgw-pa-1a-6013",
          title: 'Drgw_pa_1a_6013',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/DRGW_PA_1A_6013/";
            },},{id: "rollingstock-drg-2-6-0-shou",
          title: 'Drg_2_6_0_shou',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/DRG_2_6_0_shou/";
            },},{id: "rollingstock-rgs-goose-5",
          title: 'Rgs_goose_5',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RGS_Goose_5/";
            },},{id: "rollingstock-rg-f3-a-5651",
          title: 'Rg_f3_a_5651',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RG_F3_A_5651/";
            },},{id: "rollingstock-rg-ge-44-42",
          title: 'Rg_ge_44_42',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RG_GE_44_42/";
            },},{id: "rollingstock-rg-h15-44-151",
          title: 'Rg_h15_44_151',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RG_H15_44_151/";
            },},{id: "rollingstock-rg-rdc-4-1001",
          title: 'Rg_rdc_4_1001',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RG_RDC_4_1001/";
            },},{id: "rollingstock-rg-rs3-5203",
          title: 'Rg_rs3_5203',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/RG_RS3_5203/";
            },},{id: "rollingstock-sf-gp7-99",
          title: 'Sf_gp7_99',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/SF_GP7_99/";
            },},{id: "rollingstock-sf-pa-1-51",
          title: 'Sf_pa_1_51',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/SF_PA_1_51/";
            },},{id: "rollingstock-srr-shay-269",
          title: 'Srr_shay_269',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/SRR_SHAY_269/";
            },},{id: "rollingstock-up-sw1500-1870",
          title: 'Up_sw1500_1870',
          description: "",
          section: "Rollingstock",handler: () => {
              window.location.href = "/rollingstock/UP_SW1500_1870/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
