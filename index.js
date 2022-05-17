const youtube = "https://www.youtube.com/channel/UCpY7wsjsoX1kTYPysovoSSg";
    const patreon = "https://www.patreon.com/wafoencom";
    const color = "#2a9df4";
    const bgVideo = document.getElementById("bg-video");
    const openTime = new Date(2022,6,23,12,0,0).getTime();
    const userLang = navigator.language || navigator.userLanguage;
    const times = [2592000,604800,86400,3600,60,1];
    var lang = userLang.substring(0, 2);
    let elements = [];
    const translate = {
      "description": {
        "tr": `Çok yakında hizmetteyiz!<br /> Bizi <a style="color:${color}; font-weight: 500;" href='${youtube}'>YouTube</a>'da takip et ve eğer istersen <a style="color:${color}; font-weight: 500;" href="${patreon}">Patreon</a> üzerinden bağış yap!`,
        "en": `We will be at your service very soon!<br /> Follow us on <a style="color:${color}; font-weight: 500;" href='${youtube}'>YouTube</a> and if you want donate to us on <a style="color:${color}; font-weight: 500;" href='${patreon}'>Patreon</a>!`,
        "jp": "間もなくご利用いただけます。"
      },
      "month": {
        "tr": "Ay",
        "en": "Month",
        "jp": "月間"
      },
      "week": {
        "tr": "Hafta",
        "en": "Week",
        "jp": "週"
      },
      "day": {
        "tr": "Gün",
        "en": "Day",
        "jp": "日"
      },
      "hour": {
        "tr": "Saat",
        "en": "Hour",
        "jp": "アワー"
      },
      "minute": {
        "tr": "Dakika",
        "en": "Minute",
        "jp": "分"
      },
      "second": {
        "tr": "Saniye",
        "en": "Second",
        "jp": "セカンド"
      }
    }
    if (!Object.keys(translate.month).includes(lang)) lang = "en"
    for (let i in translate)
      document.getElementById(i).parentNode.querySelector(".label").innerHTML = translate[i][lang];

    bgVideo.setAttribute("height", window.innerHeight +"px");
    bgVideo.setAttribute("width", Math.floor(window.innerHeight / 9 * 16 ) + "px");
    
    document.body.click();
    bgVideo.onloadeddata = () => bgVideo.play();
    
    for (let i in translate)
      if (i != "description") 
        elements.push(document.querySelector(`#${i}`))
    
    function updateTime() {
      var timeDiff = Math.floor((openTime - new Date().getTime()) / 1000)
      var timeArray = new Array(6);
      for (let i in times) {
        const time = times[i];
        timeArray[i] = ~~(timeDiff / time);
        timeDiff -= timeArray[i] * time;
      }
      elements.map((element,index) => element.innerText = String(timeArray[index]).padStart(2, '0'));
    }
    updateTime();
    
    setInterval(updateTime,1000)
