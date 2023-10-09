import { RegisterForm } from "../components/Forms"


export default function Home(){

  

    return(
        <div className="container-column" id="home">
            <section className="container-column" id="header">
                <h1>E-commerce</h1>
                <img id="header" src="https://i.blogs.es/680e20/hot-sale-2023-que-es/1366_2000.jpeg" alt="" />
            </section>
            <section id="aboutus" className="container-column">
                <h2>About us</h2>
                <p>We are a company that cells products to local people.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae iure minus vero expedita nobis, numquam hic veritatis tempore? Excepturi debitis eos consequuntur. Doloremque architecto sint voluptatem, qui explicabo dolores sed.</p>
                <p>We are a company that cells products to local people.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae iure minus vero expedita nobis, numquam hic veritatis tempore? Excepturi debitis eos consequuntur. Doloremque architecto sint voluptatem, qui explicabo dolores sed.</p>

            </section>
            <section>
                <h3>Sections  </h3>
                <p>We use sections to divide important parts of a document, it can include images,
                    paragraphs, buttons, forms everything.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore placeat at
                     commodi quasi iusto? Sunt quia praesentium placeat cum adipisci deleniti fugiat
                     , cupiditate repellendus voluptatum, laborum voluptatibus necessitatibus atque.
                     We use sections to divide important parts of a document, it can include images,     
                </p>
            </section>
            <section>
                <h3>Registry</h3>
                <p>Register here to start buying now!</p>
                <RegisterForm/>
            </section>

        </div>
    )
}