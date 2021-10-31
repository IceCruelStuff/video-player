const container = document.getElementById("container");

function handleForm(event) {
    event.preventDefault();
}
document.getElementById("input").addEventListener('submit', handleForm);

document.getElementById("input").onsubmit = function() {
    if (document.getElementsByClassName("video-history").length < 1) {
        var element = document.createElement("div");
        element.className = "video-history";
    } else {
        var element = document.getElementsByClassName("video-history")[0];
        element.innerHTML = "";
    }
    var inputUrl = document.getElementById("url").value;
    var video = document.createElement("video");
    video.src = inputUrl;
    video.autoplay = true;
    video.loop = true;
    video.play();
    element.appendChild(video);
    container.appendChild(element);
}
