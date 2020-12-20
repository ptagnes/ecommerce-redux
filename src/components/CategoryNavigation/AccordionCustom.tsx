import React, { useState } from "react";

import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { CaretDown } from "react-bootstrap-icons";

function AccordionCustom({
  item,
  clName,
  topCategory,
  topRoute,
}: {
  item: any;
  clName: string;
  topCategory: any;
  topRoute: any;
}) {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);
  const toggleActiveKey = (key: any) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };
  //className={currentActiveKey === k ? clName : ""}
  const rname = item.routeName;
  const [subItemList, setSubitems] = useState<[]>([]);
  const [subitemCategory, setSubitemCategory] = useState<string>();
  React.useEffect(() => {
    item.productList.map((itm: any) => {
      itm.items.map((it: any) => {
        if (it.subitems) {
          setSubitems(it.subitems);
          if (it.categoryName === itm.category) {
            setSubitemCategory(it.categoryName);
            // console.log(it.categoryName);
          }
        }
        return "";
      });
      return "";
    });
  }, [item.productList]);

  console.log(subItemList);

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          onClick={() => {
            toggleActiveKey("0");
          }}
          eventKey={"0"}
        >
          <Link to={`/productcategories/${topRoute}/${rname}`}>
            <CaretDown />
            {topCategory}
          </Link>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"0"}>
          <Card.Body className="catNav2">
            {/**Embedded accordion start *******************************************************************/}
            {/**********************************************************************************************/}
            {/**********************************************************************************************/}
            {/******************************************************************************************
             * ||
                        item.category === "rings"****/}
            {item.productList &&
              item.productList.map((item: any, key: any) => {
                return (
                  <div key={key} style={{ position: "relative" }}>
                    <Accordion>
                      <Card>
                        {subitemCategory === item.category ? (
                          <Accordion.Toggle
                            as={Card.Header}
                            onClick={() => {
                              toggleActiveKey("0");
                            }}
                            eventKey={"0"}
                          >
                            <Link
                              to={`/productcategory/${topRoute}/${rname}/${item.routeName}`}
                            >
                              <CaretDown />
                              {item.name}
                            </Link>
                          </Accordion.Toggle>
                        ) : (
                          <Link
                            style={{ padding: "1rem", display: "block" }}
                            className={
                              subitemCategory === item.category
                                ? "has-subitem"
                                : ""
                            }
                            to={`/productcategory/${topRoute}/${rname}/${item.routeName}`}
                          >
                            {item.name}
                          </Link>
                        )}

                        {subitemCategory === item.category && (
                          <Accordion.Collapse eventKey={"0"}>
                            <Card.Body className="catNav3">
                              {item.items.map((itx: any, key: any) => {
                                return (
                                  <div key={key}>
                                    {itx.subitems && itx.subitems && (
                                      <Accordion>
                                        <Card>
                                          <Accordion.Toggle
                                            as={Card.Header}
                                            onClick={() => {
                                              toggleActiveKey("0");
                                            }}
                                            eventKey={"0"}
                                          >
                                            {/* <CaretDown /> */}
                                            {/* {itx.name} */}
                                            <Link
                                              to={`/productsubcategory/${topRoute}/${rname}/${item.routeName}/${itx.routeName}`}
                                            >
                                              {itx.name}
                                            </Link>
                                          </Accordion.Toggle>
                                          {/* <Accordion.Collapse eventKey={"0"}>
                                            <Card.Body className="catNav4">
                                              {Object.values(itx.subitems).map(
                                                (item: any, i) => {
                                                  return (
                                                    <div key={i}>
                                                      {item.name}
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </Card.Body>
                                          </Accordion.Collapse> */}
                                        </Card>
                                      </Accordion>
                                    )}
                                  </div>
                                );
                              })}
                            </Card.Body>
                          </Accordion.Collapse>
                        )}
                      </Card>
                    </Accordion>
                  </div>
                );
              })}
            {/**********************************************************************************************/}
            {/**********************************************************************************************/}
            {/**********************************************************************************************/}
            {/**Embedded accordion end ************************************************************************/}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionCustom;
