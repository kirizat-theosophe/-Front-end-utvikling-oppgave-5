const inpTall = prompt("Oppgi et tall mellom 1 og 100");
        const tall = Number(inpTall);

        if(tall < 50){
            document.write("Tallet er lite");
        } else if (tall > 50){
            document.write("Tallet er stort");
        } else {
            document.write("Tallet er akkurat midt på");
        }