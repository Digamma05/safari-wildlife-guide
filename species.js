const SPECIES = [
  {
    "name": "African Elephant",
    "scientific": "Loxodonta africana",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Very large grey mammal; huge ears; long trunk; females often in herds.",
    "size": "very large",
    "pattern": "grey",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Very large grey mammal",
    "safety": "",
    "id": 1,
    "slug": "african_elephant",
    "image": "images/001_african_elephant.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "very large ears",
        "long trunk",
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush",
        "permanent water / river"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ],
      "pattern": []
    }
  },
  {
    "name": "African Buffalo",
    "scientific": "Syncerus caffer",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Heavy dark buffalo with broad bossed horns; often in large herds near water.",
    "size": "very large",
    "pattern": "dark",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Heavy dark buffalo with broad bossed horns",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 2,
    "slug": "african_buffalo",
    "image": "images/002_african_buffalo.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "horns / antlers",
        "stocky / heavy body"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush",
        "permanent water / river"
      ],
      "pattern": []
    }
  },
  {
    "name": "Lion",
    "scientific": "Panthera leo",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Large tawny cat; males have mane; rounded ears and tufted tail.",
    "size": "large",
    "pattern": "tawny",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large tawny cat",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 3,
    "slug": "lion",
    "image": "images/003_lion.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "distinctive tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ],
      "pattern": []
    }
  },
  {
    "name": "Leopard",
    "scientific": "Panthera pardus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Rosette-spotted cat, usually solitary; powerful build and long tail.",
    "size": "large",
    "pattern": "spotted",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Rosette-spotted cat, usually solitary",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 4,
    "slug": "leopard",
    "image": "images/004_leopard.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "feature": [
        "long tail",
        "slender body"
      ],
      "habitat": [
        "woodland / bush",
        "dense thicket"
      ],
      "ecology": [
        "nocturnal",
        "ground-dwelling"
      ],
      "colour": []
    }
  },
  {
    "name": "Cheetah",
    "scientific": "Acinonyx jubatus",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Slim spotted cat with black tear marks, long legs and small rounded head.",
    "size": "large",
    "pattern": "spotted",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Slim spotted cat with black tear marks, long legs and small rounded head.",
    "safety": "",
    "id": 5,
    "slug": "cheetah",
    "image": "images/005_cheetah.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "very long legs",
        "slender body"
      ],
      "habitat": [
        "open grassland / floodplain"
      ],
      "ecology": [
        "ground-dwelling"
      ]
    }
  },
  {
    "name": "African Wild Dog",
    "scientific": "Lycaon pictus",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Patchwork black, brown and white coat; enormous rounded ears; highly social.",
    "size": "large",
    "pattern": "patchy",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Patchwork black, brown and white coat",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 6,
    "slug": "african_wild_dog",
    "image": "images/006_african_wild_dog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "pattern": [
        "patchy / irregular markings",
        "bold black-and-white pattern"
      ],
      "feature": [
        "very large ears",
        "slender body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ],
      "colour": []
    }
  },
  {
    "name": "Spotted Hyena",
    "scientific": "Crocuta crocuta",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Sloping back, powerful forequarters, rounded ears and spotted sandy coat.",
    "size": "large",
    "pattern": "spotted",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Sloping back, powerful forequarters, rounded ears and spotted sandy coat.",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 7,
    "slug": "spotted_hyena",
    "image": "images/007_spotted_hyena.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "stocky / heavy body",
        "very large ears"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ]
    }
  },
  {
    "name": "Brown Hyena",
    "scientific": "Parahyaena brunnea",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe"
    ],
    "likelihood": "uncommon",
    "desc": "Shaggy dark brown hyena with pale legs and striped lower limbs.",
    "size": "large",
    "pattern": "shaggy",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Shaggy dark brown hyena with pale legs and striped lower limbs.",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 8,
    "slug": "brown_hyena",
    "image": "images/008_brown_hyena.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly dark"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "nocturnal",
        "ground-dwelling"
      ]
    }
  },
  {
    "name": "Giraffe",
    "scientific": "Giraffa giraffa",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Extremely tall with long neck, ossicones and distinctive irregular patches.",
    "size": "very large",
    "pattern": "patched",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Extremely tall with long neck, ossicones and distinctive irregular patches.",
    "safety": "",
    "id": 9,
    "slug": "giraffe",
    "image": "images/009_giraffe.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "pattern": [
        "patchy / irregular markings"
      ],
      "feature": [
        "long neck",
        "crest / crown / casque"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": []
    }
  },
  {
    "name": "Common Hippopotamus",
    "scientific": "Hippopotamus amphibius",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Huge barrel-bodied semi-aquatic mammal; eyes and nostrils high on head.",
    "size": "very large",
    "pattern": "grey",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Huge barrel-bodied semi-aquatic mammal",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 10,
    "slug": "common_hippopotamus",
    "image": "images/010_common_hippopotamus.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "ecology": [
        "aquatic / semi-aquatic",
        "ground-dwelling"
      ],
      "pattern": []
    }
  },
  {
    "name": "Common Warthog",
    "scientific": "Phacochoerus africanus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Stocky pig with facial warts, tusks and tail often held upright when running.",
    "size": "medium",
    "pattern": "grey",
    "feature": "tusks",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Stocky pig with facial warts, tusks and tail often held upright when running.",
    "safety": "",
    "id": 11,
    "slug": "common_warthog",
    "image": "images/011_common_warthog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "tusks",
        "distinctive tail",
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling"
      ],
      "pattern": []
    }
  },
  {
    "name": "Common Eland",
    "scientific": "Tragelaphus oryx",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Huge antelope, usually fawn-grey; both sexes can have spiral horns.",
    "size": "very large",
    "pattern": "plain",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Huge antelope, usually fawn-grey",
    "safety": "",
    "id": 12,
    "slug": "common_eland",
    "image": "images/012_common_eland.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "horns / antlers",
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [
        "mostly plain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Greater Kudu",
    "scientific": "Tragelaphus strepsiceros",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Large antelope with striking white body stripes; males have long spiral horns.",
    "size": "large",
    "pattern": "striped",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large antelope with striking white body stripes",
    "safety": "",
    "id": 13,
    "slug": "greater_kudu",
    "image": "images/013_greater_kudu.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "pattern": [
        "striped / banded"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "woodland / bush",
        "dense thicket"
      ],
      "ecology": []
    }
  },
  {
    "name": "Waterbuck",
    "scientific": "Kobus ellipsiprymnus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Large shaggy antelope near water; white rump ring is diagnostic.",
    "size": "large",
    "pattern": "plain",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large shaggy antelope near water",
    "safety": "",
    "id": 14,
    "slug": "waterbuck",
    "image": "images/014_waterbuck.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "feature": [
        "horns / antlers",
        "stocky / heavy body"
      ],
      "habitat": [
        "permanent water / river",
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "colour": [],
      "pattern": [
        "mostly plain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Red Lechwe",
    "scientific": "Kobus leche",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Wetland antelope with reddish coat, white belly and splayed hooves.",
    "size": "medium",
    "pattern": "reddish",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Wetland antelope with reddish coat, white belly and splayed hooves.",
    "safety": "",
    "id": 15,
    "slug": "red_lechwe",
    "image": "images/015_red_lechwe.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "horns / antlers",
        "webbed / splayed feet"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Tsessebe",
    "scientific": "Damaliscus lunatus",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Fast-running antelope with sloping back, dark face and ringed horns.",
    "size": "medium",
    "pattern": "reddish",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Fast-running antelope with sloping back, dark face and ringed horns.",
    "safety": "",
    "id": 16,
    "slug": "tsessebe",
    "image": "images/016_tsessebe.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Impala",
    "scientific": "Aepyceros melampus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Medium antelope; reddish-brown back, white belly, black rear markings.",
    "size": "medium",
    "pattern": "reddish",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Medium antelope",
    "safety": "",
    "id": 17,
    "slug": "impala",
    "image": "images/017_impala.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Common Duiker",
    "scientific": "Sylvicapra grimmia",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Small stocky antelope; males have short horns and a dark forehead tuft.",
    "size": "small",
    "pattern": "brown",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Small stocky antelope",
    "safety": "",
    "id": 18,
    "slug": "common_duiker",
    "image": "images/018_common_duiker.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "woodland / bush",
        "dense thicket"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Steenbok",
    "scientific": "Raphicerus campestris",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Tiny antelope, usually solitary, with large ears and reddish-tan coat.",
    "size": "small",
    "pattern": "reddish",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Tiny antelope, usually solitary, with large ears and reddish-tan coat.",
    "safety": "",
    "id": 19,
    "slug": "steenbok",
    "image": "images/019_steenbok.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "very large ears"
      ],
      "habitat": [
        "open grassland / floodplain",
        "sandy ground"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Reedbuck",
    "scientific": "Redunca arundinum",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Medium grey-brown antelope associated with grassland and wetlands.",
    "size": "medium",
    "pattern": "grey",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Medium grey-brown antelope associated with grassland and wetlands.",
    "safety": "",
    "id": 20,
    "slug": "southern_reedbuck",
    "image": "images/020_southern_reedbuck.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "grey"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Sable Antelope",
    "scientific": "Hippotragus niger",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe"
    ],
    "likelihood": "possible",
    "desc": "Large dark antelope with dramatic backward-curving horns and white facial markings.",
    "size": "large",
    "pattern": "dark",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large dark antelope with dramatic backward-curving horns and white facial markings.",
    "safety": "",
    "id": 21,
    "slug": "sable_antelope",
    "image": "images/021_sable_antelope.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Roan Antelope",
    "scientific": "Hippotragus equinus",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Large antelope with reddish-grey coat, black-and-white face and long ringed horns.",
    "size": "large",
    "pattern": "reddish",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large antelope with reddish-grey coat, black-and-white face and long ringed horns.",
    "safety": "",
    "id": 22,
    "slug": "roan_antelope",
    "image": "images/022_roan_antelope.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "reddish / chestnut",
        "black & white"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "African Bushbuck",
    "scientific": "Tragelaphus scriptus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Secretive medium antelope; males dark with white spots, females reddish.",
    "size": "medium",
    "pattern": "patchy",
    "feature": "horns",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Secretive medium antelope",
    "safety": "",
    "id": 23,
    "slug": "african_bushbuck",
    "image": "images/023_african_bushbuck.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "colour": [
        "reddish / chestnut",
        "mostly dark"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "woodland / bush",
        "dense thicket",
        "permanent water / river"
      ],
      "ecology": []
    }
  },
  {
    "name": "Common Genet",
    "scientific": "Genetta genetta",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Cat-sized nocturnal carnivore with spotted body and ringed tail.",
    "size": "small",
    "pattern": "spotted",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Cat-sized nocturnal carnivore with spotted body and ringed tail.",
    "safety": "",
    "id": 24,
    "slug": "common_genet",
    "image": "images/024_common_genet.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "feature": [
        "ringed tail",
        "long tail"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "nocturnal"
      ],
      "colour": []
    }
  },
  {
    "name": "Large-spotted Genet",
    "scientific": "Genetta maculata",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Spotted nocturnal genet with a long banded tail.",
    "size": "small",
    "pattern": "spotted",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Spotted nocturnal genet with a long banded tail.",
    "safety": "",
    "id": 25,
    "slug": "large_spotted_genet",
    "image": "images/025_large_spotted_genet.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "pattern": [
        "spotted / rosettes",
        "striped / banded"
      ],
      "feature": [
        "long tail"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "nocturnal"
      ],
      "colour": []
    }
  },
  {
    "name": "Selous Mongoose",
    "scientific": "Paracynictis selousi",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Grey mongoose with dark tail tip; often associated with termite mounds and open woodland.",
    "size": "small",
    "pattern": "grey",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Grey mongoose with dark tail tip",
    "safety": "",
    "id": 26,
    "slug": "selous_mongoose",
    "image": "images/026_selous_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown",
        "grey"
      ],
      "feature": [
        "distinctive tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling"
      ],
      "pattern": []
    }
  },
  {
    "name": "Banded Mongoose",
    "scientific": "Mungos mungo",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Social mongoose with obvious dark body bands and pale face.",
    "size": "small",
    "pattern": "striped",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Social mongoose with obvious dark body bands and pale face.",
    "safety": "",
    "id": 27,
    "slug": "banded_mongoose",
    "image": "images/027_banded_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "facial mask"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "social / often in groups"
      ],
      "colour": []
    }
  },
  {
    "name": "Vervet Monkey",
    "scientific": "Chlorocebus pygerythrus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Grey-green monkey with black face and pale underside; common around water and camps.",
    "size": "small",
    "pattern": "grey",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Grey-green monkey with black face and pale underside",
    "safety": "",
    "id": 28,
    "slug": "vervet_monkey",
    "image": "images/028_vervet_monkey.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "facial mask",
        "long tail"
      ],
      "habitat": [
        "woodland / bush",
        "permanent water / river"
      ],
      "ecology": [
        "tree-dwelling / arboreal",
        "social / often in groups"
      ],
      "pattern": []
    }
  },
  {
    "name": "Chacma Baboon",
    "scientific": "Papio ursinus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Large terrestrial baboon with long muzzle and long tail; troops can be large.",
    "size": "medium",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large terrestrial baboon with long muzzle and long tail",
    "safety": "",
    "id": 29,
    "slug": "chacma_baboon",
    "image": "images/029_chacma_baboon.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "long tail",
        "long body / snake-like"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "ground-dwelling",
        "social / often in groups"
      ],
      "pattern": []
    }
  },
  {
    "name": "Southern African Porcupine",
    "scientific": "Hystrix africaeaustralis",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Large nocturnal rodent with conspicuous black-and-white quills.",
    "size": "medium",
    "pattern": "blackwhite",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Large nocturnal rodent with conspicuous black-and-white quills.",
    "safety": "",
    "id": 30,
    "slug": "southern_african_porcupine",
    "image": "images/030_southern_african_porcupine.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "woodland / bush",
        "sandy ground"
      ],
      "ecology": [
        "nocturnal",
        "ground-dwelling"
      ],
      "colour": [
        "black & white"
      ]
    }
  },
  {
    "name": "Cape Hare",
    "scientific": "Lepus capensis",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Long-eared hare; generally nocturnal and fast-moving.",
    "size": "small",
    "pattern": "brown",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, riverine",
    "clue": "Long-eared hare",
    "safety": "",
    "id": 31,
    "slug": "cape_hare",
    "image": "images/031_cape_hare.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "very large ears",
        "long tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "sandy ground"
      ],
      "ecology": [
        "nocturnal",
        "ground-dwelling"
      ],
      "pattern": []
    }
  },
  {
    "name": "African Fish Eagle",
    "scientific": "Haliaeetus vocifer",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "White head and chest, dark brown body, broad wings and distinctive call.",
    "size": "large",
    "pattern": "brownwhite",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "White head and chest, dark brown body, broad wings and distinctive call.",
    "safety": "",
    "id": 32,
    "slug": "african_fish_eagle",
    "image": "images/032_african_fish_eagle.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "black & white",
        "brown / grey-brown",
        "yellow",
        "mostly white"
      ],
      "feature": [
        "hooked bill",
        "colourful face"
      ],
      "habitat": [
        "permanent water / river",
        "wetland / marsh"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "African Jacana",
    "scientific": "Actophilornis africanus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Chestnut-and-black wetland bird with enormous toes for walking on floating vegetation.",
    "size": "small",
    "pattern": "brownblack",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Chestnut-and-black wetland bird with enormous toes for walking on floating vegetation.",
    "safety": "",
    "id": 33,
    "slug": "african_jacana",
    "image": "images/033_african_jacana.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown",
        "mostly dark"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "feature": [
        "long toes",
        "distinctive bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "ecology": []
    }
  },
  {
    "name": "African Skimmer",
    "scientific": "Rynchops flavirostris",
    "group": "bird",
    "places": [
      "Chobe",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Black-and-white river bird with bright red bill and a lower mandible longer than the upper.",
    "size": "medium",
    "pattern": "blackwhite",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Black-and-white river bird with bright red bill and a lower mandible longer than the upper.",
    "safety": "",
    "id": 34,
    "slug": "african_skimmer",
    "image": "images/034_african_skimmer.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "black & white",
        "orange / red"
      ],
      "feature": [
        "distinctive bill",
        "long / specialised bill"
      ],
      "habitat": [
        "riverbank / sandbank",
        "permanent water / river"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "Southern Ground Hornbill",
    "scientific": "Bucorvus leadbeateri",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Huge black ground-dwelling hornbill with white primary patches and red facial skin.",
    "size": "very large",
    "pattern": "black",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Huge black ground-dwelling hornbill with white primary patches and red facial skin.",
    "safety": "",
    "id": 35,
    "slug": "southern_ground_hornbill",
    "image": "images/035_southern_ground_hornbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "mostly dark",
        "black & white",
        "orange / red"
      ],
      "feature": [
        "very large bill",
        "bare head / face"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Yellow-billed Hornbill",
    "scientific": "Tockus leucomelas",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Small hornbill with large yellow bill, white-spotted wings and long tail.",
    "size": "medium",
    "pattern": "brownwhite",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Small hornbill with large yellow bill, white-spotted wings and long tail.",
    "safety": "",
    "id": 36,
    "slug": "southern_yellow_billed_hornbill",
    "image": "images/036_southern_yellow_billed_hornbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "yellow",
        "mostly white"
      ],
      "feature": [
        "very large bill",
        "distinctive tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Grey Hornbill",
    "scientific": "Lophoceros nasutus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Grey hornbill with long tail and curved dark bill.",
    "size": "medium",
    "pattern": "grey",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Grey hornbill with long tail and curved dark bill.",
    "safety": "",
    "id": 37,
    "slug": "african_grey_hornbill",
    "image": "images/037_african_grey_hornbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "very large bill",
        "distinctive tail"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Lilac-breasted Roller",
    "scientific": "Coracias caudatus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Brilliant blue-green roller with lilac breast and long tail streamers.",
    "size": "medium",
    "pattern": "blue",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Brilliant blue-green roller with lilac breast and long tail streamers.",
    "safety": "",
    "id": 38,
    "slug": "lilac_breasted_roller",
    "image": "images/038_lilac_breasted_roller.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "blue",
        "orange / red"
      ],
      "feature": [
        "distinctive tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Crowned Lapwing",
    "scientific": "Vanellus coronatus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Black-and-white lapwing with bold crown and red eye ring.",
    "size": "medium",
    "pattern": "blackwhite",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Black-and-white lapwing with bold crown and red eye ring.",
    "safety": "",
    "id": 39,
    "slug": "crowned_lapwing",
    "image": "images/039_crowned_lapwing.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "black & white",
        "orange / red"
      ],
      "feature": [
        "crest / crown / casque"
      ],
      "habitat": [
        "open grassland / floodplain",
        "sandy ground"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "Wattled Lapwing",
    "scientific": "Vanellus senegallus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Brown lapwing with yellow facial wattles and long yellow legs.",
    "size": "medium",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Brown lapwing with yellow facial wattles and long yellow legs.",
    "safety": "",
    "id": 40,
    "slug": "wattled_lapwing",
    "image": "images/040_wattled_lapwing.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "yellow"
      ],
      "feature": [
        "very long legs",
        "facial mask"
      ],
      "habitat": [
        "open grassland / floodplain",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Openbill",
    "scientific": "Anastomus lamelligerus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Dark stork with a characteristic gap between mandibles, adapted for snails.",
    "size": "large",
    "pattern": "dark",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Dark stork with a characteristic gap between mandibles, adapted for snails.",
    "safety": "",
    "id": 41,
    "slug": "african_openbill",
    "image": "images/041_african_openbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "distinctive bill",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Marabou Stork",
    "scientific": "Leptoptilos crumenifer",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Huge bald-headed stork with massive bill and hanging throat pouch.",
    "size": "very large",
    "pattern": "dark",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Huge bald-headed stork with massive bill and hanging throat pouch.",
    "safety": "",
    "id": 42,
    "slug": "marabou_stork",
    "image": "images/042_marabou_stork.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "very large bill",
        "bare head / face",
        "distinctive throat / pouch"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Yellow-billed Stork",
    "scientific": "Mycteria ibis",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "White stork with black flight feathers, yellow bill and red face.",
    "size": "large",
    "pattern": "white",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "White stork with black flight feathers, yellow bill and red face.",
    "safety": "",
    "id": 43,
    "slug": "yellow_billed_stork",
    "image": "images/043_yellow_billed_stork.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly white",
        "black & white",
        "yellow",
        "orange / red"
      ],
      "feature": [
        "distinctive bill",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Woolly-necked Stork",
    "scientific": "Ciconia microscelis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Dark stork with white belly and fluffy white neck.",
    "size": "large",
    "pattern": "blackwhite",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Dark stork with white belly and fluffy white neck.",
    "safety": "",
    "id": 44,
    "slug": "african_woolly_necked_stork",
    "image": "images/044_african_woolly_necked_stork.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "black & white"
      ],
      "feature": [
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Hamerkop",
    "scientific": "Scopus umbretta",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Brown waterbird with a hammer-shaped head and long legs.",
    "size": "medium",
    "pattern": "brown",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Brown waterbird with a hammer-shaped head and long legs.",
    "safety": "",
    "id": 45,
    "slug": "hamerkop",
    "image": "images/045_hamerkop.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "crest / crown / casque",
        "very long legs"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Goliath Heron",
    "scientific": "Ardea goliath",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Largest heron; huge, dark grey and chestnut, usually standing motionless at water edge.",
    "size": "very large",
    "pattern": "grey",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Largest heron",
    "safety": "",
    "id": 46,
    "slug": "goliath_heron",
    "image": "images/046_goliath_heron.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "grey",
        "orange / red"
      ],
      "feature": [
        "very long legs",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Darter",
    "scientific": "Anhinga rufa",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Dark waterbird that swims low with long neck and often perches with wings spread.",
    "size": "medium",
    "pattern": "dark",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Dark waterbird that swims low with long neck and often perches with wings spread.",
    "safety": "",
    "id": 47,
    "slug": "african_darter",
    "image": "images/047_african_darter.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "long neck"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Great White Egret",
    "scientific": "Ardea alba",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Tall white heron with long neck and yellow bill.",
    "size": "large",
    "pattern": "white",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Tall white heron with long neck and yellow bill.",
    "safety": "",
    "id": 48,
    "slug": "great_white_egret",
    "image": "images/048_great_white_egret.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly white",
        "yellow"
      ],
      "feature": [
        "long neck",
        "very long legs",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Hadada Ibis",
    "scientific": "Bostrychia hagedash",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Large grey-brown ibis with long curved bill and loud repeated call.",
    "size": "large",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Large grey-brown ibis with long curved bill and loud repeated call.",
    "safety": "",
    "id": 49,
    "slug": "hadada_ibis",
    "image": "images/049_hadada_ibis.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "long / specialised bill",
        "very long legs"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Glossy Ibis",
    "scientific": "Plegadis falcinellus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Slender dark ibis with iridescent plumage and long curved bill.",
    "size": "medium",
    "pattern": "dark",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Slender dark ibis with iridescent plumage and long curved bill.",
    "safety": "",
    "id": 50,
    "slug": "glossy_ibis",
    "image": "images/050_glossy_ibis.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Sacred Ibis",
    "scientific": "Threskiornis aethiopicus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "White ibis with black head, neck and wing tips.",
    "size": "large",
    "pattern": "white",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "White ibis with black head, neck and wing tips.",
    "safety": "",
    "id": 51,
    "slug": "african_sacred_ibis",
    "image": "images/051_african_sacred_ibis.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly white",
        "mostly dark"
      ],
      "feature": [
        "long / specialised bill",
        "bare head / face"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Helmeted Guineafowl",
    "scientific": "Numida meleagris",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Speckled grey bird with bare blue/red head and helmet-like casque.",
    "size": "medium",
    "pattern": "spotted",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Speckled grey bird with bare blue/red head and helmet-like casque.",
    "safety": "",
    "id": 52,
    "slug": "helmeted_guineafowl",
    "image": "images/052_helmeted_guineafowl.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "grey",
        "orange / red",
        "blue"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "feature": [
        "crest / crown / casque",
        "bare head / face"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": []
    }
  },
  {
    "name": "Crested Francolin",
    "scientific": "Ortygornis sephaena",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Small brown gamebird with prominent dark crest and barred plumage.",
    "size": "small",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Small brown gamebird with prominent dark crest and barred plumage.",
    "safety": "",
    "id": 53,
    "slug": "crested_francolin",
    "image": "images/053_crested_francolin.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "striped / banded",
        "barred"
      ],
      "feature": [
        "crest / crown / casque"
      ],
      "habitat": [
        "woodland / bush",
        "dense thicket"
      ],
      "ecology": []
    }
  },
  {
    "name": "Natal Spurfowl",
    "scientific": "Pternistis natalensis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai"
    ],
    "likelihood": "possible",
    "desc": "Brown barred spurfowl with pale face; often flushed from cover.",
    "size": "medium",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Brown barred spurfowl with pale face",
    "safety": "",
    "id": 54,
    "slug": "natal_spurfowl",
    "image": "images/054_natal_spurfowl.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "striped / banded",
        "barred"
      ],
      "feature": [
        "very long legs"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Kori Bustard",
    "scientific": "Ardeotis kori",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Enormous heavy bustard, grey-brown with black-and-white markings and upright neck.",
    "size": "very large",
    "pattern": "grey",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Enormous heavy bustard, grey-brown with black-and-white markings and upright neck.",
    "safety": "",
    "id": 55,
    "slug": "kori_bustard",
    "image": "images/055_kori_bustard.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "brown / grey-brown",
        "black & white",
        "grey"
      ],
      "feature": [
        "long neck",
        "very long legs"
      ],
      "habitat": [
        "open grassland / floodplain"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "African Paradise Flycatcher",
    "scientific": "Terpsiphone viridis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Slender insect-eater; male may have spectacular long tail streamers.",
    "size": "small",
    "pattern": "brown",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Slender insect-eater",
    "safety": "",
    "id": 56,
    "slug": "african_paradise_flycatcher",
    "image": "images/056_african_paradise_flycatcher.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "long tail"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Southern Red-billed Hornbill",
    "scientific": "Tockus rufirostris",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Small hornbill with bright red bill and grey-brown plumage.",
    "size": "medium",
    "pattern": "brown",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Small hornbill with bright red bill and grey-brown plumage.",
    "safety": "",
    "id": 57,
    "slug": "southern_red_billed_hornbill",
    "image": "images/057_southern_red_billed_hornbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "orange / red"
      ],
      "feature": [
        "very large bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Meyers Parrot",
    "scientific": "Poicephalus meyeri",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Small stocky grey-green parrot with yellow shoulder patches.",
    "size": "small",
    "pattern": "green",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Small stocky grey-green parrot with yellow shoulder patches.",
    "safety": "",
    "id": 58,
    "slug": "meyers_parrot",
    "image": "images/058_meyers_parrot.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "green",
        "yellow",
        "grey"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Grey Go-away-bird",
    "scientific": "Corythaixoides concolor",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Large grey turaco with long tail and crest; distinctive nasal call.",
    "size": "medium",
    "pattern": "grey",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Large grey turaco with long tail and crest",
    "safety": "",
    "id": 59,
    "slug": "grey_go_away_bird",
    "image": "images/059_grey_go_away_bird.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "grey"
      ],
      "feature": [
        "crest / crown / casque",
        "long tail"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Burchell’s Starling",
    "scientific": "Lamprotornis australis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Large glossy blue-green starling with orange eye and dark wings.",
    "size": "medium",
    "pattern": "blue",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Large glossy blue-green starling with orange eye and dark wings.",
    "safety": "",
    "id": 60,
    "slug": "burchells_starling",
    "image": "images/060_burchells_starling.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "blue",
        "green",
        "orange / red"
      ],
      "feature": [
        "distinctive eyes"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Cape Starling",
    "scientific": "Lamprotornis nitens",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Glossy blue-green starling with darker wings and bright orange eye.",
    "size": "medium",
    "pattern": "blue",
    "feature": "none",
    "diet": "omnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Glossy blue-green starling with darker wings and bright orange eye.",
    "safety": "",
    "id": 61,
    "slug": "cape_starling",
    "image": "images/061_cape_starling.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "blue",
        "green",
        "orange / red"
      ],
      "feature": [
        "distinctive eyes"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Hoopoe",
    "scientific": "Upupa africana",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Orange-brown bird with black-and-white wings and a fan-shaped crest.",
    "size": "medium",
    "pattern": "orange",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Orange-brown bird with black-and-white wings and a fan-shaped crest.",
    "safety": "",
    "id": 62,
    "slug": "african_hoopoe",
    "image": "images/062_african_hoopoe.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "orange / red",
        "black & white"
      ],
      "feature": [
        "crest / crown / casque",
        "long / specialised bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "Woodland Kingfisher",
    "scientific": "Halcyon senegalensis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Blue-and-white kingfisher with red-and-black bill; often perches conspicuously.",
    "size": "small",
    "pattern": "blue",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Blue-and-white kingfisher with red-and-black bill",
    "safety": "",
    "id": 63,
    "slug": "woodland_kingfisher",
    "image": "images/063_woodland_kingfisher.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "blue",
        "black & white",
        "orange / red"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Pied Kingfisher",
    "scientific": "Ceryle rudis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Black-and-white kingfisher that hovers over water before diving.",
    "size": "small",
    "pattern": "blackwhite",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Black-and-white kingfisher that hovers over water before diving.",
    "safety": "",
    "id": 64,
    "slug": "pied_kingfisher",
    "image": "images/064_pied_kingfisher.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "black & white"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "permanent water / river",
        "wetland / marsh"
      ],
      "pattern": [
        "bold black-and-white pattern"
      ],
      "ecology": []
    }
  },
  {
    "name": "Malachite Kingfisher",
    "scientific": "Corythornis cristatus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Tiny brilliant blue kingfisher with red bill, usually close to water.",
    "size": "tiny",
    "pattern": "blue",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Tiny brilliant blue kingfisher with red bill, usually close to water.",
    "safety": "",
    "id": 65,
    "slug": "malachite_kingfisher",
    "image": "images/065_malachite_kingfisher.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "blue",
        "orange / red"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "White-fronted Bee-eater",
    "scientific": "Merops bullockoides",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Green bee-eater with white forehead, red throat and black eye stripe.",
    "size": "small",
    "pattern": "green",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Green bee-eater with white forehead, red throat and black eye stripe.",
    "safety": "",
    "id": 66,
    "slug": "white_fronted_bee_eater",
    "image": "images/066_white_fronted_bee_eater.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "green",
        "orange / red"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Little Bee-eater",
    "scientific": "Merops pusillus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Small green bee-eater with yellow throat and black eye stripe.",
    "size": "tiny",
    "pattern": "green",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "savanna, woodland, wetland",
    "clue": "Small green bee-eater with yellow throat and black eye stripe.",
    "safety": "",
    "id": 67,
    "slug": "little_bee_eater",
    "image": "images/067_little_bee_eater.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "green",
        "yellow"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Nile Crocodile",
    "scientific": "Crocodylus niloticus",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "desc": "Large aquatic reptile with broad snout, powerful tail and rows of teeth.",
    "size": "very large",
    "pattern": "olive",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Large aquatic reptile with broad snout, powerful tail and rows of teeth.",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 68,
    "slug": "nile_crocodile",
    "image": "images/068_nile_crocodile.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "green",
        "brown / grey-brown"
      ],
      "feature": [
        "stocky / heavy body",
        "distinctive tail"
      ],
      "habitat": [
        "permanent water / river",
        "wetland / marsh"
      ],
      "ecology": [
        "aquatic / semi-aquatic"
      ],
      "pattern": []
    }
  },
  {
    "name": "Nile Monitor",
    "scientific": "Varanus niloticus",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Large dark-and-yellow monitor lizard, often near water.",
    "size": "large",
    "pattern": "striped",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Large dark-and-yellow monitor lizard, often near water.",
    "safety": "",
    "id": 69,
    "slug": "nile_monitor",
    "image": "images/069_nile_monitor.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown",
        "yellow"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "distinctive tail",
        "stocky / heavy body"
      ],
      "habitat": [
        "permanent water / river",
        "woodland / bush"
      ],
      "ecology": []
    }
  },
  {
    "name": "Southern Rock Python",
    "scientific": "Python natalensis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Very large non-venomous snake with dark blotches and powerful body.",
    "size": "very large",
    "pattern": "patterned",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Very large non-venomous snake with dark blotches and powerful body.",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 70,
    "slug": "southern_rock_python",
    "image": "images/070_southern_rock_python.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "patchy / irregular markings"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "rocky / dry ground"
      ],
      "ecology": [
        "ground-dwelling"
      ]
    }
  },
  {
    "name": "Mozambique Spitting Cobra",
    "scientific": "Naja mossambica",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Slender cobra with dark banding; can spit venom defensively.",
    "size": "medium",
    "pattern": "striped",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Slender cobra with dark banding",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 71,
    "slug": "mozambique_spitting_cobra",
    "image": "images/071_mozambique_spitting_cobra.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "rocky / dry ground"
      ],
      "ecology": []
    }
  },
  {
    "name": "Black Mamba",
    "scientific": "Dendroaspis polylepis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Long, fast, grey-brown snake with black mouth; highly venomous.",
    "size": "large",
    "pattern": "plain",
    "feature": "none",
    "diet": "carnivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Long, fast, grey-brown snake with black mouth",
    "safety": "Observe from the vehicle and never approach or handle the animal.",
    "id": 72,
    "slug": "black_mamba",
    "image": "images/072_black_mamba.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [
        "mostly plain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Southern Tree Agama",
    "scientific": "Acanthocercus atricollis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "desc": "Tree-dwelling lizard; breeding males often show vivid blue or orange colours.",
    "size": "small",
    "pattern": "blue",
    "feature": "none",
    "diet": "insectivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Tree-dwelling lizard",
    "safety": "",
    "id": 73,
    "slug": "southern_tree_agama",
    "image": "images/073_southern_tree_agama.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "blue",
        "orange / red",
        "green"
      ],
      "feature": [
        "distinctive eyes"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Leopard Tortoise",
    "scientific": "Stigmochelys pardalis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "desc": "Large high-domed tortoise with bold leopard-like shell markings.",
    "size": "large",
    "pattern": "spotted",
    "feature": "none",
    "diet": "herbivore",
    "habitat": "woodland, grassland, wetland",
    "clue": "Large high-domed tortoise with bold leopard-like shell markings.",
    "safety": "",
    "id": 74,
    "slug": "leopard_tortoise",
    "image": "images/074_leopard_tortoise.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "feature": [
        "domed shell"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": []
    }
  },
  {
    "name": "African Wildcat",
    "scientific": "Felis lybica",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "uncommon",
    "size": "small",
    "pattern": "tawny",
    "feature": "ringed tail",
    "habitat": "grassland, woodland",
    "desc": "Small sandy cat with faint stripes and a ringed tail.",
    "clue": "Domestic-cat size, but with longer legs and a more robust head.",
    "diet": "carnivore",
    "safety": "",
    "id": 75,
    "slug": "african_wildcat",
    "image": "images/075_african_wildcat.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "ringed tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": []
    }
  },
  {
    "name": "Common Springbok",
    "scientific": "Antidorcas marsupialis",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "tawny",
    "feature": "white flank",
    "habitat": "open grassland",
    "desc": "Slender antelope famous for high bouncing leaps.",
    "clue": "White side stripe and springing gait.",
    "diet": "herbivore",
    "safety": "",
    "id": 76,
    "slug": "common_springbok",
    "image": "images/076_common_springbok.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "tawny / sandy",
        "white"
      ],
      "feature": [
        "long tail"
      ],
      "habitat": [
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Bushbuck",
    "scientific": "Tragelaphus sylvaticus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "spotted",
    "feature": "white spots",
    "habitat": "riverine, woodland",
    "desc": "Secretive antelope with variable reddish to dark coat and white markings.",
    "clue": "Usually keeps to dense cover.",
    "diet": "herbivore",
    "safety": "",
    "id": 77,
    "slug": "southern_bushbuck",
    "image": "images/077_southern_bushbuck.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "reddish / chestnut",
        "mostly dark"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "feature": [
        "horns / antlers"
      ],
      "habitat": [
        "woodland / bush",
        "permanent water / river"
      ],
      "ecology": []
    }
  },
  {
    "name": "Sharpe's Grysbok",
    "scientific": "Raphicerus sharpei",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai"
    ],
    "likelihood": "uncommon",
    "size": "small",
    "pattern": "reddish",
    "feature": "no horns",
    "habitat": "thicket, woodland",
    "desc": "Tiny shy antelope with reddish coat, usually solitary.",
    "clue": "Small size and secretive behaviour.",
    "diet": "herbivore",
    "safety": "",
    "id": 78,
    "slug": "sharpe_s_grysbok",
    "image": "images/078_sharpe_s_grysbok.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [],
      "habitat": [
        "dense thicket",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Yellow Mongoose",
    "scientific": "Cynictis penicillata",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "yellow",
    "feature": "bushy tail",
    "habitat": "open woodland, grassland",
    "desc": "Small golden mongoose often active by day.",
    "clue": "Yellow-brown coat and pointed muzzle.",
    "diet": "carnivore",
    "safety": "",
    "id": 79,
    "slug": "yellow_mongoose",
    "image": "images/079_yellow_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "tawny / sandy",
        "yellow"
      ],
      "feature": [
        "bushy tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "White-tailed Mongoose",
    "scientific": "Ichneumia albicauda",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "brown",
    "feature": "white tail",
    "habitat": "savanna, woodland, riverine",
    "desc": "Large nocturnal mongoose with a conspicuous pale tail.",
    "clue": "Dark body contrasting with white tail.",
    "diet": "carnivore",
    "safety": "",
    "id": 80,
    "slug": "white_tailed_mongoose",
    "image": "images/080_white_tailed_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "mostly white"
      ],
      "feature": [
        "distinctive tail"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "ecology": [
        "nocturnal"
      ],
      "pattern": []
    }
  },
  {
    "name": "African Civet",
    "scientific": "Civettictis civetta",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "spotted",
    "feature": "black mask",
    "habitat": "woodland, grassland",
    "desc": "Large nocturnal civet with bold black-and-white patterning.",
    "clue": "Low body and strong facial mask.",
    "diet": "omnivore",
    "safety": "",
    "id": 81,
    "slug": "african_civet",
    "image": "images/081_african_civet.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "black & white",
        "brown / grey-brown"
      ],
      "pattern": [
        "spotted / rosettes",
        "bold black-and-white pattern"
      ],
      "feature": [
        "facial mask"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "ecology": [
        "nocturnal"
      ]
    }
  },
  {
    "name": "Common Slender Mongoose",
    "scientific": "Herpestes sanguineus",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "reddish",
    "feature": "slender body",
    "habitat": "woodland, grassland",
    "desc": "Long-bodied solitary mongoose with reddish-brown coat.",
    "clue": "Very slender silhouette and long tail.",
    "diet": "carnivore",
    "safety": "",
    "id": 82,
    "slug": "common_slender_mongoose",
    "image": "images/082_common_slender_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "slender body"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Dwarf Mongoose",
    "scientific": "Helogale parvula",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "tiny",
    "pattern": "brown",
    "feature": "tiny ears",
    "habitat": "open woodland, termite mounds",
    "desc": "Africa's smallest mongoose, often in busy groups.",
    "clue": "Tiny size and termite-mound associations.",
    "diet": "carnivore",
    "safety": "",
    "id": 83,
    "slug": "dwarf_mongoose",
    "image": "images/083_dwarf_mongoose.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "tiny ears"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "ecology": [
        "social / often in groups"
      ],
      "pattern": []
    }
  },
  {
    "name": "Honey Badger",
    "scientific": "Mellivora capensis",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "uncommon",
    "size": "medium",
    "pattern": "blackwhite",
    "feature": "grey mantle",
    "habitat": "savanna, woodland, riverine",
    "desc": "Stocky omnivore with a broad pale back and dark underside.",
    "clue": "Grey mantle over black body.",
    "diet": "omnivore",
    "safety": "Give it space; it can be defensive.",
    "id": 84,
    "slug": "honey_badger",
    "image": "images/084_honey_badger.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "black & white",
        "grey"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Serval",
    "scientific": "Leptailurus serval",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "spotted",
    "feature": "long legs",
    "habitat": "marsh, floodplain",
    "desc": "Long-legged spotted cat of tall wet grass.",
    "clue": "Huge ears and very long legs.",
    "diet": "carnivore",
    "safety": "",
    "id": 85,
    "slug": "serval",
    "image": "images/085_serval.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "pattern": [
        "spotted / rosettes"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "very long legs",
        "very large ears"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Caracal",
    "scientific": "Caracal caracal",
    "group": "mammal",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "uncommon",
    "size": "medium",
    "pattern": "reddish",
    "feature": "ear tufts",
    "habitat": "dry woodland, grassland",
    "desc": "Reddish cat with black ear tufts and short tail.",
    "clue": "Black-tufted ears are diagnostic.",
    "diet": "carnivore",
    "safety": "",
    "id": 86,
    "slug": "caracal",
    "image": "images/086_caracal.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "reddish / chestnut"
      ],
      "feature": [
        "ear tufts",
        "distinctive tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Bat-eared Fox",
    "scientific": "Otocyon megalotis",
    "group": "mammal",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "grey",
    "feature": "huge ears",
    "habitat": "open grassland",
    "desc": "Small fox-like insectivore with enormous ears.",
    "clue": "Ears dominate the silhouette.",
    "diet": "insectivore",
    "safety": "",
    "id": 87,
    "slug": "bat_eared_fox",
    "image": "images/087_bat_eared_fox.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "grey",
        "brown / grey-brown"
      ],
      "feature": [
        "very large ears"
      ],
      "habitat": [
        "open grassland / floodplain",
        "sandy ground"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Martial Eagle",
    "scientific": "Polemaetus bellicosus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "very large",
    "pattern": "brownwhite",
    "feature": "huge head",
    "habitat": "savanna, woodland, wetland",
    "desc": "Powerful dark-and-white eagle with a massive head and bill.",
    "clue": "Very large eagle with pale underparts.",
    "diet": "carnivore",
    "safety": "",
    "id": 88,
    "slug": "martial_eagle",
    "image": "images/088_martial_eagle.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "brown / grey-brown",
        "black & white",
        "mostly white"
      ],
      "feature": [
        "very large bill",
        "stocky / heavy body"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Bateleur",
    "scientific": "Terathopius ecaudatus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "blackred",
    "feature": "short tail",
    "habitat": "savanna, woodland, wetland",
    "desc": "Compact eagle with black wings, chestnut body and red face.",
    "clue": "Almost tail-less silhouette in flight.",
    "diet": "carnivore",
    "safety": "",
    "id": 89,
    "slug": "bateleur",
    "image": "images/089_bateleur.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly dark",
        "orange / red"
      ],
      "feature": [
        "short tail",
        "red / yellow bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Tawny Eagle",
    "scientific": "Aquila rapax",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "tawny",
    "feature": "broad wings",
    "habitat": "savanna, woodland, wetland",
    "desc": "Large variable brown eagle of open country.",
    "clue": "Tawny body and broad soaring wings.",
    "diet": "carnivore",
    "safety": "",
    "id": 90,
    "slug": "tawny_eagle",
    "image": "images/090_tawny_eagle.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "tawny / sandy"
      ],
      "feature": [
        "hooked bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Brown Snake Eagle",
    "scientific": "Circaetus cinereus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "brown",
    "feature": "yellow eye",
    "habitat": "savanna, woodland, wetland",
    "desc": "Large dark eagle specialised in hunting snakes.",
    "clue": "Dark plumage and striking yellow eye.",
    "diet": "carnivore",
    "safety": "",
    "id": 91,
    "slug": "brown_snake_eagle",
    "image": "images/091_brown_snake_eagle.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "yellow eye",
        "hooked bill"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Hawk-Eagle",
    "scientific": "Aquila spilogaster",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "large",
    "pattern": "blackwhite",
    "feature": "barred belly",
    "habitat": "woodland, savanna",
    "desc": "Medium eagle with dark upperparts and white underparts.",
    "clue": "White belly with dark barring.",
    "diet": "carnivore",
    "safety": "",
    "id": 92,
    "slug": "african_hawk_eagle",
    "image": "images/092_african_hawk_eagle.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "black & white"
      ],
      "pattern": [
        "barred"
      ],
      "feature": [
        "hooked bill"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "ecology": []
    }
  },
  {
    "name": "Lappet-faced Vulture",
    "scientific": "Torgos tracheliotos",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "very large",
    "pattern": "dark",
    "feature": "bare head",
    "habitat": "savanna, woodland, wetland",
    "desc": "Huge vulture with a bare head and prominent neck lappets.",
    "clue": "Massive size and loose facial skin.",
    "diet": "carnivore",
    "safety": "",
    "id": 93,
    "slug": "lappet_faced_vulture",
    "image": "images/093_lappet_faced_vulture.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "bare head / face"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "White-backed Vulture",
    "scientific": "Gyps africanus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "brownwhite",
    "feature": "white back",
    "habitat": "savanna, woodland, wetland",
    "desc": "Common soaring vulture with pale back and dark wings.",
    "clue": "White back contrasting with dark flight feathers.",
    "diet": "carnivore",
    "safety": "",
    "id": 94,
    "slug": "white_backed_vulture",
    "image": "images/094_white_backed_vulture.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown",
        "black & white",
        "mostly white"
      ],
      "feature": [
        "white back"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Hooded Vulture",
    "scientific": "Necrosyrtes monachus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "dark",
    "feature": "hooded neck",
    "habitat": "woodland, wetland",
    "desc": "Small dark vulture with bare head.",
    "clue": "Much smaller and slimmer than other vultures.",
    "diet": "carnivore",
    "safety": "",
    "id": 95,
    "slug": "hooded_vulture",
    "image": "images/095_hooded_vulture.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "bare head / face"
      ],
      "habitat": [
        "woodland / bush",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Grey Crowned Crane",
    "scientific": "Balearica regulorum",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "grey",
    "feature": "golden crown",
    "habitat": "wetland, floodplain",
    "desc": "Elegant crane with a golden crown and red throat pouch.",
    "clue": "Golden crown is unmistakable.",
    "diet": "omnivore",
    "safety": "",
    "id": 96,
    "slug": "grey_crowned_crane",
    "image": "images/096_grey_crowned_crane.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "grey",
        "orange / red"
      ],
      "feature": [
        "crest / crown / casque",
        "very long legs"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Saddle-billed Stork",
    "scientific": "Ephippiorhynchus senegalensis",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "very large",
    "pattern": "blackwhite",
    "feature": "redyellow bill",
    "habitat": "rivers, marsh",
    "desc": "Huge stork with a red-and-yellow saddle-shaped bill.",
    "clue": "Enormous multicoloured bill.",
    "diet": "carnivore",
    "safety": "",
    "id": 97,
    "slug": "saddle_billed_stork",
    "image": "images/097_saddle_billed_stork.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "very large"
      ],
      "colour": [
        "black & white",
        "orange / red",
        "yellow"
      ],
      "feature": [
        "red / yellow bill",
        "very large bill",
        "very long legs"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Spoonbill",
    "scientific": "Platalea alba",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "white",
    "feature": "spoon bill",
    "habitat": "shallow water, marsh",
    "desc": "White wader with a flattened spoon-shaped bill.",
    "clue": "Sweeps its spoon bill through shallow water.",
    "diet": "carnivore",
    "safety": "",
    "id": 98,
    "slug": "african_spoonbill",
    "image": "images/098_african_spoonbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "mostly white"
      ],
      "feature": [
        "distinctive bill",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Purple Heron",
    "scientific": "Ardea purpurea",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "large",
    "pattern": "purplebrown",
    "feature": "striped neck",
    "habitat": "reedbeds, marsh",
    "desc": "Tall dark heron with a streaked neck.",
    "clue": "Darker and slimmer than a great white egret.",
    "diet": "carnivore",
    "safety": "",
    "id": 99,
    "slug": "purple_heron",
    "image": "images/099_purple_heron.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "orange / red",
        "brown / grey-brown"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "very long legs",
        "long / specialised bill"
      ],
      "habitat": [
        "wetland / marsh"
      ],
      "ecology": []
    }
  },
  {
    "name": "Giant Kingfisher",
    "scientific": "Megaceryle maxima",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "large",
    "pattern": "blackwhite",
    "feature": "huge bill",
    "habitat": "rivers, woodland",
    "desc": "Africa's largest kingfisher, dark with white spotting.",
    "clue": "Large body and heavy bill.",
    "diet": "carnivore",
    "safety": "",
    "id": 100,
    "slug": "giant_kingfisher",
    "image": "images/100_giant_kingfisher.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "black & white"
      ],
      "feature": [
        "very large bill"
      ],
      "habitat": [
        "permanent water / river",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Carmine Bee-eater",
    "scientific": "Merops nubicus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "red",
    "feature": "turquoise crown",
    "habitat": "riverbanks, woodland",
    "desc": "Brilliant crimson bee-eater often nesting near rivers.",
    "clue": "Carmine body and turquoise crown.",
    "diet": "insectivore",
    "safety": "",
    "id": 101,
    "slug": "southern_carmine_bee_eater",
    "image": "images/101_southern_carmine_bee_eater.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "orange / red",
        "blue"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "riverbank / sandbank",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Red-billed Hornbill",
    "scientific": "Tockus erythrorhynchus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "size": "medium",
    "pattern": "brown",
    "feature": "red bill",
    "habitat": "savanna, woodland, wetland",
    "desc": "Small hornbill with a bright red bill.",
    "clue": "Red bill and long tail.",
    "diet": "omnivore",
    "safety": "",
    "id": 102,
    "slug": "red_billed_hornbill",
    "image": "images/102_red_billed_hornbill.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown",
        "orange / red"
      ],
      "feature": [
        "very large bill"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Fork-tailed Drongo",
    "scientific": "Dicrurus adsimilis",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "size": "medium",
    "pattern": "black",
    "feature": "forked tail",
    "habitat": "savanna, woodland, wetland",
    "desc": "Glossy black bird with a deeply forked tail.",
    "clue": "Forked tail and upright perch posture.",
    "diet": "insectivore",
    "safety": "",
    "id": 103,
    "slug": "fork_tailed_drongo",
    "image": "images/103_fork_tailed_drongo.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "mostly dark"
      ],
      "feature": [
        "forked tail"
      ],
      "habitat": [
        "open grassland / floodplain",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Crimson-breasted Shrike",
    "scientific": "Laniarius atrococcineus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "small",
    "pattern": "blackred",
    "feature": "crimson breast",
    "habitat": "dry woodland",
    "desc": "Black shrike with a vivid crimson breast.",
    "clue": "Bright red chest.",
    "diet": "insectivore",
    "safety": "",
    "id": 104,
    "slug": "crimson_breasted_shrike",
    "image": "images/104_crimson_breasted_shrike.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "mostly dark",
        "orange / red"
      ],
      "feature": [
        "distinctive throat / pouch"
      ],
      "habitat": [
        "woodland / bush",
        "rocky / dry ground"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Acacia Pied Barbet",
    "scientific": "Tricholaema leucomelas",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "small",
    "pattern": "blackwhite",
    "feature": "stout bill",
    "habitat": "woodland, savanna",
    "desc": "Small patterned barbet with a stout bill.",
    "clue": "Short thick bill and pied face.",
    "diet": "fruit",
    "safety": "",
    "id": 105,
    "slug": "acacia_pied_barbet",
    "image": "images/105_acacia_pied_barbet.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "black & white"
      ],
      "feature": [
        "very large bill"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Yellow-fronted Tinkerbird",
    "scientific": "Pogoniulus chrysoconus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "tiny",
    "pattern": "green",
    "feature": "yellow forehead",
    "habitat": "woodland",
    "desc": "Tiny green barbet with yellow forehead.",
    "clue": "Tiny size and yellow brow.",
    "diet": "fruit",
    "safety": "",
    "id": 106,
    "slug": "yellow_fronted_tinkerbird",
    "image": "images/106_yellow_fronted_tinkerbird.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "green",
        "yellow"
      ],
      "feature": [
        "colourful face"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Green Pigeon",
    "scientific": "Treron calvus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "green",
    "feature": "orange feet",
    "habitat": "woodland, riverine",
    "desc": "Green pigeon often feeding quietly in fruiting trees.",
    "clue": "Green body and bright orange-red feet.",
    "diet": "fruit",
    "safety": "",
    "id": 107,
    "slug": "african_green_pigeon",
    "image": "images/107_african_green_pigeon.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "green",
        "orange / red"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush",
        "permanent water / river"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Brown-headed Parrot",
    "scientific": "Poicephalus cryptoxanthus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "green",
    "feature": "brown head",
    "habitat": "woodland",
    "desc": "Green parrot with brownish head and yellow wing flashes.",
    "clue": "Brown head and green body.",
    "diet": "fruit",
    "safety": "",
    "id": 108,
    "slug": "brown_headed_parrot",
    "image": "images/108_brown_headed_parrot.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "green",
        "brown / grey-brown"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Red Bishop",
    "scientific": "Euplectes orix",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "small",
    "pattern": "red",
    "feature": "black face",
    "habitat": "grassland, wetland",
    "desc": "Breeding male can be brilliant red and black.",
    "clue": "Bright red breeding plumage.",
    "diet": "seed",
    "safety": "",
    "id": 109,
    "slug": "southern_red_bishop",
    "image": "images/109_southern_red_bishop.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "orange / red",
        "mostly dark"
      ],
      "feature": [
        "facial mask"
      ],
      "habitat": [
        "open grassland / floodplain",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Southern Masked Weaver",
    "scientific": "Ploceus velatus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "size": "small",
    "pattern": "yellow",
    "feature": "black mask",
    "habitat": "woodland, wetland",
    "desc": "Yellow weaver whose males build hanging nests.",
    "clue": "Black mask and woven pendulous nests.",
    "diet": "seed",
    "safety": "",
    "id": 110,
    "slug": "southern_masked_weaver",
    "image": "images/110_southern_masked_weaver.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "yellow",
        "mostly dark"
      ],
      "feature": [
        "facial mask"
      ],
      "habitat": [
        "woodland / bush",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Village Weaver",
    "scientific": "Ploceus cucullatus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "small",
    "pattern": "yellow",
    "feature": "black head",
    "habitat": "woodland, wetland",
    "desc": "Bold yellow-and-black weaver, often colonial.",
    "clue": "Bright yellow body and nest colonies.",
    "diet": "seed",
    "safety": "",
    "id": 111,
    "slug": "village_weaver",
    "image": "images/111_village_weaver.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "yellow",
        "mostly dark"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "woodland / bush",
        "wetland / marsh"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Red-billed Quelea",
    "scientific": "Quelea quelea",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "very likely",
    "size": "tiny",
    "pattern": "brown",
    "feature": "red bill",
    "habitat": "grassland, savanna",
    "desc": "Tiny social seed-eater often seen in large flocks.",
    "clue": "Huge flocks and tiny pointed bill.",
    "diet": "seed",
    "safety": "",
    "id": 112,
    "slug": "red_billed_quelea",
    "image": "images/112_red_billed_quelea.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "brown / grey-brown",
        "orange / red"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Black-winged Stilt",
    "scientific": "Himantopus himantopus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "blackwhite",
    "feature": "pink legs",
    "habitat": "shallow water, mudflats",
    "desc": "Elegant wader with extremely long pink legs.",
    "clue": "Pink legs and black wings.",
    "diet": "omnivore",
    "safety": "",
    "id": 113,
    "slug": "black_winged_stilt",
    "image": "images/113_black_winged_stilt.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "black & white"
      ],
      "feature": [
        "very long legs"
      ],
      "habitat": [
        "wetland / marsh",
        "riverbank / sandbank"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Three-banded Plover",
    "scientific": "Charadrius tricollaris",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "brownwhite",
    "feature": "dark breast bands",
    "habitat": "sandbanks, mudflats",
    "desc": "Small shorebird with crisp facial and breast bands.",
    "clue": "Compact body and dark bands.",
    "diet": "insectivore",
    "safety": "",
    "id": 114,
    "slug": "three_banded_plover",
    "image": "images/114_three_banded_plover.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown",
        "black & white",
        "mostly white"
      ],
      "pattern": [
        "striped / banded"
      ],
      "feature": [
        "very long legs"
      ],
      "habitat": [
        "riverbank / sandbank",
        "wetland / marsh"
      ],
      "ecology": []
    }
  },
  {
    "name": "Water Thick-knee",
    "scientific": "Burhinus vermiculatus",
    "group": "bird",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "brown",
    "feature": "huge eyes",
    "habitat": "riverbanks, floodplains",
    "desc": "Large-eyed wader with thick bill and cryptic plumage.",
    "clue": "Huge yellow eyes and heavy bill.",
    "diet": "insectivore",
    "safety": "",
    "id": 115,
    "slug": "water_thick_knee",
    "image": "images/115_water_thick_knee.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "very large ears",
        "very large bill"
      ],
      "habitat": [
        "riverbank / sandbank",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Red-faced Mousebird",
    "scientific": "Urocolius indicus",
    "group": "bird",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "small",
    "pattern": "grey",
    "feature": "long tail",
    "habitat": "woodland, savanna",
    "desc": "Long-tailed grey mousebird with reddish face.",
    "clue": "Very long tail and hopping movement.",
    "diet": "fruit",
    "safety": "",
    "id": 116,
    "slug": "red_faced_mousebird",
    "image": "images/116_red_faced_mousebird.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "grey",
        "orange / red"
      ],
      "feature": [
        "long tail"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Rock Monitor",
    "scientific": "Varanus albigularis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai"
    ],
    "likelihood": "possible",
    "size": "large",
    "pattern": "brown",
    "feature": "pale throat",
    "habitat": "rocky woodland, savanna",
    "desc": "Heavy-bodied monitor with pale throat and strong claws.",
    "clue": "Stockier and more terrestrial than a Nile monitor.",
    "diet": "carnivore",
    "safety": "",
    "id": 117,
    "slug": "rock_monitor",
    "image": "images/117_rock_monitor.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "stocky / heavy body",
        "distinctive tail"
      ],
      "habitat": [
        "rocky / dry ground",
        "woodland / bush"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "Flap-necked Chameleon",
    "scientific": "Chamaeleo dilepis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "green",
    "feature": "flap neck",
    "habitat": "woodland, shrubs",
    "desc": "Large chameleon with broad casque and expandable throat flap.",
    "clue": "Slow climbing and independently moving eyes.",
    "diet": "insectivore",
    "safety": "",
    "id": 118,
    "slug": "flap_necked_chameleon",
    "image": "images/118_flap_necked_chameleon.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "green"
      ],
      "feature": [
        "crest / crown / casque",
        "distinctive eyes"
      ],
      "habitat": [
        "woodland / bush"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Helmeted Terrapin",
    "scientific": "Pelomedusa subrufa",
    "group": "reptile",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "brown",
    "feature": "flat shell",
    "habitat": "ponds, marshes",
    "desc": "Small freshwater turtle of shallow seasonal water.",
    "clue": "Flattened brown shell.",
    "diet": "omnivore",
    "safety": "",
    "id": 119,
    "slug": "helmeted_terrapin",
    "image": "images/119_helmeted_terrapin.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "domed shell"
      ],
      "habitat": [
        "wetland / marsh",
        "permanent water / river"
      ],
      "ecology": [
        "aquatic / semi-aquatic"
      ],
      "pattern": []
    }
  },
  {
    "name": "Southern Tree Snake",
    "scientific": "Philothamnus natalensis",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "green",
    "feature": "slender body",
    "habitat": "woodland, riverine",
    "desc": "Slender non-venomous green snake often climbing vegetation.",
    "clue": "Bright green body and arboreal movement.",
    "diet": "carnivore",
    "safety": "",
    "id": 120,
    "slug": "southern_tree_snake",
    "image": "images/120_southern_tree_snake.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "green"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "permanent water / river"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Common Egg-eater",
    "scientific": "Dasypeltis scabra",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "brown",
    "feature": "zigzag",
    "habitat": "woodland, grassland",
    "desc": "Specialist snake that eats eggs and lacks functional venom.",
    "clue": "Zigzag body pattern and slender head.",
    "diet": "carnivore",
    "safety": "",
    "id": 121,
    "slug": "common_egg_eater",
    "image": "images/121_common_egg_eater.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "zigzag"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "ecology": []
    }
  },
  {
    "name": "African House Snake",
    "scientific": "Boaedon fuliginosus",
    "group": "reptile",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "medium",
    "pattern": "brown",
    "feature": "pale belly",
    "habitat": "woodland, camps",
    "desc": "Common non-venomous snake that may occur around buildings.",
    "clue": "Brown body and pale belly.",
    "diet": "carnivore",
    "safety": "",
    "id": 122,
    "slug": "african_house_snake",
    "image": "images/122_african_house_snake.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "long body / snake-like"
      ],
      "habitat": [
        "woodland / bush",
        "around camps / buildings"
      ],
      "pattern": [],
      "ecology": []
    }
  },
  {
    "name": "African Bullfrog",
    "scientific": "Pyxicephalus adspersus",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "large",
    "pattern": "green",
    "feature": "yellow throat",
    "habitat": "seasonal pans, grassland",
    "desc": "Large robust frog that emerges after rains and calls loudly.",
    "clue": "Huge body and broad head.",
    "diet": "carnivore",
    "safety": "",
    "id": 123,
    "slug": "african_bullfrog",
    "image": "images/123_african_bullfrog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "large"
      ],
      "colour": [
        "green",
        "yellow"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "wetland / marsh",
        "open grassland / floodplain"
      ],
      "ecology": [
        "burrowing / underground"
      ],
      "pattern": []
    }
  },
  {
    "name": "Painted Reed Frog",
    "scientific": "Hyperolius marmoratus",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "tiny",
    "pattern": "green",
    "feature": "marbled",
    "habitat": "reeds, wetlands",
    "desc": "Tiny colourful reed frog associated with wet vegetation.",
    "clue": "Small size and clinging toe pads.",
    "diet": "insectivore",
    "safety": "",
    "id": 124,
    "slug": "painted_reed_frog",
    "image": "images/124_painted_reed_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "green",
        "orange / red"
      ],
      "pattern": [
        "patchy / irregular markings"
      ],
      "habitat": [
        "wetland / marsh"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "feature": []
    }
  },
  {
    "name": "Red-banded Rubber Frog",
    "scientific": "Phrynomantis bifasciatus",
    "group": "amphibian",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "red",
    "feature": "bands",
    "habitat": "woodland, savanna",
    "desc": "Small striking frog with bold red banding.",
    "clue": "Flattened body and red bands.",
    "diet": "insectivore",
    "safety": "",
    "id": 125,
    "slug": "red_banded_rubber_frog",
    "image": "images/125_red_banded_rubber_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "orange / red"
      ],
      "pattern": [
        "striped / banded"
      ],
      "habitat": [
        "woodland / bush",
        "open grassland / floodplain"
      ],
      "feature": [],
      "ecology": []
    }
  },
  {
    "name": "Tremolo Sand Frog",
    "scientific": "Tomopterna cryptotis",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "small",
    "pattern": "brown",
    "feature": "dark bands",
    "habitat": "sandy grassland, pans",
    "desc": "Compact burrowing frog that appears after rain.",
    "clue": "Short limbs and rapid emergence after rain.",
    "diet": "insectivore",
    "safety": "",
    "id": 126,
    "slug": "tremolo_sand_frog",
    "image": "images/126_tremolo_sand_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "pattern": [
        "striped / banded"
      ],
      "habitat": [
        "sandy ground",
        "wetland / marsh"
      ],
      "ecology": [
        "burrowing / underground"
      ],
      "feature": []
    }
  },
  {
    "name": "Common Caco",
    "scientific": "Cacosternum boettgeri",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "tiny",
    "pattern": "brown",
    "feature": "plain",
    "habitat": "wet grassland, ponds",
    "desc": "Tiny frog common in temporary pools.",
    "clue": "Very small size and high-pitched calls.",
    "diet": "insectivore",
    "safety": "",
    "id": 127,
    "slug": "common_caco",
    "image": "images/127_common_caco.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [],
      "habitat": [
        "wetland / marsh"
      ],
      "ecology": [
        "burrowing / underground"
      ],
      "pattern": []
    }
  },
  {
    "name": "African Clawed Frog",
    "scientific": "Xenopus laevis",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "uncommon",
    "size": "medium",
    "pattern": "brown",
    "feature": "webbed feet",
    "habitat": "permanent water",
    "desc": "Fully aquatic frog with flattened body and clawed hind feet.",
    "clue": "Almost fish-like swimming style.",
    "diet": "carnivore",
    "safety": "",
    "id": 128,
    "slug": "african_clawed_frog",
    "image": "images/128_african_clawed_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "webbed / splayed feet",
        "broad / flat body"
      ],
      "habitat": [
        "permanent water / river"
      ],
      "ecology": [
        "aquatic / semi-aquatic"
      ],
      "pattern": []
    }
  },
  {
    "name": "Delicate Reed Frog",
    "scientific": "Hyperolius pusillus",
    "group": "amphibian",
    "places": [
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "possible",
    "size": "tiny",
    "pattern": "green",
    "feature": "bright stripe",
    "habitat": "reeds, marsh",
    "desc": "Tiny reed frog with variable green and yellow patterning.",
    "clue": "Small climber among reeds.",
    "diet": "insectivore",
    "safety": "",
    "id": 129,
    "slug": "delicate_reed_frog",
    "image": "images/129_delicate_reed_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "tiny"
      ],
      "colour": [
        "green",
        "yellow"
      ],
      "pattern": [
        "patchy / irregular markings"
      ],
      "feature": [
        "distinctive bill"
      ],
      "habitat": [
        "wetland / marsh"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ]
    }
  },
  {
    "name": "Foam-nest Tree Frog",
    "scientific": "Chiromantis xerampelina",
    "group": "amphibian",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai",
      "Okavango"
    ],
    "likelihood": "likely",
    "size": "medium",
    "pattern": "brown",
    "feature": "foam nest",
    "habitat": "woodland pools, wetlands",
    "desc": "Large tree frog that breeds in foam nests above water.",
    "clue": "Foam breeding nests and adhesive toe pads.",
    "diet": "insectivore",
    "safety": "",
    "id": 130,
    "slug": "foam_nest_tree_frog",
    "image": "images/130_foam_nest_tree_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "medium"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "distinctive throat / pouch"
      ],
      "habitat": [
        "wetland / marsh",
        "woodland / bush"
      ],
      "ecology": [
        "tree-dwelling / arboreal"
      ],
      "pattern": []
    }
  },
  {
    "name": "Bushveld Rain Frog",
    "scientific": "Breviceps adspersus",
    "group": "amphibian",
    "places": [
      "Victoria Falls",
      "Chobe",
      "Khwai"
    ],
    "likelihood": "uncommon",
    "size": "small",
    "pattern": "brown",
    "feature": "round body",
    "habitat": "dry woodland, sandy soil",
    "desc": "Compact burrowing rain frog that emerges after heavy rain.",
    "clue": "Very round body and short limbs.",
    "diet": "insectivore",
    "safety": "",
    "id": 131,
    "slug": "bushveld_rain_frog",
    "image": "images/131_bushveld_rain_frog.webp",
    "photo": {
      "status": "local-placeholder",
      "photographer": "",
      "source": "",
      "license": "",
      "note": "Local fallback plate. A species photograph should be bundled here before field use."
    },
    "identification": {
      "size": [
        "small"
      ],
      "colour": [
        "brown / grey-brown"
      ],
      "feature": [
        "stocky / heavy body"
      ],
      "habitat": [
        "woodland / bush",
        "sandy ground"
      ],
      "ecology": [
        "burrowing / underground"
      ],
      "pattern": []
    }
  }
];
