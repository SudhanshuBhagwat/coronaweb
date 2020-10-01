import fetch from 'node-fetch';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Stats from '../components/Stats';
import Table from '../components/Table';
import Precautions from '../components/Precautions';
import Symptoms from '../components/Symptoms';
import Footer from '../components/Footer';

export default function Index({ world, table }) {
  return (
    <div className="container">
      <Navbar />
      <Layout>
        <Stats world={world}/>
        <Table table={table}/>
        <Symptoms />
        <Precautions />
        <Footer />
      </Layout>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400;1,800&display=swap');
          * {
            font-family: "Times New Roman", Times, serif;
            margin: 0;
            padding: 0;
            user-select: none;
            box-sizing: border-box;
          }
          :root {
            --main-pink: #fc5185;
            --main-blue: #364f6b;
            --main-cyan: #43dde6;
            --main-grey: #f0f0f0;
          }
          .container {
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  )
}

Index.getInitialProps = async () => {
    const responseAll = await fetch('http://165.22.211.207:3000/corona/all');
    const response = await fetch('http://165.22.211.207:3000/corona/');
    const resAll = await responseAll.json();
    const res = await response.json();

    return {
        world: res[0].stats,
        table: resAll[0].countries
    }
}
