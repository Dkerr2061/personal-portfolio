function Home() {
  return (
    <section
      id="home"
      className="flex flex-wrap items-center px-4 justify-between gap-8"
    >
      <div className="grid grid-cols-2 font-serif font-normal items-center">
        <div className="hero--section--content">
          <p className="flex flex-wrap text-md h-6 py-4">Hi, I'm David</p>
          <h1 className="text-xl h-7 py-4">
            <span>Full Stack</span>
            {""}
            <br />
            Software Engineer
          </h1>
          <p className="text-sm h-5 py-10">Description goes here.</p>
        </div>
        <div className="py-4">
          <img
            src="./Images/Linkedin.JPG"
            alt="David Kerr"
            className="border-rounded"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
