function Resume() {
  const pdfURL = "./Images/DKResume.pdf";

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flex items-center justify-center h-screen w-screen">
        <iframe src={pdfURL} className="w-full h-full border-none" />
      </div>
    </div>
  );
}

export default Resume;
