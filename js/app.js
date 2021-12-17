//アルバムデータの作成
let album = [
    {src: 'photo/1.jpg', msg: '松尾芭蕉発見！'},
    {src: 'photo/2.jpg', msg: '景色が綺麗だった！'},
    {src: 'photo/3.jpg', msg: '蕎麦屋で昼食'},
    {src: 'photo/4.jpg', msg: '松島に行った'},
    {src: 'photo/5.jpg', msg: 'カフェで休憩'}
];

//最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);


let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++){
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

thumbFlame.addEventListener('click', function(event) {
    if(event.target.src){
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});