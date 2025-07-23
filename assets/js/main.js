// JSON dosyasını oku
/*
fetch('assets/json/veri.json')
    .then(response => response.json())
    .then(data => {

        const leftDiv = document.querySelector('.left');
        const rightDiv = document.querySelector('.right');

        data.forEach((item, index) => {
            const calculated = dailyChangeExchange(item, index);
            const card = `
                <div class="item">
                     <div class="info">
                          <img class="image" src="assets/img/${item.Code.toLowerCase()}.png" alt="${item.Code}">
                              <div class="text">

                                    <span class="change">
                                    <span class="code">${item.Code}&nbsp;&nbsp;&nbsp;&nbsp;<span class="daily-value ${calculated.cssClass}">${calculated.dailyChange}</span></span></span>
                                     <span class="name">${item.Name}</span>
                                 </div>
                    </div>
                    <div class="rates">
                        <div class="rate-group">
                              <span class="text">Alış</span>
                              <span class="number">${item.BuyingPrice.toFixed(2)}</span>
                        </div>
                        <div class="rate-group">
                            <span class="text">Satış</span>
                              <span class="number">${item.SellingPrice.toFixed(2)}</span>
                        </div>
                     </div>
                 </div> `;

            // ilk 3 item sola, kalanları sağa ekle
            if (index < 3) {
                leftDiv.innerHTML += card;
            } else {
                rightDiv.innerHTML += card;
            }
        });
    });

function dailyChangeExchange(item, index) {
    const dailyChange = item.DailyChangePercent;
    const formatted = dailyChange.toFixed(2);//Math.abs(dailyChange).toFixed(2); ekleyerekk -y kadldıraibliirm
    let dailyFormated = '';

    let cssClass = '';
    if (dailyChange > 0) {
        cssClass = 'positive';
        dailyFormated = '⏶ %' + `+${formatted}`;
    } else if (dailyChange < 0) {
        cssClass = 'negative';
        dailyFormated = '⏷' + `${formatted}`;
    } else {
        cssClass = 'neutral';
        dailyFormated = `${formatted}`;
    }

    return {
        dailyChange: dailyFormated,
        cssClass: cssClass
    };
}*/