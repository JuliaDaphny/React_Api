import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import apiFilmes from "../../services/apiFilmes";
import { Link } from 'react-router-dom'

const SeriesPopulares = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setSeries(resultado.data.results)
        })

    }, [])

    return (
        <div>

            <h1 className="text-sm-center m-5">Assista as séries mais populares do momento!</h1>

            <Container>
                <Row>
                    {series.map(item => (
                        <Col md={4} className="mb-4" key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>Data de estreia: {item.release_date}</Card.Text>
                                    <Card.Text>{item.original_name}</Card.Text>
                                    <Link className="btn btn-danger" to={"/filmes/" + item.id}>
                                        Ver detalhes
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default SeriesPopulares;