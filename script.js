// Өз сайттарыңның URL мекенжайлары

const links = {

tilda: "https://yesterday-absorbed-skirret.tilda.ws/page150460753.html",

figma: "https://www.figma.com/design/0oOILpFqOk3foB5SI3vbop/Untitled?node-id=0-1&t=kaZSRdjr89Wqok8Z-1",

tildaPhoto: "https://tilda.cc",

figmaPhoto: "https://www.figma.com",

email: "mailto:yourmail@gmail.com",

review: "https://example.com"
};
const tildaLink = document.getElementById("https://yesterday-absorbed-skirret.tilda.ws/page150460753.html");

const figmaLink = document.getElementById("https://www.figma.com/design/0oOILpFqOk3foB5SI3vbop/Untitled?node-id=0-1&t=kaZSRdjr89Wqok8Z-1");

const tildaPhotoLink = document.getElementById("https://avatars.mds.yandex.net/i?id=5d56b950c0de5aeb87771f2f0100d7498b8e9bd6-4946540-images-thumbs&n=13");

const figmaPhotoLink = document.getElementById("https://avatars.mds.yandex.net/i?id=ad43f463ab0f6be99c1b99e3974a6109e7662b1b-4457085-images-thumbs&n=13");

const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", function() {
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const result = document.getElementById("result");

if (email === "" || message === "") {
    result.textContent = "Барлық өрісті толтыр!";
} else {
    result.textContent = "Пікіріңе рақмет!";

    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
});

// URL мекенжайларын орнату

tildaLink.href = links.tilda;

figmaLink.href = links.figma;

tildaPhotoLink.href = links.tildaPhoto;

figmaPhotoLink.href = links.figmaPhoto;

emailLink.href = links.email;

reviewLink.href = links.review;