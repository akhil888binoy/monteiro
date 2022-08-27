import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Monteiro Mototransporte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid justify">
        <div className="grid-text grid-item-1">
          <h2 className="grid-title">
            Transporte seguro de motocicletas
          </h2>
          <p>
            Transporte de motos realizado com total
            segurança através do nosso sistema único
            com rampa automatizada, 24 horas por dia,
            onde quer que você esteja!
          </p>
        </div>
        <div className="grid-image grid-item-2">
          <Image
            alt="imagem de exemplo 2"
            layout="fill"
            src="/example-2.jpg" />
        </div>

        
        <div className="grid-image grid-item-3">
          <Image
            alt="imagem de exemplo 1"
            layout="fill"
            src="/example-1.jpg" />
        </div>

        <div className="grid-text grid-item-4">
          <h2 className="grid-title">
            Guincho de Moto
          </h2>
          <ul>
            <li>
              Leva e traz de moto para revisão em oficinas,
              realizar vistorias no Detran, lavagem, entre outros;
            </li>
            <li>
              Transporte de motos para o litoral, interior e outros estados;
            </li>
            <li>
              Resgate de moto em caso de acidente, pane mecânica e falta de gasolina;
            </li>
          </ul>
        </div>

      </main>
      <span className="rescue-button rescue-button-bg hide">
        <a href="https://wa.me/5551986561694">
          <FontAwesomeIcon icon={faWhatsapp} className="rescue-button-whatsapp-icon rescue-button-bg"/>
          Solicitar resgate
        </a>
      </span>
    </>
  );
}