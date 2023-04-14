import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { dateFormatter } from "../../utils";
import { renderCell, renderCaseNumber } from "./renders";

export default function ProcessesTable({ data, handleDelete, handleView }) {
  const columns = [
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RemoveRedEyeIcon />}
          onClick={handleView(params.id)}
          label="View"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={handleDelete(params.id)}
          label="Delete"
        />,
      ],
    },
    {
      field: "caseNumber",
      headerName: "#Radicado",
      width: 280,
      renderCell: renderCaseNumber,
    },
    {
      field: "lastTimeUpdated",
      headerName: "Fecha Última Actuación",
      type: "dateTime",
      valueFormatter: dateFormatter,
      valueGetter: ({ value }) => value && new Date(value),
      width: 140,
    },
    {
      field: "office",
      headerName: "Despacho",
      width: 250,
      valueGetter: ({ value }) => value?.name ?? "N/A",
    },
    { field: "speaker", headerName: "Ponente", width: 250 },
    // { field: 'department', headerName: 'Departmento', width: 150 },
    {
      field: "proceduralSubjects",
      headerName: "Sujetos Procesales",
      width: 600,
    },
    { field: "type", headerName: "Tipo Proceso", width: 150 },
    { field: "class", headerName: "Clase Proceso", width: 200 },
    { field: "subclass", headerName: "Subclase Proceso", width: 200 },
    { field: "resource", headerName: "Recurso", width: 250 },
    { field: "location", headerName: "Ubicacion", width: 150 },
    { field: "content", headerName: "Contenido Radicacion", width: 420 },
  ];

  return (
    <Paper style={{ height: 680, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns.map((c) => ({
          ...c,
          ...(c.type !== "actions" && !c.renderCell ? { renderCell } : null),
        }))}
      />
    </Paper>
  );
}
