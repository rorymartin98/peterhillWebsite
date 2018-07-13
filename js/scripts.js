/* Scripts  */

<!--

    function scrollFunction() {
        window.onbeforeunload = function () {
        window.scrollTo(0,0);
        
        
        window.onscroll = function() {
            headerFloat();
        }
        
        var header = document.getElementById("h_Container");
        var sticky = header.offsetTop;

        function headerFloat() {
            if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            }
            else {
                header.classList.remove("sticky");
            }
        }
    }
-->