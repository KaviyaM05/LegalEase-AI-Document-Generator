// ============================================
// LEGALEASE
// AI LEGAL DOCUMENT GENERATOR
// ============================================


// ============================================
// GET STARTED BUTTON
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const getStartedBtn =
        document.getElementById("getStartedBtn");

    getStartedBtn.addEventListener("click", function () {

        document.getElementById("homePage")
            .classList.add("hidden");

        document.getElementById("selectionPage")
            .classList.remove("hidden");

    });

});


// ============================================
// SHOW DOCUMENT FORM
// ============================================

function showForm(documentType) {

    document.getElementById("selectionPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.add("hidden");

    document.getElementById("formPage")
        .classList.remove("hidden");

    document.getElementById("formTitle")
        .innerText = documentType;

    const formContainer =
        document.getElementById("formContainer");


    // ========================================
    // RENTAL AGREEMENT
    // ========================================

    if (documentType === "Rental Agreement") {

        formContainer.innerHTML = `

            <div class="form-group">

                <label>Tenant Name</label>

                <input
                    id="tenantName"
                    type="text"
                    placeholder="Enter tenant name">

            </div>


            <div class="form-group">

                <label>Landlord Name</label>

                <input
                    id="landlordName"
                    type="text"
                    placeholder="Enter landlord name">

            </div>


            <div class="form-group">

                <label>Property Address</label>

                <textarea
                    id="propertyAddress"
                    placeholder="Enter property address"></textarea>

            </div>


            <div class="form-group">

                <label>Monthly Rent</label>

                <input
                    id="monthlyRent"
                    type="number"
                    placeholder="Enter monthly rent">

            </div>


            <div class="form-group">

                <label>Security Deposit</label>

                <input
                    id="deposit"
                    type="number"
                    placeholder="Enter security deposit">

            </div>


            <div class="form-group">

                <label>Rental Period</label>

                <input
                    id="rentalPeriod"
                    type="text"
                    placeholder="Example: 11 months">

            </div>

        `;
    }


    // ========================================
    // LEAVE & LICENSE AGREEMENT
    // ========================================

    else if (
        documentType === "Leave and License Agreement"
    ) {

        formContainer.innerHTML = `

            <div class="form-group">

                <label>Licensor Name</label>

                <input
                    id="licensorName"
                    type="text"
                    placeholder="Enter licensor name">

            </div>


            <div class="form-group">

                <label>Licensee Name</label>

                <input
                    id="licenseeName"
                    type="text"
                    placeholder="Enter licensee name">

            </div>


            <div class="form-group">

                <label>Property Address</label>

                <textarea
                    id="licensePropertyAddress"
                    placeholder="Enter property address"></textarea>

            </div>


            <div class="form-group">

                <label>License Period</label>

                <input
                    id="licensePeriod"
                    type="text"
                    placeholder="Example: 11 months">

            </div>


            <div class="form-group">

                <label>License Fee</label>

                <input
                    id="licenseFee"
                    type="number"
                    placeholder="Enter license fee">

            </div>

        `;
    }


    // ========================================
    // AFFIDAVIT
    // ========================================

    else if (documentType === "Affidavit") {

        formContainer.innerHTML = `

            <div class="form-group">

                <label>Declarant Name</label>

                <input
                    id="declarantName"
                    type="text"
                    placeholder="Enter declarant name">

            </div>


            <div class="form-group">

                <label>Address</label>

                <textarea
                    id="affidavitAddress"
                    placeholder="Enter address"></textarea>

            </div>


            <div class="form-group">

                <label>Purpose</label>

                <input
                    id="purpose"
                    type="text"
                    placeholder="Enter purpose of affidavit">

            </div>


            <div class="form-group">

                <label>Statement</label>

                <textarea
                    id="statement"
                    placeholder="Enter your statement"></textarea>

            </div>

        `;
    }


    // ========================================
    // LEGAL NOTICE
    // ========================================

    else if (documentType === "Legal Notice") {

        formContainer.innerHTML = `

            <div class="form-group">

                <label>Sender Name</label>

                <input
                    id="senderName"
                    type="text"
                    placeholder="Enter sender name">

            </div>


            <div class="form-group">

                <label>Receiver Name</label>

                <input
                    id="receiverName"
                    type="text"
                    placeholder="Enter receiver name">

            </div>


            <div class="form-group">

                <label>Receiver Address</label>

                <textarea
                    id="noticeAddress"
                    placeholder="Enter receiver address"></textarea>

            </div>


            <div class="form-group">

                <label>Notice Subject</label>

                <input
                    id="noticeSubject"
                    type="text"
                    placeholder="Enter notice subject">

            </div>


            <div class="form-group">

                <label>Notice Details</label>

                <textarea
                    id="noticeDetails"
                    placeholder="Enter notice details"></textarea>

            </div>

        `;
    }

}


// ============================================
// GENERATE DOCUMENT
// ============================================

function generateDocument() {

    const documentType =
        document.getElementById("formTitle").innerText;

    let documentHTML = "";


    // ========================================
    // RENTAL AGREEMENT
    // ========================================

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


        documentHTML = `

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
                        The tenant shall use the property
                        for lawful purposes.
                    </li>

                    <li>
                        The tenant shall pay the agreed rent on time.
                    </li>

                    <li>
                        The property shall be maintained
                        in reasonable condition.
                    </li>

                    <li>
                        Any changes to this agreement should be
                        mutually agreed upon by both parties.
                    </li>

                    <li>
                        Both parties should retain a copy
                        of this agreement.
                    </li>

                </ol>


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

            </div>

        `;
    }


    // ========================================
    // LEAVE & LICENSE
    // ========================================

    else if (
        documentType === "Leave and License Agreement"
    ) {

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


        documentHTML = `

            <div class="legal-document">

                <h1>LEAVE & LICENSE AGREEMENT</h1>

                <hr>


                <h2>PARTIES</h2>

                <p>
                    This Leave and License Agreement is made between
                    <strong>${licensorName}</strong>
                    (Licensor) and
                    <strong>${licenseeName}</strong>
                    (Licensee).
                </p>


                <h2>PROPERTY</h2>

                <p>
                    The property covered under this agreement
                    is located at:
                </p>

                <p>
                    <strong>${propertyAddress}</strong>
                </p>


                <h2>LICENSE PERIOD</h2>

                <p>
                    The license period is
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
                        The Licensee shall use the property
                        for lawful purposes.
                    </li>

                    <li>
                        The Licensee shall pay the agreed
                        license fee on time.
                    </li>

                    <li>
                        The property shall be maintained properly.
                    </li>

                    <li>
                        The Licensee shall comply with
                        the agreed terms.
                    </li>

                    <li>
                        Both parties should retain a copy
                        of this agreement.
                    </li>

                </ol>


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

            </div>

        `;
    }


    // ========================================
    // AFFIDAVIT
    // ========================================

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


        documentHTML = `

            <div class="legal-document">

                <h1>AFFIDAVIT</h1>

                <hr>


                <h2>DECLARANT</h2>

                <p>
                    I, <strong>${declarantName}</strong>,
                    residing at
                    <strong>${address}</strong>,
                    solemnly affirm the following.
                </p>


                <h2>PURPOSE</h2>

                <p>
                    This affidavit is prepared for:
                    <strong>${purpose}</strong>.
                </p>


                <h2>STATEMENT</h2>

                <p>
                    ${statement}
                </p>


                <h2>DECLARATION</h2>

                <p>
                    I declare that the information provided above
                    is true and correct to the best of my knowledge
                    and belief.
                </p>


                <div class="signatures">

                    <div>
                        __________________________<br>
                        Declarant Signature<br>
                        ${declarantName}
                    </div>

                </div>

            </div>

        `;
    }


    // ========================================
    // LEGAL NOTICE
    // ========================================

    else if (documentType === "Legal Notice") {

        const senderName =
            document.getElementById("senderName").value.trim();

        const receiverName =
            document.getElementById("receiverName").value.trim();

        const address =
            document.getElementById("noticeAddress").value.trim();

        const subject =
            document.getElementById("noticeSubject").value.trim();

        const noticeDetails =
            document.getElementById("noticeDetails").value.trim();


        if (
            !senderName ||
            !receiverName ||
            !address ||
            !subject ||
            !noticeDetails
        ) {

            alert("Please fill in all the details.");

            return;
        }


        documentHTML = `

            <div class="legal-document">

                <h1>LEGAL NOTICE</h1>

                <hr>


                <p>
                    <strong>From:</strong><br>
                    ${senderName}
                </p>


                <p>
                    <strong>To:</strong><br>
                    ${receiverName}<br>
                    ${address}
                </p>


                <h2>SUBJECT</h2>

                <p>
                    <strong>${subject}</strong>
                </p>


                <h2>NOTICE DETAILS</h2>

                <p>
                    ${noticeDetails}
                </p>


                <h2>DECLARATION</h2>

                <p>
                    This notice has been prepared based on
                    the information provided by the user.
                </p>


                <div class="signatures">

                    <div>
                        __________________________<br>
                        Sender Signature<br>
                        ${senderName}
                    </div>

                </div>

            </div>

        `;
    }


    // ========================================
    // SHOW RESULT
    // ========================================

    document.getElementById("formPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.remove("hidden");


    document.getElementById("result").innerHTML = `

        ${documentHTML}

        <div class="disclaimer">

            <strong>Disclaimer:</strong>

            This document is a generated draft for
            educational and informational purposes.

            It should be reviewed by a qualified
            legal professional before actual use.

        </div>

    `;

}


// ============================================
// BACK TO DOCUMENT SELECTION
// ============================================

function goBackToSelection() {

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("formPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.add("hidden");

    document.getElementById("selectionPage")
        .classList.remove("hidden");

}
