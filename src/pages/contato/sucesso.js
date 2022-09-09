import Link from "next/link";

export default function Sucesso(){
    return (<>
        <div className="form-success white padding-small">
        <h1 className="primary-red form-success-title">Sucesso!</h1>
        <p>Recebemos sua mensagem e em breve iremos lhe retornar!</p>
        <p className="primary-red"><Link href="/">Retornar para a página inicial</Link></p>
        </div>
    </>)
}