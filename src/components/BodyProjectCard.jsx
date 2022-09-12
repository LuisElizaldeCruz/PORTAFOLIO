import React from "react";
import Project from "./Projects";
import { Pagination } from '@mui/material';


const getDataCards = () => {
    fetch("data.json")
        .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);//ya la va a devolver en formato json
        }).then((data) => {
            console.log(data);

        })

}
getDataCards();
const BodyProjectCard = () => {

    return (
        <>
            <section className="container-projects">
                <h4 className="title-projects">Proyectos</h4>
                <div className="projects" id="projects">
                    <Project
                        img="expenseTracker"
                        alt="expenseTracker"
                        description="este es un proyecto de prueba"
                    />
                    <Project
                        img="expenseTracker"
                        alt="expenseTracker"
                        description="este es un proyecto de prueba"
                    />
                </div>
                <Pagination count={6} boundaryCount={2} color="secondary" siblingCount={2}/>
            </section>
            {
                /*
            <Box justifyContent={"center"} alignItems="center" display={"flex"} width={"100%"}
                sx={{
                    margin: "20px auto",
                }}
            >
                <Pagination count={6} boundaryCount={2} color="secondary" siblingCount={2}/>
            </Box>
            */
            }
            
        </>
    );
}

export default BodyProjectCard;