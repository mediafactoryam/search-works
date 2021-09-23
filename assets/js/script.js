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
      cluster
        .getAllChildMarkers()
        .map(
          (i) =>
            (c += i._popup._source.feature.properties["Գտնված աճյունների թիվը"])
        );
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
      '<img src="/assets/legend/DATA_4.png" /> DATA': cluster_DATA_4,
      '<img src="/assets/legend/Artsakh_actual_border_3.png" /> Artsakh_actual_border':
        layer_Artsakh_actual_border_3,
      '<img src="/assets/legend/Artsakh_border_1.png" /> Artsakh_border':
        layer_Artsakh_border_1,
      '<img src="legend/NKAR_2.png" /> NKAR': layer_NKAR_2,
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

  DATA.map((place) => {
    for (const i in place.date) {
      date.add(i);
    }
  });
  date = [...date];

  date.sort((a, b) => {
    let x = new Date(a).getTime();
    let y = new Date(b).getTime();
    return x - y;
  });

  const cal = [
    ["Հունիս", "Jun", "06"],
    ["Մայիս", "May", "05"],
    ["Ապրիլ", "Apr", "04"],
    ["Մարտ", "Mar", "03"],
    ["Փետրվար", "Feb", "02"],
    ["Հունվար", "Jan", "01"],
    ["Դեկտեմբեր", "Dec", "12"],
    ["Նոյեմբեր", "Nov", "11"],
  ];

  cal.map((m) => {
    $(".calendar").prepend(`<div><p data-mon="${m[1]}">${m[0]}</><ul>
    ${date
      .map((d) => {
        let months = d.split("-")[1];
        if (months == m[1]) {
          return `<li data-date="${d}">${d.split("-")[0]}</li>`;
        }
      })
      .join("")}
    </ul><div>`);
  });

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
    $(`p`).removeClass("active-date");
    $(`p[data-mon="${$(this).data("date").split("-")[1]}"]`).addClass(
      "active-date"
    );
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

    function getFeatures(arr) {
      const d = new Date($(self).data("date")).getTime();
      const tmpArr = [];
      for (const i of arr) {
        const itemDate = new Date(
          `${i.properties[Object.keys(i.properties)[1]]} 00:00:00`
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
    $(`.active`).parent().find("ul").slideUp();

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
