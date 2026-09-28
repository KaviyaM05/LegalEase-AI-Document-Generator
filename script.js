document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {

        document.body.innerHTML = `
            <div class="document-page">
                <h1>Choose Your Document</h1>
                <p>Select the type of legal document you want to create.</p>

                <div class="document-options">
                    <button onclick="selectDocument('Rental Agreement')">
                        Rental Agreement
                    </button>

                    <button onclick="selectDocument('Leave and License Agreement')">
                        Leave & License
                    </button>

                    <button onclick="selectDocument('Affidavit')">
                        Affidavit
                    </button>

                    <button onclick="selectDocument('Legal Notice')">
                        Legal Notice
                    </button>
                </div>
            </div>
        `;

    });

});

function selectDocument(documentType) {
    alert("You selected: " + documentType);
}
