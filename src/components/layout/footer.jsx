import { LiaInstagram , LiaLinkedin , LiaGithub} from "react-icons/lia";
export default function Footer(){
    return(
        <footer className="w-3/3 h-[50vh] gap-6 flex-wrap bg-[#F0F4F9] flex items-center p-9 justify-between">
            <div>
            <h2 className="font-extrabold text-2xl">Allu&Co</h2>
            <nav>
                <li>98982878114</li>
                <li>claraguilherme308@gmail.com</li>
            </nav>
            </div>
            <div>
                <p>Direitos reservados para a Empresa &copy;</p>
                <p>Site ficticio produzido para postififolio de <strong> Guilherme clara de caravalho</strong></p>
                <div className="flex">
                <LiaInstagram className="text-4xl hover:scale-110"/>
                <LiaLinkedin className="text-4xl hover:scale-110" />
                <LiaGithub className="text-4xl hover:scale-110" />
                </div>
                
            </div>
            <div>
                <h2 className="font-extrabold text-2xl  hover:scale-110">Redes sociais</h2>
                <nav>
                    <li>Instagram</li>
                    <li>TikTok</li>
                    <li>Youtube</li>
                </nav>
            </div>
                
        </footer>
    )
}