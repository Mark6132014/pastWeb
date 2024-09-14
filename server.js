/* Variables for loading the website */
/* Loadi'n the nostalgia */
let task = document.querySelector("#task");
        let getting = document.querySelector("#getting");
        let times = 0;
        let getSiteLimit = 3;
        /* Variables for the Info */
        let Info = location.hash;
        let OpenWith;
        let year;
        let url;
        if (Info.includes("theoldnet")) {
            OpenWith = Info.substring(1, 10);
            year = Info.substring(11, 15);
            url = Info.slice(20);
            console.log(OpenWith);
            console.log(year);
            console.log(url);
        }
        if (Info.includes("archive")) {
            OpenWith = Info.substring(1, 8);
            year = Info.substring(9, 13);
            url = Info.slice(18);
            console.log(OpenWith);
            console.log(year);
            console.log(url);
        }
        function load() {
            times += 1;
            if (times > getSiteLimit) {
                task.innerHTML = "Rendering...";
                stopRunning();
                if (OpenWith == "theoldnet") {
                    location.assign(`https://theoldnet.com/get?url=${url}&year=${year}&scripts=false&decode=false`);
                }
                if (OpenWith == "archive") {
                    alert("This is in October 17. I can't fix it.");
                    alert("Also, If Archive.org says that there are no captures. You can't see the past.")
                    location.assign(`https://web.archive.org/web/${year}1017110828/${url}`);
                }
            }
            else {
                task.innerHTML = "Redirecting.";
                setTimeout(() => {
                    task.innerHTML = "Redirecting..";
                    setTimeout(() => {
                        task.innerHTML = "Redirecting..."
                    }, 300);
                }, 300);
            }
        }
        function getInfo() {
            getting.innerHTML = "Getting Info...";
            setTimeout(() => {
                getting.innerHTML = "Loading URL...";
                setTimeout(() => {
                    getting.innerHTML = "Getting year...";
                    setTimeout(() => {
                        getting.innerHTML = "Loading opening website...";
                    }, 2100);
                }, 1300);
            }, 600);
        }
        let loadFunc = setInterval(load, 700);
        function stopRunning() {
            clearInterval(loadFunc);
        }
        getInfo();