document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {

        document.body.innerHTML = `
            <div class="document-page">
                <h1>Choose Your Document</h1>
                <p>Select the type of legal document you want to create.</p>

                <div class="document-options">

                    <button onclick="showForm('Rental Agreement')">
                        Rental Agreement
                    </button>

                    <button onclick="showForm('Leave and License Agreement')">
                        Leave & License
                    </button>

                    <button onclick="showForm('Affidavit')">
                        Affidavit
                    </button>

                    <button onclick="showForm('Legal Notice')">
                        Legal Notice
                    </button>

                </div>
            </div>
        `;

    });

});


function showForm(documentType) {

    document.body.innerHTML = `
        <div class="document-page">

            <h1>${documentType}</h1>

            <p>Enter the details to generate your legal document.</p>

            <div class="form-container">

                <label>Full Name</label>
                <input id="fullName" type="text"
                    placeholder="Enter your full name">

                <label>Address</label>
                <textarea id="address"
                    placeholder="Enter your address"></textarea>

                <label>Document Details</label>
                <textarea id="details"
                    placeholder="Enter the required details"></textarea>

                <button onclick="generateDocument('${documentType}')">
                    Generate Document
                </button>

            </div>

            <div id="result"></div>

        </div>
    `;
}


function generateDocument(documentType) {

    const name = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const details = document.getElementById("details").value;

    if (!name || !address || !details) {
        alert("Please fill in all the details.");
        return;
    }

    document.getElementById("result").innerHTML = `

        <div class="legal-document">

            <h1>${documentType}</h1>

            <hr>

            <h2>PARTIES</h2>

            <p>
                This document is prepared for
                <strong>${name}</strong>,
                residing at <strong>${address}</strong>.
            </p>

            <h2>DOCUMENT DETAILS</h2>

            <p>${details}</p>

            <h2>TERMS AND CONDITIONS</h2>

            <ol>
                <li>Both parties agree to provide accurate information.</li>

                <li>
                    The parties agree to comply with the applicable
                    terms and conditions of this agreement.
                </li>

                <li>
                    Any changes to this document should be mutually
                    agreed upon by the concerned parties.
                </li>

                <li>
                    The parties should retain a copy of the completed
                    document for their records.
                </li>
            </ol>

            <h2>DECLARATION</h2>

            <p>
                The information provided by the user is represented
                in this document for the purpose of generating a
                draft legal document.
            </p>

            <br><br>

            <div class="signatures">

                <div>
                    ______________________<br>
                    Party / Tenant Signature
                </div>

                <div>
                    ______________________<br>
                    Party / Landlord Signature
                </div>

            </div>

            <hr>

            <p class="disclaimer">
                <strong>Disclaimer:</strong>
                This document is generated for educational and
                informational purposes. It is not a substitute for
                professional legal advice.
            </p>

        </div>

        <button onclick="window.print()">
            Print / Save as PDF
        </button>

    `;
}
