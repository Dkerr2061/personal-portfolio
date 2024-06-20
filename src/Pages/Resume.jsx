
function Resume(){


  const pdfURL = './Images/resume.pdf'


  return (
   <div className="h-screen w-screen">
    <iframe src={pdfURL} className="w-full h-full"/>
   </div>
  )
}

export default Resume