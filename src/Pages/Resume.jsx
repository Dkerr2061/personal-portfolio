function Resume() {
  const pdfURL = "./Images/resume.pdf";

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <iframe src={pdfURL} className="w-full lg:w-4/5 h-full" />
    </div>
  );
}

export default Resume;
