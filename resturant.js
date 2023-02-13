// Load the XML file using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "restaurants.xml", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xml = xhr.responseXML;
      var restaurants = xml.getElementsByTagName("restaurant");
      var list = document.getElementById("restaurant-list");
      
      // going through xml file to fetch data
      for (var i = 0; i < restaurants.length; i++) {
        var name = restaurants[i].getAttribute("name");
        var address = restaurants[i].getAttribute("address");
        var type = restaurants[i].getAttribute("type");
        // list node appending
        var item = document.createElement("li");
        item.innerHTML = name + " - " + address;
        item.className = type;
        list.appendChild(item);
      }
    }
  };

