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

  let cirArr = [];

  date.map((j, i) => {
    DATA.map((place) => {
      for (const k of Object.keys(place.date)) {
        if (k == date[i]) {
          createCircke(place);
        }
      }
    });
  });

  $("li").on("click", function () {
    $("li").removeClass("active-date");
    $(this).addClass("active-date");
    $(`p`).removeClass("active-date");
    $(`p[data-mon="${$(this).data("date").split("-")[1]}"]`).addClass(
      "active-date"
    );
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
  });

  $("button").on("click", function () {
    $(this).addClass("click");
    cirArr.map((i) => {
      map.removeLayer(i);
    });
    cirArr.length = 0;
    map.setView([39.7572948, 47.1665142], zoomLevel);

    date.map((j, i) => {
      DATA.map((place) => {
        for (const k of Object.keys(place.date)) {
          if (k == date[i]) {
            createCircke(place);
          }
        }
      });
    });
    setTimeout(() => $(this).removeClass("click"), 1000);
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
      DATA.filter((i) => i.place == place.place)
      .filter((i) => i.general != "")
      .map(
        (i) => (general += parseInt(i.general))
      );
      if (isFound == false) {
        const rgb = scale(
          radius != undefined ? radius : general,
          1,
          212,
          255,
          100
        );
        cir = L.circle([lat, lng], {
          color: "transparent",
          fillColor: `rgb(${rgb},0 , 0)`,
          fillOpacity: 0.5,
          radius: Math.pow(20 - map.getZoom(), 3.3),
        }).addTo(map);

        var myZoom = {
          start: map.getZoom(),
          end: map.getZoom(),
        };
        map.on("zoomstart", function (e) {
          myZoom.start = map.getZoom();
        });

        map.on("zoomend", function (e) {
          let r = Math.pow(20 - map.getZoom(), 3.3);
          myZoom.end = map.getZoom();
          var diff = myZoom.start - myZoom.end;
          console.log(e);
          if (diff > 0) {
            cir.setRadius(r);
          } else if (diff < 0) {
            cir.setRadius(r);
          }
        });
        let d;
        if ($("li.active-date").data("date")) {
          d = $("li.active-date").data("date").split("-");
          d = d[0] + "/" + cal.filter((i) => i[1] == d[1])[0][2] + "/" + d[2];
        }
        cir.on("mouseover", function (e) {
          e.target
            .bindPopup(
              `<p>${place.place}</p><br>
              ${$("li.active-date").data("date") ? `<p style="text-align: center;" >${d}</p>` : ""}
              <br><p  style="text-align: center;">${
                radius != undefined ? radius : general
              }</p>`
            )
            .openPopup();
        });
        cirArr.push(cir);
        console.log();
      } else {
        for (const i in cirArr) {
          if (i._leaflet_id == cir._leaflet_id) cirArr[i] = cir;
        }
      }
    }
  }
  function initMap() {
    $(`<div>`).attr("id", "map").prependTo("#root");
    map = L.map("map", {}).setView([39.7572948, 47.1665142], zoomLevel);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FuZGFyYW1ldCIsImEiOiJja295YjhsOXUwb2JrMnZxZzdjZ2Y2bnpjIn0.IokXB4uVtFryUfE5oYepqA",
      {
        attribution: "",
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "your.mapbox.access.token",
      }
    ).addTo(map);
  }
});

function scale(num, inMin, inMax, outMin, outMax) {
  return Math.floor(
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
}
