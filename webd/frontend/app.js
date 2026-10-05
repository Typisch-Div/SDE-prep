let smallimages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallimages.length;i++){
    smallimages[i].src="assets/spiderman_img.png";
    console.log(`Value of ${i} is changed`);
}
