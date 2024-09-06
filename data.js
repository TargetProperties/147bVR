var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10874855369310232,
          "pitch": 0.4444535705774797,
          "rotation": 0,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-",
      "name": "Living ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.1115600499674745,
        "pitch": 0.29873593328964176,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -1.565875025088845,
          "pitch": 0.5462248972811672,
          "rotation": 5.497787143782138,
          "target": "2-livingkitchen"
        },
        {
          "yaw": -2.711429512053357,
          "pitch": 0.841481254863961,
          "rotation": 5.497787143782138,
          "target": "4-bathroom"
        },
        {
          "yaw": 0.040440242842395335,
          "pitch": 0.5674158851296944,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": -2.0854464675796454,
          "pitch": 0.4732069033838524,
          "rotation": 10.995574287564278,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.5283520149485401,
          "pitch": 0.940574282145727,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingkitchen",
      "name": "Living/Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5396369362923021,
        "pitch": 0.22549414882972307,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 2.7754882974206474,
          "pitch": 0.6556745014532961,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.7025804508129241,
          "pitch": 0.5091756006251984,
          "rotation": 5.497787143782138,
          "target": "5-bedroom"
        },
        {
          "yaw": 1.530881995574207,
          "pitch": 0.6680171816267659,
          "rotation": 7.853981633974483,
          "target": "4-bathroom"
        },
        {
          "yaw": 1.053904671009743,
          "pitch": 0.6331509062295684,
          "rotation": 12.566370614359176,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6147091190874043,
        "pitch": 0.43945704652492523,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.5446312233044512,
          "pitch": 0.65363782841888,
          "rotation": 0,
          "target": "2-livingkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.0684810495205586,
        "pitch": 0.9520283974862593,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -0.4882355166318515,
          "pitch": 0.9789201178079452,
          "rotation": 0,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.9442991678147585,
        "pitch": 0.2895417967142109,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -0.219456598562088,
          "pitch": 0.5516705668455408,
          "rotation": 0,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "147B Victoria Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
