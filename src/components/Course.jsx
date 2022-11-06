import React from 'react'
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import "../assets/css/Course.css"

function Course({ iconCurso, nombreEmpresa, nombreCurso, url }) {
    return (
        <div className="curso">
            <img className="img-empresa" src={iconCurso} alt={nombreEmpresa} loading="lazy" />
            <p className="curso-nombre"><b>{nombreCurso}</b></p>
            <a className="icon-network"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LaunchSharpIcon />
            </a>
        </div>
    )
}

export default Course