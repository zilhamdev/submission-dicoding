        //Get the button:
        mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        $darkMode = false;
        const defaultTheme = "light";
        let styles = document.getElementById("style");
        let mode = document.getElementsByClassName("closemode");
        if (localStorage.getItem("defaultTheme") == "dark") {
            toggleDarkMode();
            
        }

        function toggleDarkMode() {
            if ($darkMode == false) {
                styles.setAttribute("href", "assets/css/darkstyle.css")
                localStorage.setItem('defaultTheme', 'dark');
                $darkMode = true;
            } else {
                styles.setAttribute("href", "assets/css/style.css")
                localStorage.setItem('defaultTheme', 'light');
                $darkMode = false;
            }
        }