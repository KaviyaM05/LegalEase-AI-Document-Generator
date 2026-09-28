document.addEventListener("DOMContentLoaded", function () {

    // Get Started button
    const buttons = document.querySelectorAll("button");

    if (buttons.length > 0) {
        buttons[0].addEventListener("click", function () {
            showDocumentSelection();
        });
    }

});


// ==========================================
// DOCUMENT SELECTION
// ==========================================

function showDocumentSelection() {

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
}


// ==========================================
// SHOW FORM
// ==========================================

function showForm(documentType) {

    let fields = "";

    // --------------------------------------
    // RENTAL AGREEMENT
    // --------------------------------------

    if (documentType === "Rental Agreement") {

        fields = `
            <label>Tenant Name</label>

            <input
                id="tenantName"
                type="text"
                placeholder="Enter tenant name"
            >


            <label>Landlord Name</label>

            <input
                id="landlordName"
                type="text"
                placeholder="Enter landlord name"
            >


            <label>Property Address</label>

            <textarea
                id="propertyAddress"
                placeholder="Enter property address"
            ></textarea>


            <label>Monthly Rent</label>

            <input
                id="monthlyRent"
                type="number"
                placeholder="Enter monthly rent"
            >


            <label>Security Deposit</label>

            <input
                id="deposit"
                type="number"
                placeholder="Enter security deposit"
            >


            <label>Rental Period</label>

            <input
                id="rentalPeriod"
                type="text"
                placeholder="Example: 11 months"
            >
        `;
    }


    // --------------------------------------
    // LEAVE AND LICENSE
    // --------------------------------------

    else if (documentType === "Leave and License Agreement") {

        fields = `
            <label>Licensor Name</label>

            <input
                id="licensorName"
                type="text"
                placeholder="Enter licensor name"
            >


            <label>Licensee Name</label>

            <input
                id="licenseeName"
                type="text"
                placeholder="Enter licensee name"
            >


            <label>Property Address</label>

            <textarea
                id="licensePropertyAddress"
                placeholder="Enter property address"
            ></textarea>


            <label>License Period</label>

            <input
                id="licensePeriod"
                type="text"
                placeholder="Example: 11 months"
            >


            <label>License Fee</label>

            <input
                id="licenseFee"
                type="number"
                placeholder="Enter license fee"
            >
        `;
    }


    // --------------------------------------
    // AFFIDAVIT
    // --------------------------------------

    else if (documentType === "Affidavit") {

        fields = `
            <label>Declarant Name</label>

            <input
                id="declarantName"
                type="text"
                placeholder="Enter declarant name"
            >


            <label>Address</label>

            <textarea
                id="affidavitAddress"
                placeholder="Enter address"
            ></textarea>


            <label>Purpose</label>

            <input
                id="purpose"
                type="text"
                placeholder="Enter purpose of affidavit"
            >


            <label>Statement</label>

            <textarea
                id="statement"
                placeholder="Enter your statement"
            ></textarea>
        `;
    }


    // --------------------------------------
    // LEGAL NOTICE
    // --------------------------------------

    else if (documentType === "Legal Notice") {

        fields = `
            <label>Sender Name</label>

            <input
                id="senderName"
                type="text"
                placeholder="Enter sender name"
            >


            <label>Receiver Name</label>

            <input
                id="receiverName"
                type="text"
                placeholder="Enter receiver name"
            >


            <label>Receiver Address</label>

            <textarea
                id="receiverAddress"
                placeholder="Enter receiver address"
            ></textarea>


            <label>Notice Subject</label>

            <input
                id="noticeSubject"
                type="text"
                placeholder="Enter notice subject"
            >


            <label>Notice Details</label>

            <textarea
                id="noticeDetails"
                placeholder="Enter notice details"
            ></textarea>
        `;
    }


    // --------------------------------------
    // DISPLAY FORM
    // --------------------------------------

    document.body.innerHTML = `

        <div class="document-page">

            <h1>${documentType}</h1>

            <p>
                Enter the details to generate your legal document.
            </p>

            <div class="form-container">

                ${fields}

                <br>

                <button onclick="generateDocument('${documentType}')">
                    Generate Document
                </button>

                <button onclick="showDocumentSelection()">
                    Back
                </button>

            </div>

            <div id="result"></div>

        </div>

    `;
}


// ==========================================
// GENERATE DOCUMENT
// ==========================================

function generateDocument(documentType) {


    // ======================================
    // RENTAL AGREEMENT
    // ======================================

    if (documentType === "Rental Agreement") {

        const tenantName =
            document.getElementById("tenantName").value.trim();

        const landlordName =
            document.getElementById("landlordName").value.trim();

        const propertyAddress =
            document.getElementById("propertyAddress").value.trim();

        const monthlyRent =
            document.getElementById("monthlyRent").value.trim();

        const deposit =
            document.getElementById("deposit").value.trim();

        const rentalPeriod =
            document.getElementById("rentalPeriod").value.trim();


        if (
            !tenantName ||
            !landlordName ||
            !propertyAddress ||
            !monthlyRent ||
            !deposit ||
            !rentalPeriod
        ) {

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
                    The property covered under this agreement
                    is located at:
                </p>

                <p>
                    <strong>${propertyAddress}</strong>
                </p>


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

                    <li>
                        The tenant shall use the property only
                        for lawful purposes.
                    </li>

                    <li>
                        The tenant shall pay the agreed rent
                        on time.
                    </li>

                    <li>
                        The property shall be maintained in
                        reasonable condition.
                    </li>

                    <li>
                        Any changes to this agreement should be
                        mutually agreed upon by both parties.
                    </li>

                    <li>
                        Both parties should retain a copy of
                        this agreement.
                    </li>

                </ol>


                <h2>DECLARATION</h2>

                <p>
                    Both parties confirm that the information
                    provided for this draft agreement is accurate
                    to the best of their knowledge.
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

                    This document is a generated draft for
                    educational and informational purposes.
                    It should be reviewed by a qualified legal
                    professional before actual use.

                </p>

            </div>


            <button onclick="window.print()">
                Print / Save as PDF
            </button>

        `;
    }


    // ======================================
    // LEAVE AND LICENSE
    // ======================================

    else if (documentType === "Leave and License Agreement") {

        const licensorName =
            document.getElementById("licensorName").value.trim();

        const licenseeName =
            document.getElementById("licenseeName").value.trim();

        const propertyAddress =
            document.getElementById("licensePropertyAddress").value.trim();

        const licensePeriod =
            document.getElementById("licensePeriod").value.trim();

        const licenseFee =
            document.getElementById("licenseFee").value.trim();


        if (
            !licensorName ||
            !licenseeName ||
            !propertyAddress ||
            !licensePeriod ||
            !licenseFee
        ) {

            alert("Please fill in all the details.");

            return;
        }


        document.getElementById("result").innerHTML = `

            <div class="legal-document">

                <h1>LEAVE AND LICENSE AGREEMENT</h1>

                <hr>


                <h2>PARTIES</h2>

                <p>
                    This Leave and License Agreement is made
                    between
                    <strong>${licensorName}</strong>
                    (Licensor) and
                    <strong>${licenseeName}</strong>
                    (Licensee).
                </p>


                <h2>PROPERTY</h2>

                <p>
                    The licensed property is located at:
                </p>

                <p>
                    <strong>${propertyAddress}</strong>
                </p>


                <h2>LICENSE PERIOD</h2>

                <p>
                    The license period shall be
                    <strong>${licensePeriod}</strong>.
                </p>


                <h2>LICENSE FEE</h2>

                <p>
                    The agreed license fee is
                    <strong>₹${licenseFee}</strong>.
                </p>


                <h2>TERMS AND CONDITIONS</h2>

                <ol>

                    <li>
                        The licensee shall use the property
                        only for lawful purposes.
                    </li>

                    <li>
                        The licensee shall pay the agreed
                        license fee on time.
                    </li>

                    <li>
                        The property shall be maintained
                        properly.
                    </li>

                    <li>
                        The licensee shall comply with the
                        agreed terms of the license.
                    </li>

                </ol>


                <h2>DECLARATION</h2>

                <p>
                    Both parties confirm that the information
                    provided is accurate to the best of their
                    knowledge.
                </p>


                <br><br>


                <div class="signatures">

                    <div>
                        __________________________<br>
                        Licensor Signature<br>
                        ${licensorName}
                    </div>


                    <div>
                        __________________________<br>
                        Licensee Signature<br>
                        ${licenseeName}
                    </div>

                </div>


                <hr>


                <p class="disclaimer">

                    <strong>Disclaimer:</strong>

                    This document is a generated draft for
                    educational and informational purposes.
                    It should be reviewed by a qualified legal
                    professional before actual use.

                </p>

            </div>


            <button onclick="window.print()">
                Print / Save as PDF
            </button>

        `;
    }


    // ======================================
    // AFFIDAVIT
    // ======================================

    else if (documentType === "Affidavit") {

        const declarantName =
            document.getElementById("declarantName").value.trim();

        const address =
            document.getElementById("affidavitAddress").value.trim();

        const purpose =
            document.getElementById("purpose").value.trim();

        const statement =
            document.getElementById("statement").value.trim();


        if (
            !declarantName ||
            !address ||
            !purpose ||
            !statement
        ) {

            alert("Please fill in all the details.");

            return;
        }


        document.getElementById("result").innerHTML = `

            <div class="legal-document">

                <h1>AFFIDAVIT</h1>

                <hr>


                <h2>DECLARANT DETAILS</h2>

                <p>
                    I, <strong>${declarantName}</strong>,
                    residing at
                    <strong>${address}</strong>,
                    hereby make this affidavit.
                </p>


                <h2>PURPOSE</h2>

                <p>
                    This affidavit is prepared for the purpose of
                    <strong>${purpose}</strong>.
                </p>


                <h2>STATEMENT</h2>

                <p>
                    ${statement}
                </p>


                <h2>DECLARATION</h2>

                <p>
                    I declare that the information provided
                    in this affidavit is true and correct to
                    the best of my knowledge and belief.
                </p>


                <br><br>


                <div class="signatures">

                    <div>
                        __________________________<br>
                        Declarant Signature<br>
                        ${declarantName}
                    </div>

                </div>


                <hr>


                <p class="disclaimer">

                    <strong>Disclaimer:</strong>

                    This document is a generated draft for
                    educational and informational purposes.
                    It should be reviewed by a qualified legal
                    professional before actual use.

                </p>

            </div>


            <button onclick="window.print()">
                Print / Save as PDF
            </button>

        `;
    }


    // ======================================
    // LEGAL NOTICE
    // ======================================

    else if (documentType === "Legal Notice") {

        const senderName =
            document.getElementById("senderName").value.trim();

        const receiverName =
            document.getElementById("receiverName").value.trim();

        const receiverAddress =
            document.getElementById("receiverAddress").value.trim();

        const noticeSubject =
            document.getElementById("noticeSubject").value.trim();

        const noticeDetails =
            document.getElementById("noticeDetails").value.trim();


        if (
            !senderName ||
            !receiverName ||
            !receiverAddress ||
            !noticeSubject ||
            !noticeDetails
        ) {

            alert("Please fill in all the details.");

            return;
        }


        document.getElementById("result").innerHTML = `

            <div class="legal-document">

                <h1>LEGAL NOTICE</h1>

                <hr>


                <h2>FROM</h2>

                <p>
                    <strong>${senderName}</strong>
                </p>


                <h2>TO</h2>

                <p>
                    <strong>${receiverName}</strong>
                </p>

                <p>
                    ${receiverAddress}
                </p>


                <h2>SUBJECT</h2>

                <p>
                    <strong>${noticeSubject}</strong>
                </p>


                <h2>NOTICE DETAILS</h2>

                <p>
                    ${noticeDetails}
                </p>


                <h2>DECLARATION</h2>

                <p>
                    This notice has been generated based on
                    the information provided by the user.
                </p>


                <br><br>


                <div class="signatures">

                    <div>
                        __________________________<br>
                        Sender Signature<br>
                        ${senderName}
                    </div>

                </div>


                <hr>


                <p class="disclaimer">

                    <strong>Disclaimer:</strong>

                    This document is a generated draft for
                    educational and informational purposes.
                    It should be reviewed by a qualified legal
                    professional before actual use.

                </p>

            </div>


            <button onclick="window.print()">
                Print / Save as PDF
            </button>

        `;
    }

}
