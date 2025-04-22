
// Get all the images
image_array = [
    'weed1.png',
'weed2.png',
'weed3.png',
'weed4.png',
'weed5.png',
'weed6.png',
'weed7.png',
'weed8.png',
'weed9.png',
'weed10.png',   
'weed11.png',
'weed12.png',
'weed13.png',
'weed14.png',
'weed15.png',
'weed16.png',
'weed17.png',
'weed18.png',
'weed19.png',
'weed20.png',
'weed21.png',
'weed22.png',
'weed23.png',
'weed24.png',
'weed25.png',
'weed26.png',
'weed27.png',
'weed28.png',
'weed29.png',
'weed30.png',
'weed31.png',
'weed32.png',
'weed33.png',
'weed34.png'
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
  }