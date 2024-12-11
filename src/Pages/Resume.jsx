function Resume() {
  const pdfURL = "./Images/ResumeA.pdf";

  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flex items-center justify-center w-screen h-screen">
        <iframe src={pdfURL} className="w-full h-full border-none" />
      </div>
    </div>
  );
}

export default Resume;
