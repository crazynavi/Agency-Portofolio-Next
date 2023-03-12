import Head from 'next/head'
import Intro from"../components/Intro"
import Services from"../components/Services"
import { data } from '../data'
import Testimonials from '../components/Testimonials'
export default function Home({services}) {
  console.log(services);
  return (
    <div>
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="A Portfolio page built with Next.JS" />
      </Head>
    <Intro/>
    <Services services={services}/>
    <Testimonials/>
    </div>
  );
}
export const getStaticProps = async () =>{
const services = data;
return{
  props:{services},
}

}
 