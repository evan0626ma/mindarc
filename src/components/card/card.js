import React, { useState } from "react";
import { Row, Col, Card , Button} from "antd";
import "./card.css";
import data from "../../data.json";

const { Meta } = Card;

const CardItem = () => {
  
  console.log(data);

  const handleonClick = () =>{
    
  }

  return (
    <div className="container">
      <Row className="card_container" justify="start">
        {data.map((item) => (
          <Col className="card_content" key={item.title} md ={{span:24}} sm={{span:24}} xs={{span:24}} lg={{ span: 8 }}>
            <Card
              className="card_item"
              hoverable
              cover={
                <img
                  alt="example"
                  src="http://via.placeholder.com/400x300"
                />
              }
            >
              <Meta
                
                description={<div style={{textAlign:"center"}}>
                  <div className="content_description"dangerouslySetInnerHTML={{ __html: item.content }} />
                  <Button  style={{marginTop:"120px", borderRadius:"20px", fontWeight:"700"}}  onClick={()=>handleonClick()}>READ MORE</Button>
                </div>}
              />
          
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardItem;
