function copy() {
    var copy_text = document.getElementById("copy1");
    copy_text.select();

    navigator.clipboard.write(copy_text.value);

    alert(copy_text + "copied");
}