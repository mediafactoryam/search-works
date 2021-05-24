$(document).ready(function () {
  let date = new Set();
  let map;
  const zoomLevel = 8.6;
  initMap();

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
    ["Մայիս", "May"],
    ["Ապրիլ", "Apr"],
    ["Մարտ", "Mar"],
    ["Փետրվար", "Feb"],
    ["Հունվար", "Jan"],
    ["Դեկտեմբեր", "Dec"],
    ["Նոյեմբեր", "Nov"],
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
    $(`.calendar ul`).slideUp();
    $(this).parent().find("ul").slideToggle();
  });

  let cirArr = [];

  date.map((j, i) => {
    DATA.map((place) => {
      for (const k of Object.keys(place.date)) {
        if (k == date[i]) {
          createCircke(place);
        }
      }
    });

    $("li").removeClass("active-date");
    $(`li[data-date="${date[i]}"]`).addClass("active-date");
    $(`p`).removeClass("active-date");
    $(`p[data-mon="${date[i].split("-")[1]}"]`).addClass("active-date");
  });

  $("li").on("click", function () {
    cirArr.map((i) => {
      map.removeLayer(i);
    });
    cirArr.length = 0;
    DATA.map((place) => {
      for (const k of Object.keys(place.date)) {
        if (k == $(this).data("date")) {
          createCircke(place, place.date[$(this).data("date")]);
        }
      }
    });
    $("li").removeClass("active-date");
    $(this).addClass("active-date");
    $(`p`).removeClass("active-date");
    $(`p[data-mon="${$("li").data("date").split("-")[1]}"]`).addClass("active-date");
  });

  $("button").on("click", function () {
    cirArr.map((i) => {
      map.removeLayer(i);
    });
    cirArr.length = 0;
    $(this).toggleClass("click");
    date.map((j, i) => {
      DATA.map((place) => {
        for (const k of Object.keys(place.date)) {
          if (k == date[i]) {
            createCircke(place);
          }
        }
      });

      $("li").removeClass("active-date");
      $(`li[data-date="${date[i]}"]`).addClass("active-date");
      $(`p`).removeClass("active-date");
      $(`p[data-mon="${date[i].split("-")[1]}"]`).addClass("active-date");
    });
  });
  function createCircke(place, radius) {
    let isFound = false;
    let cir;
    let lat = place.coordinates[0];
    let lng = place.coordinates[1];
    if (lat && lng) {
      for (const i of cirArr) {
        if (i._latlng.lat == lat && i._latlng.lng == lng) {
          isFound = true;
          cir = i;
        }
      }
      let general = 0;
      DATA.filter((i) => i.place == place.place).map(
        (i) => (general += parseInt(i.general))
      );
      if (isFound == false) {
        cir = L.circle([lat, lng], {
          color: "transparent",
          fillColor: "red",
          fillOpacity: 0.7,
          radius:
            radius != undefined
              ? 3000
              : general < 10
              ? 200 * general
              : 10 * general,
        }).addTo(map);
        cir.on("mouseover", function (e) {
          e.target
            .bindPopup(
              `<p>${place.place}</p><br><p style="text-align: center;">${
                radius != undefined ? radius : place.general
              }</p>`
            )
            .openPopup();
        });

        cirArr.push(cir);
      } else {
        const rgb = scale(general, 1, 212, 255, 200);
        cir.setStyle({
          fillColor: `rgb(${rgb},0 , 0)`,
        });
        if (general < 10) {
          cir.setRadius(200 * general);
        } else {
          cir.setRadius(scale(general, 1, 212, 200, 255) * 10);
        }
        for (const i in cirArr) {
          if (i._leaflet_id == cir._leaflet_id) cirArr[i] = cir;
        }
      }
    }
  }
  function initMap() {
    $(`<div>`).attr("id", "map").prependTo("#root");
    map = L.map("map", {
      zoomControl: false,
      attributionControl: false,
      doubleClickZoom: false,
      dragging: false,
      scrollWheelZoom: false,
    }).setView([39.7910695, 46.4359333], zoomLevel);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FuZGFyYW1ldCIsImEiOiJja295YjhsOXUwb2JrMnZxZzdjZ2Y2bnpjIn0.IokXB4uVtFryUfE5oYepqA",
      {
        attribution: "",
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "your.mapbox.access.token",
        zoomControl: false,
        attributionControl: false,
      }
    ).addTo(map);
  }
});

function scale(num, inMin, inMax, outMin, outMax) {
  return Math.floor(
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
}
