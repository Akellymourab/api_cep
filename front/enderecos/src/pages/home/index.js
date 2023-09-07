import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
// import EditAddressModal from "../popup/index";
// import { useHistory } from 'react-router-dom';

function EnhancedTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAddressData, setEditingAddressData] = useState(null);

  

  useEffect(() => {
    fetch(`http://localhost:8000/enderecos`)
      .then((response) => response.json())
      .then((data) => {
        const updatedRows = data.map((endereco) => ({
          id: endereco.id, 
          cep: endereco.cep,
          logradouro: endereco.logradouro,
          numero: endereco.numero,
          complemento: endereco.complemento,
          bairro: endereco.bairro,
          localidade: endereco.localidade,
          uf: endereco.uf,
          pais: endereco.pais,
        }));
        setRows(updatedRows);
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/enderecos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao deletar:', error);
      });
  };
  const handleEdit = (id, updatedRows) => {
    fetch(`http://localhost:8000/enderecos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRows), // Envie os novos dados no corpo da solicitação
    })
    .then((data) => {
      const id = {};
      const updatedRows = data.map((endereco) => ({
        id: endereco.id, 
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        localidade: endereco.localidade,
        uf: endereco.uf,
        pais: endereco.pais,
      }));
    })
      .then((response) => {
        if (response.ok) {
          // Se a resposta da solicitação for bem-sucedida (status 200-299), você pode lidar com a resposta aqui
          console.log('Recurso editado com sucesso');
          // Se desejar atualizar a interface após a edição, faça isso aqui
        } else {
          // Se a resposta não for bem-sucedida, trate o erro aqui
          throw new Error('Falha ao editar o recurso');
        }
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao editar:', error);
      })
      

      handleEdit(id, updatedRows);
  };
  
  
  
  

  

  // Implemente a função handleEdit

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const navigateToNewAddressPage = () => {
  //   history.push('/cadastrar-endereco'); // Substitua com a rota correta
  // };

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleEditClick = (rowData) => {
    setEditingAddressData(rowData);
    setIsEditModalOpen(true);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <h2>Endereços cadastrados:</h2>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            // onClick={navigateToNewAddressPage}
          >
            Adicionar Endereço
          </Button>
          <br />
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell>CEP</TableCell>
                <TableCell>Logradouro</TableCell>
                <TableCell>Numero</TableCell>
                <TableCell>Complemento</TableCell>
                <TableCell>Bairro</TableCell>
                <TableCell>Localidade</TableCell>
                <TableCell>UF</TableCell>
                <TableCell>País</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Excluir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.cep}</TableCell>
                  <TableCell>{row.logradouro}</TableCell>
                  <TableCell>{row.numero}</TableCell>
                  <TableCell>{row.complemento}</TableCell>
                  <TableCell>{row.bairro}</TableCell>
                  <TableCell>{row.localidade}</TableCell>
                  <TableCell>{row.uf}</TableCell>
                  <TableCell>{row.pais}</TableCell>
                  <TableCell>
                  <IconButton onClick={() => handleEditClick(row)}>
                    <EditIcon color="action" />
                  </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* <EditAddressModal
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={(updatedData) => handleEdit(updatedData)}
          addressData={editingAddressData}
        /> */}
      </Paper>
    </Box>
  );
}

export default EnhancedTable;