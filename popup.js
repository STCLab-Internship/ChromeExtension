/* popup */
let ApplyButton = document.getElementById("Apply");
let CancelButton = document.getElementById("Cancel");

// 입력받은 tenantKey input태그 저장
chrome.storage.local.get("tenantKey",({tenantKey}) => {
  if (tenantKey) {
    document.getElementById('tenantID').value = tenantKey;
  }
});

// apply 버튼클릭 이벤트 등록
ApplyButton.addEventListener("click", async () => {
  var tenantID = document.getElementById('tenantID').value;

  if (tenantID != "") {
    // 사용자 입력 값 tenantKey set
    chrome.storage.local.set({ tenantKey: tenantID }, () => {
     console.log("set tenantID : " + tenantID);
    });

    alert("It will be applied when you refresh - " + tenantID);
    
    // 팝업 창 닫기
    const popupViews = chrome.extension.getViews({ type: "popup" });
    if (popupViews && popupViews.length > 0) {
      popupViews[0].close();
    }

  }
  else {
    alert("Please enter your tenant ID.");
  }
});

// cancel 버튼클릭 이벤트 등록
CancelButton.addEventListener("click", async () => {
  document.getElementById('tenantID').value = "";

  // 사용자 입력 값 tenantKey reset
  chrome.storage.local.set({ tenantKey: "" }, () => {
   console.log("reset tenantID");
  });

  alert("It will be reset when you refresh.");

  // 팝업 창 닫기
  const popupViews = chrome.extension.getViews({ type: "popup" });
  if (popupViews && popupViews.length > 0) {
    popupViews[0].close();
  }
});

