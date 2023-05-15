import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "../google-Information/styles";
import FormTriangle from "../home/FormTriangle";

const TEXT_ARRAY = [
  [
    "Information delivery",
    "You provide us with everything you know about the information in the database that is making life difficult for you.",
  ],
  [
    "Extract information",
    "If the information is not in your power, we take care of extracting it and informing you.",
  ],
  ["Data elemination", "Our technical team proceeds to delete your data."],
  [
    "Offical sertificate",
    "We give you an official certificate issued by the database itself confirming that the information has been deleted.",
  ],
  [
    "Sign contract",
    "We sign a contract under which you are protected by all judicial guarantees to ensure that you get your money back if we fail to erase the information or remove any reference to debts.",
  ],
];

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Search - Slider - Link
 *
 * @returns {React.Component}
 */
const DeleteRecords = () => {
  React.useEffect(() => {
    addClassHeader();
    return () => removeClassHeader();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={styles.gridContainerDeleteErase}>
          <Grid item sx={styles.containerTitleErase}>
            <Typography sx={styles.titlePageErase}>
              Erasinf financial records and debts: <br />
              how dose it work
            </Typography>
          </Grid>

          <Grid item sx={styles.containerTableErase}>
            {TEXT_ARRAY.map((item, index) => (
              //console.log(item);
              <div key={index} className="_container_table_erase">
                {item.map((item_, index) => {
                  console.log(item_);
                  return (
                    <Typography
                      sx={styles.textTableErase}
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item_ }}
                    />
                  );
                })}
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <FormTriangle />
    </>
  );
};

function addClassHeader() {
  const header = document.querySelector("#header_component");
  header.classList.add("header__google_information");
}

function removeClassHeader() {
  const header = document.querySelector("#header_component");
  header.classList.remove("header__google_information");
}

export default DeleteRecords;
