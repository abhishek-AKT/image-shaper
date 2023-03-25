const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const popupBtn = document.getElementById('popup-btn');
const popupOverlay = document.getElementById('popup-overlay');
const closeBtn = document.getElementById('close-btn');


imageInput.addEventListener('change', function () {
  const file = this.files[0];

  const reader = new FileReader();


  reader.onload = function (e) {
    document.getElementById('img').style.backgroundImage = `url("${e.target.result}")`;

  };

  const a = reader.readAsDataURL(file);
  popupBtn.click();
});

popupBtn.addEventListener('click', function () {
  popupOverlay.style.display = 'block';
  popup_images()
});

closeBtn.addEventListener('click', function () {
  popupOverlay.style.display = 'none';
});


function popup_images() {
  const array = document.getElementsByClassName('images');
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', () => {
      array[i].style.webkitmask = 'url("./asset/user_image_frame_1.png")';
      document.getElementById('img').style.webkitMask = `url("./asset/user_image_frame_${i + 1}.png")  center/contain no-repeat`;
      document.getElementById('img').style.webkitMaskSize = `100%`;
    })
  }
}