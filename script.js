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

    document.body.innerHTML = `
        <div class="document-page">

            <h1>${documentType}</h1>

            <p>Enter the details to generate your legal document.</p>

            <form id="documentForm">

                <label>Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" required>

                <label>Address</label>
                <textarea id="address" placeholder="Enter your address" required></textarea>

                <label>Document Details</label>
                <textarea id="details" placeholder="Enter the required details" required></textarea>

                <button type="submit">Generate Document</button>

            </form>

            <div id="result"></div>

        </div>
    `;

    document.getElementById("documentForm").addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const address = document.getElementById("address").value;
        const details = document.getElementById("details").value;

        document.getElementById("result").innerHTML = `
            <h2>Generated ${documentType}</h2>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Address:</strong> ${address}</p>

            <p><strong>Details:</strong> ${details}</p>

            <hr>

            <p>
                This document has been prepared based on the information provided.
            </p>

            <button onclick="window.print()">Print / Save as PDF</button>
        `;

    });
}
