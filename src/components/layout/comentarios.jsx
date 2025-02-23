import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {Comentarios as Comentariosdata} from "../../data/comentarios"
export default function Comentarios() {
   
    const [comentarioNum , setComentarioNum] = useState(0)
    const leng =Comentariosdata.length 
    function passarComentario(){         
            setComentarioNum(prev => (prev + 1) % leng)
    }
    function voltarComentario(){
        setComentarioNum(prev => (prev-1 + leng) % leng)
    }

    return (


        <section className="min-h-[60vh] w-3/3 bg-blue-950 flex flex-col items-center text-white  pt-2 overflow-hidden gap-3 relative">

            <h1 className="font-medium text-3xl">Comentarios</h1>
            <div className="relative flex w-full max-w-[700px] justify-center hover:scale-110 transition">
                <FaChevronLeft className="absolute left-0 top-[50%] text-2xl cursor-pointer hover:scale-110 transition" onClick={e => voltarComentario()} />
                <section className="flex gap-24 overflow-hidden w-[90%] max-w-[400px] transition-all ease-in-out ">
                    <div className="min-w-[350px] w-[100%] min-h-[350px] bg-white rounded-md mt-4 flex flex-col justify-center items-center text-black p-5">
                        <img src={Comentariosdata[comentarioNum].foto} alt="" className="w-[100px] h-[100px] object-cover rounded-[50%]" />
                        <h3 className="font-bold text-xl">{Comentariosdata[comentarioNum].nome}</h3>
                        <p>{Comentariosdata[comentarioNum].comentario}</p>
                    </div>

                </section>
                <FaChevronRight className="absolute right-3 top-[50%] text-2xl cursor-pointer hover:scale-110 transition" onClick={ e => passarComentario()}/>
            </div>

        </section>



    )
}