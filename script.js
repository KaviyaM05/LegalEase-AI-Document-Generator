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

    let fields = "";

    if (documentType === "Rental Agreement") {

        fields = `
    <label>Tenant Name</label>
    <input id="tenantName" type="text"
        placeholder="Enter tenant name">

    <label>Landlord Name</label>
    <input id="landlordName" type="text"
        placeholder="Enter landlord name">

    <label>Property Address</label>
    <textarea id="propertyAddress"
        placeholder="Enter property address"></textarea>

    <label>Monthly Rent</label>
    <input id="monthlyRent" type="number"
        placeholder="Enter monthly rent">

    <label>Security Deposit</label>
    <input id="deposit" type="number"
        placeholder="Enter security deposit">

    <label>Rental Period</label>
    <input id="rentalPeriod" type="text"
        placeholder="Example: 11 months">

    <button onclick="generateDocument('Rental Agreement')">
        Generate Document
    </button>
`;
          
    

    } else if (documentType === "Leave and License Agreement") {

        fields = `
            <label>Licensor Name</label>
            <input id="licensorName" type="text"
                placeholder="Enter licensor name">

            <label>Licensee Name</label>
            <input id="licenseeName" type="text"
                placeholder="Enter licensee name">

            <label>Property Address</label>
            <textarea id="propertyAddress"
                placeholder="Enter property address"></textarea>

            <label>License Period</label>
            <input id="period" type="text"
                placeholder="Example: 11 months">

            <label>License Fee</label>
            <input id="fee" type="text"
                placeholder="Enter license fee">
        `;

    } else if (documentType === "Affidavit") {

        fields = `
            <label>Declarant Name</label>
            <input id="declarantName" type="text"
                placeholder="Enter declarant name">

            <label>Address</label>
            <textarea id="address"
                placeholder="Enter address"></textarea>

            <label>Purpose</label>
            <input id="purpose" type="text"
                placeholder="Enter purpose of affidavit">

            <label>Statement</label>
            <textarea id="statement"
                placeholder="Enter your statement"></textarea>
        `;

    } else if (documentType === "Legal Notice") {

        fields = `
            <label>Sender Name</label>
            <input id="senderName" type="text"
                placeholder="Enter sender name">

            <label>Receiver Name</label>
            <input id="receiverName" type="text"
                placeholder="Enter receiver name">

            <label>Address</label>
            <textarea id="address"
                placeholder="Enter receiver address"></textarea>

            <label>Notice Subject</label>
            <input id="subject" type="text"
                placeholder="Enter notice subject">

            <label>Notice Details</label>
            <textarea id="noticeDetails"
                placeholder="Enter notice details"></textarea>
        `;
    }


    document.body.innerHTML = `

        <div class="document-page">

            <h1>${documentType}</h1>

            <p>Enter the details to generate your legal document.</p>

            <div class="form-container">

                ${fields}

                <br>

                <button onclick="generateDocument('${documentType}')">
                    Generate Document
                </button>

            </div>

            <div id="result"></div>

        </div>
    `;
}


function generateDocument(documentType) {

    const tenantName = document.getElementById("tenantName")?.value;
    const landlordName = document.getElementById("landlordName")?.value;
    const propertyAddress = document.getElementById("propertyAddress")?.value;
    const monthlyRent = document.getElementById("monthlyRent")?.value;
    const rentalPeriod = document.getElementById("rentalPeriod")?.value;
    const deposit = document.getElementById("deposit")?.value;

    if (!tenantName || !landlordName || !propertyAddress ||
        !monthlyRent || !rentalPeriod || !deposit) {

        alert("Please fill in all the details.");
        return;
    }

    document.getElementById("result").innerHTML = `

        <div class="legal-document">

            <h1>RENTAL AGREEMENT</h1>

            <hr>

            <h2>PARTIES</h2>

            <p>
                This Rental Agreement is made between
                <strong>${landlordName}</strong>
                (Landlord) and
                <strong>${tenantName}</strong>
                (Tenant).
            </p>

            <h2>PROPERTY</h2>

            <p>
                The property covered under this agreement is located at:
            </p>

            <p><strong>${propertyAddress}</strong></p>

            <h2>RENT</h2>

            <p>
                The monthly rent agreed between the parties is
                <strong>₹${monthlyRent}</strong>.
            </p>

            <h2>AGREEMENT PERIOD</h2>

            <p>
                The duration of this rental agreement is
                <strong>${rentalPeriod}</strong>.
            </p>

            <h2>SECURITY DEPOSIT</h2>

            <p>
                The tenant shall provide a security deposit of
                <strong>₹${deposit}</strong>.
            </p>

            <h2>TERMS AND CONDITIONS</h2>

            <ol>
                <li>The tenant shall use the property for lawful purposes.</li>

                <li>
                    The tenant shall pay the agreed rent on time.
                </li>

                <li>
                    The property shall be maintained in reasonable condition.
                </li>

                <li>
                    Any changes to this agreement should be mutually agreed
                    upon by both parties.
                </li>

                <li>
                    Both parties should retain a copy of this agreement.
                </li>
            </ol>

            <h2>DECLARATION</h2>

            <p>
                Both parties confirm that the information provided
                for this draft agreement is accurate to the best
                of their knowledge.
            </p>

            <br><br>

            <div class="signatures">

                <div>
                    __________________________<br>
                    Landlord Signature<br>
                    ${landlordName}
                </div>

                <div>
                    __________________________<br>
                    Tenant Signature<br>
                    ${tenantName}
                </div>

            </div>

            <hr>

            <p class="disclaimer">
                <strong>Disclaimer:</strong>
                This document is a generated draft for educational
                and informational purposes. It should be reviewed
                by a qualified legal professional before actual use.
            </p>

        </div>

        <button onclick="window.print()">
            Print / Save as PDF
        </button>

    `;
}

