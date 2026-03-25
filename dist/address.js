function openAddressSearch() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 사용자가 주소를 선택했을 때 실행되는 부분
            // data.address에는 전체 주소 정보가 담겨 있어.
            document.getElementById('addressInput').value = data.address;
            console.log("선택된 주소:", data.address);
            localStorage.setItem('destination', data.address)
        }
    }).open();
}

// 현재 위치를 가져오는 함수
function getCurrentLocation() {
    // 1. 브라우저가 위치 서비스를 지원하는지 확인
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // 2. 성공했을 때: 위도(lat)와 경도(lon)를 가져옴
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("내 위도:", lat, "내 경도:", lon);
            alert(`현재 위치 좌표: ${lat}, ${lon}`);
            
            // 나중에 이 좌표를 카카오맵에 던져주면 지도가 그곳으로 이동해!
        }, function(error) {
            // 3. 실패했을 때 (사용자가 거부했거나 오류가 났을 때)
            console.error("위치 정보를 가져오는데 실패했습니다.", error);
            alert("위치 권한을 허용해주세요!");
        });
    } else {
        alert("이 브라우저는 위치 서비스를 지원하지 않습니다.");
    }
}