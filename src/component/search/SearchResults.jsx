// src/components/search/SearchResults.js

import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";

const SearchResults = ({ results, status, error, onClose }) => {
  console.log("results from search results", results);
  const navigate = useNavigate();

  if (status === "loading") {
    return (
      <ListGroup>
        {/* You can change the number of skeletons here based on your design */}
        {[...Array(10)].map((_, index) => (
          <ListGroup.Item key={index}>
            {/* <SkeletonTheme baseColor="#520d2d" highlightColor="#520d2d"> */}
            <Skeleton height={30} />
            {/* </SkeletonTheme> */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

  if (status === "failed") {
    return <p>{error?.message}</p>;
  }

  // if (results?.length === 0) {
  //   return <p>No results found</p>;
  // }

  function handleCardClick(product) {
    onClose(); // Close the modal
    // setTimeout(() => {
    // Set state when navigating to a product page
    navigate(`/products/${product._id}`, {
      state: { fromSearchModal: true },
    });
    // }, 300); // Delay to ensure smooth modal close before navigation
  }

  return (
    <>
      <Row>
        {results &&
          results?.map((item) => (
            <Col
              key={item._id}
              xs={12} // Full width on extra small devices
              sm={6} // Two cards per row on small devices
              md={4} // Three cards per row on medium devices
              lg={3} // Four cards per row on large devices (laptops and up)
              className="mb-4" // Add margin below the card for spacing
            >
              <Card style={{ width: "100%", height: 480 }}>
                {" "}
                {/* Make the card width 100% inside the grid */}
                <Link to={`/products/${item._id}`}>
                  <Card.Img
                    variant="top"
                    height={400}
                    src={item.images[0]}
                    onClick={() => handleCardClick(item)}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default SearchResults;
