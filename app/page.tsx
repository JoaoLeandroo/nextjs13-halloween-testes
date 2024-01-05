import Container from "@/components/container/Container";
import Banner from "@/components/banner/Banner";
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import Card from "@/components/card/Card";
const font = Rubik_Glitch({ subsets: ['latin'], weight: ['400'] })

const Home = () => {
  return ( 
    <div>
      <Container>
          <div className="w-full">
            <Banner>
              <div className="w-full h-full flex justify-around mt-10">

                <div className="flex flex-col items-center justify-center text-white text-center p-2">
                  <h1 className={`${font.className} md:text-5xl text-xl`}>Doces <br /> ou <br /> Travessuras?</h1>
                  <p className={`${font.className} text-2xl`}>Hahaha</p>
                </div>

                <figure>
                  <Image
                    src={'/bruxa.webp'}
                    width={250}
                    height={300}
                    alt="Bruxinha de Halloween"
                    priority
                  />
                </figure>
              </div>
            </Banner>

          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 place-items-center ">
            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">
                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">Posts Halloween</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">

                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">A história do dracula</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>

              </div>
            </Card>

            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">
                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">As melhores de Halloween</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">
                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">Frankstain</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">
                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">The Wizzard</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-orange-600 shadow-teste mb-10 rounded-lg p-3">
                <data className="text-xs">23/10/2023</data>
                <h3 className="mb-3 font-bold text-lg">Jogue Aqui!</h3>
                <div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio iure, amet non, 
                    aliquid quisquam harum accusamus assumenda, 
                    numquam temporibus esse eum dolorum cum earum laboriosam optio doloribus laborum modi.
                  </p>
                </div>
              </div>
            </Card>



          </div>
          </div>
      </Container>
    </div>
   );
}
 
export default Home;