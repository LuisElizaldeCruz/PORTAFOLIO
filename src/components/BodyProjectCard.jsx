
import Project from "./Projects";
import { Pagination } from '@mui/material';


const proyectosRealizados = [
    {
        "id": 1,
        "img": "expenseTracker.png",
        "alt": "expense-traker",
        "description": "este es un poryecto de ejemplo",
        "link": "www.example.com"
    },
    {
        "id": 2,
        "img": "netflixClone.png",
        "alt": "expense-traker2",
        "description": "este es un poryecto de ejemplo 2",
        "link": "www.example2.com"
    }
]

const BodyProjectCard = () => {

    return (
        <>
            <section className="container-projects">
                <h4 className="title-projects">Proyectos</h4>
                <div className="projects" id="projects">
                    {
                        proyectosRealizados.map(p => {
                            return (
                                <>
                                    <Project key={p.id} img={p.img}
                                        alt={p.alt}
                                        description={p.description}
                                        link={p.link}
                                    />
                                </>
                            );
                        })
                    }

                </div>
                <Pagination count={4} boundaryCount={2} color="secondary" siblingCount={2} />
            </section>
        </>
    );
}

export default BodyProjectCard;
