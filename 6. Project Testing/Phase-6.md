# PHASE 6 – PROJECT TESTING

## Project Title
LegalEase – AI-Powered Legal Document Generator

## 1. Testing Objective

Testing verifies that all components of LegalEase work correctly.

## 2. Functional Test Cases

| ID | Test Case | Expected Result |
|---|---|---|
| TC-01 | Open website | Website loads |
| TC-02 | Select Rental Agreement | Correct form appears |
| TC-03 | Select Leave & License Agreement | Correct form appears |
| TC-04 | Select Affidavit | Correct form appears |
| TC-05 | Select Legal Notice | Correct form appears |
| TC-06 | Enter valid details | Input accepted |
| TC-07 | Submit incomplete form | Validation message appears |
| TC-08 | Generate document | Document is generated |
| TC-09 | Print/save document | Output can be printed/saved |
| TC-10 | Backend unavailable | Error message appears |
| TC-11 | Test mobile layout | Interface remains usable |
| TC-12 | Test desktop layout | Interface works correctly |

## 3. API Testing

Test:

GET /api/health

and:

POST /api/generate

Verify:
- Request format
- Input validation
- Response format
- Error handling

## 4. Negative Testing

Test:
- Empty fields
- Invalid data
- Missing document type
- Unsupported document type
- Backend failure
- AI service failure

## 5. Security Testing

Verify:
- API keys are not exposed.
- Secret files are not uploaded.
- Environment variables are used.
- User information is not unnecessarily exposed.

## 6. Responsive Testing

Test on:
- Desktop
- Laptop
- Tablet
- Smartphone

## 7. Browser Testing

Test using:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari where available

## 8. Testing Evidence

Add screenshots showing:
- Homepage
- Document selection
- Forms
- Generated output
- Error handling
- Mobile interface
- API/backend result

## 9. Test Result

Actual results should be recorded after testing the final implemented version.

## 10. Conclusion

Testing ensures that LegalEase meets its requirements and functions correctly across its frontend, backend, AI processing, and document-generation workflow.
