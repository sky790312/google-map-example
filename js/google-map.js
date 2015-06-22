/* =========================================================
 * google map api js file => created by kevin hu
 * ========================================================= */

(function($){

	var googlemap = {
		init: function(m_zoom, m_lat, m_lng, m_title, m_content){
			var m_location = new google.maps.LatLng(m_lat,m_lng), // lat : 緯度 ,lng : 經度
					m_options = {
				    zoom: m_zoom, // default zoom : 15
				    center: m_location, // put define latlng to center
				    mapTypeId: google.maps.MapTypeId.ROADMAP // default google map type
				  },
					map = new google.maps.Map(document.getElementById('gmap'),m_options),
					marker = new google.maps.Marker({
						position: m_location,
						map: map,
						title: m_title,
						icon: 'http://www.eztravel.com.tw/htf_2015/marker.png'
					}),
					infowindow = new google.maps.InfoWindow({
						content: m_content,
						// size: new google.maps.Size(700, 500)
					});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,this);
				map.panTo(m_location);
			});
			// infowindow.open(map,marker); // open infowindow default

			$('#gmapModal').on('shown.bs.modal', function () {
		  	google.maps.event.trigger(map, "resize");
		  	map.setCenter(m_location);
		  }); // google map with bootstrap 3 modal showing
		}
	};

	var mapTitle = "新加坡皇后酒店 Royal at Queens Hotel Singapore (R.O.H 標準)",
			mapImg = "http://www.royalqueens.com.sg/content/gallery_photo_909_1.jpg",
		  mapUrl = "http://www.eztravel.com.tw/",
		  mapLat = "45.430817",
		  mapLng = "12.331516",
		  mapZoom = 15;
	// google map api setting

	googlemap.init(mapZoom, mapLat, mapLng, "google map",
		'<div id="infowindow">' +
			// '<img src="http://www.google.com/intl/en_us/mapfiles/close.gif" align="right" style=" position: absolute; cursor: pointer; margin: 2px -2px; right: 0; z-index: 10001;">' +
			'<a href="' + mapUrl + '" target="_blank">' + mapTitle + '</a><br>' +
			'<img src="' + mapImg + '">' +
			'<i class="img-star-40"></i><br><br>' +
			'<span class="text-score">6.9</span><span> / 10 分</span>' +
		'</div>');
	// google map api calling

	$(".map-preview").on('click', function() {
		$("#gmapModal").modal('show');
	});

})($);
