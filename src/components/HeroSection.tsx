import Image from "next/image"

import { useRouter } from "next/navigation"

interface HeroSectionProps{
    bg?: string
}
export default function HeroSection(){
   const router = useRouter()
    return(
        //the background color of the parent is determing the text color
        <div className={`md:grid grid-cols-2 mx-4 md:mx-6  mt-8 text-black`}> 
            <div className="md:ml-8 md:mt-[20%]">
                <p className={`text-xl text-gray-600`}>Save. Grow. Earn</p>
                <p className="mt-4 font-bold text-3xl md:text-5xl leading-10">
                    Helping you to save for future and become successful
                </p>
                {
                    
                    <div className="my-8 ">
                    <button onClick={() => router.push('https://maxwellsavings2.finkia.com.ng/signin')} type="button" className={`text-white bg-[#EAAB40] hover:bg-orange-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-3 text-center `}>Sign in as customer</button>
                    </div>
                }
            </div>

            <div className="">

                <Image
                alt="hero"
                src="/hero-max.jpg"
                width={700}
                height={500}
                
            />
           
           
            </div>
        </div>
    )
}