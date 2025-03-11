document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

function analyzeContent() {
    let textInput = document.getElementById("textInput").value;
    let imageInput = document.getElementById("imageInput").files[0];
    let resultDiv = document.getElementById("result");
    let loadingDiv = document.getElementById("loading");
    let imagePreview = document.getElementById("imagePreview");

    // Show loading animation
    resultDiv.innerHTML = "";
    loadingDiv.classList.remove("hidden");

    // Show image preview
    if (imageInput) {
        let reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" width="200px">`;
        };
        reader.readAsDataURL(imageInput);
    } else {
        imagePreview.innerHTML = "";
    }

    setTimeout(() => {
        loadingDiv.classList.add("hidden");

        // Random AI-like responses for text analysis
        let textResponses = [
            "✅ No harmful content detected.",
            "⚠️ Some words may indicate cyberbullying.",
            "❌ High risk of cyberbullying detected!",
            "🔍 Mild negative sentiment found.",
            "👍 Positive and friendly text detected.",
            "🚨 Alert: Offensive language identified!"
        ];

        // Random AI-like responses for image analysis
        let imageResponses = [
            "📷 No harmful images detected.",
            "🚸 Image may contain inappropriate content.",
            "❗ Suspicious image detected!",
            "✅ Image appears to be safe.",
            "⚠️ Image could be offensive to some users."
        ];

        let finalTextResponse = textInput.trim() !== "" ? textResponses[Math.floor(Math.random() * textResponses.length)] : "";
        let finalImageResponse = imageInput ? imageResponses[Math.floor(Math.random() * imageResponses.length)] : "";

        resultDiv.innerHTML = finalTextResponse + "<br>" + finalImageResponse;
    }, 2000);
}
