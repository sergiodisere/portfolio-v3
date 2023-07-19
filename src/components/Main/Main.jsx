import LogoTlf from "../../assets/Telefonica.svg";

function Main() {
  return (
    <div className="flex flex-row pt-9 gap-x-12 flex-1">
      <div className="space-y-5">
        <h2 className="text-6xl font-extrabold">Hi! 👋 </h2>
        <h1 className="text-6xl font-extrabold">I'm Sergio Díaz</h1>
        <p>
          An all-around programmer r who is passionate about creating functional
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
          /></a>
          , as a front end developer in the <a className="text-movistar font-extrabold" href="https://mistokens.movistar.com/" target="_blank">Movistar Tokens</a> project.{" "}
        </p>
      </div>

      <picture>
        <img
          style={{"-webkit-mask-image": "linear-gradient(#000,#000,transparent)"}}
          src="src/assets/Yo.png"
          alt="Sergio Diaz medio cuerpo"
          width={800}
          height={800}
        ></img>
      </picture>
    </div>
  );
}



export default Main;
