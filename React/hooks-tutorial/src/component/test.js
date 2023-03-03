$.ajax({
  type: "POST",
  url: "/sidebar",
  success: function (result) {
    // alert("통신 성공.");
    // console.log(result);

    $("#sidebar").html(makeSidebar(result, 0, 2));
  },
  error: function (XXLHttpRequest, textStatus, errorThrown) {
    alert("메뉴 항목을 읽어 오는데 실패 하였습니다.");
  },
});

// 제귀를 이용한 <ol>문 만들기
function makeSidebar(list, urp, fontSize) {
  let olStr = "";

  if (fontSize > 5) {
    fontSize = 5;
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].uprMenuId == urp) {
      olStr += "<li><h" + fontSize + '><a href="' + list[i].url + '">' + list[i].menuNm + "</a></h" + fontSize + "></li>" +
        makeSidebar(list, list[i].menuId, fontSize + 1);
    }
  }

  if (olStr != "") {
    return "<ol>" + olStr + "</ol>";
  }
  return "";
}
