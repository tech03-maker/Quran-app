import QuranImg from "../assets/quranmuslim-holy-book-placed-steampunk_948265-5615.avif";
import HandyQuran from "../assets/quranmuslim-holy-book-placed-steampunk_948265-5767.avif";
import "bootstrap/dist/css/bootstrap.min.css";

function QuranAbout() {
  return (
    <div className="container mt-5 animate__animated animate__fadeInUp">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-12 mt-4">
              <img className="qurani img-fluid" src={QuranImg} alt="Quran" />
            </div>
            <div className="col-12 col-md-6 col-sm-12 mt-5">
              <img
                className="qurani img-fluid"
                src={HandyQuran}
                alt="Handy Quran"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
          <h3>Learn About The Quran</h3>
          <p className="mt-3">
            The Quran: Divine Guidance: The Quran is Islam's Holy Book, believed
            by Muslims to be the word of Allah. It provides guidance on life,
            morality, and societal principles. With themes of monotheism,
            prophethood, and accountability in the afterlife, the Quran is
            revered for its linguistic excellence and perceived divine
            knowledge.
          </p>
          <form action="">
            <a href="#">
              <button className="Quran_btn bg-dark w-100 p-2 text-white" type="submit">
                Login
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuranAbout;
