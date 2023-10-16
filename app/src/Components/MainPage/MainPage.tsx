import "./MainPage.css"
function MainPage() {
    return ( 
      <div className="mainpage h-screen text-white flex justify-center items-center">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 md:order-last">
            <div className="coolimage">пикча пикча пикча</div>
          </div>
          <div className="lg:w-1/2 text-center lg:mr-80 mt-40 ml-0">
            <div className="name font-montserrat-bold lg:text-7xl text-3xl">StudentPulse</div>
            <div className="slogan font-montserrat-reg lg:text-5xl text-xl text-right mr-20">Слоган слоган слоган</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;
  