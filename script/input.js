function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        document.forms["myForm"]["fname"].title="Enter the name";
        return false;
    }
    if (true) {
        function resetTooltip() {
            document.forms["myForm"]["fname"].title=""
        }

    }
}



