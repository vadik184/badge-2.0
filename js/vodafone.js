const vodafoneList = document.querySelector(".vodafone-list");
console.log(vodafoneList);
console.log(tariffsVodafone);
let internetSum = null;
let minutesOther = null;
let minutesWorld = null;
vodafoneList.innerHTML = tariffsVodafone
  .map((tariff) => {
    if (!tariff.filling.internet.amount) {
      internetSum =
        '<svg class="infinity"><use href="../img/symbol-defs.svg#icon--1"></use></svg>';
    } else {
      internetSum = tariff.filling.internet.amount;
    }
    if (!tariff.filling.minuteOther.amount) {
      minutesOther =
        '<svg class="infinity"><use href="../img/symbol-defs.svg#icon--1"></use></svg>';
    } else {
      minutesOther = `<p class="mid-a">${tariff.filling.minuteOther.amount}<span class="minutes">хв</span></p>`;
    }

    if (!tariff.filling.minuteWorld) {
      minutesWorld = `<li class="circle-none"></li>`;
    } else {
      minutesWorld = `<li class="circle"><p class="mid-a">${tariff.filling.minuteWorld}<span class="minutes">хв</span></p><p class="small">за кордон<br>16 країн</p></li>`;
    }

    return `<li>
                <div class="tarif-container">
                    <div class="name-plus-premium">
                   <div class="title"><h1 class="tarif-title">RED</h1>
                <h1 class="tarif-name">${tariff.name}</h1></div>
                <div class="premium-box">
                    <div class="name-premium"><p class="premium-title">премії</p></div>
                                        <p class="main-premium-number"><span class="main-premium">${tariff.premium.main}</span> грн</p>
                    <div class="second-premium">
                        <p class="migration-title">за міграцію</p>
                        <p class="migration-premium-number"><span class="migration-premium">${tariff.premium.migration}</span> грн</p>

                    </div>
                </div></div>
                   <div class="divider"></div>
                   <ul class="tarif-list">
                    <li class="circle"><p class="big yellow">${internetSum}</p><p class="mid">ГБ</p></li>
                    <li class="circle">${minutesOther}<p class="small">на ніші<br>оператори</p></li>
                    <li class="circle">
                        <svg class="infinity">
                        <use href="../img/symbol-defs.svg#icon--1"></use>
                    </svg>
                <p class="small">в мережі<br>Vodafone</p></li>
                    <li class="circle"><p class="mid-b">${tariff.filling.sms}</p><p class="mid tinny-text">SMS</p></li>
               ${minutesWorld}
                    </ul>
                   <div class="red-fild">
                    <h2 class="first-mounth">перші <span class="yellow">${tariff.disconteMonth}</span> місяців<br>по <span class="yellow mid-b">${tariff.discont}</span> грн</h2>
                <h1 class="price"><span class="super">${tariff.price}</span> грн/міс</h1>   
                </div>
                </div>
            </li>`;
  })
  .join("");
