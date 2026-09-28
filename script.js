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
            <input id="rent" type="text"
                placeholder="Enter monthly rent">

            <label>Agreement Duration</label>
            <input id="duration" type="text"
                placeholder="Example: 11 months">

            <label>Security Deposit</label>
            <input id="deposit" type="text"
                placeholder="Enter security deposit">
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

    let content = "";


    if (documentType === "Rental Agreement") {

        const tenant = document.getElementById("tenantName").value;
        const landlord = document.getElementById("landlordName").value;
        const property = document.getElementById("propertyAddress").value;
        const rent = document.getElementById("rent").value;
        const duration = document.getElementById("duration").value;
        const deposit = document.getElementById("deposit").value;

        if (!tenant || !landlord || !property ||
            !rent || !duration || !deposit) {

            alert("Please fill in all the details.");
            return;
        }

        content = `
            <h2>Rental Agreement Details</h2>

            <p><strong>Tenant:</strong> ${tenant}</p>

            <p><strong>Landlord:</strong> ${landlord}</p>

            <p><strong>Property Address:</strong> ${property}</p>

            <p><strong>Monthly Rent:</strong> ${rent}</p>

            <p><strong>Agreement Duration:</strong> ${duration}</p>

            <p><strong>Security Deposit:</strong> ${deposit}</p>
        `;

    } else if (documentType === "Leave and License Agreement") {

        const licensor = document.getElementById("licensorName").value;
        const licensee = document.getElementById("licenseeName").value;
        const property = document.getElementById("propertyAddress").value;
        const period = document.getElementById("period").value;
        const fee = document.getElementById("fee").value;

        if (!licensor || !licensee || !property ||
            !period || !fee) {

            alert("Please fill in all the details.");
            return;
        }

        content = `
            <h2>Leave & License Details</h2>

            <p><strong>Licensor:</strong> ${licensor}</p>

            <p><strong>Licensee:</strong> ${licensee}</p>

            <p><strong>Property Address:</strong> ${property}</p>

            <p><strong>License Period:</strong> ${period}</p>

            <p><strong>License Fee:</strong> ${fee}</p>
        `;

    } else if (documentType === "Affidavit") {

        const name = document.getElementById("declarantName").value;
        const address = document.getElementById("address").value;
        const purpose = document.getElementById("purpose").value;
        const statement = document.getElementById("statement").value;

        if (!name || !address || !purpose || !statement) {

            alert("Please fill in all the details.");
            return;
        }

        content = `
            <h2>Affidavit Details</h2>

            <p><strong>Declarant:</strong> ${name}</p>

            <p><strong>Address:</strong> ${address}</p>

            <p><strong>Purpose:</strong> ${purpose}</p>

            <p><strong>Statement:</strong></p>

            <p>${statement}</p>
        `;

    } else if (documentType === "Legal Notice") {

        const sender = document.getElementById("senderName").value;
        const receiver = document.getElementById("receiverName").value;
        const address = document.getElementById("address").value;
        const subject = document.getElementById("subject").value;
        const notice = document.getElementById("noticeDetails").value;

        if (!sender || !receiver || !address ||
            !subject || !notice) {

            alert("Please fill in all the details.");
            return;
        }

        content = `
            <h2>Legal Notice Details</h2>

            <p><strong>Sender:</strong> ${sender}</p>

            <p><strong>Receiver:</strong> ${receiver}</p>

            <p><strong>Address:</strong> ${address}</p>

            <p><strong>Subject:</strong> ${subject}</p>

            <p><strong>Notice Details:</strong></p>

            <p>${notice}</p>
        `;
    }


    document.getElementById("result").innerHTML = `

        <div class="legal-document">

            <h1>${documentType}</h1>

            <hr>

            ${content}

            <h2>TERMS AND CONDITIONS</h2>

            <ol>
                <li>
                    The information provided by the user
                    should be accurate.
                </li>

                <li>
                    The parties should comply with the
                    applicable terms and conditions.
                </li>

                <li>
                    Any changes should be mutually agreed
                    upon by the concerned parties.
                </li>

                <li>
                    The completed document should be
                    retained for record purposes.
                </li>
            </ol>

            <h2>DECLARATION</h2>

            <p>
                This document has been generated based on
                the information provided by the user.
            </p>

            <br><br>

            <div class="signatures">

                <div>
                    ______________________<br>
                    Signature
                </div>

                <div>
                    ______________________<br>
                    Witness / Other Party
                </div>

            </div>

            <hr>

            <p class="disclaimer">

                <strong>Disclaimer:</strong>
                This document is generated for educational
                and informational purposes only and is not
                a substitute for professional legal advice.

            </p>

        </div>

        <br>

        <button onclick="window.print()">
            Print / Save as PDF
        </button>

    `;
}
