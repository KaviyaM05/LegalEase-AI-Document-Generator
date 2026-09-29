# PHASE 3 – PROJECT DESIGN PHASE

## Project Title
LegalEase – AI-Powered Legal Document Generator

## 1. System Architecture

The proposed LegalEase architecture consists of:

1. Frontend
2. FastAPI Backend
3. AI Processing Layer

## 2. Architecture Flow

User
↓
LegalEase Frontend
↓
FastAPI Backend
↓
Input Validation
↓
AI/LLM Processing
↓
Document Generation
↓
Generated Document
↓
Frontend
↓
User

## 3. Application Workflow

1. Open LegalEase.
2. Select a document type.
3. Enter required information.
4. Validate information.
5. Send request to backend.
6. Process information.
7. Generate document.
8. Display result.
9. Review the generated document.

## 4. Main Modules

### Frontend Module
Responsible for:
- User interface
- Document selection
- Forms
- User input
- Output display

### Backend Module
Responsible for:
- API requests
- Input validation
- Document processing
- AI communication
- Error handling

### AI Module
Responsible for:
- Processing supplied information
- Assisting document generation
- Structuring generated content

## 5. Use Cases

Actor:
User

Use cases:
- Open application
- Select document
- Enter details
- Generate document
- View document
- Print/save document

## 6. Data Flow

User Input
↓
Frontend
↓
API Request
↓
FastAPI
↓
Validation
↓
AI Processing
↓
Generated Content
↓
API Response
↓
Frontend
↓
User

## 7. Supported Document Design

The system supports:

1. Rental Agreement
2. Leave & License Agreement
3. Affidavit
4. Legal Notice

Each document uses its corresponding input fields.

## 8. UI Design

The interface contains:
- Project title
- Document selection
- Input form
- Generate button
- Generated document area
- Print/save option
- Error messages

## 9. Conclusion

The design phase establishes the architecture and workflow required to implement the LegalEase application.
