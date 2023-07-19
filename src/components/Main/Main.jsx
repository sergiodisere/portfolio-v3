import LogoTlf from "../../assets/Telefonica.svg";
import Yo from "../../assets/Yo.png";

function Main() {
  return (
    <div className="flex xl:flex-row flex-col pt-9 gap-x-12 flex-1">
      <div className="space-y-5">
        <h2 className="text-6xl font-extrabold">Hi! 👋 </h2>
        <h1 className="text-6xl font-extrabold">I'm Sergio Díaz</h1>
        <p>
          An all-around programmer who is passionate about creating functional
          and purposeful projects. My work ethic is centered around finding
          purpose and adding value to every project I work on.
        </p>
        <p>
          I currently work at
          <a href="https://www.telefonica.com/es/" target="_blank">
            <img
              className="mx-1 mb-1 inline"
              src={LogoTlf}
              alt="logo Telefónica"
              width={100}
              height={100}
            />
          </a>
          , as a front end developer in the{" "}
          <a
            className="text-movistar font-extrabold"
            href="https://mistokens.movistar.com/"
            target="_blank"
          >
            Movistar Tokens
          </a>{" "}
          project.{" "}
        </p>
      </div>

      <picture className="max-xl:flex items-center justify-center">
        <img
          className="max-xl:w-5/12 max-xl:py-7"
          style={{
            "-webkit-mask-image": "linear-gradient(#000,#000,transparent)",
          }}
          src={Yo}
          alt="Sergio Diaz medio cuerpo"
          width={800}
          height={800}
        ></img>
      </picture>
    </div>
  );
}

export default Main;
