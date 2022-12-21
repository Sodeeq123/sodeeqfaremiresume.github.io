const moveToContactDetails =()=>{
    const pageElement = document.getElementById("Contact");
    window.scrollTo({top:  pageElement.offsetTop, behavior: 'smooth'});
}

const moveToAbout = () =>{
    const pageElement = document.getElementById("Skills");
    window.scrollTo({top:  pageElement.offsetTop, behavior: 'smooth'});
}

const moveToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
}
