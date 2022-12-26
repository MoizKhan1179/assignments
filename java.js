let products = [
    ["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91eKBnAUOKL._AC_UY218_.jpg","Just Cause 4 Standard Edition (PS4)","ESRB Rating: Mature | Dec 4, 2018 | by Square Enix",5.5,5000],["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81N7rw1oHYL._AC_UY218_.jpg","ASSASSIN'S CREED MIRAGE - DELUXE EDITION, PLAYSTATION 4","Dec 31, 2023 | by Ubisoft",4.5,59.99],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/814seFZKh+L._AC_UY218_.jpg","Assassin's Creed Odyssey Standard Edition - Xbox One","ESRB Rating: Mature | Oct 5, 2018 | by Ubisoft",7.5,3500],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81MztoQMa8L._AC_UY218_.jpg","Assassin's Creed Origins - Xbox One Standard Edition","ESRB Rating: Mature | Oct 27, 2017 | by Ubisoft",9.5,8500],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81fY6aXqrtL._AC_UY218_.jpg","Mortal Kombat 11 (PS4)","ESRB Rating: Mature | Apr 23, 2019 | by WARNER BROS",8.8,7600],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Xl8zFXceS._AC_UY218_.jpg","Mortal Kombat XL (PS4)","ESRB Rating: Mature | Apr 7, 2015 | by Warner Bros Games Interactive",7.9,8000],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81dZvcAh+LS._AC_UY218_.jpg","Call of Duty: Black Ops Cold War (PS4)","ESRB Rating: Mature | Nov 13, 2020 | by ACTIVISION",6.9,9000],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91Wjtmyrg9L._AC_UY218_.jpg","Call of Duty: WWII (PS4)","ESRB Rating: Mature | Nov 3, 2017 | by ACTIVISION",7.5,6500],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71jA11aa56L._AC_UY218_.jpg","PLAYERUNKNOWN'S BATTLEGROUNDS - PlayStation 4","ESRB Rating: Teen | Dec 7, 2018 | by PlayStation",7.8,6900],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/610b1Sw9hGL._AC_UY218_.jpg","Battlefield V - PlayStation 4","ESRB Rating: Mature | Nov 20, 2018 | by Electronic Arts",9.9,8900],
    ["https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Os+3azm8L._AC_UY218_.jpg","FIFA 23 - PlayStation 4","ESRB Rating: Everyone | Sep 30, 2022 | by Electronic Arts",10,15000]
];

// document.write(`<img src='${products[0][0]}'> <h1>${products[0][1]}</h1> <h3>${products[0][2]}</h3> <div>${products[0][3]}</div> <div>${products[0][4]}</div>`)

for(i=0; i < products.length; i++ ){
    document.write
    (`<div class=container>
    <img src='${products[i][0]}' class=img1>
    <div class=main> 
    <h1 class=img2>${products[i][1]}</h1>
    <h3 class=img3>${products[i][2]}</h3>
    <div class=img4>${products[i][3]}</div>
     <div class=img5>${products[i][4]}</div>
     </div>
     </div>`)

}