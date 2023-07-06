import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Baraa's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed By Baraa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Baraa Basim</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800  md:text-xl max-w-lg mx-auto">
              Freelance whatever whatever whatever whatever whatever whatever whatever
               whatever whatever
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>


        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              whatever whatever whatever whatever
              whatever what ever whawevaewrawerawhatever 
              whatever<span className="text-teal-500">whenever</span> what ever whawevaewrawerawhatever what ever whawevaewrawera
              whatever what<span className="text-teal-500">wherever</span> ever whawevaewrawerawhatever what ever whawevaewrawerawhat ever whawevaewrawera
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2">
                whatever what awelrj a;lwejr lawjdfa sdf asf a
                sdf adsf asdf asdf qwerq asdfasdjl alsdjf ;alsf
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">someth</p>
              <p className="text-gray-800 py-1">Idkfad</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2">
                whatever what awelrj a;lwejr lawjdfa sdf asf a
                sdf adsf asdf asdf qwerq asdfasdjl alsdjf ;alsf
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">someth</p>
              <p className="text-gray-800 py-1">Idkfad</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2">
                whatever what awelrj a;lwejr lawjdfa sdf asf a
                sdf adsf asdf asdf qwerq asdfasdjl alsdjf ;alsf
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">someth</p>
              <p className="text-gray-800 py-1">Idkfad</p>
            </div>
          </div>

        </section>
        <section>
          <dev>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              whatever whatever whatever whatever
              whatever what ever whawevaewrawerawhatever 
              whatever<span className="text-teal-500">whenever</span> what ever whawevaewrawerawhatever what ever whawevaewrawera
              whatever what<span className="text-teal-500">wherever</span> ever whawevaewrawerawhatever what ever whawevaewrawerawhat ever whawevaewrawera
            </p>
          </dev>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
