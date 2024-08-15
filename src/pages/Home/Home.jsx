import { Button } from '../../components/Button/Button';
import './Home.css';
import HomeImg from '../../assets/homeImg.png';
import { Card } from '../../components/Card/Card';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import TikTok from '../../assets/tiktok.png';
import Facebook from '../../assets/facebook.png';

function Home() {
    return (
        <main>
            <section className='inicio'>
                <div className="inicio__content">
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <Button texto="Começar agora!" />
                </div>
                <img src={HomeImg} alt="Homem andando de skate" />
            </section>
            <section className='cards'>
                <Card
                    corFundo="#F1C2B0"
                    numero="01"
                    titulo="Youtube"
                    descricao="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
                    icone={Youtube}
                />
                <Card
                    corFundo="#F9EB98"
                    numero="02"
                    titulo="TikTok"
                    descricao="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
                    icone={TikTok}
                />
                <Card
                    corFundo="#C0D9DD"
                    numero="03"
                    titulo="Facebook"
                    descricao="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
                    icone={Facebook}
                />
                <Card
                    corFundo="#6975E8"
                    numero="01"
                    titulo="Instagram"
                    descricao="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
                    icone={Instagram}
                />
            </section>
        </main>
    )
}

export default Home