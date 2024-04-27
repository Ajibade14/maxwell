import Image from "next/image";
import { usePathname } from "next/navigation";

interface AboutProps{
    bg?:string
    aboutText: string
    data: dataProps[]
    
}
interface dataProps{
        text: string
        firstImageSrc: string,
        secondImageSrc: string
}
const data = [
    {
      text: "Helping traders save on daily basis",
      firstImageSrc: "/maxabout.jpg",
      secondImageSrc: "/man-woman.svg"
    },

    
  ];
//the data props should contain 2 images when it is being used on the prmary homepage else one single image
export default function AboutUs(){
    
    
    return(
        <div id="about-content" className={`text-black  bg-[#E3E7FA] py-12  md:px-[4%]   mt-16`}>
            <h2 className="text-3xl font-bold p-4">About us</h2>
            <p className="my-8 text-left md:mr-[4%] text-left p-4">
            Maxwell savings is a traditional thrift management company - popularly known as ajo, esusu or adashe. The company was founded 1st February, 2017. As a customer, you can choose to save your money with Maxwell Savings on a daily and weekly basis. And you can also collect your saved funds on a monthly, quarterly or yearly basis.
            </p>
            {/* <p className={`mt-2 ${!isHomepage ? 'hidden' : 'block'}`}>Finkia achieves this by:</p> */}

          
            {/* This component isn't meant to show on any other page except the homepage. scope might change later */}
            <div className={`mt-2 `}>
                {data.map((item, index) => (
                    <div key={index} className="md:flex justify-between mb-[30%] md:mb-[10%]">
                    <div className="mt-8 p-4">
                        <Image
                        alt="text item"
                        src="/about-text.svg"
                        width={30}
                        height={30}
                        />
                        <p className="font-bold text-xl mt-4 md:mt-8">{item.text}</p>
                    </div>

                    
                  <div className="mt-8 md:mt-0 md:w-[50%]">
                    <Image
                        width={600}
                        height={200}
                        src={item.firstImageSrc} 
                        alt="First Image" 
                        className=""
                    />
                  </div>
                
                  
                    </div>
                ))}
                </div>
           
        </div>
    )
}