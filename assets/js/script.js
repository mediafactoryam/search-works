$(document).ready(function () {
  let date = new Set();
  var highlightLayer;

  var autolinker = new Autolinker({
    truncate: { length: 30, location: "smart" },
  });
  let map;
  const zoomLevel = 8.6;
  // initMap()
  $(`<div>`).attr("id", "map").prependTo("#root");
  map = L.map("map", {}).setView([39.7572948, 47.1665142], zoomLevel);
  let bounds_group = new L.featureGroup([]);
  map.createPane("pane_OpenStreetMap_0");
  map.getPane("pane_OpenStreetMap_0").style.zIndex = 400;
  var layer_OpenStreetMap_0 = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      pane: "pane_OpenStreetMap_0",
      opacity: 1.0,
      attribution: "",
      minZoom: 1,
      maxZoom: 28,
      minNativeZoom: 0,
      maxNativeZoom: 19,
    }
  );
  map.addLayer(layer_OpenStreetMap_0);
  map.createPane("pane_DATA_4");
  map.getPane("pane_DATA_4").style.zIndex = 500;
  map.getPane("pane_DATA_4").style["mix-blend-mode"] = "normal";
  var layer_DATA_4 = new L.geoJson(json_DATA_4, {
    attribution: "",
    interactive: true,
    dataVar: "json_DATA_4",
    layerName: "layer_DATA_4",
    pane: "pane_DATA_4",
    onEachFeature: pop_DATA_4,
    pointToLayer: function (feature, latlng) {
      var context = {
        feature: feature,
        variables: {},
      };
      return L.circleMarker(latlng, style_DATA_4_0(feature));
    },
  });

  var cluster_DATA_4 = new L.MarkerClusterGroup({
    showCoverageOnHover: false,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function (cluster) {
      let c = 0;
      cluster.getAllChildMarkers().map((i) => {
        c += i._popup._source.feature.properties["Գտնված աճյունների թիվը"];
      });
      return L.divIcon({
        html: `<div class="marker-cluster">
                <div class="marker-cluster-${
                  (c < 50 && "small") ||
                  (c > 50 && c < 100 && "medium") ||
                  (c > 100 && "large")
                }">
                <span>${c}</span>
                </div>
              </div>`,
      });
    },
  });

  cluster_DATA_4.addLayer(layer_DATA_4);
  bounds_group.addLayer(layer_DATA_4);
  cluster_DATA_4.addTo(map);
  let layer_Artsakh_border_1 = new L.geoJson(json_Artsakh_border_1, {
    attribution: "",
    interactive: false,
    datalet: "json_Artsakh_border_1",
    layerName: "layer_Artsakh_border_1",
    pane: "pane_Artsakh_border_1",
    onEachFeature: pop_Artsakh_border_1,
    style: style_Artsakh_border_1_0,
  });
  map.createPane("pane_Artsakh_border_1");
  map.getPane("pane_Artsakh_border_1").style.zIndex = 401;
  map.getPane("pane_Artsakh_border_1").style["mix-blend-mode"] = "normal";
  bounds_group.addLayer(layer_Artsakh_border_1);
  map.addLayer(layer_Artsakh_border_1);

  map.createPane("pane_Artsakh_actual_border_3");
  map.getPane("pane_Artsakh_actual_border_3").style.zIndex = 403;
  map.getPane("pane_Artsakh_actual_border_3").style["mix-blend-mode"] =
    "normal";
  var layer_Artsakh_actual_border_3 = new L.geoJson(
    json_Artsakh_actual_border_3,
    {
      attribution: "",
      interactive: true,
      dataVar: "json_Artsakh_actual_border_3",
      layerName: "layer_Artsakh_actual_border_3",
      pane: "pane_Artsakh_actual_border_3",
      onEachFeature: pop_Artsakh_actual_border_3,
      style: style_Artsakh_actual_border_3_0,
    }
  );

  map.createPane("pane_NKAR_2");
  map.getPane("pane_NKAR_2").style.zIndex = 402;
  map.getPane("pane_NKAR_2").style["mix-blend-mode"] = "normal";
  var layer_NKAR_2 = new L.geoJson(json_NKAR_2, {
    attribution: "",
    interactive: false,
    dataVar: "json_NKAR_2",
    layerName: "layer_NKAR_2",
    pane: "pane_NKAR_2",
    onEachFeature: pop_NKAR_2,
    style: style_NKAR_2_0,
  });
  bounds_group.addLayer(layer_NKAR_2);
  map.addLayer(layer_NKAR_2);

  function pop_NKAR_2(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
        if (typeof layer.closePopup == "function") {
          layer.closePopup();
        } else {
          layer.eachLayer(function (feature) {
            feature.closePopup();
          });
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent =
      '<table>\
            <tr>\
                <td colspan="2">' +
      (feature.properties["Name"] !== null
        ? autolinker.link(feature.properties["Name"].toLocaleString())
        : "") +
      "</td>\
            </tr>\
        </table>";
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }

  function style_NKAR_2_0() {
    return {
      pane: "pane_NKAR_2",
      opacity: 1,
      color: "rgba(35,35,35,1.0)",
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: "rgba(232,213,141,0.5098039215686274)",
      interactive: false,
    };
  }

  bounds_group.addLayer(layer_Artsakh_actual_border_3);
  map.addLayer(layer_Artsakh_actual_border_3);

  var baseMaps = {};
  L.control
    .layers(baseMaps, {
      ՏՎՅԱԼՆԵՐ: cluster_DATA_4,
      "ԱՐՑԱԽԻ ՆԵՐԿԱ ՍԱՀՄԱՆՆԵՐ": layer_Artsakh_actual_border_3,
      "ԱՐՑԱԽԻ ՍԱՀՄԱՆՆԵՐ": layer_Artsakh_border_1,
    })
    .addTo(map);

  function pop_Artsakh_actual_border_3(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
        if (typeof layer.closePopup == "function") {
          layer.closePopup();
        } else {
          layer.eachLayer(function (feature) {
            feature.closePopup();
          });
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent =
      '<table>\
            <tr>\
                <td colspan="2">' +
      (feature.properties["Name"] !== null
        ? autolinker.link(feature.properties["Name"].toLocaleString())
        : "") +
      "</td>\
            </tr>\
        </table>";
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }

  function style_Artsakh_actual_border_3_0() {
    return {
      pane: "pane_Artsakh_actual_border_3",
      opacity: 1,
      color: "rgba(255,16,23,1.0)",
      dashArray: "",
      lineCap: "square",
      lineJoin: "bevel",
      weight: 2.0,
      fillOpacity: 0,
      interactive: true,
    };
  }

  function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === "LineString") {
      highlightLayer.setStyle({
        color: "#ffff00",
      });
    } else {
      highlightLayer.setStyle({
        fillColor: "#ffff00",
        fillOpacity: 1,
      });
    }
    highlightLayer.openPopup();
  }

  function style_Artsakh_border_1_0() {
    return {
      pane: "pane_Artsakh_border_1",
      opacity: 1,
      color: "rgba(35,35,35,1.0)",
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: "rgba(114,30,111,0.27058823529411763)",
      interactive: false,
    };
  }
  function pop_Artsakh_border_1(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
        if (typeof layer.closePopup == "function") {
          layer.closePopup();
        } else {
          layer.eachLayer(function (feature) {
            feature.closePopup();
          });
        }
      },
      mouseover: highlightFeature,
    });
  }

  function pop_DATA_4(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
        if (typeof layer.closePopup == "function") {
          layer.closePopup();
        } else {
          layer.eachLayer(function (feature) {
            feature.closePopup();
          });
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent =
      `<table data-c="${
        feature.properties["Գտնված աճյունների թիվը"] !== null
          ? autolinker.link(
              feature.properties["Գտնված աճյունների թիվը"].toLocaleString()
            )
          : ""
      }">` +
      '<tr>\
                <td colspan="2"><strong>Տեղանքի անվանում </strong>' +
      (feature.properties["Տեղանքի անվանում"] !== null
        ? autolinker.link(
            feature.properties["Տեղանքի անվանում"].toLocaleString()
          )
        : "") +
      "<br />" +
      "</td>\
            </tr>\
            <tr>\
                  <td><strong>Ամսաթիվ </strong>" +
      (feature.properties["Ամսաթիվ"] !== null
        ? autolinker.link(feature.properties["Ամսաթիվ"].toLocaleString())
        : "") +
      "</td>\
            </tr>\
            <tr>\
                <td><strong>Գտնված աճյունների թիվը </strong>" +
      (feature.properties["Գտնված աճյունների թիվը"] !== null
        ? autolinker.link(
            feature.properties["Գտնված աճյունների թիվը"].toLocaleString()
          )
        : "") +
      "</td>\
            </tr>\
        </table>";
    layer.bindPopup(popupContent, { maxHeight: 400 });
  }
  function style_DATA_4_0() {
    return {
      pane: "pane_DATA_4",
      radius: 5,
      opacity: 1,
      color: "rgba(31,120,180,1.0)",
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor: "rgba(255,255,255,1.0)",
      interactive: true,
    };
  }
  function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === "LineString") {
      highlightLayer.setStyle({
        color: "#ffff00",
      });
    } else {
      highlightLayer.setStyle({
        fillColor: "#ffff00",
        fillOpacity: 1,
      });
    }
    highlightLayer.openPopup();
  }

  getAvailableDays(json_DATA_4.features);

  $(`.calendar ul`).slideUp();
  $(".calendar p").on("click", function () {
    if ($(`.active`).text() !== $(this).text()) {
      $(`.active`).parent().find("ul").slideUp();
    }
    $(".calendar p").removeClass("active");
    $(this).addClass("active");

    $(this).parent().find("ul").slideToggle();
  });

  $("li").on("click", function () {
    const self = this;
    $("li").removeClass("active-date");
    $(this).addClass("active-date");
    $(".active-date").parent().parent().find("p").addClass("active-date");

    $(`p`).removeClass("active-date");
    // $(`p[data-mon="${$(this).data("date").split("-")[1]}"]`).addClass(
    //   "active-date"
    // );
    let x = getFeatures(json_DATA_4.features);
    cluster_DATA_4.clearLayers();

    let new_layer_DATA_4 = new L.geoJson(x, {
      attribution: "",
      interactive: true,
      dataVar: "x",
      layerName: "new_layer_DATA_4",
      pane: "pane_x",
      onEachFeature: pop_DATA_4,
      pointToLayer: function (feature, latlng) {
        var context = {
          feature: feature,
          variables: {},
        };
        return L.circleMarker(latlng, style_DATA_4_0(feature));
      },
    });
    const CORD = { lat: 39.7572948, lng: 47.1665142 };
    cluster_DATA_4.addLayer(new_layer_DATA_4);
    map.setView([CORD.lat, CORD.lng], zoomLevel);

    function getFeatures(arr) {
      const d = $(self).data("date");
      const tmpArr = [];
      for (const i of arr) {
        const itemDate = new Date(
          `${i.properties[Object.keys(i.properties)[1]]
            .split("-")
            .join("/")} 00:00:00`
        ).getTime();
        if (itemDate == d) {
          tmpArr.push(i);
        }
      }
      return tmpArr;
    }
  });

  $("button").on("click", function () {
    $(this).addClass("click");
    let x = getFeatures(json_DATA_4.features);
    cluster_DATA_4.clearLayers();

    let new_layer_DATA_4 = new L.geoJson(x, {
      attribution: "",
      interactive: true,
      dataVar: "x",
      layerName: "new_layer_DATA_4",
      pane: "pane_x",
      onEachFeature: pop_DATA_4,
      pointToLayer: function (feature, latlng) {
        var context = {
          feature: feature,
          variables: {},
        };
        return L.circleMarker(latlng, style_DATA_4_0(feature));
      },
    });

    cluster_DATA_4.addLayer(new_layer_DATA_4);
    map.setView([39.7572948, 47.1665142], zoomLevel);
    $(".calendar li").removeClass("active-date");
    $(".calendar p").removeClass("active-date");
    $(".active").removeClass("active");
    $(`ul`).slideUp();

    function getFeatures(arr) {
      return arr;
    }

    map.setView([39.7572948, 47.1665142], zoomLevel);

    setTimeout(() => $(this).removeClass("click"), 1000);
  });

  function initMap() {}
});

function scale(num, inMin, inMax, outMin, outMax) {
  return Math.floor(
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
}

function getAvailableDays(data) {
  let ALL_DATES = [];
  let UNIQUE_MONTH = [];
  let UNIQUE_DAYS = [];
  let MONTH = [
    "հունվար",
    "փետրվար",
    "մարտ",
    "ապրիլ",
    "մայիս",
    "հունիս",
    "հուլիս",
    "օգոստոս",
    "սեպտեմբեր",
    "հոկտեմբեր",
    "նոյեմբեր",
    "դեկտեմբեր",
  ];
  data.map((i) => {
    let toms = new Date(i["properties"]["Ամսաթիվ"].split("-").join("/"));
    ALL_DATES.push(toms.getTime());
  });
  ALL_DATES = [...new Set(ALL_DATES.map((i) => i))];
  ALL_DATES.map((i) => {
    if (i) {
      UNIQUE_MONTH.push({
        time: new Date(i).getTime(),
        monNum: new Date(i).getMonth(),
        uDate:
          new Date(i).getMonth() + new Date(i).toDateString().split(" ")[3],
        year: new Date(i).toDateString().split(" ")[3],
      });
    }
  });
  ALL_DATES.map((i) => {
    UNIQUE_DAYS.push(new Date(i).getTime());
  });

  UNIQUE_MONTH = uniqueBy(UNIQUE_MONTH, ["uDate"]);
  UNIQUE_MONTH.sort((a, b) => {
    const x = new Date(a.time);
    const y = new Date(b.time);
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  });
  createMonths();
  function createMonths() {
    UNIQUE_MONTH.map((month) => {
      let m = month.monNum;
      console.log(month);
      $(".calendar").append(
        `<div><p data-date="${month.monNum}">${MONTH[m]}</p>
          <ul>
            ${UNIQUE_DAYS.map((i) => {
              const d = new Date(i).toDateString();
              if (
                new Date(i).getMonth() == m &&
                month.year == new Date(i).toDateString().split(" ")[3]
              ) {
                return `<li  data-date="${i}">${d.split(" ")[2]}</li>`;
              }
            }).join("")}
          </ul>`
      );
    });
    addYears();
  }
}
function uniqueBy(arr, key, $some = false) {
  if (key instanceof Array) {
    if ($some) {
      return key.reduce(uniqueBy, arr);
    } else {
      const fnUnique = (obj) => key.reduce((a, k) => `${a}-${obj[k]}`, "");
      return Object.values(
        arr.reduce((a, v) => {
          const key = fnUnique(v);
          return a[key] === undefined ? ((a[key] = v), a) : a;
        }, {})
      );
    }
  }
  return Object.values(
    arr.reduce(
      (a, v) => (a[v[key]] === undefined ? ((a[v[key]] = v), a) : a),
      {}
    )
  );
}
function removeDuplicates(a) {
  return a.filter((e) => a.slice(a.indexOf(e) + 1).indexOf(e) === -1);
}
function addYears() {
  $(`.calendar`).prepend(
    $(`
      <div class="year">
        <p>2020</p>
      <div>
    `)
  );
  $(`p[data-date="11"]`)
    .parent()
    .after(
      $(`
      <div class="year">
        <p>2021</p>
      <div>
    `)
    );
  // })
}
