
import { FaMoon } from "react-icons/fa6";
import { BiSun } from "react-icons/bi";
import { useState ,useEffect } from "react";
const Demo = () => {
    const [Theme ,setTheme] = useState(localStorage.getItem("Theme") ?  localStorage.getItem("Theme") :"light");
    useEffect(() => {
      if (Theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("Theme" , "dark");
      }
      else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("Theme" , "light");
      }

    }, [Theme])
    

    return (
        <>
         <section className=''>
                <main className='text-black dark:text-white h-screen text-center flex justify-center bg-white dark:bg-black my-10 mx-32 rounded-3xl '>
                   <div>
                       {
                        Theme === "dark" ? ( <BiSun className="cursor-pointer text-5xl py-2" onClick={() => setTheme("light")} />) : ( <FaMoon className="cursor-pointer text-5xl py-2" onClick={() => setTheme("dark")} />)
                       }
                   </div>
                    <div className='p-10 space-y-6'>
                        <h1 className='text-6xl font-bold dark:text-indigo-500 text-cyan-500 '>It's Me Adrito Rafsan</h1>
                        <h1 className='text-4xl font-bold  '>Founder of <span className='text-indigo-500 dark:text-cyan-500  text-6xl'>CodeCraft</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet minus obcaecati delectus fugit et, aspernatur error repellendus incidunt ipsum? Maiores veritatis, atque dolorem illo sunt id? Nisi, voluptates praesentium. Dolorem quasi sit fugit commodi amet eius perspiciatis non, tenetur dolores, ullam et porro reprehenderit ducimus! Architecto earum ratione facilis explicabo quaerat commodi non fuga quo velit iste numquam pariatur error minus nam repellat exercitationem quam incidunt dolores aut, itaque magni cumque aspernatur? Molestias sit dolore laudantium. Saepe animi optio fugiat quo, culpa laborum, consequatur corrupti provident aspernatur numquam eveniet sint laudantium deserunt ex officia doloremque ea praesentium fugit atque officiis. Excepturi culpa maiores officia, aliquid, asperiores rerum non provident cum eum suscipit placeat labore ipsam quasi distinctio modi earum delectus nihil. Iste, voluptas iure perspiciatis impedit deleniti, sint possimus vitae modi repudiandae fugiat suscipit dicta nemo? Dolorum quia reiciendis ea voluptatum numquam eum esse tempore mollitia, harum quas cum dolores, sed sapiente magni nesciunt nobis blanditiis iste ab! Magnam, voluptatibus ipsum assumenda officiis qui eligendi velit magni eos optio dolor eum nesciunt provident repellat doloremque? Ea, deserunt voluptatem iste impedit accusamus unde debitis. Tenetur accusantium ut harum adipisci minus nostrum itaque consequuntur quibusdam explicabo? Officiis, similique. Repellendus ex illo fugiat laudantium fuga esse mollitia, sint eaque quisquam veritatis qui, nostrum vero nesciunt enim aut delectus quibusdam totam consectetur consequuntur. Odit ut aut quasi reiciendis officia, expedita, modi obcaecati illo excepturi ipsam possimus fugit at veritatis nam, deleniti id beatae natus nisi suscipit dicta officiis nesciunt quas dolorum sunt! Sapiente animi cupiditate dolores harum numquam. Necessitatibus quaerat, dicta debitis minus voluptates ipsum quos modi ipsa unde aperiam quod repellat saepe laboriosam esse consequuntur adipisci provident ducimus vero enim. Porro iusto quas ad asperiores id, error ipsam optio itaque culpa voluptate fuga esse qui assumenda impedit veniam dolorem hic eum voluptas? Neque quos, possimus ullam commodi ab dolor delectus maiores libero cum sapiente placeat eum labore voluptatem officiis eaque accusantium qui nihil quibusdam nam doloremque vel! Aliquid ut rem labore corrupti vitae odit debitis nesciunt deleniti non nemo animi, recusandae eum aperiam dolor ab ullam inventore esse doloribus fugiat nobis assumenda? Vel eos unde pariatur error inventore temporibus magni hic, nostrum eveniet facere porro fugiat quibusdam alias quasi perspiciatis. Rerum ipsam doloribus veniam nulla quasi eligendi ex accusantium, hic facere repellendus incidunt minus modi praesentium temporibus expedita ipsum iusto enim similique debitis optio quaerat cum sapiente necessitatibus? Ipsa necessitatibus laboriosam illo aliquid ducimus, veritatis deleniti exercitationem adipisci debitis corrupti consequuntur maxime eveniet, enim ratione accusantium provident voluptate suscipit laudantium repellendus sint laborum repellat ullam reiciendis minima! Repellat, iste! Atque eaque molestias, natus praesentium dicta ea, sunt soluta excepturi rerum suscipit, dolore assumenda impedit nulla modi illo dignissimos. Odit cumque laboriosam vero facere libero. Quaerat sit quasi debitis illo maxime accusantium quidem dolore iure odit delectus adipisci, soluta numquam? Aperiam dolores ullam commodi sit sequi iusto quia quaerat omnis temporibus veritatis? Iure expedita pariatur, fuga vitae natus quas delectus laborum dolore? Ex eaque harum dolor deserunt quae? Dolores aut explicabo dignissimos dicta.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cumque error, amet libero dolores voluptatum esse quibusdam tenetur saepe nihil aliquid hic! Blanditiis enim assumenda repellendus quia commodi animi eveniet esse, saepe architecto dolorem labore obcaecati expedita iusto adipisci qui sed consequatur, totam laborum ab neque nulla exercitationem cum. Fugiat quod veniam tempora repellendus illo, consequuntur numquam accusamus modi ad, maxime totam deserunt corporis autem ea provident fuga porro in debitis voluptatum, ducimus asperiores consequatur beatae adipisci! Cum qui repellendus obcaecati accusamus consectetur architecto distinctio sequi sint ipsum. Voluptates atque perspiciatis possimus quae? Culpa, rem nulla! Cupiditate eaque cum, aut odio architecto dicta animi placeat eligendi incidunt deleniti sunt atque doloribus repellendus eos sint natus. Cumque rem laudantium commodi molestias natus provident maiores voluptas incidunt. Deleniti atque itaque temporibus reiciendis quidem, alias qui eos, sed magni mollitia obcaecati corrupti adipisci! Nobis esse fugiat similique quas iusto! Eveniet, sint laboriosam praesentium dolorem cumque, cum dolores iusto explicabo culpa rem voluptas quidem officiis voluptatem ut totam omnis error ipsam doloremque laudantium rerum expedita perspiciatis deleniti quaerat corrupti. Odit expedita reprehenderit porro numquam molestias accusamus, labore, ipsam vitae totam deserunt qui soluta nihil eveniet veniam cumque? Inventore incidunt, pariatur obcaecati minus quas architecto.</p>
                    </div>
                </main>
         </section>
        </>
    )
}

export default Demo