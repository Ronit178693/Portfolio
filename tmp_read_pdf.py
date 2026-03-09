import sys, PyPDF2
with open("tmp_resume_parsed.txt", "w", encoding="utf-8") as out:
    with open(sys.argv[1], 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            out.write(page.extract_text() + "\n")
