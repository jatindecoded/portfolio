import { Col } from "react-bootstrap";

export const ProjectCard = ({title,description,imgurl,url}) => {
    return (
        <Col sm = {6} md = {4}>

            <a href={url} style={{textDecoration:"none"}} target="_blank">
                <div className="proj-imgbx">
                    <img src={imgurl}></img>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )

}